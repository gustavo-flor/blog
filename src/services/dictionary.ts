import path from 'path'

import { readDir, readFile } from '@/services/file'

export type Dictionary = Record<string, string>

const cache = new Map<string, Record<string, Dictionary>>()

const flatten = (data: object, prefix = ''): Dictionary =>
  Object.entries(data).reduce<Dictionary>((acc, [key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key
    
    return typeof value === 'object'
      ? { ...acc, ...flatten(value, path) }
      : { ...acc, [path]: String(value) }
  }, {})

const getDictionary = async (localesPath: string, file: string): Promise<[string, Dictionary]> => {
  const data = await readFile(`${localesPath}/${file}`).then(JSON.parse)
  const namespace = path.basename(file, '.json')
  return [namespace, flatten(data)]
}

export const loadDictionaries = async (lang: string): Promise<Record<string, Dictionary>> => {
  if (cache.has(lang)) {
    return cache.get(lang)!
  }

  const localesPath = `locales/${lang}`
  const files = await readDir(localesPath)
  const modules = await Promise.all(
    files
      .filter(file => file.endsWith('.json'))
      .map(file => getDictionary(localesPath, file))
  )
  
  const dictionaries = modules.reduce((acc, [namespace, dictionary]) => ({
    ...acc,
    [namespace]: dictionary
  }), {})
  
  cache.set(lang, dictionaries)

  return dictionaries
}

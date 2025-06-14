import path from 'path'

import { InitOptions, ResourceKey, ResourceLanguage } from 'i18next'

import { readDir, readFile } from '@/services/file'

const cache = new Map<string, ResourceLanguage>()

const getResource = async (filepath: string): Promise<[string, ResourceKey]> => {
  const data = await readFile(filepath).then(JSON.parse) as ResourceKey
  const namespace = path.basename(filepath, '.json')
  return [namespace, data]
}

const loadResources = async (lang: string): Promise<ResourceLanguage> => {
  if (cache.has(lang)) {
    return cache.get(lang)!
  }

  const localesPath = `locales/${lang}`
  const files = await readDir(localesPath)
  const modules = await Promise.all(files.map(file => getResource(`${localesPath}/${file}`)))
  
  const resources = modules.reduce((acc, [namespace, data]) => ({
    ...acc,
    [namespace]: data
  }), {})
  
  cache.set(lang, resources)

  return resources
}

export const getOptions = async (lang: string): Promise<InitOptions> => ({
  lng: lang,
  resources: {
    [lang]: await loadResources(lang)
  },
  defaultNS: 'common',
  interpolation: {
    escapeValue: false
  }
})

import { LanguageCode } from '../services/lang'

export const defaultNamespace = 'common'

export const namespaces = [
  defaultNamespace, 
  'presentation', 
  'article',
  'posts',
  'footer',
  'last-posts',
  'highlight'
]

export const resources = Object.fromEntries(
  await Promise.all(
    Object.values(LanguageCode).map(async lng => [
      lng,
      Object.fromEntries(
        await Promise.all(namespaces.map(async ns => [ns, await import(`./${lng}/${ns}.json`)]))
      )
    ])
  )
)

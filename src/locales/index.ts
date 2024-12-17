import { LanguageCode } from '../services/lang';

export const namespaces = ['common', 'presentation'];

export const resources = Object.fromEntries(
  await Promise.all(
    Object.values(LanguageCode).map(async lng => [
      lng,
      Object.fromEntries(
        await Promise.all(namespaces.map(async ns => [ns, await import(`./${lng}/${ns}.json`)]))
      ),
    ])
  )
);

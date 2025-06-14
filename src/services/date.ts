import { TranslateFn } from '@/providers/I18n'
import { Language } from '@/services/lang'

export const isToday = (date: Date): boolean => {
  return new Date().toDateString() == date.toDateString()
}

export const isRecent = (date: Date): boolean => {
  return new Date().getHours() - date.getHours() < 3
}

export const getPrettyDate = (date: Date, lang: Language, t: TranslateFn): string => {
  if (isToday(date)) {
    return isRecent(date) ? t('justNow') : t('today')
  }
  return date.toLocaleDateString(lang.code)
}
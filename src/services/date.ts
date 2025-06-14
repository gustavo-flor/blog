import { Language } from '@/services/lang'

export const isToday = (date: Date): boolean => {
  return new Date().toDateString() == date.toDateString()
}

export const isRecent = (date: Date): boolean => {
  return new Date().getHours() - date.getHours() < 3
}

export const getPrettyDate = (date: Date, lang: Language): string => {
  if (isToday(date)) {
    return isRecent(date) ? 'Agora mesmo' : 'Hoje'
  }
  return date.toLocaleDateString(lang.code)
}
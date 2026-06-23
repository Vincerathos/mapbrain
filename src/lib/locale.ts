import type { Locale } from '../types/site'

export const locales: Locale[] = ['fr', 'en']

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes((value ?? '') as Locale)
}

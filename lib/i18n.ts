import { createI18nMiddleware } from 'next-international/middleware';
import { defaultLocale, locales } from '@/config/i18n';

export const I18nMiddleware = createI18nMiddleware({
  locales,
  defaultLocale,
  urlMappingStrategy: 'rewrite'
});

export type Locale = (typeof locales)[number];
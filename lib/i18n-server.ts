import { createI18nServer } from 'next-international/server';

export const { getI18n, getScopedI18n, getStaticParams } = createI18nServer({
  en: () => import('../i18n/en'),
  zh: () => import('../i18n/zh'),
}); 
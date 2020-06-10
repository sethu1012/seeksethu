import { isLocale } from 'src/config/i18n/types';
import { defaultLocale } from 'src/config/i18n/config';

export const getLang = (ctx) => {
  return typeof ctx.query.lang !== 'string' || !isLocale(ctx.query.lang)
    ? defaultLocale
    : ctx.query.lang;
};

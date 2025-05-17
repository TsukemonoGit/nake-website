// src/lib/i18n/index.ts

import { initI18n, registerLocale } from '@konemono/svelte5-i18n';

const defaultLocale = 'en';

registerLocale('en', () => import('./locales/en.json'));
registerLocale('ja', () => import('./locales/ja.json'));

initI18n({
	defaultLocale: defaultLocale,
	supportedLocales: ['ja', 'en']
});

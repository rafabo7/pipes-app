import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';

import { LocaleService } from './services/locale.service';

import localES from '@angular/common/locales/es'
import localFR from '@angular/common/locales/fr'

registerLocaleData(localES, 'es')
registerLocaleData(localFR, 'fr')

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: LOCALE_ID,
      // useValue: 'fr'
      deps: [LocaleService],
      useFactory: (localeService: LocaleService) => localeService.getLocale
    }
  ]
};

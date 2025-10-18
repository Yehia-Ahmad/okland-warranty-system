import { routes } from './app.routes';
import { appConfig } from './app.config';
import Aura from '@primeuix/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { provideRouter } from '@angular/router';
import { serverRoutes } from './app.routes.server';
import { provideAngularSvgIcon } from 'angular-svg-icon';
import { provideTranslateService } from '@ngx-translate/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { logoutInterceptor } from './core/interceptor/logout.interceptor';
import { httpconfigInterceptor } from './core/interceptor/httpconfig.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { requestOnlineInterceptor } from './core/interceptor/request-online.interceptor';
import { mergeApplicationConfig, ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';

const serverConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAngularSvgIcon(),
    provideAnimationsAsync(),
    provideZonelessChangeDetection(),
    provideBrowserGlobalErrorListeners(),
    provideServerRendering(withRoutes(serverRoutes)),
    provideHttpClient(withFetch(), withInterceptors([httpconfigInterceptor, logoutInterceptor, requestOnlineInterceptor])),
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: './assets/i18n/',
        suffix: '.json'
      }),
      fallbackLang: 'en',
      lang: 'en'
    }),
    provideClientHydration(withEventReplay()),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.my-app-dark'
        }
      }
    })
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);

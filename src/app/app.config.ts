import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { provideAngularSvgIcon } from 'angular-svg-icon';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { httpconfigInterceptor } from './core/interceptor/httpconfig.interceptor';
import { logoutInterceptor } from './core/interceptor/logout.interceptor';
import { requestOnlineInterceptor } from './core/interceptor/request-online.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(withFetch(), withInterceptors([httpconfigInterceptor, logoutInterceptor, requestOnlineInterceptor])),
    provideAngularSvgIcon(),
    provideRouter(routes),
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

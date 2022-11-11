import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggingInterceptor } from './loggin.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
];

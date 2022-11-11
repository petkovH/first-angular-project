import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpResponse,
} from '@angular/common/http';
import { finalize, tap } from 'rxjs/operators';
import { SnackbarNotifierService } from '../../shared/components/snackbar-notifier/services/snackbar-notifier.service';
import { SnackMessageService } from '../../shared/components/snackbar-notifier/services/snack-message.service';
import { SnackBarMessage } from '../interfaces/snack-message-interface';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor(
    private snackMessage: SnackbarNotifierService,
    private snackBarMessage: SnackMessageService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let status: string;

    return next.handle(req).pipe(
      tap(
        (event) => {
          status = '';
          if (event instanceof HttpResponse) {
            status = 'http request succeeded';
          }
        },
        (error) => (status = 'http request failed')
      ),
      finalize(() => {
        let displayMessage = { snackMessage: status };

        this.logDetails(displayMessage);
      })
    );
  }
  public logDetails(msg: SnackBarMessage) {
    this.snackBarMessage.setSnackBarMessage(msg);
    this.snackMessage.showNotification('', 'Ok');
  }
}

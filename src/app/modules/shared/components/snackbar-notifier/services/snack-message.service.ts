import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { SnackBarMessage } from 'src/app/modules/core/interfaces/snack-message-interface';

@Injectable({
  providedIn: 'root',
})
export class SnackMessageService {
  private snackBarMessage = new ReplaySubject<SnackBarMessage>(2);
  private snackBarMessage$ = this.snackBarMessage.asObservable();

  getSnackBarMessage(): Observable<SnackBarMessage> {
    return this.snackBarMessage$;
  }

  setSnackBarMessage(latestValue: SnackBarMessage) {
    return this.snackBarMessage.next(latestValue);
  }
}

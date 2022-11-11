import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarNotifierComponent } from '../snackbar-notifier.component';

@Injectable({
  providedIn: 'root',
})
export class SnackbarNotifierService {
  constructor(private snackBar: MatSnackBar) {}

  showNotification(displayMessage: string, buttonText: string) {
    this.snackBar.openFromComponent(SnackbarNotifierComponent, {
      data: {
        message: displayMessage,
        buttonText: buttonText,
      },
      duration: 3000,
    });
  }
}

import {
  Component,
  Inject,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { SnackBarMessage } from 'src/app/modules/core/interfaces/snack-message-interface';
import { SnackMessageService } from './services/snack-message.service';

@Component({
  selector: 'app-snackbar-notifier',
  templateUrl: './snackbar-notifier.component.html',
  styleUrls: ['./snackbar-notifier.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnackbarNotifierComponent implements OnInit {
  public snackBarMessage$!: Observable<SnackBarMessage>;

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    public snackBarRef: MatSnackBarRef<SnackbarNotifierComponent>,
    private snackMessageService: SnackMessageService
  ) {}

  ngOnInit(): void {
    this.snackBarMessage$ = this.snackMessageService.getSnackBarMessage();
    console.log(this.snackBarMessage$);
  }
}

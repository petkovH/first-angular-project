import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { User } from 'src/app/modules/core/interfaces/user-interfaces';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { CounterService } from 'src/app/modules/dashboard/Services/counter.service';
import { SnackbarNotifierService } from 'src/app/modules/shared/components/snackbar-notifier/services/snackbar-notifier.service';
import { SnackMessageService } from 'src/app/modules/shared/components/snackbar-notifier/services/snack-message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-card',
  templateUrl: './users-card.component.html',
  styleUrls: ['./users-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersCardComponent implements OnInit, OnDestroy {
  public showForm: boolean = false;
  unsubscribe$: Subject<boolean> = new Subject();
  activeTotal!: number;
  message!: string;
  counterSubscription!: Subscription;
  messageSubscription!: Subscription;

  @Input() user!: User;
  @Input() hideMales: boolean = false;
  @Input() activateCards: boolean = false;

  @Output() switchGender = new EventEmitter<User>();
  @Output() activate = new EventEmitter<User>();

  constructor(
    private counterService: CounterService,
    private snackMessage: SnackbarNotifierService,
    private snackBarMessage: SnackMessageService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.counterSubscription = this.counterService
      .getActiveCardsCount()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((activeCardsCount) => {
        this.activeTotal = activeCardsCount.activeTotal;
      });

    this.messageSubscription = this.snackBarMessage
      .getSnackBarMessage()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((snackBarMessage) => {
        this.message = snackBarMessage.snackMessage;
      });
  }

  changeGender(user: User): void {
    this.switchGender.emit(user);
  }

  editUser(user: User) {
    this.router.navigate([`/users/edit/${user.userInfo.name}`]);
  }

  activateCard(user: User): void {
    this.activate.emit(user);
    let count = { activeTotal: this.activeTotal };
    let displayMessage = { snackMessage: this.message };
    if (user.activated === true) {
      displayMessage = { snackMessage: 'Card is activated!' };
      count = {
        activeTotal: this.activeTotal + 1,
      };
    } else {
      displayMessage = { snackMessage: 'Card is deactivated!' };
      count = {
        activeTotal: this.activeTotal - 1,
      };
    }
    this.snackBarMessage.setSnackBarMessage(displayMessage);
    this.snackMessage.showNotification('', 'Ok');
    this.counterService.setActiveCardsCount(count);
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}

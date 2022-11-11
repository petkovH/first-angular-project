import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/modules/core/interfaces/user-interfaces';
import { UsersService } from '../../services/users.service';
import { CounterService } from 'src/app/modules/dashboard/Services/counter.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent implements OnInit {
  public users: User[] = [];
  public hideMales: boolean = false;
  public activateCards: boolean = false;
  public showForm: boolean = false;
  activeTotal!: number;
  subscription!: Subscription;

  constructor(
    private usersService: UsersService,
    private _counterService: CounterService
  ) {}

  ngOnInit(): void {
    this.users = this.usersService.get();

    this.subscription = this._counterService
      .getActiveCardsCount()
      .subscribe((activeCardsCount) => {
        this.activeTotal = activeCardsCount.activeTotal;
      });
  }

  switchGender(user: User): void {
    this.users = this.users.map((singleUser) => {
      if (singleUser === user) {
        singleUser.userInfo.gender = !user.userInfo.gender;
      }

      return singleUser;
    });
  }

  activate(user: User): void {
    this.users = this.users.map((singleUser) => {
      if (singleUser === user) {
        singleUser.activated = !user.activated;
      }

      return singleUser;
    });
  }

  hideAllMales(): void {
    this.hideMales = !this.hideMales;
  }

  activateAllCards(): User[] {
    this.activateCards = !this.activateCards;

    if (this.activateCards) {
      return (this.users = this.users.map((singleUser) => {
        if (!singleUser.activated) {
          let count = {
            activeTotal: this.activeTotal + 1,
          };
          this._counterService.setActiveCardsCount(count);
          singleUser.activated = true;
        }

        return singleUser;
      }));
    } else {
      return (this.users = this.users.map((singleUser) => {
        if (singleUser.activated) {
          let count = {
            activeTotal: this.activeTotal - 1,
          };
          this._counterService.setActiveCardsCount(count);
          singleUser.activated = false;
        }

        return singleUser;
      }));
    }
  }

  showUsersForm() {
    this.showForm = !this.showForm;
  }

  addUser(user: User): void {
    console.log(user);

    this.users = [...this.users, user];
  }
}

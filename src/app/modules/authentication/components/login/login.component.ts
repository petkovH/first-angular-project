import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { VALIDATORS } from 'src/app/modules/core/validators/validators';
import { usersWhitelist } from 'src/app/modules/core/interfaces/whitelist-interfaces';
import { AuthService } from '../../services/auth.service';
import { WhitelistService } from '../../services/whitelist.service';
import { GithubService } from '../../services/github.service';
import { usernameValidator } from 'src/app/modules/core/validators/username';
import { SnackbarNotifierService } from 'src/app/modules/shared/components/snackbar-notifier/services/snackbar-notifier.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public isAuthorized: boolean = false;
  hide: boolean = true;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private whitelist: WhitelistService,
    private auth: AuthService,
    private github: GithubService,
    private snackMessage: SnackbarNotifierService
  ) {}

  loginForm = this.fb.group({
    username: [
      '',
      {
        validators: [VALIDATORS.REQUIRED],
        asyncValidators: [usernameValidator(this.github)],
        updateOn: 'blur',
      },
    ],
    //password: ['', VALIDATORS.REQUIRED],
  });

  get username() {
    return this.loginForm.get('username');
  }

  onSubmit(user: usersWhitelist): void {
    this.isAuthorized = this.auth.checkUser(this.whitelist.check(user));

    if (this.isAuthorized || this.loginForm.valid) {
      this.auth.activate = true;
      this.router.navigate(['users']);
    }
  }
}

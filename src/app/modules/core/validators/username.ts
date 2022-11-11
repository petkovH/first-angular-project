import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { GithubService } from '../../authentication/services/github.service';
import { debounceTime, map } from 'rxjs';

export function usernameValidator(users: GithubService): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return users.getUsers().pipe(
      debounceTime(500),
      map((users) => {
        const user = users.find(
          (user: any) => user.login.toLowerCase() == control.value.toLowerCase()
        );

        return user ? null : { invalidUser: true };
      })
    );
  };
}

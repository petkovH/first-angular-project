import { Injectable } from '@angular/core';
import { usersWhitelist } from '../../core/interfaces/whitelist-interfaces';
import { USERS_WHITELIST } from '../../users/users-whitelist';

@Injectable({
  providedIn: 'root',
})
export class WhitelistService {
  get(): usersWhitelist[] {
    return USERS_WHITELIST;
  }

  check(user: usersWhitelist): boolean {
    return USERS_WHITELIST.some((input) => {
      if (
        input.username === user.username /* &&
        input.password === user.password */
      ) {
        localStorage.setItem('permissions', JSON.stringify(input.permission));

        return true;
      }

      return false;
    });
  }
}

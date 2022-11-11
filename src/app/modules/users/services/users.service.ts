import { Injectable } from '@angular/core';
import { User } from '../../core/interfaces/user-interfaces';
import { USERS } from 'src/app/modules/users/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[] = [];
  constructor() {}

  get(): User[] {
    return USERS;
  }
}

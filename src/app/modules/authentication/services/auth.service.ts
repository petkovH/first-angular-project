import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public activate: boolean = false;

  checkUser(authUser: boolean): boolean {
    this.activate = authUser;
    return this.activate;
  }

  isLoggedIn(): boolean {
    return this.activate;
  }

  signOut(): boolean {
    return this.checkUser(false);
  }
}

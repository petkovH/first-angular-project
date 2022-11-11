import { Pipe, PipeTransform } from '@angular/core';
import { USERS_GENDER } from '../user-constants';

@Pipe({
  name: 'boleanToGender',
})
export class BoleanToGenderPipe implements PipeTransform {
  transform(value: boolean, arg?: string): string {
    if (arg) {
      return value ? USERS_GENDER.M : USERS_GENDER.F;
    } else {
      return value ? USERS_GENDER.MALE : USERS_GENDER.FEMALE;
    }
  }
}

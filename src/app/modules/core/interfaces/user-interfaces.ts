import { address, book, contact } from './form-interfaces';

export interface User {
  userInfo: { name: string; age: number; gender: boolean };
  contacts: [contact];
  address: [address];
  books: [book];
  activated: boolean;
}

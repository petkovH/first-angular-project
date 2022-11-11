import { User } from '../core/interfaces/user-interfaces';

export const USERS: User[] = [
  {
    userInfo: { name: 'Hristo', age: 25, gender: true },
    contacts: [{ phone: 11111, email: 'hristo@gmail.com' }],
    address: [
      {
        country: 'Bg',
        city: 'aaa',
        street: 'sdss',
        state: 'ds',
        zip: 100,
      },
    ],
    books: [{ name: 'sdsd', author: 'asa', id: 111 }],
    activated: false,
  },
  {
    userInfo: { name: 'Jo', age: 30, gender: true },
    contacts: [{ phone: 0, email: '' }],
    address: [
      {
        country: '',
        city: '',
        street: '',
        state: '',
        zip: 0,
      },
    ],
    books: [{ name: '', author: '', id: 0 }],
    activated: false,
  },
  {
    userInfo: { name: 'Eli', age: 20, gender: false },
    contacts: [{ phone: 1111111, email: '' }],
    address: [
      {
        country: '',
        city: '',
        street: '',
        state: '',
        zip: 0,
      },
    ],
    books: [{ name: '', author: '', id: 0 }],
    activated: false,
  },
];

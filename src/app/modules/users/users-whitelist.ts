import { usersWhitelist } from '../core/interfaces/whitelist-interfaces';

export const USERS_WHITELIST: usersWhitelist[] = [
  {
    username: 'hristo',
    password: '123',
    permission: ['addUser', 'editUser'],
  },
  { username: 'Jo', password: '123', permission: ['editUser'] },
];

import { createAction, props } from '@ngrx/store';
import { User } from '../types';

export const loadUsers = createAction(`[APP] Load Users`);
export const loadUsersSuccess = createAction(
  `[APP] Load Users Success`,
  props<{ users: User[] }>()
);

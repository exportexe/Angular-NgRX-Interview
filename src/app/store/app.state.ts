import { User } from '../types';

export const appStateName = 'app';

export interface AppState {
  readonly users: User[];
}

export function initialAppStateFactory(): AppState {
  return {
    users: [],
  };
}

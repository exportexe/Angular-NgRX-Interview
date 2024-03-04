import { createReducer, on } from '@ngrx/store';
import { AppState, initialAppStateFactory } from './app.state';
import { loadUsersSuccess } from './app.actions';

export const appStateReducer = createReducer(
  initialAppStateFactory(),
  on(loadUsersSuccess, (state: AppState, { users }) => ({
    ...state,
    users,
  }))
);

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState, appStateName } from './app.state';

export const selectCustomersSearchState =
  createFeatureSelector<AppState>(appStateName);

export const selectUsers = createSelector(
  selectCustomersSearchState,
  (state: AppState) => state.users
);

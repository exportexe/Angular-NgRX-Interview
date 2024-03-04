import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadUsers, loadUsersSuccess } from './app.actions';
import { map, switchMap } from 'rxjs';
import { UsersService } from '../api';
import { User } from '../types';

@Injectable({
  providedIn: 'root',
})
export class AppEffects {
  constructor(private actions: Actions, private usersService: UsersService) {}

  public loadUsers = createEffect(() => {
    return this.actions.pipe(
      ofType(loadUsers),
      switchMap(() => this.usersService.getUsers()),
      map((users: User[]) => loadUsersSuccess({ users }))
    );
  });
}

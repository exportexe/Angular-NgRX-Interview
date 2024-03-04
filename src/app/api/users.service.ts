import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../types';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public getUsers(): Observable<User[]> {
    return of([
      {
        id: '1',
        name: 'Mozilla Firefox',
        age: 38,
      },
      {
        id: '2',
        name: 'Internet Explorer',
        age: 81,
      },
      {
        id: '3',
        name: 'Google Chrome',
        age: 24,
      },
    ] as User[]);
  }
}

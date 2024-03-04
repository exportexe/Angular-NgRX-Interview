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
        name: 'John Doe',
        age: 38,
      },
      {
        id: '2',
        name: 'Lorem Ipsum',
        age: 81,
      },
      {
        id: '3',
        name: 'Harry Potter',
        age: 24,
      },
      {
        id: '4',
        name: 'Albus Dumbledore',
        age: 90,
      },
    ] as User[]);
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUsers } from '../../store/app.actions';
import { Observable } from 'rxjs';
import { User } from '../../types';
import { AsyncPipe, NgFor } from '@angular/common';
import { selectUsers } from '../../store/app.selectors';

@Component({
  standalone: true,
  selector: 'users',
  imports: [AsyncPipe, NgFor],
  styleUrl: 'users.component.css',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]> = this.store.select(selectUsers);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.store.dispatch(loadUsers());
  }
}

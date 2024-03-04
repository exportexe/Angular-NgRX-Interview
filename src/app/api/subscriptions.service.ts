import { Injectable } from '@angular/core';
import { Observable, filter, of } from 'rxjs';
import { Subscription } from '../types';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionsService {
  public getSubscriptionByUserId(
    userId: string
  ): Observable<Subscription | undefined> {
    return of([
      {
        id: '1',
        name: 'Netflix',
        price: 24.0,
        userId: '1',
      },
      {
        id: '2',
        name: 'Spotify',
        price: 12.0,
        userId: '2',
      },
      {
        id: '3',
        name: 'Microsoft Office',
        price: 14.0,
        userId: '2',
      },
      {
        id: '4',
        name: 'Apple Arcade',
        price: 320.0,
        userId: '1',
      },
      {
        id: '5',
        name: 'YouTube Premium',
        price: 20.0,
        userId: '3',
      },
    ] as Subscription[]).pipe(
      filter(Boolean),
      map((subscriptions) => subscriptions.find((sub) => sub.userId === userId))
    );
  }
}

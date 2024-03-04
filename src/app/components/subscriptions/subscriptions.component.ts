import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Subscription } from '../../types';

@Component({
  selector: 'subscriptions',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe],
  templateUrl: './subscriptions.component.html',
  styleUrl: './subscriptions.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscriptionsComponent {
  subscriptions: Subscription[] | null = null;
}

import { Component, ViewEncapsulation } from '@angular/core';
import { UsersComponent, SubscriptionsComponent } from './components';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [UsersComponent, SubscriptionsComponent],
  styles: '.app { display: flex; flex-direction: column; width: 100% }',
  host: {
    class: 'app',
  },
  encapsulation: ViewEncapsulation.None,
})
export class App {}

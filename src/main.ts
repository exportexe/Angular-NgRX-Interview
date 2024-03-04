import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { App } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { appStateReducer } from './app/store/app.reducer';
import { provideEffects } from '@ngrx/effects';
import { AppEffects } from './app/store/app.effects';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    provideStore({ app: appStateReducer }),
    provideEffects([AppEffects]),
  ],
});

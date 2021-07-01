import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { RouterModule } from '@angular/router';

import { akitaConfig } from '@datorama/akita';
akitaConfig({ resettable: true });

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AkitaNgRouterStoreModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () =>
          import('@gnosys/landing').then((m) => m.LandingModule),
      },
      {
        path: 'user',
        loadChildren: () => import('@gnosys/user').then((m) => m.UserModule),
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

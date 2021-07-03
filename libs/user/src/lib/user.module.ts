import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

import { UIModule } from '@gnosys/ui';
import { StateModule } from '@gnosys/state';

import { UserLandingComponent } from './user-landing/user-landing.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { UserTopbarComponent } from './user-topbar/user-topbar.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['signin']);

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      {
        path: '',
        component: UserLandingComponent,
        ...canActivate(redirectUnauthorizedToLogin),
      },
      { path: '', component: UserSidebarComponent, outlet: 'sidebar' },
      { path: '', component: UserTopbarComponent, outlet: 'topbar' },
    ]),
    UIModule,
    StateModule,
  ],
  declarations: [
    UserLandingComponent,
    UserSidebarComponent,
    UserTopbarComponent,
  ],
})
export class UserModule {}

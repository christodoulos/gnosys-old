import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UIModule } from '@gnosys/ui';
import { StateModule } from '@gnosys/state';

import { UserLandingComponent } from './user-landing/user-landing.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      { path: '', component: UserLandingComponent },
      { path: '', component: UserSidebarComponent, outlet: 'sidebar' },
    ]),
    UIModule,
    StateModule,
  ],
  declarations: [UserLandingComponent, UserSidebarComponent],
})
export class UserModule {}

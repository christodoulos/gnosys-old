import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserLandingComponent } from './user-landing/user-landing.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      { path: '', component: UserLandingComponent },
    ]),
  ],
  declarations: [UserLandingComponent],
})
export class UserModule {}

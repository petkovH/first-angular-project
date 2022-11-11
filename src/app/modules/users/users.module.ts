import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersCardComponent } from './components/users-card/users-card.component';
import { SharedModule } from '../shared/shared.module';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BoleanToGenderPipe } from './pipes/bolean-to-gender.pipe';
import { UsersListComponent } from './components/users-list/users-list.component';

import { UsersRoutingModule } from './users-routing.module';
import { AppDashboardModule } from '../dashboard/app-dashboard.module';

@NgModule({
  declarations: [
    UsersCardComponent,
    UserFormComponent,
    BoleanToGenderPipe,
    UsersListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    AppDashboardModule,
    UsersRoutingModule,
  ],
  exports: [UsersCardComponent, UserFormComponent, UsersListComponent],
})
export class UsersModule {}

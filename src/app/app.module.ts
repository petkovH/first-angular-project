import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsersModule } from './modules/users/users.module';
import { SharedModule } from './modules/shared/shared.module';

import { HeaderModule } from './modules/header/header.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AppDashboardModule } from './modules/dashboard/app-dashboard.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { httpInterceptorProviders } from './modules/core/http-Interceptors';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UsersModule,
    SharedModule,
    AppDashboardModule,
    HeaderModule,
    AuthenticationModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}

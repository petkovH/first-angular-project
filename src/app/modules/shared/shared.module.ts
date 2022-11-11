import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleButtonComponent } from './components/simple-button/simple-button.component';
import { AddressFormComponent } from './components/address-form/address-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksFormComponent } from './components/books-form/books-form.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { PermissionDirective } from './directives/permission.directive';
import { SnackbarNotifierComponent } from './components/snackbar-notifier/snackbar-notifier.component';

@NgModule({
  declarations: [
    SimpleButtonComponent,
    AddressFormComponent,
    BooksFormComponent,
    ContactFormComponent,
    FormInputComponent,
    TooltipDirective,
    PermissionDirective,
    SnackbarNotifierComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    SimpleButtonComponent,
    AddressFormComponent,
    BooksFormComponent,
    ContactFormComponent,
    FormInputComponent,
    TooltipDirective,
    PermissionDirective,
    SnackbarNotifierComponent,
  ],
})
export class SharedModule {}

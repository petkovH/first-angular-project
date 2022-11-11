import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  AbstractControl,
  FormArray,
  FormControl,
} from '@angular/forms';
import { CONTACT_FORM_CONFIG } from 'src/app/modules/users/components/user-form/user-form-config';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent implements OnInit, OnDestroy {
  @Input() form!: FormGroup;
  @Input() contact!: string;

  contactForm!: FormArray;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = new FormArray([this.fb.group(CONTACT_FORM_CONFIG)]);
    this.form.addControl(this.contact, this.contactForm);
  }

  ngOnDestroy() {
    this.form.removeControl(this.contact);
  }

  contactsFormGroup(contact: FormGroup | AbstractControl) {
    return contact as FormGroup;
  }

  addContact(): void {
    this.contactForm.push(this.fb.group(CONTACT_FORM_CONFIG));
  }

  getFormControl(formControl: FormControl | AbstractControl | null) {
    return formControl as FormControl;
  }

  /* get phone() {
    return this.contactForm.controls[0].get(this.phone);
  }
 */
  /* get email() {
    return this.contactForm?.controls['email'];
  } */
}

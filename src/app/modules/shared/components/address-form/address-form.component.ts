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
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { ADDRESS_FORM_CONFIG } from 'src/app/modules/users/components/user-form/user-form-config';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressFormComponent implements OnInit, OnDestroy {
  @Input() form!: FormGroup;
  @Input() address!: string;

  addressForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addressForm = this.fb.group(ADDRESS_FORM_CONFIG);

    this.form.registerControl(this.address, this.addressForm);
  }

  ngOnDestroy() {
    this.form.removeControl(this.address);
  }

  getFormControl(formControl: FormControl | AbstractControl | null) {
    return formControl as FormControl;
  }

  get country() {
    return this.addressForm?.controls['country'];
  }
  get city() {
    return this.addressForm?.controls['city'];
  }
  get state() {
    return this.addressForm?.controls['state'];
  }
  get street() {
    return this.addressForm?.controls['street'];
  }
  get zip() {
    return this.addressForm?.controls['zip'];
  }
}

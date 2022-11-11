import {
  Component,
  Input,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormArray,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/modules/core/interfaces/user-interfaces';
import { UsersService } from '../../services/users.service';
import { USER_FORM_CONFIG } from './user-form-config';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFormComponent implements OnInit {
  user!: User;
  isActive = false;

  isEditForm: any = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  @Input() isEditable: boolean = false;
  @Input() userEdit!: User;

  @Output() addUserCard = new EventEmitter();

  public showForm: boolean = true;
  ngOnInit(): void {
    if (this.userEdit) {
      this.isEditable = true;
      this.usersForm.patchValue(this.userEdit);
    }

    this.name?.statusChanges.subscribe((res) => {
      if (res === 'VALID') {
        this.age?.enable();
      }
    });

    this.age?.statusChanges.subscribe((res) => {
      if (res === 'VALID') {
        this.usersForm.controls['contactForm'].enable();
      }
    });

    this.age?.statusChanges.subscribe((res) => {
      if (res === 'VALID') {
        this.usersForm.controls['addressForm'].enable();
      }
    });

    this.usersForm.valueChanges.subscribe((res) => {
      const userAgeValid = this.age?.valid;
      const userContactValid = this.usersForm.controls['contactForm']?.valid;

      if (userAgeValid && userContactValid) {
        this.usersForm.controls['booksForm'].enable({ emitEvent: false });
      } else {
        this.usersForm.controls['booksForm']?.disable({ emitEvent: false });
      }
    });
  }

  usersForm = this.fb.group({
    userInfo: this.fb.group(USER_FORM_CONFIG),
    //contacts: this.fb.array([this.fb.group(addContactsGroup)]),
    //address: this.fb.group(ADDRESS_FORM_CONFIG),
    //books: this.fb.array([this.fb.group(addBooksGroup)]),
  });

  get contactsArray(): FormArray {
    return <FormArray>this.usersForm.get('contacts');
  }

  get booksArray() {
    return <FormArray>this.usersForm.get('books');
  }

  get name() {
    return this.usersForm.controls['userInfo'].get('name');
  }

  get age() {
    return this.usersForm.controls['userInfo'].get('age');
  }
  get gender() {
    return this.usersForm.controls['userInfo'].get('gender');
  }

  /*  get country() {
    return this.usersForm.controls['address'].get('country');
  }

  get email() {
    return this.usersForm.controls['contacts'].get('contact');
  }

  addContact(): void {
    this.contactsArray.push(this.fb.group(addContactsGroup));
  }

  addBook(): void {
    this.booksArray.push(this.fb.group(addBooksGroup));
  }
 */

  getFormControl(formControl: FormControl | AbstractControl | null) {
    return formControl as FormControl;
  }

  onSubmit(user: User): void {
    console.log(this.usersForm);

    this.addUserCard.emit(user);
  }
}

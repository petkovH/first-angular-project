import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  AbstractControl,
  FormControl,
} from '@angular/forms';
import { addBooksGroup } from 'src/app/modules/users/components/user-form/user-form-config';

@Component({
  selector: 'app-books-form',
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksFormComponent implements OnInit, OnDestroy {
  @Input() form!: FormGroup;
  @Input() book!: string;

  showAddNewContact = false;
  booksForm!: FormArray;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.booksForm = new FormArray([this.fb.group(addBooksGroup)]);

    this.form.addControl(this.book, this.booksForm);
  }

  ngOnDestroy() {
    this.form.removeControl(this.book);
  }

  booksFormGroup(book: FormGroup | AbstractControl) {
    return book as FormGroup;
  }

  getFormControl(formControl: FormControl | AbstractControl | null) {
    return formControl as FormControl;
  }

  addBook(): void {
    this.booksForm.push(this.fb.group(addBooksGroup));
  }
}

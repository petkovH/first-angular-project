import { FormControl, ValidationErrors, Validators } from '@angular/forms';

export const reqiredValidation = (
  control: FormControl
): ValidationErrors | null => {
  return control.value ? null : Validators.required(control.value);
};

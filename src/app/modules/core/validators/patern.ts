import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function patternValidator(patternRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }
    const valid = patternRe.test(control.value);

    return valid ? null : { pattern: { valid: control.value } };
  };
}

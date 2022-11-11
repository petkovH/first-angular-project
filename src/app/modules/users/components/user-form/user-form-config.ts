import { VALIDATORS } from 'src/app/modules/core/validators/validators';

export const USER_FORM_CONFIG = {
  name: ['', [VALIDATORS.REQUIRED, VALIDATORS.PATTERN(/^[a-zA-Z]+$/i)]],
  age: [
    { value: '', disabled: true },
    [VALIDATORS.REQUIRED, VALIDATORS.PATTERN(/^[0-9]+$/i)],
  ],
  gender: ['', [VALIDATORS.REQUIRED]],
};

export const ADDRESS_FORM_CONFIG = {
  country: [
    { value: '', disabled: true },
    [VALIDATORS.PATTERN(/^[a-zA-Z]+$/i)],
  ],
  city: [{ value: '', disabled: true }, [VALIDATORS.PATTERN(/^[a-zA-Z]+$/i)]],
  street: [{ value: '', disabled: true }],
  state: [{ value: '', disabled: true }, [VALIDATORS.PATTERN(/^[a-zA-Z]+$/i)]],
  zip: [{ value: '', disabled: true }, [VALIDATORS.PATTERN(/^[0-9]+$/i)]],
};

export const CONTACT_FORM_CONFIG = {
  phone: [
    { value: '', disabled: true },
    [VALIDATORS.REQUIRED, VALIDATORS.PATTERN(/^[0-9]+$/i)],
  ],
  email: [
    { value: '', disabled: true },
    [
      VALIDATORS.REQUIRED,
      VALIDATORS.PATTERN(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i),
    ],
  ],
};

export const addBooksGroup = {
  bookName: [''],
  author: [''],
  id: [''],
};

import { BoleanToGenderPipe } from './bolean-to-gender.pipe';

describe('BoleanToGenderPipe', () => {
  const pipe = new BoleanToGenderPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('If true and argument is passed - should convert boolean to M', () => {
    expect(pipe.transform(true, 'argument')).toBe('M');
  });

  it('If false and argument is passed - should convert boolean to F', () => {
    expect(pipe.transform(false, 'argument')).toBe('F');
  });

  it('If true and argument is not passed- should convert boolean to Male', () => {
    expect(pipe.transform(true)).toBe('Male');
  });

  it('If flase argument is not passed- should convert boolean to Female', () => {
    expect(pipe.transform(false)).toBe('Female');
  });
});

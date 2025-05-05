// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// Testing isPhoneNumber(): 
// Valid: "123-456-7890" — includes area code with dash
// "(123) 456-7890" — area code in parentheses, followed by space and number
test('123-456-7890 to be true', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(false);
});

test('(123)-45-67-89-0 to be true', () => {
  expect(isPhoneNumber('123-4567890')).toBe(true);
});

test('1234567890 to be false', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('123-a56-7c9d to be false', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

// Testing isEmail(): 
// Only allows letters, digits, and underscores (\w) in the local part
// Domain must be letters/underscores only
// TLD must be 2–3 letters, no digits or longer extensions
test('example@ucsd.edu to be true', () => {
  expect(isEmail('example@ucsd.edu')).toBe(true);
});

test('ex4m___pl3000@pasadena.edu to be true', () => {
  expect(isEmail('ex4mpl3@pasadena.edu')).toBe(true);
});

test('eX@mp!e@ucsd.edu to be false', () => {
  expect(isEmail('eX@mpLe@ucsd.edu')).toBe(false);
});

test('example@ucsd.co to be false', () => {
  expect(isEmail('example@ucsd.comm')).toBe(false);
});


// Testing isStrongPassword(): 
// * The password's first character must be a letter, 
// * it must contain at least * 4 characters 
// * and no more than 15 characters 
// * and no characters other than * * letters, numbers 
// * and the underscore may be used
test('AlK029021_ to be true', () => {
  expect(isStrongPassword('AlK029021_')).toBe(true);
});

test('skIb1X_D_boo to be true', () => {
  expect(isStrongPassword('skIb1X_D_boo')).toBe(true);
});

test('0hNOO,,123 to be false', () => {
  expect(isStrongPassword('0hNOO,,123""')).toBe(false);
});

test('ex4m___pl3000@pasadena.edu to be false', () => {
  expect(isStrongPassword('ex4m___pl3000@pasadena.edu')).toBe(false);
});

// Testing isDate(): 
// 	This regular expressions matches dates of the form XX / XX / YYYY where
// XX can be 1 or 2 digits long and YYYY is always 4 digits long.
test('02/09/2003 to be true', () => {
  expect(isDate('02/09/2003')).toBe(true);
});

test('30/24/6000 to be true', () => {
  expect(isDate('30/4/6000')).toBe(true);
});

test('31/231/2000 to be false', () => {
  expect(isDate('31/23/2000""')).toBe(false);
});

test('31-21-2000 to be false', () => {
  expect(isDate('31-21-2000')).toBe(false);
});

// Testing isHexColor(): 
// 	This regular expressions matches dates of the form XX / XX / YYYY where
// XX can be 1 or 2 digits long and YYYY is always 4 digits long.
test('FFF to be true', () => {
  expect(isHexColor('FFF')).toBe(true);
});

test('#AbC1e8 to be true', () => {
  expect(isHexColor('#AbC1e8')).toBe(true);
});

test('#fEi to be false', () => {
  expect(isHexColor('#fEi')).toBe(false);
});

test('red to be false', () => {
  expect(isHexColor('red')).toBe(false);
});

import operate from '../logic/operate';

test('calculate the sum of 2 numbers', () => {
  expect(operate(3, 4, '+')).toBe('7');
});

test('calculate the deduction of 2 numbers', () => {
  expect(operate(10, 4, '-')).toBe('6');
});

test('calculate the deduction of 2 numbers', () => {
  expect(operate(10, 4, '-')).toBe('6');
});

test('calculate the deduction of 2 numbers', () => {
  expect(operate(2, 4, 'x')).toBe('8');
});

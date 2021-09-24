import operate from '../logic/operate';

test('calculate the sum of 2 numbers', () => {
  expect(operate(3, 4, '+')).toBe('7');
});

test('calculate the deduction of 2 numbers', () => {
  expect(operate(10, 4, '-')).toBe('6');
});

test('% operation', () => {
  expect(operate(10, 4, '%')).toBe('2');
});

describe('÷ operation', () => {
  test('divided by number greater than 0', () => {
    expect(operate(10, 5, '÷')).toBe('2');
  });

  test('divided by 0', () => {
    expect(operate(10, 0, '÷')).toBe('error');
  });
});

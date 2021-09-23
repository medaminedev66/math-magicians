import calculate from '../logic/calculate';

test('Calculate an operation', () => {
  const obj = {
    total: 10,
    next: 3,
    operation: '+',
  };
  const operation = '=';
  expect(calculate(obj, operation)).toEqual({
    next: null,
    operation: null,
    total: '13',
  });
});

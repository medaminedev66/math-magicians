import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne);
  const two = Big(numberTwo);
  if (operation === '+') {
    return one.plus(two).toString();
  }
  if (operation === '-') {
    return one.minus(two).toString();
  }
  if (operation === 'x') {
    return one.times(two).toString();
  }
  try {
    if (operation === '÷') {
      // if ((numberTwo === '0' && numberOne === '0') || numberTwo === '0') {
      //   return 'ERROR';
      // }
      return one.div(two).toString();
    }
    if (operation === '%') {
      return one.mod(two).toString();
    }
  } catch (error) {
    return 'error';
  }

  throw Error(`Unknown operation '${operation}'`);
}

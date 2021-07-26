import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let total = 0;
  switch (operation) {
    case '+':
      total = Big(numberOne + numberTwo);
      break;
    case '-':
      total = Big(numberOne - numberTwo);
      break;
    case 'X':
      total = Big(numberOne * numberTwo);
      break;
    case '÷':
      total = Big(numberOne / numberTwo);
      break;
    case '%':
      total = Big(numberOne % numberTwo);
      break;
    default:
      return 'Operation does not exists';
  }

  return total;
};

export default operate;

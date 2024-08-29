const display = document.querySelector('.result p');

const buttons = document.querySelectorAll('button');

var previousNum = '';
var presentNum = '';
var operator = ''; // Burada global olarak tanımlandı

buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    if ((button.value >= '0' && button.value <= '9') || button.value === '.') {
      presentNum += button.value;
      display.innerHTML = presentNum;
    } else if (
      button.value === '+' ||
      button.value === '/' ||
      button.value === '-' ||
      button.value === '*'
    ) {
      operator = button.value;
      if (previousNum != '') {
      } else {
        previousNum = presentNum;
        presentNum = '';
      }
    } else if (button.value === '=') {
      calculate();
    } else if (button.value === 'C') {
      previousNum = '';
      presentNum = '';
      display.innerHTML = '0';
    }
  });

  function calculate() {
    let result;
    switch (operator) {
      case '+':
        result = parseFloat(previousNum) + parseFloat(presentNum);
        break;
      case '-':
        result = parseFloat(previousNum) - parseFloat(presentNum);
        break;
      case '*':
        result = parseFloat(previousNum) * parseFloat(presentNum);
        break;
      case '/':
        result = parseFloat(previousNum) / parseFloat(presentNum);
        break;
      default:
        break;
    }
    display.innerHTML = result;
    previousNum = result.toString();
    presentNum = '';
    operator = '';
  }
});

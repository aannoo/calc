let calculation = '';
let history = [];

function addDigit(digit) {
  calculation += digit;
  document.getElementById('result').value = calculation;
}

function operate(operator) {
  if (calculation === '') return;
  if (operator === '/' && calculation.slice(-1) === '0') return;
  if (operator === '*' && calculation === '0') return;
  if (['+', '-', '/', '*'].includes(calculation.slice(-1))) {
    calculation = calculation.slice(0, -1);
  }
  calculation += operator;
  document.getElementById('result').value = calculation;
}

function equals() {
  const result = eval(calculation);
  if (result === undefined) return;
  history.push(calculation + ' = ' + result);
  if (history.length > 10) {
    history.shift();
  }
  document.getElementById('history-list').innerHTML = history
    .map(item => '<li>' + item + '</li>')
    .join('');
  calculation = result.toString();
  document.getElementById('result').value = calculation;
}

function clearResult() {
  calculation = '';
  document.getElementById('result').value = '';
}

function deleteDigit() {
  calculation = calculation.slice(0, -1);
  document.getElementById('result').value = calculation;
}


/*
We declare two global variables: calculation which represents the current calculation, and history which represents the list of the last 10 calculations.
The addDigit() function is used to add a digit or a decimal point to the current calculation. It updates the calculation variable and displays the result on the calculator screen using the document.getElementById('result').value property.
The operate() function is used to add an operator (+, -, *, or /) to the current calculation. It performs some checks to make sure the input is valid, then updates the calculation variable and displays the result on the calculator screen.
The equals() function is used to evaluate the current calculation and display the result. It uses the built-in eval() function to perform the calculation, then adds the calculation and result to the history list. If the history list is longer than 10 items, it removes the oldest item. Finally, it updates the history-list element in the HTML with the new list of calculations.
The clearResult() function is used to clear the current calculation and the calculator screen.
The deleteDigit() function is used to remove the last digit or operator from the current calculation.
*/




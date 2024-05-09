const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
let firstNumber = '';
let secondNumber = '';
let operator = '';
let number = '';
let result = '';
let isEqualOn = false;

display.textContent = '0';

buttons.forEach(button => button.addEventListener('click', function(e) {
  startCalculator(e.target);
}));

window.addEventListener('keydown', function(e) {
  const key = document.querySelector(`.numbers-container button[value="${e.key}"]`) ||
        document.querySelector(`.numbers-container button[data-key="${e.key}"]`) ||
        '';
  if (!key) return;
  startCalculator(key);
});

function startCalculator(target) {
    if (target.classList.contains('operand')) {
      const currentNumber = target.value;
      if (!operator) updateDisplay(findFirstNumber(currentNumber));
      if (operator) updateDisplay(findSecondNumber(currentNumber));
    }
    if (target.classList.contains('operator')) {
      if (!firstNumber) firstNumber = display.textContent;
      if (!secondNumber) secondNumber = display.textContent;
      isEqualOn = false;
      if (firstNumber && secondNumber && operator) {
        updateDisplay(operate(firstNumber, secondNumber, operator));
        clearNumbers();
        firstNumber = display.textContent;
      }
      const currentOperator = target.value;
      updateOperator(currentOperator);
    }
    if (target.id === 'equals') {
      if (!secondNumber) secondNumber = display.textContent;
      if (!isEqualOn) {
        updateDisplay(operate(firstNumber, secondNumber, operator));
        clearNumbers();
        firstNumber = display.textContent;      
      }
      isEqualOn = true;
    }
    if (target.id === 'clear') {
      clearNumbers();
      display.textContent = '0';
    }
  }


function clearNumbers() {
  firstNumber = '';
  secondNumber = '';
  number = '';
  operator = '';
  result = '';
}

function findFirstNumber(input) {
  number += input;
  firstNumber = number;
  return number;
}

function findSecondNumber(input) {
  number += input;
  secondNumber = number;
  return number;
}

function updateDisplay(input) {
 display.textContent = input; 
}

function updateOperator(input) {
  number = '';
  operator = input;
  return operator;
}

function operate(first, second, operator) {
  switch (operator) {
    case "+":
      return add(first, second);
      break;
    case "-":
      return subtract(first, second);
      break;
    case "*":
      return multiply(first, second);
      break;
    case "/":
      if (divide(first, second) === Infinity) {
        clearNumbers();
        return "lol, press clear and try again";
      }
      return divide(first, second);
      break;
  }
}

// operator functions
function add(first, second) {
  return Math.round((parseFloat(first) + parseFloat(second)) * 10000000000) / 10000000000;
}

function subtract(first, second) {
  return Math.round((parseFloat(first) - parseFloat(second)) * 10000000000) / 10000000000;
}

function multiply(first, second) {
  return Math.round((parseFloat(first) * parseFloat(second)) * 10000000000) / 10000000000;
}

function divide(first, second) {
  return Math.round((parseFloat(first) / parseFloat(second)) * 10000000000) / 10000000000;
}

// OMG IT'S WORKING!!!!
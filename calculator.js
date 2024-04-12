const numbersContainer = document.querySelector('.numbers-container');
const display = document.querySelector('.display');
let isOperatorOn = false;

numbersContainer.addEventListener('click', function(e) {
  const pseudo = [];
  switch (e.target.id) {
    case "1":
      console.log('1 clicked');
      display.textContent += 1;
      break;
    case "2":
      console.log('2 clicked');
      display.textContent += 2;
      break;
    case "3":
      console.log('3 clicked');
      display.textContent += 3;
      break;
    case "4":
      console.log('4 clicked');
      display.textContent += 4;
      break;
    case "5":
      console.log('5 clicked');
      display.textContent += 5;
      break;
    case "6":
      console.log('6 clicked');
      display.textContent += 6;
      break;
    case "7":
      console.log('7 clicked');
      display.textContent += 7;
      break;
    case "8":
      console.log('8 clicked');
      display.textContent += 8;
      break;
    case "9":
      console.log('9 clicked');
      display.textContent += 9;
      break;
    case "0":
      console.log('0 clicked');
      display.textContent += 0;
      break;
    case "add":
      isOperatorOn = true;
      if (
        display.textContent.includes("+") ||
        display.textContent.includes("-") ||
        display.textContent.includes("*") ||
        display.textContent.includes("/")
      ) update();
      display.textContent += '+';
      break;
    case "subtract":
      if (
        display.textContent.includes("+") ||
        display.textContent.includes("-") ||
        display.textContent.includes("*") ||
        display.textContent.includes("/")
      ) update();
      display.textContent += '-';
      break;
    case "multiply":
      if (
        display.textContent.includes("+") ||
        display.textContent.includes("-") ||
        display.textContent.includes("*") ||
        display.textContent.includes("/")
      ) update();
      display.textContent += '*';
      break;
    case "divide":
      if (
        display.textContent.includes("+") ||
        display.textContent.includes("-") ||
        display.textContent.includes("*") ||
        display.textContent.includes("/")
      ) update();
      display.textContent += '/';
      break;
    case "clear":
      display.textContent = '';
      break;
    case "equals":
      if (
        display.textContent.includes("+") ||
        display.textContent.includes("-") ||
        display.textContent.includes("*") ||
        display.textContent.includes("/")
      ) update();
      break;
  }
});


function update() {
  if (display.textContent.includes("+")) {
    let numbers = display.textContent.split('+');
    display.textContent = add(numbers[0], numbers[1]);
  } else if (display.textContent.includes("-")) {
    let numbers = display.textContent.split('-');
    display.textContent = subtract(numbers[0], numbers[1]);
  } else if (display.textContent.includes("*")) {
    let numbers = display.textContent.split('*');
    display.textContent = multiply(numbers[0], numbers[1]);
  } else if (display.textContent.includes("/")) {
    let numbers = display.textContent.split('/');
    display.textContent = divide(numbers[0], numbers[1]);
  }
}


function add(first, second) {
  if (!parseInt(first)) first = 0;
  if (!parseInt(second)) second = first;
  return parseFloat(first) + parseFloat(second);
}

function subtract(first, second) {
  if (!parseInt(first)) first = 0;
  if (!parseInt(second)) second = first;
  return parseFloat(first) - parseFloat(second);
}

function multiply(first, second) {
  if (!parseInt(first)) first = 0;
  if (!parseInt(second)) second = first;
  return parseFloat(first) * parseFloat(second);
}

function divide(first, second) {
  if (!parseInt(first)) first = 0;
  if (!parseInt(second)) second = first;
  return Math.round( (parseInt(first) / parseInt(second)) * 10000000 ) / 10000000;
}
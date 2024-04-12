const numbersContainer = document.querySelector('.numbers-container');

numbersContainer.addEventListener('click', function(e) {
  const display = document.querySelector('.display');
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
      display.textContent += '+';
      break;
    case "equals":
      let numbers = display.textContent.split(/[.\*+-/_]/);
      display.textContent = add(numbers[0], numbers[1]);
      break;
  }
});

function add(first, second) {
  return +first + +second;
}
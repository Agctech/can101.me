let display = document.getElementById('display');
let equation = '';

function appendToDisplay(value) {
  equation += value;
  display.value = equation;
}

function calculate() {
  try {
    equation = eval(equation).toString();
    display.value = equation;
  } catch (error) {
    display.value = 'Error';
  }
}

function clearDisplay() {
  equation = '';
  display.value = '';
}

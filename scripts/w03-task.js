/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

// Function Declaration for Addition
function add(num1, num2) {
  return num1 + num2;
}

// Function Expression for Subtraction
const subtract = function(num1, num2) {
  return num1 - num2;
};

// Arrow Function for Multiplication
const multiply = (num1, num2) => num1 * num2;

// Function Declaration for Division
function divide(num1, num2) {
  if (num2 !== 0) {
      return num1 / num2;
  } else {
      return "Cannot divide by zero";
  }
}

// Event Listener for Button Click
document.addEventListener('DOMContentLoaded', function() {
  const calculateButton = document.getElementById('calculate');
  if (calculateButton) {
      calculateButton.addEventListener('click', function() {
          let num1 = parseFloat(document.getElementById('num1').value);
          let num2 = parseFloat(document.getElementById('num2').value);
          let operation = document.getElementById('operation').value;
          let result;

          switch (operation) {
              case 'add':
                  result = add(num1, num2);
                  break;
              case 'subtract':
                  result = subtract(num1, num2);
                  break;
              case 'multiply':
                  result = multiply(num1, num2);
                  break;
              case 'divide':
                  result = divide(num1, num2);
                  break;
              default:
                  result = "Invalid operation";
          }

          document.getElementById('result').textContent = result;
      });
  }
});

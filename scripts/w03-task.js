/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */


//Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
  }

    /* Function Expression - Subtract Numbers */
  // Function Expression
  let multiply = function(x, y) {
    return x * y;
  };

    /* Arrow Function - Multiply Numbers */
  // Arrow Function
  let power = (base, exponent) => {
    return Math.pow(base, exponent);
  };

    /* Open Function Use - Divide Numbers */
  // Your Choice (IIFE - Immediately Invoked Function Expression)
  (function() {
    console.log('This is an IIFE');
  })();

    /* Decision Structure */
  // Selection Structure (Ternary Operator)
  let checkNumber = num => (num % 2 === 0) ? 'Even' : 'Odd';

    /* ARRAY METHODS - Functional Programming */
    /* Output Source Array */
  // Array Methods - Functional Programming
  let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    /* Output Odds Only Array */
    let oddNumbers = numbersArray.filter(num => num % 2 !== 0);
    /* Output Evens Only Array */
    let evenNumbers = numbersArray.filter(num => num % 2 === 0);
    /* Output Sum of Org. Array */
    let sumOfArray = numbersArray.reduce((sum, num) => sum + num, 0);
    /* Output Multiplied by 2 Array */
    let multipliedNumbers = numbersArray.map(num => num * 2);
    /* Output Sum of Multiplied by 2 Array */
    let sumOfMultiplied = numbersArray.map(num => num * 2).reduce((sum, num) => sum + num, 0);
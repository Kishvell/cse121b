let userName = "Moroni";
console.log(`Username: ${userName}`);

userName = "Moronihah";
console.log(`Updated Username: ${userName}`);

const currentDateAndTime = new Date();
console.log(`It is now ${currentDateAndTime}`);

function total(...theNumbers) {
    let sum = 0;
    for (let aNumber of theNumbers) {
        sum += aNumber * 1; // Multiplying by 1 to implicitly convert string to number
    }
    return sum;
}

let theTotal = total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(`The total is ${theTotal}`);

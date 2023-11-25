"use strict";
// Scenario 1: Sum numbers
function add(num1, num2) {
    return num1 + num2;
}
// Scenario 2: Check Even or Odd
function checkEvenOrOdd(num) {
    return num % 2 === 0 ? 'Even' : 'Odd';
}
// Scenario 3: Calculate Area
function calculateArea(width, height) {
    return width * height;
}
// Scenario 4: String Reversal
function reverseString(inputString) {
    return inputString.split('').reverse().join('');
}
// Scenario 5: Temperature Conversion
function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
// Example usage
console.log(add(5, 3)); // Output: 8
console.log(checkEvenOrOdd(7)); // Output: Odd
console.log(calculateArea(4, 6)); // Output: 24
console.log(reverseString('Hello')); // Output: olleH
console.log(convertCelsiusToFahrenheit(25));

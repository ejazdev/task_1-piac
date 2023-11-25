// Scenario 1
function add(num1: number, num2: number): number {
    return num1 + num2;
}
console.log(add(5, 3));

// Scenario 2
function checkEvenOrOdd(num: number): string {
    return num % 2 === 0 ? 'Even' : 'Odd';
}
console.log(checkEvenOrOdd(7)); 

// Scenario 3
function calculateArea(width: number, height: number): number {
    return width * height;
}
console.log(calculateArea(4, 6));

// Scenario 4
function reverseString(inputString: string): string {
    return inputString.split('').reverse().join('');
}
console.log(reverseString('Hello'));

// Scenario 5
function convertCelsiusToFahrenheit(celsius: number): number {
    return (celsius * 9 / 5) + 32;
}
console.log(convertCelsiusToFahrenheit(25)); 



const numbers = [1, 2, 3, 4, 5, 6];

//  Get only even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);

//  Square each number
const squaredNumbers = numbers.map(num => num * num);

//  Find first number greater than 3
const firstGreaterThanThree = numbers.find(num => num > 3);

console.log(evenNumbers);
console.log(squaredNumbers);
console.log(firstGreaterThanThree);

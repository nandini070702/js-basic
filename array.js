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

// slice and splice methods

const add = numbers.slice(1,3); //output- 2,3

const result = numbers.splice(0,2); // output- 3,4

// sort and join methods

const sortNums = numbers.sort((a,b)=> b-a); // output 4 3 2 1

const joinNums = numbers.join("-"); // output 1-2-3-4

// push and pop

const pushNums = numbers.push(5,6); //output 1 2 3 4 5 6

const popNums = numbers.pop(2); //output 1 3 4 

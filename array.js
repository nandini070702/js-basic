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

const add = numbers.slice(1,3); 
console.log("Sliced array:", add); //output- 2,3

const result = numbers.splice(0,2); 
console.log("Spliced array:", result); // output- 1,2 

// sort and join methods

const sortNums = numbers.sort((a,b)=> b-a); 
console.log("sorted array:", sortNums);     // output 6, 5, 4, 3, 2, 1

const joinNums = numbers.join("-"); 
console.log("joined array:", joinNums);  // output 1-2-3-4-5-6

// push and pop

const pushNums = numbers.push(7,8); 
console.log("pushed array:", pushNums);   //output 1 2 3 4 5 6 7 8

const popNums = numbers.pop(2); 
console.log("popped array:", popNums); //output 1 3 4 5 6 7 8

// function declaration

function greet() {
    console.log("hey there");
    
}
greet();

// function expression

const greeting = function() {
    console.log("nandini");
    
}
greeting();

//arrow function 

const goodGreet = () => {
    console.log("how are you");
    
};
goodGreet();  

//multiple arrow function 

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const greetUser = (name) => {
  return "Hello " + name;
};

console.log(add(5, 3));
console.log(subtract(10, 4));
console.log(greetUser("Nandini"));

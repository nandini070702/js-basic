const user = {
  name: "Nandini",
  age: 22,
  isEmployee: true
};

console.log(user.name);
console.log(user.isEmployee); 

// function + object

const user1 = {
    name: "nandini",
    age: 23
};
function greetuser(person) {
    console.log("hello " + person.name);
    
}
greetuser(user1);

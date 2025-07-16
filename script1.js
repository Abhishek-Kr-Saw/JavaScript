//Chapter 1: Variables & Declarations


//01
const name = "Abhishek";
const city = "Dhanbad";

let age = 22;

//02
//console.log(count);
var count = 42;

//03
const Person = {
    name : "Abhishek",
    age : 22
}
//console.log(Person);
Person.city = "Dhanbad";

//console.log(Person);

//04-> Try accessing a let variable before declaring it — what error do you see?
//console.log(x); //  ReferenceError: Cannot access 'x' before initialization
let x = 5;

//05->Change a const array by pushing a value. Will it throw an error?
const number = [1,2,3,4];

number.push(5);

//console.log(number);

//const prevents reassignment of the variable.
//But the contents of the array (its elements) can still be modified (arrays are mutable).



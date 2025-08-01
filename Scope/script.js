//Scope -> It is about where you can use or access a variable in your code.
// Three type : Functional scope , Global scope , Block scope.

// Functional Scope : Variables declared inside a function.
function abcd(){
    let a = 12;
    console.log(a);
}
abcd();
//console.log(a); //Throw error -> a is not defined.


//Global scope : Variables declared outside of any function or block. Use anywhere in your code.
let name = "Abhishek";
function printName(){
    console.log(name);
} 
printName();


//Block scope : Variables declared inside { } (like if, for, etc.) can only be used inside that block.
if (true) {
  let age = 25;
  console.log(age); //Works here
}
//console.log(age); //ERROR


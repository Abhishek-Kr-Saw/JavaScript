//Chapter-05 Loops

//Reverse using for loop

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Example
console.log(reverseString("Abhishek")); // Output: "kehsihbA"

//print all character of name using for-of loop
let name = "Sheriyansh";

for(let char of name){
    console.log(char);
}

//print all objects key and value using for-in

let person = {
    name :"Abhishek",
    age: 25,
    location: "Delhi"
}

for(let key in person){
    console.log(key+' : '+person[key]);
}
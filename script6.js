//chapter - 06 -> Function

// Function are blocks of reusable logic.

// Function declaration
function abc(){
    console.log();
}

// Function expression 
let fnc = function(){

}

//  arrow function
/*
    () => {
        }

*/

// Parameters vs Argument
function greet(name){
 console.log("Hello"+name);
}

greet("Abhishek");

// name -> is a paremeter.
// Abhishek -> is an argument that we pass.

// Return value

function sum(a , b){
    return a+b;
}

let total = sum(1,7);
console.log(total);

// Default , Rest and Spread parameter

function multiply(a=1 , b=1){ //a,b -> default = 1.
    return a*b;
}

function sum(...nums) {  // ...nums ->Rest
  return nums.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3));

let nums = [1,2,3];
console.log(...nums);   //spread


//First class function
function shout(msg){
    return msg.toUpperCase();
}

function processMessage(fn){
    console.log(fn("Hello"));
}

processMessage(shout);


// Higher order function -> functon that accept or return functions.

function createMultiplier(x){
    return function(y){
        return x*y;
    }
}

let double = createMultiplier(2);
console.log(double(7));


// Pure vs impure  function
// jo function baahar ke value ko change na kare wo pure hai otherwise impure.
// first one has no effect on a while other increases in by one .
//Therfore first onr is pure while second one is impure. 

let a = 2;
function greet(){
    console.log("Good Morning");
}

function increament(){
    a++;
}


// Closure -> ek fnc jo return kare ek or fnc aur return hone wala fnc
// hamesha use karega parent fnc ka koe variable.

function abcd(){
    let a = 5;
    return function(){
        console.log(a);
    }
}
abcd();

//lexical scoping
function abc(){
    let a = 1;
    function bcd(){
        let b = 2;
        function cde(){
            let c = 3;
            return a+b+c; //a,b,c are accessible due to lexical scoping. 
        }
    }
}

// IIFE -> immediate invoke function expression .

(function(){
    console.log("IIFE");
})();


// Hoisting -> in js we can call function before declaration.

// Hoisting is a behavior in JavaScript (and some other languages) where 
// variable and function declarations are moved to the top of their scope 
// during the compilation phase before code execution.

// function declaration -> hosting hoga
// function expression   -> hosting nhi hoga (error)

abcd();

function abcd(){
    console.log("Hoisting");
}

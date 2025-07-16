//Chapter 2: Data Types + Type System

//01
console.log(null + 1);     // 1
console.log("5" + 3);      // 53  -> '+' with a string performs string concatenation.
console.log("5" - 3);      // 2   -> '-' forces numeric coercion.
console.log(true + false); // 1


//02
console.log("");
console.log(typeof []);    // object
console.log(typeof null);  // object
console.log(typeof 123n);  // bigint


//03
console.log("");
console.log(Boolean(0));          // false
console.log(Boolean("0"));        // true
console.log(Boolean([]));         // true
console.log(Boolean(undefined));  // false

//04
console.log(""); 
function isEmpty(value) { 
    return value===null || value===undefined || value===""
}

console.log(isEmpty())


//05
console.log("");
console.log(5 == "5"); // true
console.log(5 === "5");// false
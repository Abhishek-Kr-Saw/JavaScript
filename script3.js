//Chapter 3: Operators

console.log("10" + 1);         // 101
console.log("10" - 1);         // 9
console.log(true + false);     // 1
console.log(!!"Sheryians");    // !->false  => !->true


console.log("");
let str = "42";
let num = +str;         // Using unary plus operator
console.log(num);

console.log("");
let age = 17;
let msg = age >= 18 ? "Adult" : "Minor";
console.log(msg);

console.log("");
function calc(a, b, operator) {
    switch(operator){
    case "+" :
        return a+b;
    case '-':
        return a-b;
    case '*': 
        return a*b;
    case '/':
        return b!==0 ? a/b: "Error: Division by zero";
    default:
        return "Enter valid operator";
    }
}
console.log(calc(1,34,'+'))

console.log("");
let marks = 52;
if(marks < 100 && marks > 80) console.log("Excellent");
else if(marks < 80 && marks > 60) console.log("Good");
else if(marks < 60 && marks > 40) console.log("Average");
else console.log("Fail");

console.log("");

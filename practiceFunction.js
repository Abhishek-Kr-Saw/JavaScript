function f(){
    return;
}
console.log(f()); //Undefinded

// Pass a function into another function and execute it.

function abcd(val){
    val();
}

abcd(function(){
    console.log("Function inside a function")
})

//what is the output

function outer(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
}

let counter = outer();
counter(); //1
counter(); //2


//BMI Calculator

function bmi(weight,height){
    return weight/(height*height);
}

console.log("You bmi is : "+bmi(60,1.65).toFixed(2));

//Create a greet function with default name.

function greet(name="Abhishek"){
    console.log("Hello "+name);
}
greet();      // -> Hello Abhishek
greet("Raj"); // -> Hello Raj


// Sum all paremeter using rest paremeter

function sum(...nums){
   let total = 0;
   nums.forEach(val =>{
    total += val;
   })
   return total;
}

console.log(sum(1,2,3,4,5));             //15
console.log(sum(1,2,3,4,5,6,7,8,9,10));  //55


//Create a closure counter function

function createCounter(){
    let count = 0;
    return {
        increment : function(){
            count++;
            return count;
        },
        decrement : function(){
            count--;
            return count;
        },
        getCount : function(){
            return count;
        }
    };
}

const counter2 = createCounter();
console.log(counter2.increment());  //1
console.log(counter2.increment());  //2
console.log(counter2.decrement());  //1
console.log(counter2.getCount());   //1


//create a function that return another function.

function hof(){
    console.log("Outer function")
    return function(){
        console.log("Function with-in a function");
    }
}

console.log(hof());
console.log("");
hof()();
console.log("");

//use function to log all even number from array.

function displayAllEven(nums){
    nums.forEach(val => {
        if(val % 2 === 0){
            console.log(val);
        }
    });
}

const arr = [1,2,3,4,5,6,7,8,9,10];
displayAllEven(arr);
console.log("");


//create a pure function to add tax.

function addTax(amount , taxRate){
    return amount+(amount*taxRate);
}

console.log(addTax(100,0.9));
console.log(addTax(350,0.16));
console.log("");


//Use IIFE to show welcome message.

(function greeting(){
    console.log("Welcome!!How I can help you...");
})();


//create a discount calculator.(HOF)
function calCulateDiscount(amount , discount){
    let discounted = amount*discount/100;
    console.log(("Discount : "+discounted));
    return function(){
        return ("Amount to pay : "+ (amount - discounted));
    }
}

let dis = calCulateDiscount(1000,18);
console.log(dis());
console.log("");


//create a HOF to convert string into uppercase.

function convertToUppercase(transform){
    return function(str){
        return transform(str);
    }
}

let toUpperCase = convertToUppercase(function(str){
    return str.toUpperCase();
})
console.log(toUpperCase("Abhishek"));




//Lets practice some question.

//Create an array of three fruits and print the second one.

let fruits = ["apple" , "banana" , "papaya"];
console.log(fruits[1]);

//Add Mango at the end and pineapple at the start.
fruits.push("Mango");
fruits.unshift("Pineapple");
console.log(fruits);   //['Pineapple', 'apple', 'banana', 'papaya', 'Mango']

//Replace banana with kiwi
fruits[2] = "kiwi";
console.log(fruits);    // ['Pineapple', 'apple', 'kiwi', 'papaya', 'Mango']

//Insert red and blue at index 1 
let color = ["green" , "orange"];
color.splice(1,0,"Red","Blue");
console.log(color);     //['green', 'Red', 'Blue', 'orange']

//Extract the middle 3 elements of the array
let arr = [1,2,3,4,5,6,7];
let newArr = arr.slice(2,5);    //[3, 4, 5]
console.log(newArr);

//Sort the array alphabettically and then sort it.
let name = ["Zara" , "Yahu"  , "Abhijit" , "Abhishek"];
console.log(name.sort().reverse()); //['Zara', 'Yahu', 'Abhishek', 'Abhijit']

//Use .map to square each number
let num = [2,3,4,5,6];

let sqNum = num.map(function(val){
    return val*val;
});
console.log(sqNum);     //[4, 9, 16, 25, 36]

//Use .filter to get number greater than 10
let fil = [12 , 23 , 1, 7 , 8 , 45];

let filArr = fil.filter(val => {
    return val>10;
});
console.log(filArr);    // [12, 23, 45]

//Use .reduce to sumUp the array element
let total = fil.reduce(function(accumulator , val){
    return accumulator+val;
},0);
console.log(total); //96

// Use .find() to get the first number greater than 10.
let arr1 = [
    {id:1 , key:1},
    {id:2 , key:9},
    {id:3 , key:11},
    {id:4 , key:12},
];

let n = arr1.find(function(val){
    return val.key > 10
});
console.log(n);     //{id: 3, key: 11}

//Use .some() to check if any student get marks below 35
let marks = [54,56,98,88,34];
let check = marks.some(function(val){
    return val<35;
});
console.log(check);     //true ->  as 34 is there

// Use .every() to check each number is even or not.
let even = [2,4,6,8,9];
let e = even.every(function(val){
    return val % 2 === 0;
});
console.log(e);     //false -> as 9 is there

//Destructure the array to get first and last name
let detail = ["Rohit","Sharma","from","Mumbai"];

let [firstName,lastName] = detail;
console.log(firstName,);        //Rohit
console.log(lastName);          //Sharma

//Merge two array using spread operator
let a = [1,2,3];
let b = [4,5,6];

let c = [...a,...b];
console.log(c);     //[1, 2, 3, 4, 5, 6]

//clone this array properly (not by reference)
let a1 = [1,2,3,4,5];
let b1 = [...a1];
console.log(b1);
b1.push(9);         //[1, 2, 3, 4, 5]
console.log(b1);    //[1, 2, 3, 4, 5, 9]
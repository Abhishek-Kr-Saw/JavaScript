
//1. Log your name and your favroite hobby to the console.
console.log("Name is Abhishek");
console.log("Hobby : Playing cricket");

//2.Perfrom and log the result of 45 * 2 - 10.
let eq = 45 * 2 - 10;
console.log(`Answer is  : ${eq}`);

//3.Use console log to display the current year.
const dt = new Date();
console.log(dt.getFullYear());
console.log(dt.getMonth()+1); //0->january that's why +1.
console.log(dt.getDate());

//4.Create two variables for first and last name. Concate and log them.
let firstName = "Abhishek";
let lastName = "Saw";
console.log(firstName+' '+lastName);

//5.Track the value of a variable before and after updating.
let value = 5;
console.log("Value before updation : "+value);
value += 10;
console.log("Value after updation : "+value);

//6.Use console.error() to simulate an error message.
console.error("There is an error");

//7.Log the square of a number 12 to the console.
let num = 12;
console.log(12*12);

//8.Print the type of a variable holding the value true.
var a = true;
var b = 2;
var c = 'A';
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));

//9.Create a variable holding your age and log whether it's greater then 18 or not.
let age = 22;
if(age > 18){
    console.log("Yes i'm 18 above");
}else{
    console.log("Opps you are under age");
}

//10.Log the result of 100/0 and observe the output. 
console.log(100/0); //Infinity

//11.Declare a variable using let and log its value.
let n = 12;
console.log(n);

//12.Create a const to store the value PI and log it.
const PI = Math.PI;
console.log(PI);

//13.Reassign the value to a variable declared with let and log the result.
n = 13;
console.log(n);

//14.check the type of null and log it.
console.log(typeof null); //-> null is an object

//15.Create a variable with a number as a string (eg."25) and log its type.
let number = "25";
console.log(typeof(number)); //string

//16.Use typeOf to check the type of a boolean variable.
let bool = true;
console.log(typeof(bool));

//17.Create three variables of type string, number ans boolean , and log their values.
let aa = true;
let bb = 2;
let cc = 'A';
console.log(typeof(aa)); //boolean
console.log(typeof(bb)); //number
console.log(typeof(cc)); //string

//18.Declare a variable without assigning a value. Log its type.
let vari;
console.log(typeof(vari)); //undefined

//19.Create a varibale with undefined and log its type.
let val = undefined;
console.log(typeof val); //undefined
console.log(typeof NaN); //number

//20.Use const to create an array. Try reassigning the array and observe the error.
//const arr = [];
//arr = []; // Error : Assignment to constant variable.

//21.Write a for loop to print number from1 to 5.
for(let i=1;i<=5;i++){
    console.log(i);
}

//22.Use while loop to sum the number from 1 to 10.
let sum = 0;
let i=1;
while(i<=10){
    sum += i;
    i++;
}
console.log(sum);

//23.Create a for...of loop to print each character of "Javascript".
let str = "JavaScript";
for(let ch of str){
    console.log(ch);
}

//24.Wrie a for loop that skip the even number between 1 to 10.
for(let i=1;i<=10;i++){
    if(i%2 === 0)continue;
    console.log(i);
}
console.log(" ");


//25.Use do while loop to log number from 5 to 1.
let no = 5;
do{
    console.log(no);
    no--;
}
while(no>0); 
console.log(" ");

//26.Create a for loop that calculate the factorial of 5.
let fact = 1;
for(let i=1;i<=5;i++){
    fact *= i;
}
console.log("Factorial of 5 : "+fact);
console.log(" ");

//27.Write a nested loop to print a  3x3 grid of numbers.
let hold = 1;
for(let  i=0;i<3;i++){
    var s = " ";
    for(let j=0;j<3;j++){
        s += `${hold} `;
        hold++;
    }
    console.log(s);
}

//28.Use a for loop to reverse an array.[1,2,3,4,5] -> [5,4,3,2,1]
let array = [1,2,3,4,5];
let ansArray = [];
for(let i=array.length - 1;i>=0;i--){
    ansArray[array.length-1-i] = array[i]; 
}
console.log(ansArray)

//29.Write a for loop that log a number between 1 to 50 which is divisible by 5.
let res = [];
for(let i=1;i<=50;i++){
    if(i%5 === 0){
        res.push(i);
    }
}
console.log(res);

//30.Use a for..in loop to iterate over an object and log its key. 
var obj = {
    name : "Abhishek",
    email : "abhishek@mail",
    age : 22
}

for(let key in obj){
    console.log(key +":"+ obj[key]);
}
console.log(" ");

//31.Create an array of top 5 favorite movies and log it.
var movie = ['Avatar','RRR','Dhoom','Red Notice','Maa'];
movie.forEach(function(value){
    console.log(value);
});

//32.Find and log the second element of an array.
console.log(movie[1]);
console.log(" ");


//33.Add two new elements to the start of an array using .unshift().
let arrr = [1,2,3,4,5];
arrr.unshift(0);
arrr.unshift(-1);
console.log(arrr);
console.log(" "); //[-1, 0, 1, 2, 3, 4, 5]

//34.Remove the last element of an array and log the updated array.
arrr.pop();
console.log(arrr);
console.log(" "); //[-1, 0, 1, 2, 3, 4]

//35.Use .slice() to extract the first three element of an array.
console.log(arrr.slice(0,3)); //[-1, 0, 1]
console.log(" ");

//36.Find the index of specific element in a array.
console.log(arrr.indexOf(4)); //5

//37.Check if a value exists in an array using .includes(). 
console.log(arrr.includes(3)); //true
console.log(" ");

//38.Combine two array [1,2] and [3,4] using concat.
let arr1 = [1,2];
let arr2 = [3,4];
let arr3 = arr1.concat(arr2);
console.log(arr3);

//39.Sort an array in acending order [5,1,9,2].
let arrr1 = [5,1,9,2]
arrr1.sort((a,b) =>a-b);
console.log(arrr1);

//40.Write a program that create a copy of an array without mutating the original.
let a1 = [9,8,7,6,12];
console.log(a2 = [...a1]); //[9,8,7,6,12];

//41.Write a function to check if a number is even or odd.
function evenOrOdd(n){
    if(n%2 == 0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}
evenOrOdd(31);

//42.Create a function to calculate the area of circle with given radius.
function circleArea(r){
    let area = Math.PI*r*r;
    console.log(area);
}
circleArea(12);

//43.Write a function that accept array and return sum of it.
function sumOfArray(a){
    let sum = 0;
    for(let i=0;i<a.length;i++){
        sum += a[i];
    }
    return sum;
} 
let a3 = [1,2,3,4,5];
console.log(sumOfArray(a3));

//44.Create a function to check if a string start with a specific character.
function checker(str,t){
    if(str[0] == t){
        return true;
    }
    return false;
}
console.log(checker("Abhishek","A"));

//45.Create a function to find Maximum of two number.
function maximum(a,b){
    if(a<b)return b;
    return a;
}
console.log(maximum(29,187));

//46.Create a function that take a number and return its factorial.
function findFactorial(n){
    let fact = 1;
    for(let i=1;i<=n;i++){
        fact = fact*i;
    }
    return fact;
}
console.log(findFactorial(5));

//47.Create a function that take string as value and return its reverse.
function reverseString(s){
    return s.split('').reverse().join('');
}
console.log(reverseString("Abhishek"));

//48.Create a function to find largest element of an array.
function largest(arr){
    let largest = arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i] > largest) largest = arr[i];
    }
    return largest;
}
console.log(largest(a3)); //a3 = [1,2,3,4,5] -> 5

//49.Create a function that convert a string to kebab-case (eg:"Hello World" -> "hello-world").
function kebab(str){
    return str.split(' ').join('-');
}
console.log(kebab("Abhishek kumar saw"));

//50.Create a function that log "Hello, World!" everytime it called.
function helloWorld(){
    console.log("Hello, World!");
}
helloWorld(),helloWorld();
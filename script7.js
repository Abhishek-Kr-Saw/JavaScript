//Chapter -> 07 Arrays.

let arr = [1,2,3,4,5];
arr[1] = 4;             //[1,4,2,3,4,5]
arr.push(6);            //[1,2,3,4,5,6] -> insert at end
arr.pop();              //[1,2,3,4] -> remove from last
arr.shift();            //[2,3,4,5] -> remove from first
arr.unshift(0);         //[0,1,2,3,4,5] ->  add to start

arr.splice(1,2);        //[2,3] : start index , number of element.Modifies the original array by adding/removing elements.
arr.slice(2,3);         //[3,4] :(start,end) index -> Returns a shallow copy of array.
arr.reverse();          //[5,4,3,2,1]
arr.sort(function(a,b){  //[1,2,3,4,5]
    return a-b; //for acending order , for descendind(b-a).
});


// forEach()-> does not return a new array.
let  arrr = [10,20,30,40,50];

let newAr = arrr.forEach(function(val){
    console.log(val+1);
})

// map()    -> return a new array of same size.
let newArr = arrr.map(function(val){
    return val;
});

console.log(newArr); // [10, 20, 30, 40, 50]

//// filter() ->  create a new array with all elements that pass a given condition 
let fil = arrr.filter(function(val){
    if(val > 35) return true;         
})
console.log(fil);  // [40, 50]

//reduce()
let red = arrr.reduce(function(accumulator,val){
    return accumulator + val;
},0);
console.log(red);

/*
    accumulator → Carries over the result from previous iterations.
    val (currentValue) → Current element being processed.
    initialValue → Starting value for the accumulator (here 0).
    -> array.reduce(callback(accumulator, currentValue), initialValue);
*/

// find() ->  return the first element that satisfies a given condition.

let obj = [    
    { id:1, key : 1 },
    { id:2, key : 2 },
    { id:3, key : 1 }
];

let val = obj.find(function(val){
    if(val.key === 1) return val;
});
console.log(val);       //{ id:1, key : 1 }
console.log("");

//  some() ->  at least one element satisfies a given condition.
let arr1 = [ 12 , 23 , 34 , 45 , 66 ];
let so = arr1.some(function(val){
    return val > 30;
});
console.log(so);        //true

// every() -> It returns true only if every element passes the test; 
//            otherwise, it returns false.
let ev = arr1.every(function(val){
    return val > 10;
});
console.log(ev);        //true

//Destructuring -> Destructuring in JavaScript is a convenient way to extract values 
//                 from arrays or properties from objects and assign them to variables
//                 in a single statement.

let arr2 = [10,20,30,40,50];
let [a,,b] = arr2;
console.log(a+" "+b);   // 10 30

// spread operator -> [...nums](The spread operator (...) in JavaScript allows you to 
//                    expand elements of an array, object, or iterable into individual
//                    elements.)
let arr3 = [...arr2];
console.log(arr3);
console.log("");


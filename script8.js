//Objects

let obj = {
    name: "Abhishek", //name->key , "Abhishek"->value
    address : {
        city: "Kolkata",
        pin: 712121,
        locations : {
            lat : 23.71,
            lan : 76.28
        },
    },
};

//Dot and bracket notaion
console.log(obj.name);  //Abhishek
let aa = "name";        
console.log(obj[aa]);   //Abhishek

//Nesting and deep access
console.log(obj.address.locations.lat); //23.71

let {lan,lat} = obj.address.locations;  //destructuring
console.log(lan,'',lat);   //76.28 '' 23.71

// for-in
let obj2 = {
    name : "Abhishek",
    age  : 22,
    email : "abhi@mial.com"
}

for(let key in obj2){
    console.log(obj2[key]);
}

// object.keys
console.log(Object.keys(obj2)); //['name', 'age', 'email']
console.log(Object.entries(obj2));  // give arrays of array.

//spread
let obj3 = {...obj};
console.log(obj3);

//deep clone -> using spread operator cause problem in nested object.
//we convert to sttringfy JSON format

let obj4 = JSON.parse(JSON.stringify(obj));
console.log(obj4); //changes in nested obj does not effect the real data

//Optional chaining -> feature that allows you to safely access deeply nested
//         object properties without having to check each level for null or 
//         undefined
let detail = obj?.address?.pin; 
console.log(detail);


//Computed Properties
let role = "admin";

let objj = {
    [role] : "Abhi"
}

console.log(objj);  // {admin: "Abhi"}

//Practice
//Create a object student with name , age , isEnrolled
let student = {
    name : "Abhishek",
    age : 22,
    isEnrolled : true
}

//Can an object key be boolean and number -> yes
let objCheck = {
    true : "yes",
    42 : "solution"
};
console.log(objCheck.true); //yes
console.log(objCheck[42])   //solution

//Access the first-name from the object
const user = {
    "first-name" : "Abhisehk"
}
console.log(user["first-name"]); //Abhishek

//Given a dynamic key let key = 'age' , how will you access user[key]?
let key = "age";
const user2 = {
    age :22
};
console.log(user2[key]);    //22

//Print the let value
const locations = {
    coordinates : {
        lat : 23.98,
        lan : 34.11
    },
};
console.log(locations.coordinates.lat); //23.98


//Destructure the key "first-name" as a variable called firstName.
const user3 = {
    "first-name" : "Abhi",
};

let {"first-name" : firstName} = user3;
console.log(firstName);     //Abhi
console.log("")


//Use for-in to log all the key int this object
const course = {
    title: "JavaScript",
    duration: "4 weeks",
};

for(let key in  course){
    console.log(key)
}

//Use Object.entries() to print all key-value pair as:
Object.entries(course).forEach(element => {
    console.log(element[0]+" : "+element[1]);
});


//Copy this using spread
const original = {a:1 , b:2};
let copy = {...original};
console.log(copy);
console.log("");


//deep clone object safely
const obj1 = { info : {score : 80}};
const obj22 =  JSON.parse(JSON.stringify(obj1));
console.log(obj22);
console.log("");

//Rewrite this safely using optional chaining
const person = {}
console.log(person?.profile?.name);  //undefined


//Create an object for a book (title,author,price)
const book = {
    title : "JavaScript",
    author : "Sheryians coding school",
    price : "Free"
};
console.log(book);

//Access property using both dot and bracket
console.log(book?.title);
console.log(book["price"]);

//Write a nested object (user with address and location) -> 
const abhi = {
    address : {
        pin : 82304 , 
        location : {
            lat : 23.66,
            lan : 199.89
        }
    }
}


//Destructure name and age from student object
const stud = {
    name : "Harsh",
    age  :26
};
let {name : Name} = stud;
let {age : Age} = stud;
console.log(Name , Age);


//Loop through key and value of the object
Object.entries(stud).forEach(ele => {
    console.log(ele[0] + ": " + ele[1]);
});

console.log(Object.entries(stud)); //Object to array

//Copy an object using spread operator.
let stud2 = {...stud};
console.log(stud2);

//Copy deep copy using nested structure
let deepCopy = JSON.parse(JSON.stringify(abhi));
console.log(deepCopy);

//Use optional chaining to safely access the deep value;
console.log(deepCopy?.address?.pin);
console.log(deepCopy?.address?.location?.lan);

//use a variable as a key using computed properies
let name = "Admin";
let me = {
    ["name"] : "Abhishek"
}
console.log(me);
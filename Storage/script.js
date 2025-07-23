// localStorage -> Stores data in key-value pairs on the client browser with no expiration date.
// it generally store string

// store - setItem
localStorage.setItem("name","Abhishek");

// fetch - getItem
localStorage.getItem("name");

// remove - removeItem
// localStorage.removeItem("name");

// update - setItem(if already present , then it override)
localStorage.setItem("name","abhi");



// sessionStorage -> Similar to localStorage, but data present only for the duration of the page session 
// (until the browser/tab is closed).
// .setItem(), getItem() ,removeItem() ,clear

// Set data
sessionStorage.setItem('token', 'abc123');

// Get data
console.log(sessionStorage.getItem('token')); // abc123

// Remove data
sessionStorage.removeItem('token');

// Clear all data
sessionStorage.clear();


// Cookies ->  Small pieces of data stored in the browser and sent to the server with every HTTP request.
document.cookie = "name=saloni";
document.cookie = "age=23";

// generally we can't store array , object in the local storage.
//But in order to do that we have to use JSON.stingify and then parse it to arraay/object.

localStorage.clear();
localStorage.setItem("friends",JSON.stringify(["akash","amit","sourav"]));

//  stored as : "[\"akash\",\"amit\",\"sourav\"]"
console.log(JSON.parse(localStorage.getItem("friends")));
// ['akash', 'amit', 'sourav']



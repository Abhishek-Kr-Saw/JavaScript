// The DOM (Document Object Model) in JavaScript is a programming interface 
// that allows you to interact with and manipulate HTML and XML documents. 
// It represents the structure of a webpage as a tree of objects (nodes).


// Accessing element in the DOM
// getElementById() -> selecting by id
// getElementsByClassName() -> selecting by class name
// getElementsByTagName() -> selecting by tag names
// querySelector() , querySelectorAll() -> mostly used.

let h1 = document.querySelector("#abhi");
console.log(h1);


// Selecting element -> .innerText , .innerContent , .innerHTML
h1.innerText = "Hello everyone !!";

let second = document.querySelector("#second");
console.log(second);
second.innerContent = "I am the second id";

let third = document.querySelector("#third");
console.log(third);
third.innerHTML = "I am the third one!!"


// Attribute Manipulation
let a = document.querySelector("a");
a.getAttribute("href");    //www.google.com

let img = document.querySelector("img");
img.setAttribute("src",
    "https://images.unsplash.com/photo-1752859625900-a7fbeee9b8e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
);

// a.removeAttribute();

//  Dynamic DOM -> Dynamic DOM refers to creating, modifying, or deleting elements in a 
//          webpage at runtime using JavaScript — without reloading the page.
//  first create then append

let h3 = document.createElement("h3");
h3.textContent = "Hello ji kya haal chal";

let body = document.querySelector("body");
body.append(h3);
// prepend() ->  insert content at the beginning of a parent element 


//Style update via .style , classList (add,remove,toggle)
let st = document.querySelector("#abhi");
st.style.color = "red";
st.style.backgroundColor = "black";

third.classList.add("changes");

//Practice
// What is DOM? How does it represent the HTML structure?
// Nme the types of nodes in the DOM tree.
// What is the difference between an element node and a text node?   
// What is the difference between getElementById() ans querySelector() ?
// What does getElementsByClass return ? Is it an array ? -> return HTMLCollection(like an array).
// T1 : select the heading of the page id and change its text to Sheryians.
let head = document.querySelector("#head");
head.innerText = "Sheryians coding school";
console.log(head);
body.prepend(head);

//T2 : select all <li> elements and print their text using loop
let lis = document.querySelectorAll("li");
lis.forEach(function(val){
    console.log(val.textContent);
});

// What is the difference between innerText,textContent,and innerHTML?
// When should you use textContent over innerText?


// T3 : select a paragraph and replace its content with : <b>Updated</b> by JavaScript
let p = document.querySelector("p");
p.innerHTML = "<b>Updated</b> by JavaScript";

// Whta does setAttribute() and getAttribute() do?

//T4:Select a link and update the link to https://sheryians.com/.
let a1 = document.querySelector("a");
a1.setAttribute("href","https://sheryians.com/");

//T5: Add title attribute ti div dynamically.
let div = document.querySelector("div");
div.setAttribute("title","on div");

//Remove the disabled attribute from a button
let btn = document.querySelector("button");
btn.removeAttribute("disabled");

// What does createElement() do? What's returned? 
// What is diffence between appendChild() and prepend()?
// Can we remove an element using removeChild()?
// document.querySelector(parentName).removeChild(node to delete)

// T6 : Create a new list item <li>New Task</li> and add it to the end of a <ul>
let ul = document.querySelector("ul");
let li = document.createElement("li");
li.textContent = "New Task";
ul.appendChild(li);
let del = document.querySelector("li");
// ul.removeChild(del);

// What is the difference between .classList.add() and .classList.toggle()?

//T7 : Add a highlight class to every even item in a list.
let hg = document.querySelectorAll("ul li:nth-child(2n)");
hg.forEach(function(elem){
    elem.classList.add("highlight");
});

let para = document.querySelectorAll("p");
para.forEach(function(elem){
    elem.style.fontSize = "30px"
})
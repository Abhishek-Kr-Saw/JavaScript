/*
    Event bubbling is a concept in the DOM (Document Object Model) where an event starts from the 
    target element (the deepest element that triggered the event) and then bubbles up (propagates) 
    through its parent elements, all the way up to the document object.
*/

let ul = document.querySelector("ul");

ul.addEventListener("click",function(dets){
    dets.target.classList.toggle("lt");
});

let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    console.log("Button clicked");
});


c.addEventListener("click",function(){
    console.log("c clicked");
},true);

b.addEventListener("click",function(){
    console.log("b clicked");
});

a.addEventListener("click",function(){
    console.log("a clicked");
});


// Event capturing -> Event capturing (also called event trickling) is the opposite of event bubbling. 
// by default capturing phase off hota hia isliye pahle bubblinh ho jata hai . 
// phase1 : Capturing -> parent to child. (btn , c , b , a)
// phase2 : Bubbling -> child to parent.  (a , b , c , btn)
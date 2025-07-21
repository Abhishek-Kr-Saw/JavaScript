//Event and EventListner

// click event
let h5 = document.querySelector("h5");
function clicked(){
    h5.style.color = "red";
}

h5.addEventListener("click",clicked);
h5.removeEventListener("click",clicked);

// input event
let inp = document.querySelector("input");
inp.addEventListener("input",function(val){
    if(val.data !== null){
        console.log(val.data);
    }
});

// change event
let sel = document.querySelector("select");
let dev = document.querySelector("#device");

sel.addEventListener("change",function(e){
    dev.textContent = `${e.target.value} selected`;
});


// Keydown event
let h = document.querySelector("#change");
window.addEventListener("keydown",function(elm){
    // h.textContent = elm.key;
    // console.log(elm.key)
});

let file = document.querySelector("#file");
let btn = document.querySelector("#btn");
console.log(btn);
btn.addEventListener("click",function(){
    file.click();
});

file.addEventListener("change",function(det){
    let fl = det.target.files[0];
    if(fl){
        btn.textContent = fl.name;
    }
});

let div = document.querySelector("#hover");
div.addEventListener("mouseover",function(){
    div.style.backgroundColor = "yellow";
    // div.style.borderRadius = "50%" ;
});

div.addEventListener("mouseout",function(){
    // div.style.backgroundColor = "red";
    // div.style.borderRadius = "" ;
});

window.addEventListener("mousemove",function(e){
    // div.style.top = e.clientY + "px";
    // div.style.left = e.clientX + "px";
});


//Event object -> target(jispe event hua) , type(kis type ka event hua like click),
//       preventDefault(event perform hone pe kuch prevent karna like in form submission).


//Event bubbling and capturing

document.querySelector("#bubble").addEventListener("click", function() {
    console.log("Bubble container clicked!");
});



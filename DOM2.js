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



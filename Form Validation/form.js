let form = document.querySelector("form");
let nm = document.querySelector("#name");
let msg = document.querySelector("#msg");
let mail = document.querySelector("#email");


form.addEventListener("submit",function(det){
    det.preventDefault();
    if(nm.value.length <= 2){
        msg.style.display = "initial";
    }else{
        msg.style.display = "none";
    }

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!regex.test(mail.value)){
        console.log("Enter valid email");
    };

    console.log("Form submitted");
})
let form = document.querySelector("form");
let mail = document.querySelector("#email");
let pass = document.querySelector("#password");
let mailMessage = document.querySelector("#email-error");
let passMessage = document.querySelector("#password-error");

let isValid = true;

form.addEventListener("submit",function(dets){
    dets.preventDefault();

    mailMessage.textContent = "";
    passMessage.textContent = "";

    const emialRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let mailValid = emialRegex.test(mail.value);
    if(!mailValid){
        mailMessage.textContent = "Enter valid mail";
        mailMessage.style.display = "initial";
        isValid = false;
    }
    
    const passRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let passValid = passRegex.test(pass.value);

    if(!passValid){
        passMessage.textContent = "There must be a special character and min-length of 8";
        passMessage.style.display = "initial";
        isValid = false;
    }

    if(isValid){
        document.querySelector("#errorMessage").textContent = "Everything is correct";
    }
});
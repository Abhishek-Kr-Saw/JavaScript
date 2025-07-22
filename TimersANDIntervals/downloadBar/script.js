let count = 0;

let progressBar = document.querySelector(".progress-bar");
let percentText = document.querySelector("#percentText");
let h2 = document.querySelector("h2");

let interval = setInterval(function(){
    if(count < 100){
        count++;
        progressBar.style.width = `${count}%`;
        percentText.textContent = `${count}%`;
    }else{
        h2.textContent = "Downloaded.."
        clearInterval(interval);
    }
},3000/100);
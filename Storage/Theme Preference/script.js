if(localStorage.getItem("theme")){
    document.body.classList.add(localStorage.getItem("theme"));
}

document.querySelector("button").addEventListener("click",function(){
    if(document.body.classList.contains("dark-theme")){
        document.body.classList.remove("dark-theme");
        localStorage.setItem("theme","light");
    }else{
        document.body.classList.add("dark-theme");
        localStorage.setItem("theme","dark-theme");
    }
});
// setTimeout() -> run the function once after specified delay.
let st = setTimeout(function() {
    console.log("Hello after 2 second")
}, 3000);

// clearTimeout(st) -> cancel the execution of setTimeout;

// setInterval() -> run the funtion again again after specified interval.
let si = setInterval(function(){
    console.log("Appered after two second");
},2000);

// clearInterval(si) -> Stops the execution of a setInterval().


// TIMER
let count = 10;
let timer = setInterval(function(){
    if(count > 0){
        console.log(count);
    count--;
    }else{
        clearInterval(timer);
    }
},1000);
const quotos = [
  "Believe you can and you're halfway there.",
  "Success is the sum of small efforts repeated daily.",
  "Stay patient. Stay consistent.",
  "Dream big. Start small. Act now.",
  "Your only limit is your mindset.",
  "Great things take time.",
  "Do something today that your future self will thank you for.",
  "Every day is a fresh start.",
  "Small steps can lead to big changes.",
  "Nothing will work unless you do."
];


let btn = document.querySelector("button");

btn.addEventListener('click',function(){
    console.log(quotos[Math.floor(Math.random()*quotos.length)]);
    let x = Math.floor(Math.random()*100);
    let y = Math.floor(Math.random()*100);

    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);

    let div = document.createElement('div');

    div.innerHTML = quotos[Math.floor(Math.random()*quotos.length)];
    div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    div.style.rotate = Math.floor(Math.random() * 360)+'deg';
    div.style.position = "absolute";
    div.style.left = x+'%';
    div.style.top = y+'%';

    document.querySelector('main').appendChild(div).classList.add("divstyle");

})
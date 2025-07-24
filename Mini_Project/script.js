// select all attributes and doc
const addNotes = document.querySelector(".ri-add-line");
const formContainer = document.querySelector(".form-container");

const closeBtn = document.querySelector(".closeForm");


// Select the form
const form = document.querySelector("form");

// Select input fields by placeholder (not ideal, better to use class or name)
const imageUrlInput = document.querySelector("input[placeholder='https://example.com/photo.jpg']");
const fullNameInput = document.querySelector("input[placeholder='Enter full name']");
const homeTownInput = document.querySelector("input[placeholder='Enter home town']");
const purposeInput = document.querySelector("input[placeholder='e.g., Quick appointment note']");

// Select all radio buttons in the category group
const categoryRadios = document.querySelectorAll("input[name='category']");

// Select the submit button
const submitButton = form.querySelector(".submit-btn");
// const tagCheckbox = form.querySelector(".tag-checkbox");

const categoryRadio = form.querySelectorAll("input[name='category']");
const upBtn = document.querySelector("#upBtn");
const downBtn = document.querySelector("#downBtn");
const stack = document.querySelector(".stack")


addNotes.addEventListener("click",function(){
    formContainer.style.display = "initial";
});

closeBtn.addEventListener("click",function(){
    formContainer.style.display = "none";
});

// function saveToLocalStorage(obj){
//     let oldTask = [];
//     if(localStorage.getItem("task") === null){
        
//         oldTask.push(obj);
//         localStorage.setItem("task",JSON.stringify(oldTask));
//     }else{
//         oldTask = localStorage.getItem("task");
//         oldTask = JSON.parse(oldTask);
//         oldTask.push(obj);
//         localStorage.setItem("task",JSON.stringify(oldTask));   
//     }       
// }

function saveToLocalStorage(obj) {
    let oldTask = [];

    const existing = localStorage.getItem("task");

    if (existing) {
        try {
            const parsed = JSON.parse(existing);
            if (Array.isArray(parsed)) {
                oldTask = parsed;
            } else {
                // Stored data is not an array, reset to empty
                oldTask = [];
            }
        } catch (e) {
            // If parsing fails, reset to empty
            oldTask = [];
        }
    }

    oldTask.push(obj);
    localStorage.setItem("task", JSON.stringify(oldTask));
}


form.addEventListener("submit",function(dets){
    dets.preventDefault();

    const imageUrl = imageUrlInput.value.trim();
    const fullName = fullNameInput.value.trim();
    const homeTown = homeTownInput.value.trim();
    const purpose = purposeInput.value.trim();

    if(imageUrl === ""){
        alert("Please enter the image url");
        return;
    }
    if(fullName === ""){
        alert("Please enter the name");
        return;
    }
    if(homeTown === ""){
        alert("Please enter the home town");
        return;
    }
    if(purpose === ""){
        alert("Please enter the purpose");
        return;
    }

    let selected = false;
    categoryRadio.forEach(function(val){
        if(val.checked){
            selected = val.value;
        } 
    });

    if(!selected){
        alert("Please select a category");
        return;
    };

    saveToLocalStorage({
        imageUrl,
        fullName,
        homeTown,
        purpose,
        selected
    });

    form.reset();
    formContainer.style.display = "none";

    showCards();

});

function showCards() {
    let stack = document.querySelector(".stack");
    stack.innerHTML = "";

    let allTasks = JSON.parse(localStorage.getItem("task"));

    allTasks.forEach(function (task) {
        // Create card container
        const card = document.createElement("div");
        card.classList.add("card");

        // Avatar image
        const avatar = document.createElement("img");
        avatar.src = task.imageUrl;
        avatar.alt = "profile";
        avatar.classList.add("avatar");
        card.appendChild(avatar);

        // Name
        const name = document.createElement("h2");
        name.textContent = task.fullName;
        card.appendChild(name);

        // Info: Home town
        const hometownInfo = document.createElement("div");
        hometownInfo.classList.add("info");

        const hometownLabel = document.createElement("span");
        hometownLabel.textContent = "Home town";
        const hometownValue = document.createElement("span");
        hometownValue.textContent = task.homeTown;

        hometownInfo.appendChild(hometownLabel);
        hometownInfo.appendChild(hometownValue);
        card.appendChild(hometownInfo);

        // Info: Bookings
        const bookingsInfo = document.createElement("div");
        bookingsInfo.classList.add("info");

        const bookingsLabel = document.createElement("span");
        bookingsLabel.textContent = "Purpose";
        const bookingsValue = document.createElement("span");
        bookingsValue.textContent = task.purpose;

        bookingsInfo.appendChild(bookingsLabel);
        bookingsInfo.appendChild(bookingsValue);
        card.appendChild(bookingsInfo);

        // Buttons container
        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("buttons");

        // Call button
        const callBtn = document.createElement("button");
        callBtn.classList.add("call");
        callBtn.innerHTML = '<i class="ri-phone-line"></i> Call';

        // Message button
        const msgBtn = document.createElement("button");
        msgBtn.classList.add("msg");
        msgBtn.textContent = "Message";

        // Append buttons
        buttonsDiv.appendChild(callBtn);
        buttonsDiv.appendChild(msgBtn);

        // Append buttonsDiv to card
        card.appendChild(buttonsDiv);

        // Finally, add the card to the DOM (for example, inside a container)
        document.querySelector(".stack").appendChild(card); // or any container of your choice
    });
}
showCards();

function updateCard(){
    const cards = document.querySelectorAll(".stack .card");

    for (let i = 0; i < 3; i++) {
        cards.style.zIndex = 3 - i;
        cards.style.transform = `translateY(${i * 10}px) scale(${1 - i * 0.02})`;
        cards.style.opacity = `${1 - i * 0.02}`;
    }
}

upBtn.addEventListener("click",function(){
    let lastChild = stack.lastElementChild;
    if(lastChild){
        stack.insertBefore(lastChild, stack.firstElementChild);
    }

    //update 
});

downBtn.addEventListener("click",function(){
    let firstChild = stack.firstElementChild;
    if(firstChild){
        stack.append(firstChild);
    }

    //update 
});
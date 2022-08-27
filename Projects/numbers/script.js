(function() {
    "use strict";

// Fetch() method: It is defined on th window object, which we can use to perform request.
// This method will return a promise that will be fulfilled when the request is completed
// or rejected if the request is rejected.



// INITIATE YOUR SELECTORS
const enter_btn = document.querySelector(".enter-button");
const card = document.querySelector(".card");


// ENTER BUTTON
// enter_btn.addEventListener("click", getFacts);

enter_btn.addEventListener('click', () => {
    getFacts();
});

// enter_btn.onclick = getFacts;

// IF YOU SEE ONTOUCHSTART IN WINDOW OR ELSE 
// if ("ontouchstart" in window) {
//     enter_btn.addEventListener("touchstart", getFacts);
// } else {
//     enter_btn.addEventListener("click", getFacts);
// };

// FUNCTION TO ASSIGN VALUE TO INPUT, CARD TITLE AND CARD TEXT 
function getFacts() {
    const input = document.querySelector(".input").value;
    const card_title = document.querySelector(".card-title");
    const card_text = document.querySelector(".card-text");

    // IF VALUE IS NOT NOTHING
    if (input !== "") {        
        fetch(`http://numbersapi.com/${input}`)
        .then((response) => response.text())
        .then((data) => {
            card_title.innerHTML = input;
            card_text.innerHTML = data;
            card.classList.remove("d-none");
        })
        .catch((err) => console.log(err));
    }
};


// COPY BUTTON 
// const copy_btn = document.querySelector(".copy-btn");

// copy_btn.addEventListener('click', () => {
//     copyText();
// });

// function copyText() {
//     const textarea = document.createElement("textarea");
//     const card_text = document.querySelector(".card-text").innerHTML;

//     textarea.value = card_text;
//     document.body.append(textarea);
//     textarea.select();
//     document.execCommand("copy");
//     textarea.remove();
//     alert("Fact has been copied");
// }

// RESET BUTTON
// let reset_btn = document.querySelector(".reset-btn");

// reset_btn.addEventListener('click', () => {
//     resetText();
// });

// function resetText(){
//     card.classList.add("d-none");
//     document.querySelector(".input").value = '';
// };



})()
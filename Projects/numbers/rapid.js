// ALWAYS USE STRICT MODE
(function() {
    "use strict";

// BEGINNING OF RapidAPI
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f2cc66c448msh18bb9696df87f6ep11a9d3jsn2de9b1f1c58a',
		'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
	}
};

// INITIATE YOUR SELECTORS
const enter_btn = document.querySelector(".enter-button");
const card = document.querySelector(".card");


// ENTER BUTTON
enter_btn.addEventListener("click", () => {
    getFacts();
});

// FUNCTION TO ASSIGN VALUE TO INPUT, CARD TITLE AND CARD TEXT 
function getFacts() {
    const input = document.querySelector(".input").value;
    const card_title = document.querySelector(".card-title");
    const card_text = document.querySelector(".card-text");
};

// IF VALUE IS NOT NOTHING
if (input !== "") {        
    fetch(`https://numbersapi.p.rapidapi.com/${input}/math`, options)
    .then((response) => response.text())
    .then((data) => {
        card_title.innerHTML = input;
        card_text.innerHTML = data;
        card.classList.remove("d-none");
        console.log(data);
    })
    .catch((err) => console.log(err));
}

// END OF STRICT MODE
});

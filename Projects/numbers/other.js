// INITIATE YOUR SELECTORS = ENTER BUTON AND CARD DISPLAYING DATA
const enter_btn = document.querySelector(".enter-button");
const card = document.querySelector(".card");


// ENTER BUTTON = CLICK TO CALL FUNCTION
enter_btn.addEventListener("click", () => {
    getFacts();
});

// FUNCTION TO ASSIGN VALUE TO INPUT, CARD TITLE AND CARD TEXT 
function getFacts() {
    const input = document.querySelector(".input-number").value;
    const card_title = document.querySelector(".card-title");
    const card_text = document.querySelector(".card-text");

    // FETCH API
    fetch(`https://numbersapi.p.rapidapi.com/${input}/math`, options)
    .then(response => response.text())
    .then(data => {
        // DISPLAY DATA FROM API
        card_title.innerHTML = input;
        card_text.innerHTML = data;
        card.classList.remove("d-none");
        console.log(data);
    })

    // CATCH ERRORS
    .catch(err => console.error(err));
};

// COPY BUTTON 
const copy_btn = document.querySelector(".copy-btn");

copy_btn.addEventListener('click', () => {
    copyText();
});

function copyText() {
    const textarea = document.createElement("textarea");
    const card_text = document.querySelector(".card-text").innerHTML;

    textarea.value = card_text;
    document.body.append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Fact has been copied");
}

// RESET BUTTON
const reset_btn = document.querySelector(".reset-btn");

reset_btn.addEventListener('click', () => {
    resetText();
});

function resetText(){
    card.classList.add("d-none");
    document.getElementById("input-number").value = "";
    document.getElementById("input-number").focus();
};

// RAPID DEFAULT
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f2cc66c448msh18bb9696df87f6ep11a9d3jsn2de9b1f1c58a',
		'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
	}
};
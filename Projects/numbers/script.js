// Fetch() method: It is defined on th window object, which we can use to perform request.
// This method will return a promise that will be fulfilled when the request is completed
// or rejected if the request is rejected.

let enter_btn = document.querySelector(".btn");
let card = document.querySelector(".card");



// ENTER BUTTON
// enter_btn.addEventListener("click", getFacts);
// enter_btn.addEventListener("touchstart", getFacts);


// enter_btn.addEventListener("click", clickHandler);

// ADD ON FOR CLICKING BUTTON IN MOBILE 
if ('ontouchstart' in window) {
    enter_btn.addEventListener("touchstart", getFacts);
} else {
    enter_btn.addEventListener("click", getFacts);
};

// FUNCTION TO ASSIGN VALUE TO INPUT, CARD TITLE AND CARD TEXT 
function getFacts(e) {
    e.preventDefault();
    let input = document.querySelector(".input").value;
    let card_title = document.querySelector(".card-title");
    let card_text = document.querySelector(".card-text");

    // IF VALUE IS NOT NOTHING
    if (input !== "") {
        card.classList.remove("d-none");

        fetch(`http://numbersapi.com/${input}`)
            .then((response) => response.text())
            .then((data) => {
                card_title.innerHTML = input;
                card_text.innerHTML = data;
            })
            .catch((err) => console.log(err));
        }
    }

    
// COPY BUTTON 
let copy_btn = document.querySelector(".copy-btn");

copy_btn.addEventListener('click', () => {
    copyText();
});

function copyText() {
    let textarea = document.createElement("textarea");
    let card_text = document.querySelector(".card-text").innerHTML;

    textarea.value = card_text;
    document.body.append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Fact has been copied");
}



//SELECTORS
// const element = document.querySelector('.Js-icon');
// const elementIdeas = document.querySelector('.jsfunctions');


//addEventListeners need to be in class methods and not ID
//ACTION EVENT HANDLERS
// element.addEventListener('click', jsIdeas);

// //FUNCTIONS
// function jsIdeas(){
//     if(elementIdeas.style.display == 'none'){
//         elementIdeas.style.display = 'block';
//     } else{
//         elementIdeas.style.display = 'none';
//     }
// };


//YOU CAN USE THE TOGGLE FUNCTIONS, WHICH IS MUCH Better

let x = document.querySelector('.jsfunctions');
document.querySelector('.Js-icon').onclick = function(){
    x.classList.toggle('fade');
}


// element.addEventListener('click', (event) => {
//     console.log('HI!', event.target);
// });








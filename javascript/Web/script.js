//SELECTORS
const element = document.querySelector('.Js-icon');
const elementIdeas = document.querySelector('.jsfunctions');


//addEventListeners need to be in class methods and not ID
//ACTION EVENT HANDLERS
element.addEventListener('click', jsIdeas);

//FUNCTIONS
function jsIdeas(){
    if(elementIdeas.style.display == 'block'){
        elementIdeas.style.display = 'none';
    } else{
        elementIdeas.style.display = 'block';
    }
};




// element.addEventListener('click', (event) => {
//     console.log('HI!', event.target);
// });








//SELECTORS 
const button = document.querySelector("button");

//TRIGGERS + LISTENERS
button.addEventListener('click', e => {
    console.log('Double Click');
});

// const MAX_DOUBLE_CLICK_TIME = 500
// let lastClick = 0
// button.addEventListener("click", e => {
//     const timeBetweenClicks = e.timeStamp - lastClick
//     if (timeBetweenClicks > MAX_DOUBLE_CLICK_TIME){
//         lastClick = e.timeStamp
//         return
//     }

// const doubleClickEvent = new CustomEvent("custom:doubleClick", {
//     bubbles: true,
//     cancelable: true,
//     composed: true,
//     detail:{
//         timeBetweenClicks,
//     },
// })
// e.target.dispatchEvent(doubleClickEvent)
// lastClick = 0
// });

button.dispatchEvent(myEvent)


//FUNCTIONS


//SELECTORS 
const whatButton = document.querySelector('.double-click');

//TRIGGERS + EVENT LISTENERS

whatButton.addEventListener('click', function e() {
    console.log(e.currentTarget);
});

// document.addEventListener('DOMContentLoaded', function () {
//     whatButton.addEventListener('click', e => {
//         console.log(e.currentTarget);
//     });
// });

// var el = document.getElementById('double-click');
// if(el){
//   el.addEventListener('click', e =>);
// }

//FUNCTIONS


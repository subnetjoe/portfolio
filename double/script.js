// //SELECTORS 
// const myButton  = document.getElementById('double-click');

// //TRIGGERS + EVENT LISTENERS

// myButton.addEventListener('click', function () {
//     console.log(this);
// });

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


const element = document.getElementById('*');

element.addEventListener('click', myFunction);



function myFunction() {
  console.log(this); // Expected Value: 'Data'
};
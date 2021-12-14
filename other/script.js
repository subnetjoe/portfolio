let food = [
    'soup',
    'pancakes'
];

const creditBuilder = 463.86 + 122.77 + 133.23 + 154.44;
const monthlySupport = creditBuilder - 545.00;
console.log(food);

document.getElementById("december").innerHTML = '$' + creditBuilder.toFixed(2)
document.getElementById("january").innerHTML = '$' + monthlySupport.toFixed(2)

// document.write(creditBuilder);
//new
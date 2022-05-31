"use strict";

// //////////////////////////////// Function Expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// ////////////////////////////////Arrow Functions
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

//// ////////////////////////////////Calling other functions

// function cutFruitPieces(fruit){
//     return fruit * 26;
// }

// function fruitProcessor(apples, oranges) {

//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

//// //////////////////Function Review

// const calcAge = function (birthYear){
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName){
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0){
//         return retirement;
//     } else {
//         return -1;
//     }

//     return retirement;
//     // return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Joe'));
// console.log(yearsUntilRetirement(1970, 'Mike'));

// //////////////////////Coding challenge 1

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// // console.log(calcAverage(3, 4, 5));

// // Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// // console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function(avgDolphins, avgKoalas){
//     if(avgDolphins >= 2 * avgKoalas){
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     }   else if (avgKoalas >= 2 * avgDolphins){
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log(`No team wins...`);
//     }
// };

// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(111, 555);

// // Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);

// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

//// //////////////////Arrays

// const friend1 = 'Michael';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

////////////////////////////////setTimeout and setInterval(() =>)

//set timeout
// const ingredients = ["olives", "spinach"];

// setTimeout(
//   (ing1, ing2) => console.log(`Your pizza with ${ing1} and ${ing2} 🍕`),
//   3000,
//   ...ingredients
// );
// console.log("Waiting...");

//setInterval(() =>) applies the function every 3 seconds or specified time

// set Interval
// setInterval(function(){
//     const now = new Date();
//     console.log(now);
// }, 3000)

////////////////////////////////////////////////////////////////////////////////////////////////
//Find the max of an array

// const calcTempAmplitude = function(temps){
//   let max = temps[0];
//   for (let i = 0; i < temps.length; i++){
//     if(temps[i] > max) max = temps[i];
//   }
//   console.log(max);
// };

// calcTempAmplitude([3, 6, 9]);

// //Find the min of an Array

// const calcTempAmplitude2 = function(temps) {
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++){
//     if(temps[i] < min) min = temps[i];
//   }
//   console.log(min);
// };

// calcTempAmplitude2([41, 18, 72]);

//Find the max and min of an Array

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude([3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]);

// console.log(amplitude);

////Find the max and min of an Array plus join two arrays together

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5], 
[3, -62, -36, -1, 'error', 9, 13, 17, 65, 14, 91, 57]);

console.log(amplitudeNew);



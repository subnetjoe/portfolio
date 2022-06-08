const fruits = ['mango', 'peach', 'banana'];

//classic For Loop
for (let i = 0; i < fruits.length; i++){
  const fruit = fruits[i];
  console.log(fruit);
};

//Modern For Loop
for (let fruit of fruits) console.log(fruit);
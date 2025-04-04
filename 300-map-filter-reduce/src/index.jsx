import emojipedia from "./emojipedia";

var newMeanings = emojipedia.map(function(entry){
    return entry.meaning.substring(0,100);
});

console.log(newMeanings);

//-----Map -Create a new array by doing something with each item in an array.
// function double(x){
//     return x*2;
// }

// const newNumbers = numbers.map(double);
// console.log(newNumbers);

//-----for each------

// var newNumbers = [];

// function double(x){
//     newNumbers.push(x*2);
// }

// numbers.forEach(double);
// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num){
//     return num<10;
// });

// console.log(newNumbers);

//-----for each - Filter------
// var newNumbers = [];

// numbers.forEach(function(num){
//     if(num<10){
//         newNumbers.push(num);
//     }
// });
// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.

// var newNumber = numbers.reduce(function(accumulator, currentNumber){
//     console.log("accumulator="+accumulator);
//     console.log("currentNumber="+currentNumber);
//     return accumulator+currentNumber;
// })

// console.log(newNumber);

//-----for each - Reduce------
// var newNumber = [];
// numbers.forEach(function(currentNumber) {
//     newNumber += currentNumber;
// })
// console.log(newNumber);

//Find - find the first item that matches from an array.
// const newNumber = numbers.find(function(num){
//     return num >10;
// })
// console.log(newNumber);

//FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function(num){
//     return num >10;
// })
// console.log(newNumber);

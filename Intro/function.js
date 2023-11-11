"use strict";
// function Declaration
// function greetUser(name){
//     console.log('hello' + name);
// }
// greetUser('signi');

// // function expression
// const greetUser = function(name){
//     console.log('hello' + ' ' + name);
// }
// greetUser('signi');

// // Arrow function
// const greetUser = (name)=>{
//     console.log('hello' + name);
// };
// greetUser('signi');

// const date= new Date()
//     console.log(date)

// function calcAge(birthyear){
//     return date.getFullYear()- birthyear
// }
// let age= calcAge(2005)
// console.log(date.getFullYear());

// "china has 1441 million people, which is about 18.2% of the world"
// function describePopulation(country, population){
//     let percentage= (20000000/7000000000*100);
//     return`${country} has ${population} million people, which is about ${percentage} of the world`

// }
// console.log(describePopulation('Nigeria', 200000000));

// function print(signi) {
//     for (let i = 0; i < 10; i++){

//         console.log('signi',i);
//     }
// }
// print("signi")

// Display a random integer between 1 and 100 inclusive
// const random = Math.floor(math.random()*100)
// console.log(random)

// Display a random fruit from a list of five fruits
// const fruits =["apple", "orange", "pineapple", "grape", "banana"]
// const random = Math.floor(Math.random() * fruits.length)
// console.log(fruits[random])

// 055
// Randomly choose a number between 1 and 5. Ask the user to pick a
// number. If they guess correctly, display the message “Well done”,
// otherwise tell them if they are too high or too low and ask them to pick a
// second number. If they guess correctly on their second guess, display
// “Correct”, otherwise display “You lose”.
// const random = Math.floor(Math.random()*5);
// const userNumber = +prompt('pick a number');
// if (userNumber === random) {
//     console.log('welldone');
// } else if (userNumber > random) {
//     console.log('too high ');
//     const secondNumber = +prompt('pick a second number');
//     if (secondNumber === random) {
//         console.log('correct');
//     } else if (secondNumber !== random) {
//         console.log('you lose');
//     }
// }

// 56
// Randomly pick a whole number between 1 and 10. Ask the user to enter a number and
// keep entering numbers until they enter the number that was randomly picked.
// const randomNumber = Math.floor(Math.random() * 10);
// const number = +prompt('enter a number');
//     for(let i = 1; i < 11; i++) {
//     console.log(randomNumber);
// }

// 057
// Update program 056 so that it tells the user if they are too high or too low before they pick again.
// const random1 = Math.floor(Math.random() * 10);
// const userNumber = +prompt('enter a number')
//     for(let i = 1; i < 11; i++) {
//     console.log(random1, i);
// } if (userNumber > random1) {
//     console.log('too high,' + ' ' + 'pick again');
// } else if (userNumber < random1) {
//     console.log('too low,' + ' ' + 'pick again');
// }

//  058
// Make a maths quiz that asks five questions by randomly generating two whole numbers to make the question
// (e.g. [num1] + [num2]). Ask the user to enter the answer. If they get it right add a point to their score. At
// the end of the quiz, tell them how many they got correct out of five.
// const mathQuiz = Math.floor(Math.random()*5);
// const wholeNumber =( [4] + [3]);
// const answer = prompt('enter a whole number');
// if (answer === wholeNumber){
//     console.log('1 point',[i]);
// } else if (answer !== wholeNumber){
//     for( let i = 0; i < 6; i++)
//     console.log('0 point',[i])
// }

// 059
// Display five colours and ask the user to pick one. If they pick the same as the program has chosen,
// say “Well done”, otherwise display a witty answer which involves
// the correct colour, e.g. “I bet you are GREEN with envy”
// or “You are probably feeling BLUE right now”. Ask them to guess again; if they have still not got it right,
// keep giving them the same clue and ask the user to enter a colour until they guess it correctly.
const fiveColours = ["white", "black", "yellow", "blue", "green"];
const random = Math.floor(Math.random() * fiveColours.length);
const userColour = prompt("pick a colour");
if (userColour === fiveColours.length) {
  console.log(userColour + "well done");
} else if (userColour !== fiveColours.length) {
  console.log("i bet you are YELLOW with envy");
}
const guessAgain = prompt("enter a colour");
if (guessAgain !== fiveColours.length) {
  console.log("you are probably feeling BLUE right now");
}
while (true) {
  const answer = prompt("enter a colour");
}
if (answer === fiveColour.length) {
  console.log(answer);
}

// Enter a list of ten colours. Ask the user for a starting
// number between 0 and 4 and an end number between 5 and 9. Display
// the list for those colours between the start and end numbers the user input.
// const list = [white, black,red, green,yellow,blue,violet,purple,brown,pink];
// const startNumber = (startNumber === 0 && startNumber <= 4);
// const endNumber = (endNumber === 5 && endNumber <= 9);
// const userNumber = (startNumber.length + endNumber.length);
// if (userNumber === list.length){
//     console.log(userNumber.length);
// }

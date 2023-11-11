"use strict";
//Arrays
// let names = ['felix', 'toby', 'daniel','amara'];
// // let random = [1, 'tobi', true, 'hello'];
//  names.push('signi', 'favour','precious')
//  names.pop()   //removes from the last element in the array
//  names.shift() //removes from the first element in the array
//  names.unshift('kelly');//adds elements from the beginning of the array
//  console.log(names)

//const numbers = [1, 2,[3, 4, 5], 6];
// console.log(numbers[0])
//console.log(numbers[2][1]);
// const fruits = ['bananna', 'apples','oranges','blueberries'];
// fruits.shift()
// fruits.sort()
// fruits.push('kiwi')
// fruits.shift()
// fruits.reverse()
// console.log(fruits);

// const names = ['blessing', 'favour','temple','emmmanuel'];
// let i = 0
// for(i = 0; i = names.length; i++)
// // let i = 0
// // console.log(names.slice(-2));
// const namesCopy = names.slice();
// console.log(namesCopy);

// const names = ['blessing', 'favour', 'temple', 'emmanuel'];
// const newNames = ['daniel', 'kinsgley', 'jennifer']
// const namesTogether = names.concat(newNames);
// console.log(names.includes('favour'));
// console.log(namesTogether);

// const numbers = [7, 5, 9, 4, 2, 6, 1, 8, 3, 10];
// // numbers.sort();
// numbers.sort(function(a,b){return a - b});
// console.log(numbers);
//short circuting in javascript

//function that receives an array of numbers and the function should return the even numbers from the array given
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function getEvenNumbers(num) {
//   const evenNum = [];
//   let i = 0;
//   for (i = 0; i < num.length; i++) {
//     if (num[i] % 2 === 0) {
//       evenNum.push(num[i]);
//     }
//   }return evenNum;
// }
// console.log(getEvenNumbers(numbers))

// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// function getOddNumbers(num) {
//     const oddNum = [];
//     let i = 0;
//     for(i = 0; i < num.length; i++){
//         if (num[i] % 2 !== 0){
//             oddNum.push(num[i])
//         }
//     }return oddNum;
// }
// console.log(getOddNumbers(numbers))

// add one to the array
// const numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];
// function addOne(num) {
//   const newNumber = [];
//   let i = 0;
//   for (i; i < num.length; i++)
//   {
//     numbers[i] + 1;
//     newNumber.push(num[i] );

// }
//   return newNumber;
// }
// console.log(addOne(numbers));

// display the last value in the array
// const numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];
// function getLastValue(num) {
// console.log(num[num.length - 1]);
// }
// getLastValue(numbers);

// Create a list of six school subjects. Ask the user which of these
// subjects they don’t like. Delete the subject they have chosen from the
// list before you display the list again.
// const subjectList = ['maths','physics','literature', 'chemistry','agric'];
// const userInput = prompt('which of the subjects you dont like?');
// const subjectsIndex = subjectList.indexOf(userInput);
// subjectList.splice(subjectsIndex,1);
// console.log(subjectList);

//Ask the user for a temperature.
//Then ask them what unit it is, celsuis or fahrenheit,
// the temperature is in,
//the program should covert the temperature to the other unit

// const userQuestion = prompt("what is the temperature today?");
// const userAnswer = prompt("in celsius or fahrenheit?");
// if (userAnswer === "fahrenheit") {
//   console.log((9 / 5) * (userQuestion + 32));
// } else if (userAnswer === "celsius") {
//   console.log((9 / 5 )* (userQuestion - 32));
// }else {
//   console.log('try again')
// }

// Create an array which will store a list of integers. Generate five random numbers and store them in
// the array. Display the array (showing each item on a separate line).

// Create an array of five numbers between 10 and 100 which each have
// two decimal places. Ask the user to enter a whole number between 2 and 5.
// If they enter something outside of that range, display a suitable error message
// and ask them to try again until they enter a valid amount. Divide each of the
// numbers in the array by the number the user entered and display the answers
// shown to two decimal places.
// const userNumber = +prompt("enter a whole number between 2 and 5");
// const fiveNumbers = ["10.00", "20.00", "30.00", "40.00", "50.00"];
// if (userNumber < 2 && userNumber > 5) {
//   console.log("wrong number, try again");
// } else if (userNumber >= 2 && userNumber <= 5) {
//   let i = userNumber;
//   for(i = userNumber){
//   console.log(fiveNumbers/userNumber)
//   i++;}
// }

// Create an array which contains five numbers (two of which should be repeated). Display
// the whole array to the user. Ask the user to enter one of the numbers from the array and
// then display a message saying how many times that number appears in the list.
// const numbers = [3, 2, 4, 5, 6];

// Create two arrays (one containing three numbers that the user enters and one containing a set of five random
//   numbers). Join these two arrays together into one large array. Sort this large array and display
//   it so that each number appears on a separate line.import random

// const array1 = +prompt('enter an array of three numbers');
// const array2 = Math.floor(Math.random()*5);
// const newArray = array1.concat(array2)
// newArray.sort()
//   console.log(newArray)

// create an array of friends,ask the user to check a 'friend',
// check if the friend the user entered is in the array of friends
// if the friend is the array display'yes, you have a friend called[friend].
// if the friend is not in the array display 'sorry you don't have a [friend]
// const array = [
//   "toby",
//   "daniel",
//   "josiah",
//   "signi",
//   "felix",
//   "mike",
//   "gaius",
//   "floxy",
// ];
// const friend = prompt("check a friend");
//   if (array.includes(friend)){
//     console.log(`yes, you have a friend called ${friend}`);
//   } else{
//     console.log(`sorry, you don't have that friend`);
//   }

// const array = [
//     "toby",
//     "daniel",
//     "josiah",
//     "signi",
//     "felix",
//     "mike",
//     "gaius",
//     "floxy",
//   ];
//   const userFriend = prompt('check a friend');
//   for(let i = 0; i < array.length; i++){
//     if(userFriend === array[i]){
//       console.log(`yes, you have a friend ${userFriend}`);
//     }else {
//         console.log(`sorry you a don't have a friend called ${userFriend}`);
//       }
//   }
// if (userFriend === array){
//   let i = array;
//   for(i;i < array.length;i++);
//   console.log(`yes, you have a friend ${userFriend}`)
// }else if (userFriend !== array){
//   console.log(`sorry you a don't have a friend called ${userFriend}`)
// }

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borussia Dortmund",
//   players: [
//     [
//       "neuer",
//       "pavard",
//       "martinez",
//       "kimmich",
//       "koman",
//       "kane",
//       "sane",
//       "musiala",
//       "kim",
//       "davies",
//       "gorezka",
//     ],
//     [
//       "scholz",
//       "can",
//       "hummels",
//       "akanji",
//       "fernandez",
//       "gundogan",
//       "sancho",
//       "bellingham",
//       "mane",
//       "signi",
//       "floxy",
//     ],
//   ],
// };

// const players1 = game.players[0];
// const players2 = game["players"][1];
// console.log(game.players[0], game.players[1]);

// // const gk = [0];
// players1.slice();
// let rest = players1.slice(1)
// console.log(rest)

// const players = [
//   "neuer",
//   "pavard",
//   "martinez",
//   "kimmich",
//   "koman",
//   "kane",
//   "sane",
//   "musiala",
//   "kim",
//   "davies",
//   "gorezka",
// ];
// players.forEach((players,index) =>{
//   console.log(players,index)
// })

// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// numbers.forEach((numbers) => {
//   console.log(numbers + 1)
// })



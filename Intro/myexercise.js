"use strict";
// make a keyless car
// this car should only let you drive if you are over 18
// => make the car do the following
// const userAge = +prompt("what is your age");
// if (userAge < 18) {
//   console.log("sorry, you are too young to drive this car, powering off");
// } else if (userAge === 18) {
//   console.log("congratulations on your first year of driving,enjoy your ride");
// } else if (userAge > 18) {
//   console.log("powering on, enjoy your ride");
// }

// function checkDriverAge(userAge) {
//     // const userAge = +prompt('what is your age');
//   if (userAge < 18) {
//     console.log("sorry, you are too young to drive this car, powering off");
//   } else if (userAge === 18) {
//     console.log(
//       "congratulations on your first year of driving,enjoy your ride"
//     );
//   } else if (userAge > 18) {
//     console.log("powering on, enjoy your ride");
//   }
// }

// function checkDriverAge3(age) {
//     // const userAge = +prompt('what is your age');
//     const userAge = age
//   if (userAge < 18) {
//     console.log("sorry, you are too young to drive this car, powering off");
//   } else if (userAge === 18) {
//     console.log(
//       "congratulations on your first year of driving,enjoy your ride"
//     );
//   } else if (userAge > 18) [console.log("powering on, enjoy your ride")];
// }

// checkDriverAge3(21);

// create a form for username and password
//get the userinput value for both username and password
// const usernameInput = document.getElementsByClassName("username")[0];
// const passwordInput = document.getElementsByClassName("password")[0];
// const button = document.querySelector(".submit");
// console.log(button)
// //const submit = document.addEventListener('click');
// function getuserInput(event) {
//     event.preventDefault();
//   console.log(usernameInput.value);
// //   passwordInput.value;
//   console.log(passwordInput.value);
// }
// button.addEventListener("click", getuserInput);
// console.log(usernameInput.value,passwordInput.value)

// Write a program that allows the user to enter any number of test scores. The user
// indicates
// they are done by entering in a negative number. Print how many of the scores are A’s (90 or
// above). Also print out the average.
// const userScore = +prompt("enter any number of scores");
// if (userScore < 0){
//     console.log('done')
// }else if(userScore >= 90){
//     console.log(userScore.length)
// }else if(userScore < 90){
//     let average = 45
//     console.log(average)
// }

// The code below prints the numbers from 1 to 50. Rewrite the code using a while loop to
// accomplish the same thing.
// for (let i = 1; i < 51; i = i + 1){
// console.log(i)
// }

// let i = 1;
// while(i < 51){
//   console.log(i);
//    i = i + 1;
// }

// (a) Write a program that uses a while loop (not a for loop) to read through a string and
// print the characters of the string one-by-one on separate lines.
// (b) Modify the program above to print out every second character of the string.
// const string = "unsual";
// let i = 0;
// while (i < string.length) {
//   console.log(string[i]);
//   i++;
// }
// for ( i = 1;){
// console.log(string[i])}

// A good program will make sure that the data its users enter is valid. Write a program that
// asks the user for a weight and converts it from kilograms to pounds. Whenever the user
// enters a weight below 0, the program should tell them that their entry is invalid and then ask
// them again to enter a weight. [Hint: Use a while loop, not an if statement].
// const userWeight = +prompt("what is the weight?");
// const userInput = userWeight / 2.205;
// while(userWeight < 0){
//   console.log('invalid input, try again');
//   break;
// }
// while(userInput > 0){
//   console.log(userInput);
//   break;
// }

// Write a program that asks the user to enter a password. If the user enters the right
// password,
// the program should tell them they are logged in to the system. Otherwise, the program
// should ask them to reenter the password. The user should only get five tries to enter the
// password, after which point the program should tell them that they are kicked off of the
// System
// const userPassword = prompt("enter passsword");
// const passsword = "1234";
// if (userPassword === passsword) {
//   console.log("you are logged in to the system");
// } else if (userPassword !== passsword) {
//     const userPassword2 = prompt("reenter password")
//   let i = 0;
//   while (i = 4) {
// console.log('1 more guess')
// break;
//   }
//   if (userPassword2 !== passsword) {
//     while(i = 5)
//     console.log("you are kicked off of the system");
//   }
// }

// Modify the higher/lower program so that when there is only one guess left, it says 1 guess,
// not 1 guesses.
// const userGuess = prompt('guess any vegetable');
// let Guess = 'tomatoes';
// while(userGuess !== guess){
//     console.log('1 guess left')
// }

// Write a program that asks the user to enter a length in centimeters. If the user enters a
// negative length, the program should tell the user that the entry is invalid. Otherwise, the
// program should convert the length to inches and print out the result. There are 2.54
// centimeters in an inch.
// const userLength = +prompt('enter a length in centimeter');
// if (userLength < 0){
//   console.log("invalid entry");
// }else if (userLength > 0){
//   console.log(userLength*2.54)
// }

// Ask the user for a temperature. Then ask them what units, Celsius or Fahrenheit, the
// temperature is in. Your program should convert the temperature to the other unit. The
// conversions are F = 9/5 C + 32 and C = 5 /9 (F − 32).
// const userInput = +prompt('what is the temperature');
// const userUnit = prompt("in celsius or fahrenheit?");
// if (userUnit === "fahrenheit"){
//   console.log((5/9)*(userInput - 32))
// }else if (userInput === "celsius"){
//   console.log((9/5)*(userInput + 32));
// }

// . Ask the user to enter a temperature in Celsius. The program should print a message based on
// the temperature:
// • If the temperature is less than -273.15, print that the temperature is invalid because it is
// below absolute zero.
// • If it is exactly -273.15, print that the temperature is absolute 0.
// • If the temperature is between -273.15 and 0, print that the temperature is below freezing. •
// If it is 0, print that the temperature is at the freezing point.
// • If it is between 0 and 100, print that the temperature is in the normal range.
// • If it is 100, print that the temperature is at the boiling point.
// • If it is above 100, print that the temperature is above the boiling point.

// const userInput = +prompt("enter temperature in celsius")
// // console.log(userInput,"celsius");
// if (userInput < -273.15){
//   console.log("temperature is invalid because it is below absolute zero")
// }else if(userInput === -273.25){
//   console.log("temperature is absolutely zero")
// }else if(userInput > -273.25 && userInput < 0){
//   console.log("temperature is at freezing point")
// }else if (userInput === 0){
//   console.log("temperature is at freezing point")
// }else if(userInput >= 0 && userInput < 100){
//   console.log("temperature is in normal range");
// }else if (userInput === 100){
//   console.log("temperature is at boiling point");
// }else if(userInput > 100){
//   console.log("temperature is above boiling point")
// }

// . A store charges $12 per item if you buy less than 10 items. If you buy between 10 and 99
// items, the cost is $10 per item. If you buy 100 or more items, the cost is $7 per item. Write a
// program that asks the user how many items they are buying and prints the total cost.
// const items = +prompt("how many items are you buying?");
// const total = "$"
// if (items < 10){
//   console.log(total,items * 12);
// }else if (items > 10 && items < 100){
//   console.log(total,items * 10)
// }else if(items >= 100){
//   console.log(total,items * 7)
// }

// Write a program that asks the user for two numbers and prints Close if the numbers are
// within 001 of each other and Not close otherwise.
// const firstNumber = +prompt('enter first number');
// const secondNumber = +prompt('enter second number');
// const numDifference  = "001"
// if (firstNumber - secondNumber === numDifference){
//   console.log('close');
// }else if(firstNumber - secondNumber !== numDifference){
//   console.log('not close')
// }

// A year is a leap year if it is divisible by 4,
// except that years divisible by 100 are not leap years unless they are also divisible by 400. Write
// a program that asks the user for a year and prints out whether it is a leap year or not.
// const year = +prompt("enter a year");
// // const leapYear = (year % 4) === 0;
// if (year % 4 === 0) {
//   console.log("it is a leap year");
// } else if ((year % 100) === 0 && (year % 400) === 0) {
//   console.log('not a leap year');
// }

// Write a program that asks the user to enter a number and prints out all the divisors of that
// number. [Hint: the % operator is used to tell if a number is divisible by something]
// const divisors = []
// const number = +prompt("enter a number");
// let i = 1;
// for (i; i <= number; i++) {
//   if (number % i === 0) {
//     divisors.push(i)[i]
//   }
// }
// console.log("this are the divisors ", divisors)

// Generate a random number between 1 and 10. Ask the user to guess the number
// and print a message based on whether they get it right or not

// const randomNumber = Math.floor(Math.random()*10);
// const userGuess = +prompt('guess a number');
// if (userGuess === randomNumber){
//   console.log(randomNumber,"you guess is right")
// }else{
//   console.log(randomNumber,"your guess is wrong")
// }

// Write a program that asks the user how many credits they have taken.
//  If they have taken 23
// or less, print that the student is a freshman.
// If they have taken between 24 and 53, print that
// they are a sophomore. The range for juniors is 54 to 83,
//  and for seniors it is 84 and over. 4.5

// const userCredit = +prompt("how many credits have you taken?");
// if (userCredit <= 23){
//   console.log("you are a freshman");
// }else if(userCredit >= 24 && userCredit <= 53 ){
//   console.log("you are a sophomore");
// }else if (userCredit >= 54 && userCredit <= 84){
//   console.log("you are a junior");
// }else if(userCredit >= 84 && userCredit > 4.5){
//   console.log("you are a senior");
// }

// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 �
// const valueX = +prompt("how much is steven's bill")
// const tip = valueX * (15/100);
// if(valueX >= 50 && valueX <= 300){
//   console.log(tip)
//   console.log(`the bill was ${valueX}, the tip was ${tip}, the total value was ${valueX + tip}`)
// }else if(valueX  > 300){
//   const tip = valueX * (20/100);
//   console.log(tip)
// }
// valueX >= 50 && valueX <= 300
// // ? console.log(`the bill was ${valueX}, the tip was ${tip}, the total value was ${valueX + tip}`) : console.log(valueX * (20 /100))
// calcTip = function(bill){
//   return bill >= 50 && bill <= 300? bill * 0.15 : bill * 0.2
  
// }









// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK �

// const DolphinsScore = (96 + 108 + 89) / 3;
// const KoalasScore = (88 + 91 + 110) / 3;
// console.log(DolphinsScore,KoalasScore);

//  const DolphinsScore = (97 + 112 + 101)/3;
//  const KoalasScore = (109 + 95+ 123)/3;
//  console.log(DolphinsScore,KoalasScore);

//  const DolphinsScore = (97 + 112 + 101)/3;
//  const KoalasScore = (109 + 95 + 106)/3;
//  console.log(DolphinsScore,KoalasScore);
//    if (DolphinsScore > KoalasScore){
//       console.log("the winner is team Dolphins");
//     }else if (DolphinsScore < KoalasScore){
//       console.log("the winner is team koalas");
//     }else if (DolphinsScore === KoalasScore){
//       console.log("No one wins the trophy")
//     }
// if (DolphinsScore > KoalasScore && DolphinsScore >= 100){
//   console.log("team Dolphins is the winner");
// }else if(DolphinsScore < KoalasScore && KoalasScore >= 100){
//   console.log("team koalas is the winner")
// }else if (DolphinsScore === KoalasScore && DolphinsScore >= 100 && KoalasScore >= 100){
//   console.log("Both wins the trophy")
// }

// Write a multiplication game program for kids. The program should give the player ten
// randomly generated multiplication questions to do. After each, the program should tell them
// whether they got it right or wrong and what the correct answer is.
// Question 1: 3 x 4 = 12 Right!
// Question 2: 8 x 6 = 44 Wrong. The answer is 48.
// Question 10: 7 x 7 = 49 Right:
// const questions = {
//   question1: "3 * 4 = 12 right",
//   question2: "8 * 6 wrong, correect answer is 48",
//   question3: "7 * 7 = 49 right",
// };
// function generateRandomNumber() {
//   const userQuestion = prompt("choose one of the questions");
//   if (userQuestion === questions) {
//     console.log((Math.floor(Math.random) * userQuestion));
//   }
// }

// function generateRandomNumber (max) {
//   return Math.floor(Math.random()* max) + 1;
// }
// function askMultiplicationQuestion(questionNumber){
//   const num1 = generateRandomNumber(10);
//   const num2 = generateRandomNumber(10);
//   const correctAnswer = num1 * num2;
//   const PlayerAnswer = parseInt(prompt(`Question ${questionNumber}:${num1}:${num2} `))

//   if (PlayerAnswer === correctAnswer){
//     console.log(`Question ${questionNumber}: ${num1} * ${num2}`);
//     return 1;
//   }else {
//     console.log(`Quest ${questionNumber}: ${num1} * ${num2}`);
//     return 0
//   }
// }

// function runMultiplicationGame(){
//   let score = 0;
//   for (let i = i; i <= 10; i++){
//     score += askMultiplicationQuestion(i);
//   }
//   console.log(`Game over! Your score: ${score} out of 10`)
// }

// A jar of Halloween candy contains an unknown amount of candy and if you can guess
// exactly how much candy is in the bowl, then you win all the candy. You ask the person in charge
// the following: If the candy is divided evenly among 5 people, how many pieces would be left
// over? The answer is 2 pieces. You then ask about dividing the candy evenly among 6 people,
// and the amount left over is 3 pieces. Finally, you ask about dividing the candy evenly among 7
// people, and the amount left over is 2 pieces. By looking at the bowl, you can tell that there are
// less than 200 pieces. Write a program to determine how many pieces are in the bowl. 32
function findCandyAmount(){
  for (let candyCount = 1; candyCount < 200;candyCount++){
    if(candyCount % 5 === 2 && candyCount % 6 === 4 && candyCount % 7 === 2)
    return candyCount
  }
  return -1 
}
const candyAmount = findCandyAmount();
if (candyAmount !== -1){
  console.log("the candy bowl contains", candyAmount,"pieces of candy");
}else{
  console.log("no solution found within the specified limit")
}




// Write a program that asks the user for an hour between 1 and 12, asks them to enter am or
// pm, and asks them how many hours into the future they want to go. Print out what the hour
// will be that many hours into the future, printing am or pm as appropriate. An example is shown
// below. Enter hour: 8 am (1) or pm (2)? 1 How many hours ahead? 5 New hour: 1 pm
// const userHour = +prompt("choose an hour between 1 and 12");
// const amOrPm = prompt("Enter AM(1) OR PM(2)?");
// const futureHour = prompt("how many hours into the future do you want to go?");
// let newHour = userHour + futureHour;
// if (amOrPm === 2){
//   //if it's currently pm, add 12 to the newHour to convert it to 24
//   newHour += 12;
// }
// //determine the new am/pm based on the newhour
// let newAmOrPm = "am";
// if (newHour >= 12){
//   newAmOrPm = "pm";
// }

// //ensure the newhour is between 1 and 12 by taking the modulo 12,
// newHour = (newHour % 12) || 12;
// console.log(`New hour: ${newHour} ${newAmOrPm}`);

// Write a program that lets the user play Rock-Paper-Scissors against the computer. There
// should be five rounds, and after those five rounds, your program should print out who won and
// lost or that there is a tie

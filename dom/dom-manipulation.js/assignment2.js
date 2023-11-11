'use strict'
// // #001
// Ask for the user’s first name and display the output message Hello [First Name] . 
// const userFirstname= prompt('what is your first name?');
// console.log('hello' + ' ' + userFirstname);

// #002 
// Ask for the user’s first name and then ask for their surname and display the output message Hello [First Name] [Surname]. 
// const userFirstname = prompt('what is your first name?');
// const userSurname = prompt('what is your surname?');
// console.log('hello' + ' ' + userFirstname + ' ' + userSurname);

// #003
// // Write code that will display the joke “What do you call a bear with no teeth?” and on the next line display the answer “A gummy bear!” Try to 
// // create it using only one line of code.
// const joke = prompt('what do you call a bear with no teeth?');
// const answer = prompt('A gummy bear'){
//     console.log('answer');
// }

// #12.Ask for two numbers. If the first one is larger than the second, display the second number first and then the first number, otherwise show the first number first and then the second.
// let firstNumber = Number(prompt('first Number'));
// let secondNumber=Number(prompt('second Number'));
// if (firstNumber > secondNumber){
//     document.write(secondNumber, firstNumber);
//     // document.write(firstNumber);
// }
// else{
//     document.write(secondNumber);
//     // document.write(secomdNumber);

// }

// #13  
// Ask the user to enter a number that is under 20. If they enter a number that is 20 or more, display the message “Too high”, otherwise display 
// “Thank you”
// let userNumber=Number(prompt('enter a number under 20'));
// if (userNumber === 20 || userNumber > 20){
//     document.write('too high');
// }
// else {
//     document.write('thank you!');
// }

// #14 Ask the user to enter a number between 10 and 20 (inclusive). If they enter a number within this range, display the message “Thank you”, otherwise display the message “Incorrect answer”.
// let userNumber=(prompt('enter a number between 10 and 20'));
// if (userNumber >= 10 && userNumber <= 20){
//     document.write('thank you')
// } else {
//     document.write('incorrect answer')
// }


// #15 Ask the user to enter their favourite colour. If they enter “red”, “RED” or “Red” display the message “I like red too”, otherwise display the message “I don’t like [colour], I prefer red”.
// let favouriteColor =(prompt('what is your favourite color'));
// if (favouriteColor === "red" || favouriteColor === "RED" || favouriteColor === "Red"){
//     document.write('i like red too');
// } else{
//     document.write('i don\'t like{favouriteColor},i prefer red');
// }

// #16
// Ask the user if it is raining and convert their answer to lower case so it doesn’t matter what case they type it in. If they answer “yes”, 
// ask if it is windy. If they answer “yes” to this second question, display the answer “It is too windy for an umbrella”, otherwise 
// display the message “Take an umbrella”. If they did not answer yes to the first question, display the answer “Enjoy your day”.
// let isRaining = prompt('is it raining?');
// let answer = isRaining.toLowerCase();
// if (answer === 'yes') {
//     let isWindy = prompt('is it windy?');
//     if (isWindy === "yes") {
//         document.write('it is too windy for an umbrella')
//     }
// } else if (answer === 'no') {
//     document.write('no need for an umbrella');
// }
// else {
//     document.write('enjoy your day')
// }

// const name = prompt('What is your first name')
// document.write('the length of your name is '+  name.length)

// const firstName = prompt('enter your first name');
// const surName = prompt('enter your surname');
// const nameLength = firstName.length + surName.length;
// document.write('the length of your name is' +  firstName + " " + surName + " " + nameLength,);

// const firstName = prompt('enter your first name in lowercase');
// const surName = prompt('enter your surname in lowercase');
// const titleCase = firstName + surName;
// document.write('title case', + 'firstName&&surName');


//  let rhyme=prompt('write a nursery rhyme')
//   let stringlength=rhyme.length;
//   console.log(stringlength)
//  document.write(stringlength)
// let start=+prompt('start number')
// let end=+prompt('end number')
// let result= rhyme.slice(start,end)
// document.write(result)

// let word=prompt('type in any word');
// let result=word.toUpperCase();
// document.write(result)

// let firstName=prompt('enter first name');
// if (firstName.length<5){
//     let result=prompt('enter surname');
//     document.write((firstName+result).UpperCase())
// } else if (length.firstname=length=>5){
//     document.write(firstName.tolowercase)

//  }

// let userName=prompt('enter your name');
// let number=+prompt('enter a number');
// for(let i=0;i<number;i=i+1){
//     console.log(userName,i);
// }

// let userName=prompt('enter your name');
// let times=+prompt('how many times should it be printed?');
// for(let i=0;i<times;i++){
//     for(let j=0;j<userName.length;j++){
//         console.log(userName[j]);
//     }

// }

// let number=+prompt('enter a number between 1 and 12');
// for(let i=1;i<13;i++){
//     console.log(number*i);
// }

// let number=+prompt('enter a number below 50');
// for(let i=1;i<50;i++){
//     console.log(number+i);
// }

// let userName=prompt('enter your name');
// let userNumber=+prompt('enter a number');
// if (userNumber<10){
//     for(let x=0;x<userNumber;x++);
// console.log('userName');
// }
// else {
//     for(let y=0;y<3;y++);
//     console.log('too high');
// }

// let total=0;
// for(let x=0;x<5;x++){
//     const number=+prompt('enter a number');
//     const answer=prompt('do you want it included?');
//     if(answer.toLowerCase()==='yes'){
//         total=total + number;
//     }
//     console.log('total' + total)
// }

// const height= +prompt('how high do you want your giant letter A?');
// for(let row=0;row < height;row++);{
// let spaceFromleft='';
// let spaceInside=' ';
// lethorizontalstroke='';
// for(let i=row;i<height;I++){
//     spaceFromleft *='';
// }
// if (row===0){
//     console.log(spaceFromleft +'*');
// }else{
//     let step=2*row-1;
//     for(letj = 0;j < step;j++){
//         spaceInside=spaceInside+' ';
//     }
//             if(row===Math.floor(height/2)){
//             for(let k=0;k<step;k++){
//         horizontalstroke=horizontalstroke+'*'
//         console.log(spaceFromleft+'*'+horizontalstroke+'*');
//         }else {
//             console.log(spaceFromleft+'*'+spaceInside+'*')
//         }


//     }
// }


// const inviteeNumber= +prompt('how many people do you want at the party?');
// if (inviteeNumber < 10){
// const= prompt('enter names of invitee');
//     for(let j=0;j<10;j++)};
//     {console.log(inviteeName[j] + 'has been invited')
//     };
// else inviteeNumber > 10{
//     for(let k=0;k>10;k++)
//     console.log('too many people');
// }

//44
// Ask how many people the user wants to invite to a party. If they enter a number below 
// 10, ask for the names and after each name display “[name] has been invited”. If they 
// enter a number which is 10 or higher, display the message “Too many people”. 
// let numberOfinvitees = prompt('Enter number of guest');
// if (numberOfinvitees<=10){
//     for(let i=0; i < 10;i++){
//         const guests = prompt('enter names of guests');
//         console.log(guests + ' ' + 'has been invited');
//     }
// } else if (numberOfinvitees > 10){
//     console.log('too many guests!');
// }

// #41
// Ask the user to enter their name and a number. If the number is less than 10, then display their name that number of times; otherwise 
// display the message “Too high” three times.
// let userName=prompt("enter a name");
// let userNumber=+("enter a number");
// if (userNumber <= 10){
//     for(let i = 0; i < 10; i++);
//     console.log('userName + userNumber[i]');
// }

// #43
// Ask which direction the user wants to count (up or down). If they select up, then ask 
// them for the top number and then count from 1 to that number. If they select down, ask 
// them to enter a number below 20 and then count down from 20 to that number. If they 
// entered something other than up or down, display the message “I don’t understand”.
// let userDirection = prompt('Do you want to count up or down?');
// if (userDirection === 'up'){
//     let numberUp = +prompt('Enter a number between 10 and 20');
//     for (let j = 20; j >= 10 && j <= 20; j--){
//         console.log(j);
//     }
// }else {
//     console.log('i don\'t understand' );
// }

// #45
// Set the total to 0 to start with. While the total is 50 or less, ask 
// the user to input a number. Add that number to the total and 
// print the message “The total is… [total]”. Stop the loop when 
// the total is over 50
// let total = 0;
// while (total <= 50){
//     const number = +prompt('number');
//     total = total + number;
// }
// console.log('The total is', total);

//#46
// Ask the user to enter a number. Keep asking until they enter a value over 5 and then display the message “The last number you entered was a [number]” and stop the program. 
// while(true){
//     const userNumber= +prompt('Enter a number');
//  if(userNumber > 5 ){
//     console.log('the last number you entered was a ' + userNumber);
//     break;
//  }
// }

//#47
// Ask the user to enter a number and then enter another number. Add these two numbers together and then ask if they want to add 
// another number. If they enter “y", ask them to enter another number and keep adding numbers until they do not answer “y”. Once the 
// loop has stopped, display the total. 
// const userNumber = +prompt('enter a number');
// const anotherNumber = +prompt('enter another number');
// let total = userNumber + anotherNumber;
// let answer = prompt('do you want to add another number');
// if (answer === "y") {
//     while (true) {
//         const newNumber = +prompt('enter another number');
//         let answer = prompt('do you want to add another number');
//         total = total + newNumber;
//         if (answer !== 'y') break;
//     }
// }
// console.log(total)

// #49  
// Create a variable called compnum and set the value to 50. Ask the user to enter a number. While their guess 
// is not the same as the compnum value, tell them if their guess is too low or too high and ask them to have 
// another guess. If they enter the same value as compnum, display the message “Well done, you took [count] attempts”.
// const compnum = 50
// while (true) {
//     const userNumber = +prompt('enter a number');
//     if (userNumber < compnum) {
//         console.log('too low,try again ');
//     } else if (userNumber > compnum){
//         console.log('too high');
//     } else if (userNumber === compnum){
//         console.log('welldone'); break;
//     }
// }

//#48
// Ask for the name of somebody the user wants to invite to a party. After this, display the message “[name] has now been invited” and add 1 to the count. Then ask if 
// they want to invite somebody else. Keep repeating this until they no longer want to invite anyone else to the party and then display how many people they have 
// coming to the party. 
// let count = 0;
// const userName = prompt('what is the name of the person you want to invite?');
// console.log(userName + ' ' + 'has now been invited' + 1);
// count = count + 1
// while (true) {
//     const answer = prompt('Do you want to invite somebody else?');
//     if (answer === 'yes') {
//         const userName = prompt('what is the name of the person you want to invite?');
//         console.log(userName + 'has now been invited');
//         count= count + 1
//         else if (answer ==='no')
//     }
// }

//#50.Ask the user to enter a number between 10 and 20. If they enter a value under 10, display the message “Too low” and ask them to try again. If they enter a value 
// above 20, display the message “Too high” and ask them to try again. Keep repeating this until they enter a value that is between 10 and 20 and then display the 
// message “Thank you”.
// const userNumber = +prompt('enter a number between 10 and 20');
// if (userNumber < 10) {
//     console.log('too low, try again');
// } else if (userNumber > 20) {
//     console.log('too high, try again');
// } while (true) {
//     (userNumber >= 10 && userNumber <= 20); {
//         console.log('thank you'); break;
//     }
// }

//#51
// Using the song “10 green bottles”, display the lines “There are [num] green bottles 
// hanging on the wall, [num] green bottles hanging on the wall, and if 1 green bottle 
// should accidentally fall”. Then ask the question “how many green bottles will be 
// hanging on the wall?” If the user answers correctly, display the message “There will be 
// [num] green bottles hanging on the wall”. If they answer incorrectly, display the 
// message “No, try again” until they get it right. When the number of green bottles gets 
// down to 0, display the message “There are no more green bottles hanging on the wall”. 
// const userSong = '10 green bottles'
// const bottleNumber = 10
// while (true) {
//     console.log('there are [10] green bottles hanging on the wall');
//     let userSong = bottleNumber - 1
//     const question = prompt('how many green bottles will be hanging on the wall?')
//     if (bottleNumber = 9) {
//         console.log('there will be 9 green bottles hanging on the wall');
//     } else if (bottleNumber !== 9) {
//         console.log('No,try again');
//     } else if (bottleNumber === 0) {
//         console.log('there are no more green bottles hanging on the wall');
//     }
// }


//let userNumber = +prompt('enter a number');

// let firstName=prompt('enter your name?');
// for(let i=0;i<firstName.length;i++){
//     console.log(firstName[1]);
// }

// let firstName=prompt('enter your name?');
// for(let i=0;i<firstName.length;i++){
//     console.log(firstName[i]);
// }


// #17 Ask the user’s age. If they are 18 or over, display the message “You can vote”, if they are aged 17, display the message “You can learn to drive”, if they are 16, display 
// the message “You can buy a lottery ticket”, if they are under 16, display the message “You can go Trick or-Treating”.
// let userAge = +prompt('enter your age');
// if (userAge >= 18){
//     document.write('you can vote')
//        }else if (userAge === 17){
//         document.write('you can learn to drive')
//        } else if (userAge === 16){
//          document.write('you can go trick or treating')
// }

// #18. Ask the user to enter a number. If it is under 10, display the message “Too low”, if their number is between 10 and 20, display “Correct”, otherwise 
// display “Too high”. 
// let userNumber = +prompt('enter a number');
// if (userNumber < 10 ){
// document.write('too low')
// } else if (userNumber >= 10 && userNumber <=20){;
// document.write('correct')
// } else{
//     document.write('too high')
// }

// #19.Ask the user to enter 1, 2 or 3. If they enter a 1, display the message “Thank you”, if they enter a 2, display “Well done”, if they enter a 3, display “Correct”. If 
// they enter anything else, display “Error message”.
// let userNumber = +prompt('enter a number');
// if (userNumber === 1){
//     document.write('thank you')
// }else if (userNumber === 2){
//     document.write('well done')
// } else {
//     document.write('error message')
// }


















'use strict';
// function sayHello(){
//     console.log('hello');
// }
// sayHello()

// function (checkDriverAge)(age){
//     if (Number(age) < 18) {
//         return ('sorry, you are too young to drive this car, powering off');
//     } else if (Number(age) > 18) {
//         return ('powering on. Enjoy your ride');
//     } else if (Number(age) === 18) {
//         return ('congratulations on your first year of driving. Enjoy your ride');
//     }

// }
// function greet(name, lastName){
//     console.log('hello' + " " + name + ' ' + lastName);
// }
// greet('signi','ohia');

// 074
// Enter a list of ten colours.Ask the user for a starting
// number between 0 and 4 and an end number
// between 5 and 9. Display the list for those colours between the start and end
// numbers the user input.

const colors = ['blue','white','yellow','green','violet','orange','black','brown','purple','grey']
const startingNum = prompt('choose colors from 0 to 4')
const endNum = prompt('choose colors 5 to 9')
if (startingNum >= 0 && startingNum <= 4 && endNum >= 5 && endNum <= 9){
    const selectedColors = colors.slice(startingNum,endNum + 1)
    console.log(selectedColors)
}else {
    console.log("wrong input")
}

// 071  
// Create a list of two sports. Ask the user what their favourite sport is and add this to the end of the list. Sort the list and display it. 

// function create(list) {
//     create=prompt('what is your favourite sport?');
//     this(end.list)
//     of(list)
//     console.log(list + this);
// }
// list('football', basketball);

// let sportsList = 2
// let favouriteSport = prompt('what is your favourite sport?')
// let answer1 = this(favouriteSport)
// let answer2 = of(...sportsList){
//     console.log(sportsList);
// }

// 075  
// Create a list of four three - digit numbers.Display the list to the user, showing each item from the list on a separate line.Ask 
// the user to enter a three - digit number.If the number they have typed in matches one in the list, display the position of 
// that number in the list, otherwise display the message “That is not in the list”.

// let list = ('001', '002', '003', '004');
// let result = split('list');
// let userNumber = prompt('enter a three-digit number');
// if userNumber = in(list){
//     console.log(of(...list)in(list));
//     else if(userNumber = !in(list)){
//         console.log('that is not in the list');
//     }
        
    
// }

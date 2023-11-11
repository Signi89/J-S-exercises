"use strict";
//OBJECTS
// const student = {
//     name: 'josiah',
//     age: 12,
//     gender:'m',
//     isMarried:false,
//     address: 'Earth',
//     userInfo: function (){
//         return`${this.name} is ${this.age}years old`;
//     },
//     object: function (){
//       //  console.log(this)
//     }
//   }
//   console.log(student)
// console.log(student.object())
//   console.log(student.name);
//   console.log(student['name'])

// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;
// const markBMI = markWeight/markHeight ** 2
// const johnBMI = johnWeight/johnHeight ** 2;
// const markHigherBMI = markBMI > johnBMI
// // markHigherBMI = 82.8 < 94.3
// console.log(markBMI,johnBMI,markHigherBMI)

// create an object called person, the person should have (name,age, email,)
// using the method introduce and the method should display
// 'hi i am 'name', i am 'age'yrs amd my email is 'email'
// create another method send 'email
// const person = {
//     name: 'signi',
//     age: 34,
//     email: 'significanceohia@gmail.com',
//     personinfo(){
//         return`$hi i am ${this.name}, i am ${this.age} years old,my email is ${this.email}`;
//     },
//     // console.log (person)
//     sendEmail: function(receiver,message){
//         console.log(`Sending an email from ${this.email} to ${receiver}.${message}`)
// }}
// person.sendEmail('signi','go to pleasure park');

// const date = new Date();
// const year = date.getFullYear();
// console.log(year)
//   const person={
//     firstName:"emma",
//     lastName:"ola",
//     birthyear:2008,
//     job:"web developer",
//     hasDriverslicense:true,
//     calcAge:function(){
//         return year - this.birthyear;
//     },
//     getSummary: function(){
//         return`${this.firstName}${this.lastName} is  ${this.calcAge()} years old,and is a ${this.job} and he has ${this.hasDriverslicense ? "a":"no"} driver license`
//     }
//   }
//   person["friends"]=["signi","emma","toby","felix","daniel","miracle"]
//   console.log(person.getSummary())
//   console.log(person.birthyear)


const mark = {
  name: "miller mark",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    let bmi = mark.mass / mark.height ** 2;
    console.log(bmi)
  },
};
console.log(mark.calcBMI());
const john = {
    name: "john smith",
    mass:92,
    height: 1.95,
    calcBMI: function(){
        let johnBMI = john.mass / john.height ** 2;
        console.log(johnBMI)
    }
}
console.log(john.calcBMI())
const markBmi = mark.calcBMI();  // Math.round(mark.calcBMI());
const johnBMI = john.calcBMI(); // Math.round(john74.calcBMI());
if (johnBMI > markBmi){
    console.log("john bmi is higher")
}else{
    console.log("mark is higher")
}



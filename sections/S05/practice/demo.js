// ECMAScript - Language specification 
// browser vendors follow this specification

// Major shift from ES5 to ES6 (modern JS/ NextGen JS)
// only has var (not let or const) in ES5 

// var vs let
// var - Function & Global scope
// let - Block scope
// const - Block scope

///////// LET
console.log('\nLET');

let name = 'Sruthi'
// let name = 'Mora'    -- error redeclaring

function greet(){
  let age = 20;
  let name = 'Mora';  //shadowing variables - different scope
  console.log("Hi! "+name, age);
}

// console.log(name, age);  -- block scope
console.log(name);
greet();


///////// VAR
console.log('\nVAR');

var myName = 'Sruthi';
var myName = 'Mora';  //ok
console.log(myName);

if(myName == 'Mora'){
  var hobbies = ['Sports','Cooking'];
  let notHobbies = ['Nothing']
}

function greetMe(){
  var age = 20;
  var name = 'Mora';  //shadowing variables - different scope
  console.log("Hi! "+name, age, hobbies);
}
// console.log(name, age);  -- Function scope

console.log(name,hobbies);  //ok - hobbies is in Global scope (if)
// console.log(name,hobbies, notHobbies);  -- error - notHobbies block scope

greetMe();  



///////// HOISTING
console.log("\nHOISTING");

console.log(userName);  // underfined

var userName = 'msruthi';
//declares and initialises undefined as default value 

// let userName = 'msruthi';  - error
// declares but does not initialises any value - so gives error



///////// Strict mode
console.log("\nStrict Mode");
// 'use strict';  -- at beginning of script or inside fn to enable strict mode


newVar = 1234;  // undeclared - treats it as var
console.log(newVar);

var undefined = undefined;
console.log(undefined);

// let undefined = undefined;  - error


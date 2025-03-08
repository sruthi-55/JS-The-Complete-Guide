// class AgedPerson{
//   getAge(){
//     console.log("age is: 50");
//   }
// }

// class Person extends AgedPerson{
//   name = 'Sruthi';

//   constructor(){
//     super()
//     this.age = 22;
//   }

//   // unlike fields, methods of a class are added to __proto__, instead of method obj
//   // it is beacause values of fields may change from one object to another but methods mostly stay same for all objs. 
//   // It is a part of optimization that JS does. to create less objs 

//   // this is not true for fns that are created as property fns with 'function' keyword or property arrow fns
//   // which means it is created for every obj
//   greet(){
//     console.log("Hi! I am", this.name);
//     console.log("I am " + this.age + " years old");
//   }
// }

// BTS classes are converted to constructor fns


// Constructor fn
function Person(){
  // this = {};     // new keyword does this BTS
  this.name = 'Sruthi';
  this.age = 22;
  this.greet = function(){
    console.log("Hi! I am", this.name);
    console.log("I am " + this.age + " years old");
  }
  // return this;     // new keyword does this BTS
}
const p = new Person(); 
p.greet();


// // Function constructors allow overwriting prototype because they don’t enforce a strict prototype chain.
// Person.prototype = {
//   getAge(){
//     console.log(25);
//   }
// };


//// add new property instead of replacing property
Person.prototype.getAge = function(){
  console.log(25);
};


const p1 = new Person();
console.log(p1);
p1.getAge();
console.log(p1.__proto__);


console.log("");
// can also do it like this
const p2 = new p1.__proto__.constructor();
console.log(p2);


// this is added on function object not on obj
Person.describe = function(){
  console.log("Description of a person");
}
console.dir(p1);        // don't have describe fn
console.dir(Person);    // has describe fn


// the ultimate fallback obj for all the objs is Object.prototype

// All the array methods that we use are part of Array.prototype which are accessible on all array objs
// i.e Array obj doesn't know these methods but knows its prototype which holds these methods

// Same with Strings (String.prototype). Though strings are primitives they behave kind of like objs

// methods are added to prototypes 'cause they stay same for all objs based on the class
console.log(p1.__proto__ === p2.__proto__);   // true


// There are quite some differnces b/w constructor fns and classes 
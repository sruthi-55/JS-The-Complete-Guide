// JS uses prototypical inheritance
// the class syntax is just syntactic sugar for constructor fns and for working with prototypes
// Constructor fns and prototypes power JS Objects

// Sharing functionality to all sub classes or objs based on the class 
// JS implements this using prototypes

// every constructor fn has a special prototype property which is not added to obj based on it 
// (not a part of fn body but it is a property of fn obj) We can edit it
// constructor prototype is automatically assigned to instance upon creation


// every obj has prototype obj. It is how JS shares code
// Prototype obj == Fallback obj

// if JS can't find a property or method on an obj it starts looking at prototype obj
// if it is not found even then, it will look at prototype of prototype and all the way up to end of the chain (Object.prototype not Object)
// If even after searching all that it didn't find, it will give undefined for a propety and error for the method

// Prototype is like a connected obj to which we can reach out, and ask for properties and methods which don't exists on current obj


class Person{
  name = 'Sruthi';
}

const p = new Person();
console.log(p.toString());    // method from Object class
// console.log(p.toStr());    // no method found in entire chain

console.log(p);     // observe the Prototype obj that's logged here
console.log(p.__proto__);
// toString() is found in Prototype obj

console.log("");


console.dir(Person);
console.dir(Person.__proto__);
console.dir(Person.prototype);
// can see 2 types of prototype objs. One of them is present on every obj in JS which shows connected prototypes
// Another one exists only on fn objs - anything that is set here will be assigned as a prototype to any objs that is based on the constructor fn


// ES6 classes enforce a fixed prototype structure, so overwriting Person.prototype breaks inheritance.
// so instead we do this
Person.prototype.getAge = function(){
    console.log(25);
};
console.log(p.__proto__);
p.getAge();

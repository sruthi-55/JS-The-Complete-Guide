// Objects reflect real-world entities
// made up of properties and methods
// allows to group related data and split code into logical pieces

// Primitive values
// Numbers, Strings, Booleans, null, undefined, Symbol

// Reference values (= Objects)
// Arrays, DOM nodes, {...} - everything else

let randomKey = 'salary';

const person = {
  'first name': 'Sruthi',
  age: 22,
  hobbies: ['Sports','Cooking'],
  greet: function(){
    console.log("Hi! I am",this['first name']);
  },
  5: 'Hello',       // must not be -ve number
  [randomKey]: 100    // dynamic property
};
// behind the scenes all key names are coerced to strings

person.greet();
console.log(person['first name']);
console.log(person[5]);   // no need to enter as string
console.log(person[randomKey]);     // accessing dynamic properties


console.log(person.isAdmin);  // undefined
person.isAdmin = true;      // addind prop after creating obj

delete person.age;        // deleting prop after creating obj
console.log(person);


// all are same
// list.style.backgroundColor = 'blue';
// list.style['backgroundColor'] = 'blue';
// list.style['background-color'] = 'blue';
console.log('');


// make copy of object
const anotherPerson = {
  ...person     // no space between - like ... person
};

person.age = 100;
person.hobbies.push('Sleeping');

console.log(person.age,anotherPerson.age);    // doesn't change in anotherPerson
console.log(person.hobbies,anotherPerson.hobbies);    // changes in anotherPerson


// to make a real copy of nested arrays
const yetAnotherPerson = {
  ...person,
  hobbies: [...person.hobbies]
};
person.hobbies.push('Reading');
console.log(person.hobbies,yetAnotherPerson.hobbies);   // doesn't change in yetAnotherPerson
console.log('');


// Object.assign(t,s1,s2,..) - copies properties from multiple sources and creates desired object
const lastPerson = Object.assign({},person);
console.log(lastPerson);
class Person{
  name = 'Sruthi';
}

const p = new Person();
console.log(typeof p);    // object

console.log(p instanceof Person);    // true
console.log(p instanceof Object);    // true



// this is
const obj = new Object();   // a little bit slower
// same as
const obj1 = {};    // this is preferred


console.log(Object.getOwnPropertyDescriptors(p));
Object.defineProperty(p,'name',{
  configurable: true,
  enumerable: true,
  value: p.name,
  writable: false
});

console.log(p.name);
p.name = 'Mora';    // it didn't throw an error. it just didn't accept the change as it is not writable
console.log(p.name);  

// if we set configurable to false we cannot delete the property
// if we set enumerable to false, in loops it will be skipped
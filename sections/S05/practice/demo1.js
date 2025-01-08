// Primitives - Strings, Numbers, Booleans, null, undefined, Symbol
// stored in memory (normally on Stack) - could be stored on heap as well if it's a long running operation
// variables store value itself
// copying a variables copies the value

// Strings and Numbers are not object but they are dynamically transformed to pseudo objects when we do s.length


// Reference Values - other objects (more expensive to create)
// stored in memory (Heap)
// variables store pointer (address) to memory location
// copying a variables copies the pointer/reference

let person = {age: 20};
let anotherPerson = person;

person.age = 33;
console.log(anotherPerson.age);   //33
//change in person object changed anotherPerson

let yetAnotherPerson = {...person};   //spread operator - real copy

person.age = 45
console.log(yetAnotherPerson.age);  //33
//change in person object didn't effect yetAnotherPerson


const p1 = {age:98};
const p2 = {age:98};
console.log(p1===p2);   //false


const hobbies = ['Sports'];
hobbies.push('Cooking');  //ok
// hobbies = ['Cokking'];    //gives error
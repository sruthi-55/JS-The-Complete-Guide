const names = ['one'];
let newLen = names.push('two',3,4,);   // adds elements at the end and returns new length
console.log(names);

let newLen1 = names.unshift(-2,-1,'zero');    // adds elements at the beginning and returns new length
console.log(names);



let poppedVal = names.pop();   // removes last element and returns the element
console.log(poppedVal, names);

names.shift();    // removes element from begenning
console.log(names);


names[10] = 'ten';    // inserts at non-existent index and remaining are empty slots
console.log(names);   
console.log(names[9]);    // empty slot - undefined



//###### splice(sI,dC,e1,e2..)
// sInd, no. of elements to delete, rest.. elements to insert in that place
const removedEles = names.splice(0,1,'- 2', '- one');    
console.log(names, removedEles);  
names.splice(0,2);    // deletes 2 elements from ind 0
console.log(names);
names.splice(-1,1);   // deletes last element
console.log(names);
names.splice(5);    // deletes all from ind
console.log(names);
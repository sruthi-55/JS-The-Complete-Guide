const arr = [1,2,1,4,5,3,2];
console.log(arr);

console.log(arr.indexOf(1));    // returns ind of first match
console.log(arr.lastIndexOf(1));  // searches from right - first match
console.log(arr.includes(5));   // returns true

// these works fine for primitive values
// But won't work for reference values
const persons = [{name:'Sruthi'},{name:'Mora'}];
console.log(persons.indexOf({name:'Sruthi'}));    // returns -1

// can use find in this case
// returns the same obj that is found in the array not copy
const sruthi = persons.find((person,idx,persons)=>{
  return person.name === 'Sruthi';
});
console.log(sruthi);
sruthi.name = 'Mora';
console.log(persons);

// returns ind of the match
const sruthiInd = persons.findIndex((person,idx,persons)=>{
  return person.name === 'Mora';
});
console.log(sruthiInd);
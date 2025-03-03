// Maps are similar to Objects. They both store key value pairs
// In case of objects key must be either number, string or a symbol
// But map can hold any item as key

// In objects, order of keys is not guaranteed 
// In maps, order is guaranteed



//###### Sets
const ids = new Set(['Hi','Hello','Sruthi',]);    // should give new keyword
console.log(ids);
// console.log(ids[0]);    // undefined - can't access by index

console.log(ids.has(5));
console.log(ids.delete(5));   // returns false if ele not in set


for(const entry of ids.entries()){
  console.log(entry);   // array of two ele - values twice like ['Hi','Hi'] for each entry in set
  // console.log(entry[0]);   // if you want to display value only once
}

for(const val of ids.values()){
  console.log(val);
}



//###### Maps
let person1 = {name:'Sruthi'};
const person2 = {name:'Mora'};

const personMap = new Map([[person1,[{date:'yesterday',price:55}]]]);
console.log(personMap);
console.log(personMap.get(person1));

personMap.set({name:'Sru'},12);   // if not present, adds
console.log(personMap);
console.log(personMap.get({name:'Sru'}));   // undefined as objects are different

// instead do
const newPerson = {name: 'Mora Sruthi'};
personMap.set(newPerson,['This is my full name']);    
console.log(personMap.get(newPerson));
console.log("");


// Printing contents
for(const [key,value] of personMap.entries()){
  console.log(key,":",value);
}
console.log("");
for(const key of personMap.keys()){
  console.log(key);
}
console.log("");
for(const val of personMap.values()){
  console.log(val);
}

personMap.clear();
console.log(personMap.size);  // property



console.log("");
//###### WeakSet
// can only store objects
// so that they can release them to garbage collection, when objects are no longer required
const weakPersons = new WeakSet();   

let demoPerson = {...person1};    // make a new copy of obj
weakPersons.add(demoPerson);
// only has add(), has(), delete(), clear() - less available fns than set

demoPerson = null;    // will eventually be garbage collected
console.log(weakPersons);

// If some objects in weakset are cleared (or assigned null) 
// those are garbage collected and also removed from weakset 

// In normal set objects are kept in set even if variables are cleared
// set still holds a reference to it


console.log("");
//###### WeakMap
const weakPersonsMap = new WeakMap();   
demoPerson = {...person1}; 
weakPersonsMap.set(demoPerson,'Extra info!');

demoPerson = null;   // will eventually be garbage collected
console.log(weakPersonsMap);
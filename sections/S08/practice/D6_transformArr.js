const prices = [13.4, 6.5, 345, 50.5];
const tax = 0.19;
const adjustedPrices = [];

// for loop
for (const price of prices) {
  adjustedPrices.push(price * (1 + tax));
}
console.log(adjustedPrices);


// for each loop
// can also use indexes now
const adjustedPriceObjs = [];
prices.forEach((price, idx, prices) => {
  const priceObj = { index: idx, price: price * (1 + tax) };
  adjustedPriceObjs.push(priceObj);
});
console.log(adjustedPriceObjs);
console.log("");


// map
// take an array and runs a fn on every item of the arr
// returns new ele for every ele of arr (possibly a transformed ele)
const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, price: price * (1 + tax) };
  return priceObj;
});
console.log(prices);
console.log(taxAdjustedPrices);
console.log("");



// sort()
// by default converts eles to strings and then sorts (10<2)
// can specify custom sort by providing a comparator fn
const sortedArr = prices.sort();
console.log(sortedArr);   // not expected result

const actualSortedArr = prices.sort((a,b)=>{
  if(a>b) return 1;
  else if(a==b) return 0;
  else  return -1;
});
console.log(actualSortedArr);
console.log(actualSortedArr.reverse());   // reverse
console.log("");




// filter()
// returns a brand new arr
const filteredArr = prices.filter((ele,idx,prices)=>{
  return ele>20;
});
console.log(filteredArr);



// reduce(fn,iniVal)
// to reduce an array to a single value
let sum = prices.reduce((prevVal, curArrVal, curInd, prices)=>{
  return prevVal + curArrVal;
},0);   // initial value
console.log(sum);




// split(sep)
const data = 'new york;100;85.6';
const transformedData = data.split(';');
// const transformedData = data.split(';',1);
console.log(transformedData);


// join(sep)
const myNameArr = ['Sruthi','Mora'];
const myName = myNameArr.join(", ");  // default sep is ','
console.log(myName);




// SPREAD operator (...) - pulls all elements of array as e1,e2,e3..
// for copying array 
const myShortNameArr = [...myNameArr];
myNameArr.push('Ms.');
console.log(myNameArr,myShortNameArr);

console.log(Math.min(...prices));   // can't use prices arr - should use spread operator
console.log("");

// #NOTE:
const persons = [{name: 'A'},{name:'B'},{name:'C'}];
const copiedPersons = [...persons];   // addresses are copied
persons.push({name:'Z'});
console.log(persons,copiedPersons);

persons[1].name = 'O';
console.log(persons,copiedPersons);   // changes for both because value at that address is modified

//### if we want objects also to be copied 
const copiedPersonsFull = persons.map(person=>({name:person.name}));  // map returns a new arr
persons[0].name = 'oo';   
// changes only for persons because both reference to two diff memory locations as they are diff objects
console.log(persons,copiedPersonsFull);




// REST operator
// splitting an array into variables OR
// assigining values to variables from array
const fullName = ['Sruthi','Mora','Ms',40];
let [fname, lname, ...otherInfo] = fullName;    // rest operator
console.log(lname,"-",fname);
console.log(otherInfo);   // array that holds remaining data



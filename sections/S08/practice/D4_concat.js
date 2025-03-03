const arr = [1,2,3,4,5,];

// returns a new copy of the arr after adding elements at the end
// doesn't not add these as nested elements, adds as individual elements
const newArr = arr.concat([1,1,1,1,],[2,2,2,2,]);   
console.log(newArr);

console.log(newArr == arr);   
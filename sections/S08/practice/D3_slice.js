const arr = [-2.5,'four',3,'-1',0,'Hello'];
console.log(arr.slice());   // slice returns a new copy of array

const copyArr = arr.slice();
arr[0] = 10000;   // doesn't not effect copyArr

console.log(arr,copyArr);

console.log(arr.slice(0,2));   // returns elements from ind 0, 1
console.log(arr.slice(0));      // returns entire arr

console.log(arr.slice(-3,1));    // invalid startInd and endInd - so return []
console.log(arr.slice(-1,-2));    // again invalid


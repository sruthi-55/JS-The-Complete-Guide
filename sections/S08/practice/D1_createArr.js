// Array like objects (have length property and can use indexes to access them)
// ex: NodeList, String

//###### Different ways of creating arrays
const numbers = [1,'2',3,];   //recommended way
console.log(numbers);


const arr = new Array(4,5);
console.log(arr);

const nums = new Array(5);  //empty arr of len 5
console.log(nums);
const nums1 = Array(1,3); //same with or without new keyword


const moreNums = Array.of(1,2,3,4,5,6,7,);
console.log(moreNums);


const anotherArr = Array.from("Sruthi!");   // converts array-like objects to arr
console.log(anotherArr);
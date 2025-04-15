// Pure fns - those which when given same arguments (input) produces same results (output)
// and it does not trigger any side effects - i.e doesn't change anything that is outside of the fn

// Pure function
function add(num1,num2){
  return num1+num2;
}
console.log(add(5,6));    // 11


// Impure function
function addrandom(num){
  return num+Math.random();
}
console.log(addrandom(10));     // diff o/p everytime

// Another impure function
let totSum = 0;
function addNums(n1,n2){
  const sum = n1 + n2;
  totSum += sum;      // changes something outside of the fn
  return sum;
}
console.log(addNums(3,4));    // 7

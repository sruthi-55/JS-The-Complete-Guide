// Regular expressions help you to search for patterns in strings

// 2 ways to create reg exps
const regex = new RegExp('Hello');
const r1 = /^\S+@\S+\.\S+$/;      // to validate email id pattern


console.log(regex.test('Hi Sruthi! Hello'));    // true
console.log(r1.test('test@test.com'));    // true


const r2 = /'(h|H)ello'/;
const r3 = /.ello/;     // don't care about strating letter
// . matches a single char


console.log(r3.exec('Hi! Sello'));    // returns an arr with more info like where pattern is matched in str

console.log('Hi! Sello'.match(r3));     // same - returns an arr
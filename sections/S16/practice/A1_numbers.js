// In JS every number is a float
// Numbers are stored as 64-bit floating points


console.log(Number.MAX_SAFE_INTEGER);   // biggest possible number = (2^53) - 1
console.log(Number.MIN_SAFE_INTEGER);

console.log(Number.MAX_VALUE);
console.log(Number.POSITIVE_INFINITY, Infinity);
console.log(Number.NEGATIVE_INFINITY, -Infinity);
console.log(1/0);     // Infinity
console.log(Number.isFinite(1/0));   // false


console.log("");
console.log(0.2 + 0.4);           // 0.6000000000000001
console.log(0.2 + 0.4 === 0.6)    // false
// JS works in binary system
// converts numbers to binary, performs operation and converts to decimal


console.log((5).toString(2));     // in binary

console.log((1/5).toString(2));     // 0.2 = 0.001100110011001100110011001100110011001100110011001101
console.log((0.2).toString(2));


console.log(0.2.toFixed(20));     // to represent as number with 20 decimal places
console.log((0.2+0.4).toFixed(2));    // 0.60


// The only workaround to avoid these imperfections is to use integers only
console.log("");




console.log(90071992547409919007199254740991n);    // BigInt
// no floating points for bigint
console.log(10n-4n);  // 6n
// console.log(10n-4);    // error
console.log(parseInt(10n)-4);   // 6
console.log(10n - BigInt(4));   // 6n
console.log(5n/2n);   // 2n - 'cause bigints can't be floats - so it trims
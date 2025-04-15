// Math.random()    // Returns a number between 0 and 1


//##### Generate random num b/w min and max value
function getRandomInBetween(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomInBetween(5,10));
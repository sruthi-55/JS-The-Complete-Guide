// When JS reads our scripts, it basically goes around and finds all the fn declarations, 
// registers them and then starts executing the script

// Fuctions are 'Code on Demand'

// Functions can be called directly (add parenthesis after fn name) 
// or indirectly (by attaching it to add event listener)


sayHello();   // JS hoists fn declarations to top so no error
function sayHello(name){}   // name is a parameter
const yourName = 'Sruthi';
sayHello(yourName);   // yourName is an argument


console.log(typeof sayHello);   // function
console.dir(sayHello)   //returns obj with function details
// functions are objects



// console.log(sayH());    //not initialized - so error
// storing functions in variables - Function Expression
const sayH = function sayHi(){
  console.log("Hi!!!");
};
// console.log(sayH);
console.log(sayH());



const startBtn = document.getElementById('start-game-btn');
startBtn.addEventListener('click',function(){
  console.log("Greetings!!!");
}());   //valid syntax - starts execution as soon as it reaches here



// can set default argument value in fn declaration
// if undefined is passed as fn argument, default arg value is taken



// REST operator - take all the arguments and builds an array
// callback fn
const sumUp = (resultHandler, ...numbers) => {
  const validateNum = (number) => {   // fn inside a fn
    return isNaN(number) ? 0 : number;
  }
  
  let sum = 0;
  for(const num of numbers){
    sum += validateNum(num);
  }
  resultHandler(sum);
};

const showResult = (result) => {
  alert("The result of the operation is: "+result);
};
sumUp(showResult,1,-2,'ad',-23,0,-4);
sumUp(showResult,1,2,3);


const subtractAll = function(){
  let sum = 0;
  for(const num of arguments){  // special variable - only with functions with function keyword - Don't use :)
    sum -= num;
  }
  return sum;
};
console.log(subtractAll(1,-2,132,-23,0,-4));
console.log(subtractAll(1,2,3));


const combine = function(resultHandler,op, ...numbers){
  let res = 0;
  for(const num of numbers){
    if(op==='ADD')  res += num;
    else  res -= num;
  }
  resultHandler(res);
}
const showOpResult = (mssg, res) => {
  console.log(mssg+" "+res);
}

// pre-configure arguments of fn using bind()
combine(showOpResult.bind(this, "The result after adding is: "),'ADD',1,2,3);
combine(showOpResult.bind(this, "The result after subtracting is: "),'SUBTRACT',1,2,3);
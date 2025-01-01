const defRes = 0;
let curRes = defRes;

function getUserInput(){
  return parseInt(userInput.value);
}

function createWriteLog(operator, resBeforeCal, num){
  let calcDesc = `${resBeforeCal} ${operator} ${num}`;
  outputResult(curRes,calcDesc);
}

function add() {
  const enteredNum = getUserInput();
  const iniRes = curRes;
  curRes = curRes + enteredNum;  //Number() or +userInput
  createWriteLog('+',iniRes,enteredNum);
}

function subtract(){
  const enteredNum = getUserInput();
  const iniRes = curRes;
  curRes = curRes - enteredNum;  
  createWriteLog('-',iniRes,enteredNum);
}

function multiply(){
  const enteredNum = getUserInput();
  const iniRes = curRes;
  curRes = curRes * enteredNum; 
  createWriteLog('*',iniRes,enteredNum); 
}

function divide(){
  const enteredNum = getUserInput();
  const iniRes = curRes;
  curRes = curRes / enteredNum;
  createWriteLog('/',iniRes,enteredNum);
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);

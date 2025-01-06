const defRes = 0;
let curRes = defRes;
let logEntries = [];

function getUserInput(){
  return parseInt(userInput.value);
}

function createWriteLog(operator, resBeforeCal, num){
  const calcDesc = `${resBeforeCal} ${operator} ${num}`;
  outputResult(curRes,calcDesc);
}

function writeToLog(operation, prevRes, num, res){
  const logEntry = {
    operation: operation,
    prevResult: prevRes,
    number: num,
    result: res
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNum = getUserInput();
  const iniRes = curRes;
  curRes += enteredNum;  //Number() or +userInput
  createWriteLog('+',iniRes,enteredNum);
  writeToLog('ADD',iniRes,enteredNum,curRes);
}

function subtract(){
  const enteredNum = getUserInput();
  const iniRes = curRes;
  curRes -= enteredNum;  
  createWriteLog('-',iniRes,enteredNum);
  writeToLog('SUBTRACT',iniRes,enteredNum,curRes);
}

function multiply(){
  const enteredNum = getUserInput();
  const iniRes = curRes;
  curRes *= enteredNum; 
  createWriteLog('*',iniRes,enteredNum); 
  writeToLog('MULTIPLY',iniRes,enteredNum,curRes);
}

function divide(){
  const enteredNum = getUserInput();
  const iniRes = curRes;
  curRes /= enteredNum;
  createWriteLog('/',iniRes,enteredNum);
  writeToLog('DIVIDE',iniRes,enteredNum,curRes);
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);

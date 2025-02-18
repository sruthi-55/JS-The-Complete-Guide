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

function calculate(operation){
  const enteredNum = getUserInput();
  const iniRes = curRes;
  let op;
  if(operation === 'ADD'){
    op = '+'; 
    curRes += enteredNum;
  }
  else if(operation === 'SUBTRACT'){
    op = '-';
    curRes -= enteredNum;
  }
  else if(operation === 'MULTIPLY'){
    op = '*';
    curRes *= enteredNum;
  }
  else{
    op = '/';
    curRes /= enteredNum;
  }
  createWriteLog(op,iniRes,enteredNum);
  writeToLog(operation,iniRes,enteredNum,curRes);
}
addBtn.addEventListener('click',calculate.bind(this, 'ADD'));
subtractBtn.addEventListener('click',calculate.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);

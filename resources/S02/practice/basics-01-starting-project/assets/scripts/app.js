const defRes = 0;
let curRes = defRes;

curRes += 10 * 3;
let calDesc = `(${defRes}+10*3)`;
outputResult(curRes, calDesc);


function add(num1, num2) {
  return num1 + num2;
}
alert("Addition result is: "+add(2,3));
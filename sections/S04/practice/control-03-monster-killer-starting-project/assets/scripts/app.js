const MAX_ATTACK_VALUE = 10;
const MAX_STRONG_ATTACK_VALUE = 17;
const MAX_MONSTER_ATTACK_VALUE = 14; 
const HEAL_VALUE = 20;

const enteredVal = +prompt("Maximum life for you and monster?", '100');

let chosenMaxLife = enteredVal;
let currPlayerHealth = chosenMaxLife;
let currMonsterHealth = chosenMaxLife;
let hasBonusLife = true;
let battleLog = [];

if(isNaN(chosenMaxLife) || chosenMaxLife<=0)  chosenMaxLife = 100;

adjustHealthBars(chosenMaxLife);

function writeToLog(ev,val,currPlayerHealth,currMonsterHealth){
  let logEntry = {
    event: ev,
    value: val,
    playerHealth: currPlayerHealth,
    monsterHealth: currMonsterHealth
  };

  switch(ev){
    case 'PLAYER_ATTACK': 
      logEntry.target = 'MONSTER';  break;
    case 'PLAYER_STRONG_ATTACK': 
      logEntry.target = 'MONSTER';  break;
    case 'MONSTER_ATTACK':
      logEntry.target = 'PLAYER'; break;
    case 'PLAYER_HEAL':
      logEntry.target = 'PLAYER'; break;
    default:  logEntry={};
  }
  
  battleLog.push(logEntry);
}

function reset(){
  currPlayerHealth = chosenMaxLife;
  currMonsterHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound(){
  const iniPlayerHealth = currPlayerHealth;
  const playerDamage = dealPlayerDamage(MAX_MONSTER_ATTACK_VALUE);
  currPlayerHealth -= playerDamage;

  writeToLog('MONSTER_ATTACK',playerDamage,currPlayerHealth,currMonsterHealth);
  
  if(currPlayerHealth<=0 && hasBonusLife){
    hasBonusLife = false;
    removeBonusLife();
    currPlayerHealth = iniPlayerHealth;
    alert("You would have been dead but the bonus life saved you!");
    setPlayerHealth(currPlayerHealth);
  }

  if(currMonsterHealth<=0 && currPlayerHealth<=0){
    alert("Draw!"); 
    writeToLog('GAME_OVER','DRAW',currPlayerHealth,currMonsterHealth);
  }   
  else if(currMonsterHealth<=0){
    alert("You won!");
    writeToLog('GAME_OVER','PLAYER_WON',currPlayerHealth,currMonsterHealth);
  }
  else  if(currPlayerHealth<=0){
    alert("You lost!");
    writeToLog('GAME_OVER','MONSTER_WON',currPlayerHealth,currMonsterHealth);
  } 
  
  if(currMonsterHealth<=0 || currPlayerHealth<=0) reset();
}

function attackMonster(type){
  const maxDamage = type==='ATTACK' ? MAX_ATTACK_VALUE : MAX_STRONG_ATTACK_VALUE;
  const logEvent = type==='ATTACK' ? 'PLAYER_ATTACK': 'MONSTER_ATTACK';
  
  const damage = dealMonsterDamage(maxDamage);
  currMonsterHealth -= damage;
  
  writeToLog(logEvent,damage,currPlayerHealth,currMonsterHealth);
  endRound();
}

function attackHandler(){
  attackMonster('ATTACK');
}

function strongAttackHandler(){
  attackMonster('STRONG_ATTACK');
}

function healPlayerHandler(){
  let healVal;
  if(currPlayerHealth + HEAL_VALUE >= chosenMaxLife){
    alert("You can't heal to more than your max health!");
    healVal = chosenMaxLife-currPlayerHealth;
  }
  else{
    healVal = HEAL_VALUE;
  }
  increasePlayerHealth(healVal);
  currPlayerHealth += healVal;

  writeToLog('PLAYER_HEAL',healVal,currPlayerHealth,currMonsterHealth);
  endRound();
}

function printLogHandler(){
  for(const logEntry of battleLog)
    console.log(logEntry);
}

attackBtn.addEventListener('click',attackHandler);
strongAttackBtn.addEventListener('click',strongAttackHandler);
healBtn.addEventListener('click',healPlayerHandler);
logBtn.addEventListener('click',printLogHandler);
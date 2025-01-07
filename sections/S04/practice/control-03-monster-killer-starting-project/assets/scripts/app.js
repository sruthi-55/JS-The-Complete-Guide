const MAX_ATTACK_VALUE = 10;
const MAX_STRONG_ATTACK_VALUE = 17;
const MAX_MONSTER_ATTACK_VALUE = 14; 
const HEAL_VALUE = 20;

let chosenMaxLife = 100;
let currPlayerHealth = chosenMaxLife;
let currMonsterHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function endRound(){
  const playerDamage = dealPlayerDamage(MAX_MONSTER_ATTACK_VALUE);
  currPlayerHealth -= playerDamage;

  if(currMonsterHealth<=0 && currPlayerHealth<=0)  alert("Draw!");  
  else if(currMonsterHealth<=0) alert("You won!");
  else  if(currPlayerHealth<=0) alert("You lost!");
}

function attackMonster(type){
  let maxDamage;
  if(type==='ATTACK')  maxDamage = MAX_ATTACK_VALUE;
  else if(type==='STRONG_ATTACK')  maxDamage = MAX_STRONG_ATTACK_VALUE;
  
  const damage = dealMonsterDamage(maxDamage);
  currMonsterHealth -= damage;

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
  endRound();
}

attackBtn.addEventListener('click',attackHandler);
strongAttackBtn.addEventListener('click',strongAttackHandler);
healBtn.addEventListener('click',healPlayerHandler);
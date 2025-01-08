const addListenerBtn = document.getElementById('add-listener-btn');
const clickableBtn = document.getElementById('clickable-btn');
const messageInput = document.getElementById('click-message-input');

function printMessage() {
  const value = messageInput.value;
  console.log(value || 'Clicked me!');
}


// multiple clicks to add event listener btn doesn't add multiple event listeners
// JS replaces the old event listener with the new one
function addListener() {
  clickableBtn.addEventListener('click', printMessage);
}


// address of fn is passed as second arg 
// this fn has no name and is created on fly
// A new fn is created for every add event listener event

// function addListener(){
//   clickableBtn.addEventListener('click',function() {
//     const value = messageInput.value;
//     console.log(value || 'Clicked me!');
//   });
// }

addListenerBtn.addEventListener('click', addListener);

// JS is single-threaded
// can only execute one task at a time
// code executes step by step in an order


// Asynchronous code execution
// If we have certain operations that typically take long time, 
// then we can offload them to the browser (uses multiple threads)
// After finishing the operation the browser communicates back to JS with callback fn
// callback fn is passed as a first arg - which should be called when the operation is completed

const btn = document.querySelector('button');
function handleBtnClk(){
  console.log('Clicked!');

  // this is offloaded to browser -> message queue -> stack
  navigator.geolocation.getCurrentPosition((posData)=>{
    console.log(posData)
  },err=>{
    console.log(err)
  });

  setTimeout(()=>{console.log("Timer done!");},0);      // this is printed after next line eventhough timeout is set to 0s
  console.log('Getting location...');     // this is printed before location
}
btn.addEventListener('click',handleBtnClk);     // asynchronous code
// this is handed over to the browser - manages event listeners BTS
// handleBtnClk is a callback fn - called when a btn click occurs


let res = 0;
for( let i=0;i<1000000000;i++){
  res += i;
}
console.log(res);
// JS execution is blocked until this is done
// Btn clicks are logged only after processing of this loop


// setTimeout() - browser API made available in JS  - is also offloaded to browser

// Event loop - not part of JS engine - but it is part of host env of JS i.e the thing which uses JS engine (browser) 
// Event loop synchronises call stack with the waiting mssgs 
// always check is the Stack empty? and do we have pending todos in Message Queue
// It waits until stack is empty and pushes any pending todos from MQ onto stack
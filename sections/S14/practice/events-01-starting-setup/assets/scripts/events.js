
const btn = document.querySelector('button');

const firstEvHandler = event => {
  console.log("Hello");
  console.log(event); 
  // target property - gives access to the DOM element on which event happened

  // for mouseenter event relatedTraget - gives the previous ele where mouse is there before the event
};

const secEvHandler = () => {
  console.log("Hello for the second time");
};

// btn.onclick = firstEvHandler;
// btn.onclick = secEvHandler;     // overwrites prev one

// to add 2 or more events use addEventListener()

// btn.removeEventListener('',fn);


btn.addEventListener('click',firstEvHandler);

setTimeout(() => { 
  btn.removeEventListener('click',firstEvHandler);      // here anonymous fn doesn't work
  // using myFn.bind(this) also will not work as it creates a new fn object
},2000);


// window.addEventListener('scroll',(event)=>{
//   console.log(event);
// });



// when submit btn is clicked in a form, the default behavior is that the browser sends the data to the source or server that hosts the webpage
// but you may want to valid form data before sending it to the server (override default behavior)

const form = document.querySelector('form');
form.addEventListener('submit',(event)=>{
  console.log(event);   // after logging the form is submitted (page reloads)

  // event.preventDefault();  // default page reload is disabled
})



// Events have 2 phases in which they run - Bubbling and Capturing
// browser runs through 2 phases where it checks for listeners to that event
// bubbling - inside to outside
// capturing - outside to inside

// All event listeners registred with addEventListener() are by default registered with bubbling phase
// we can change this


console.log("");
// btn clicked -> div clicked 
// 'cause by default it goes through bubbling phase
// if true as second arg then - div clicked -> btn clicked

btn.addEventListener('click',()=>{
  console.log("btn clicked");
}); 

const div = document.querySelector('div');
div.addEventListener('click',event=>{
  // event.stopPropagation();     // stops event propagation - event listeners from ancestor eles
  // event.stopImmediatePropagation();    // stops other event listeners on same ele

  console.log('div clicked');
},true);  // capturing phase
// all nested listeners will have capturing phase
// no need to switch all event listeners 

// This is called event propagation



//////// Event delegation pattern
// const listItems = document.querySelectorAll('li');
// listItems.forEach(lI => {
//   lI.addEventListener('click',e=>{
//     e.target.classList.toggle('highlight');
//   })
// });

// Instead we can add event listener only once on parent ele list
const lst = document.querySelector('ul');
lst.addEventListener('click',e=>{
  // e.target.classList.toggle('highlight');

  // console.log(e.target);
  console.log(e.currentTarget);   // not the ele on which you clicked
  // it is the ele on which the event listener is added   
  // here it is list

  // e.target.closest('li').classList.toggle('highlight');


  // form.submit();  /////// triggering event programmatically
  // submit event listener on form that you've added gets skipped

  // btn.click();    //event listener is triggered
});


// this inside an event listener (normal fns) points to the currentTarget
// this is on which the event listener is added
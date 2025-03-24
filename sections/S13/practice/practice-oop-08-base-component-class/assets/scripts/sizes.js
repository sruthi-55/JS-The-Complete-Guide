console.log(window.innerWidth,window.innerHeight);
console.log(document.documentElement.clientWidth);   // excluding scroll bars
console.log(document.documentElement.clientHeight);

const box = document.getElementById('main-box');
console.log(box.getBoundingClientRect());   // gives co-ordinates and sizes
// x axis - top left to top right
// y axis - top left to bottom left

console.log(box.offsetTop);     // always relative to doc start not to viewport (it doesn't change with scrolling)
console.log(box.offsetLeft);

console.log(box.clientTop,box.clientLeft);    //dist b/w top to top of ele content (including padding) 
// border 15px 


console.log(box.offsetWidth,box.offsetHeight);
console.log(box.clientWidth,box.clientHeight);      // without border width and scroll bars


console.log(box.scrollHeight);    // the height of whole content(including invisible content) which is scrollable 
console.log(box.scrollTop);     // gives a value of how much you have scrolled the content


// box.scrollTo(0,50);
// box.scrollTo(0,50);

box.scrollTo({top: 50, behavior:'smooth'});

box.scrollBy(0,50);
box.scrollBy(0,50);



///// Timers and Intervals
const timerId = setTimeout((a1,a2,a3)=>{console.log("After 3 secs",a1,a2,a3)},3000,3,6,9,12);
clearTimeout(timerId);

const intervalId = setInterval((a1,a2,a3)=>{console.log("After 2 secs",a1,a2,a3)},2000,2,4,6,8);
clearInterval(intervalId);




///// Location and History
console.log(location);
// location.href = 'https://www.google.com';
// location.replace('')
// location.assign('')
// console.log(location.host);   // gives domain
// console.log(location.origin)   // full domain including protocol 
// console.log(location.pathname)

console.log(history);
// history.back();    // moves user to prev page - back
// history.forward();
// console.log(history.length)
// history.go(5);   // goes back 5 steps into history



///// Navigator
console.log(navigator);     // to interact with browser and OS in a limited way
// navigator.clipboard
navigator.geolocation.getCurrentPosition((data)=>{console.log(data)});



///// Dates
console.log(new Date());
const newDay = new Date('07/11/19');
console.log(newDay);
// today.getDate();
// today.getDay();
// today.getTime();



///// Errors
// throw 'Simple str error';
// throw new Error('An error occurred');
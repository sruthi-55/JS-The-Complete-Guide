const course = {    // new Object();
  title: 'JS - The Complete guide',
  rating: 5
};

console.log(course.__proto__);    // the default Object.prototype which is given to all objs
// same as
console.log(Object.getPrototypeOf(course));

Object.setPrototypeOf(course,{
  ...Object.getPrototypeOf(course),
  printRating: function(){
    console.log(`${this.rating}/5`);
  }
});     // overwrite prototype after creating the obj
console.log(Object.getPrototypeOf(course));   
course.printRating();


// another way of creating objs (a bit diff) and properties
const student = Object.create({
  printProgress: function(){
    console.log(this.progress);
  }
},{
  fullName: {
    configurable: true,
    enumerable: true,
    value: 'Sruthi Mora',
    writable: false
  }
});    // the obj that we pass here will be set as the prototype to student obj

student.name = 'Sruthi';
Object.defineProperty(student,'age',{
  // property descriptor
  configurable: true,
  enumerable: true,
  value: 0.8,
  writable: false
});

console.log(student);   // prototype has printProgress method


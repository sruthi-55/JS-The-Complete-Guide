// Every fn in JS is a closure

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
// In other words, a closure gives a function access to its outer scope. 
// In JavaScript, closures are created every time a function is created, at function creation time.

// Closure occurs when an inner function has access to variables in its outer (lexical) scope, even when the outer function has finished executing. 
// Closure allows a function to remember the environment in which it was created, even if that environment is no longer present.



// This is IIFE (Immediately Invoked Function Expression)
(function() {
  var age = 30;
  console.log(age); // 30
})()


// Use case for Recursion
const myself = {
  name: 'Max',
  friends: [
    {
      name: 'Manuel',
      friends: [
        {
          name: 'Chris',
          friends: [
            {
              name: 'Hari'
            },
            {
              name: 'Amilia'
            }
          ]
        }
      ]
    },
    {
      name: 'Julia'
    }
  ]
};

function getFriendNames(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }
  
  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
  }
  
  return collectedNames;
}

console.log(getFriendNames(myself));
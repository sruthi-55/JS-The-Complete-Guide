// If we have nested callbacks it can be cumbersome to read and maintain - Callback hell

// Promises allow us to write cleaner code with only one level of nesting
// setTimeout(), getCurrentLocation() do not have no promise version. we can't use .then() on them
// modern browser web API embrace promises unlike these older ones

// Promisifying a built-in API
const setTimer = (duration) => {
  const promise = new Promise((resolveFn, rejectFn) => {
    // happens after a promise is created
    setTimeout(() => {
      resolveFn("Done!"); // marks this promise as resolved / done
    }, duration);
  });
  return promise;
};

setTimer(2000).then((data) => {
  console.log(data);
});

// Promisifying a built-in API
const getPosition = (opts) => {
  const promise = new Promise((resolveFn, rejectFn) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolveFn(success);
      },
      (err) => {
        rejectFn(err);
      },
      opts
    );
  });
  return promise;
};

getPosition().then((data) => {
  console.log(data);
});



// Chaining promises
let positionData;
getPosition()
  .then((posData) => {
    positionData = posData;
    return setTimer(2000);
  })
  .catch((err) => {
    console.log(err);
    return "Caught!";
  })
  .then((data) => {
    console.log(data, positionData);
  });
console.log("Getting position...");

// what happens when promise failed can be passed as second arg in then()
// or can be kept in a catch block after then() - both yeild same result

// If a then block fails, then all successive then blocks are skipped until 
// we reach a catch block or a second arguments in then()
// and next then() continues to execute

// Promise states
// PENDING => Promise is doing work, neither then() nor catch() executes at this moment
// RESOLVED => Promise is resolved => then() executes
// REJECTED  => Promise was rejected => catch() executes
// Only if there are no more then() blocks left, it enters a new, final mode: SETTLED.

// Once SETTLED, you can use a special block finally() which is optional - to do final cleanup work. 
// finally() is reached no matter if you resolved or rejected before.
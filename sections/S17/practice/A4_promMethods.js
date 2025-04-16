// Promise.race()
// takes an arr of promises and returns the data from the fastest promise
Promise.race([setTimer(2000),getPosition()]).then(data=>{
  console.log(data);
});

// Promise.all()
// takes an arr of promises and returns the combined data
// Here we are waiting for an arr of promises to be resolved before executing other
// i.e We can say that any promise thereafter will execute after all the promises in arr are settled
// If one of the promises fail then we get err
Promise.all([setTimer(2000),getPosition()]).then(combinedPromData=>{
  console.log(combinedPromData);
});


// Promise.allSettled()
// waits for all to be either resolved or rejected
// i.e every promise to be settled
// gives a detailed summary of which promises are fulfilled or rejected
Promise.allSettled([setTimer(2000),getPosition()]).then(combinedPromData=>{
  console.log(combinedPromData);
});



//##### Code from prev file
// Promisifying a built-in API
function setTimer(duration) {
  const promise = new Promise((resolveFn, rejectFn) => {
    // happens after a promise is created
    setTimeout(() => {
      resolveFn("Done!"); // marks this promise as resolved / done
    }, duration);
  });
  return promise;
}

// Promisifying a built-in API
function getPosition(opts) {
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
}

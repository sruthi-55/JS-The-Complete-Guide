// you can use async/await only with fns

// Async fn - returns a promise
async function getPositionData(){
  let posData,timerData;
  try{
    posData = await getPosition();
    timerData = await setTimer(2000);
  }
  catch(err){
    console.log(err);
  }
  console.log(timerData,posData);

  console.log('Getting position...');   // unlike in prev file this gets outputed as last
}
getPositionData();



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
};

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
};
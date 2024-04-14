// Async Function always return the Promise.
// Async and Await combo is used to handle the promise.
// Await can only be used inside the async function
// By defalut, The javascript is synchronous. To implement the asynchronous we will use the async and await

async function getData() {
  return "Here is your data";
}
getData().then((response) => console.log(response));

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise is the resolved.");
  }, 5000);
});

// In this first print the log and then resolve the promise.
function getData2() {
  promise.then((response) => {
    console.log(response);
  });
  console.log("Get Data before the promise.");
}

getData2();

async function getDataAsync() {
  const response = await promise;
  console.log("Data after the Promise Resolve");
}

getDataAsync();

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise is the resolved.");
  }, 10000);
});

// Flow of this function is first log the start and wait for the promise 1 resolved and directly log  the promise 2 resolved not wait for the another 5 sec , Total ececution time is 5

// When await is encounter in the async function then Function will be removed from the callstack and once promise is resolved it start execution from the where it left.
// While function is removed from the callstack but execution of all the code is executed in the another thread. So if two promise is resolve in the 5 sec then async function executed in the 5 sec. if any one promise is resolved in the 10 sec then async function take 10 sec instead of 15 sec.

async function getDataAsync2() {
  console.log("Start");
  const response = await promise;
  console.log("Promise 1 Resolved");
  console.log(response);
  const response2 = await promise;
  console.log("Promise 2 Resolved");
  console.log(response2);
}

getDataAsync2();

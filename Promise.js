console.log("Hello Starting of JavaScript File");

const Promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async Task is complete from Promise 1");
    resolve();
  }, 1000);
});

Promise1.then(() => {
  console.log("Promise 1 Consumed");
});

console.log("In Between Two Promise");

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task is completed from promise 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Promise 2 Consumed");
});

console.log("In Between Two Promise");

const Promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const check = true;
    if (check) {
      resolve({ username: "rishitkundariya", email: "rishit@gmail.com" });
    } else {
      reject("There is an error while proessing the request.");
    }
  }, 1000);
});

Promise3.then((user) => {
  return user.username;
})
  .then((username) => {
    console.log(username);
  })
  .catch((exception) => {
    console.log(exception);
  });

const Promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const check = true;
    if (check) {
      resolve({ username: "rishit", email: "rishit@gmail.com" });
    } else {
      reject("There is an error while proessing the request.");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await Promise4;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

async function getData() {
  const response = await fetch("https://api.github.com/users/hiteshchaudhary");
  const data = await response.json();
  console.log(data);
}

getData();

fetch("https://api.github.com/users/hiteshchaudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.login);
    return data;
  })
  .catch((error) => {
    console.log(error);
  });

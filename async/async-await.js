console.log("Starting....");

async function getData() {
  await fetch("https://api.github.com/users?since=135")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}
getData();

// async function tryingAsync() {
//   return 1;
// }

// tryingAsync().then((data) => {
//   console.log(data);
// });

// Promise.all([
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 1);
//   }),
//   2,
//   3,
// ]).then((data) => console.log(data)); // 1, 2, 3

// Promise.race([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Whoops!")), 2000)
//   ),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ]).then(alert); // 1

//Settime out is a call back based function. Let's make it promise based!

function delay(ms) {
  promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Done");
    }, ms);
  });
  return promise;
}

// delay(3000).then(() => alert("runs after 3 seconds"));

console.log("Done!");

setTimeout(function () {
  console.log(
    "hello----I'm from set time out -----------------------------------"
  );
}, 0);

for (let i = 0; i < 100000000; i++) {
  //
}

console.log("done 1 --------------------------");

for (let i = 0; i < 1000000; i++) {
  // console.log("this is second round" + i);
}
console.log("done 2 --------------------------");

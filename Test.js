const data = fetch("https://api.github.com/users?since=135").then(
  (data) => data
);
console.log(data);

// promise - micro task

const promise = new Promise((resolve, reject) => {
  resolve(1);
});

promise.then((e) => console.log(e));

data
  .then((d) => {
    return d.json();
  })
  .then((data) => console.log(data));

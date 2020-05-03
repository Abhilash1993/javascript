function* getData() {
  const result = yield fetchFunction();
  console.log("hey");
  return result;
}

function fetchFunction() {
  return fetch("https://api.github.com/users").then((res) => res.json());
}

getData().next();
console.log(getData().next().value);

console.log("yess");

// const request = async () => {
//   const response = await fetch("https://api.github.com/users");
//   const json = await response.json();
//   console.log(json);
// };

// request();
// console.log("yess");

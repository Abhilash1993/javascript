"use strict";
/**
 * Execution context :
 * There are two stages -
 * 1. Creating stage :
 *    i. Creating the scope chain
 *    ii. Create variables, functions and variables
 *    iii. Determine the value of 'this'
 * 2. Activation / code execution stage
 *    Assign values, references and execute code
 *
 * Sample -
 * let executionContextObject = {
 *        scopeChain,
 *        variableObject,
 *        this
 *  }
 *
 *
 */

// var myAlerts = [];

// for (var i = 0; i < 5; i++) {
//   myAlerts.push(function inner() {
//     console.log(i);
//   });
// }

// myAlerts[0](); // 5
// myAlerts[1](); // 5
// myAlerts[2](); // 5
// myAlerts[3](); // 5
// myAlerts[4](); // 5
// console.log(i);

// if (true) {
//   var a = 20;
// }
// function foo() {
//   let a = 20;
//   var b = 40;
// }
// foo();
// console.log(a);

/**
 * Arrow functions magic
 */

// function human(name, gender) {
//   this.name = name;
//   this.gender = gender;
//   this.sayMyName = function () {
//     setTimeout(() => {
//       console.log("My name is " + this.name);
//     }, 1000);
//   };
// }

// const abhilash = new human("Abhilash", "Male");
// console.log(abhilash.sayMyName());

/**
 * call and bind
 */

let person = {
  name: "Abhilash",
  hello: function (anotherPerson) {
    console.log(this.name + " says hello to the " + anotherPerson);
  },
};

//call

console.log("call -----");
person.hello("world");

person.hello.call({ name: "Avinash" }, "world");

// bind
console.log("bind -----");

let avinash = person.hello.bind({ name: "Avinash" });
avinash("world");

let wait = (time) => {
  let prom = new Promise((resolve, reject) => {
    reject("there was an error");
    setTimeout(function () {
      resolve("yeah");
    }, time);
  });
  return prom;
};

wait(1000)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

/**
 * Design a class to model the management hierachy of Amazon.
 * Say that you have Jeff Bezos as CEO, and he has some SVP reporting to him. Each SVP will have their own VP reporting to them.
 * And your job is to design a class to model this architecture.
 */

function Employee(name, reportingEmployees = []) {
  this.name = name;
  this.reportingEmployees = reportingEmployees;
  this.getAllEmployees = function () {
    return this.reportingEmployees;
  };
}

let abhilash = new Employee("Abhilash");
let avinash = new Employee("avinash");
let foo1 = new Employee("foo1");
let bar1 = new Employee("bar1");
let foo2 = new Employee("foo2");
let bar2 = new Employee("bar2");

abhilash.reportingEmployees.push(avinash);
avinash.reportingEmployees.push(foo1);
avinash.reportingEmployees.push(foo2);
foo2.reportingEmployees.push(bar1);
bar1.reportingEmployees.push(bar2);

let queue = [];
queue.push(abhilash);
while (queue.length != 0) {
  let current = queue.shift();
  if (current.getAllEmployees().length == 0) {
    console.log("Deepest Employee:" + current.name);
  } else {
    console.log("Manager:" + current.name);
  }
  for (let i = 0; i < current.getAllEmployees().length; i++) {
    console.log("Reporting employee: " + current.getAllEmployees()[i].name);
    queue.push(current.getAllEmployees()[i]);
  }
}

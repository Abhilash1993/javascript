"use strict";

Object.createPrototypalInheritance = function (parentObj) {
  const temp = function () {};
  temp.prototype = parentObj;
  return new temp();
};

const human = {
  name: "",
  gender: "",
  sayMyName: function () {
    console.log("My name is " + this.name + " and my gender is " + this.gender);
  },
};

let male = Object.createPrototypalInheritance(human);
male.name = "Abhilash";

male.sayMyName();

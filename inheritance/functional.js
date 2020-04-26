"use strict";

const human = function () {
  let that = {};
  that.name = "";
  that.gender = "";
  that.sayMyName = function () {
    console.log("My name is " + that.name + " and I'm " + that.gender);
  };
  that.sayMyGender = function () {
    console.log("My gender is " + that.gender);
  };
  return that;
};

const male = function (name) {
  const that = human();
  that.gender = "male";
  that.name = name;
  return that;
};

const female = function (name) {
  const that = human();
  that.gender = "female";
  that.name = name;
  return that;
};

let abhilash = male("Abhilash");

abhilash.sayMyName();
abhilash.sayMyGender();

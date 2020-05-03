var human = require("../inheritance/functional").human;
var male = require("../inheritance/functional").male;
var female = require("../inheritance/functional").female;

var assert = require("assert");

describe("Inheritance", function () {
  it("functional inheritance", function () {
    const abhilash = new male("Abhilash");
    assert.equal(abhilash.name, "Abhilash");
  });
});

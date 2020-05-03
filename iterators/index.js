const foo = {
  bar: 10,
  baz: 15,
  length: 2,
};

foo[Symbol.iterator] = function () {
  return {
    current: this.bar,
    last: this.baz,
    next: function () {
      if (this.current <= this.last)
        return { value: this.current++, done: false };
      return { done: true };
    },
  };
};
console.log(foo);

for (let i of foo) {
  console.log(i);
}

let range = {
  from: 1,
  to: 5,

  // for await..of calls this method once in the very beginning
  [Symbol.asyncIterator]() {
    // (1)
    // ...it returns the iterator object:
    // onward, for await..of works only with that object,
    // asking it for next values using next()
    return {
      current: this.from,
      last: this.to,

      // next() is called on each iteration by the for await..of loop
      async next() {
        // (2)
        // it should return the value as an object {done:.., value :...}
        // (automatically wrapped into a promise by async)

        // can use await inside, do async stuff:
        await new Promise((resolve) => setTimeout(resolve, 1000)); // (3)

        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};

(async () => {
  for await (let value of range) {
    console.log(value); // 1,2,3,4,5
  }
})();

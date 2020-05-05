console.log(this);

let foo = "abc";

function bar() {
  console.log(this.foo);
}

bar();

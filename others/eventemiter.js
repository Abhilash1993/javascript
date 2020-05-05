/**
 * const emitter = new EventEmitter();
 * const sub = emitter.subscribe(eventName, callback); // typeof eventName === string
 * emitter.emit(eventName, a, b, c, d, ...);
 * sub.unsubscribe();
 */

/**
 * Write an emitter class:
 * emitter = new Emitter (); //1. Support subscribing to events.
 * sub = emitter.subscribe('event_name', callback);
 * sub2 = emitter.subscribe('event_name', callback2); // 2. Support emitting events.
 * // This particular example should lead to the `callback` above being invoked with `foo` and `bar` as parameters.
 * emitter.emit('event_name', foo, bar); // 3. Support unsubscribing existing subscriptions by releasing them. sub.release();
 * // `sub` is the reference returned by `subscribe` above
 *
 */
function callback1(...args) {
  console.log("call back 1 successful. Below are the arguments");
  for (let i in args) {
    console.log(args[i]);
  }
}

function callback2(...args) {
  console.log("call back 2 successful. Below are the arguments");
  for (let i in args) {
    console.log(args[i]);
  }
}

class Emitter {
  constructor() {
    this.store = {};
  }
  subscribe(event_name, callback) {
    this.store[event_name] = callback;
    return this.store;
  }
  emit(event_name, ...params) {
    if (this.isEventExists(event_name)) {
      const callback = this.store[event_name];
      callback(...params);
    } else {
      console.log("No event called " + event_name);
    }
  }
  isEventExists(event_name) {
    if (this.store[event_name]) return true;
    return false;
  }
  release() {}
}

let emitter = new Emitter();

emitter.subscribe("event1", callback1);
emitter.subscribe("event2", callback2);
emitter.emit("event1", "foo", "bar");

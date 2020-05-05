function getNestedObjects(params) {
  /**
   * this function should return the something like this - { foo : { bat: "ObjectGame 1", bar : { baz : "ObjectGame 2"}}, fiz : "ObjectGame 3"}
   * for the given params - { "foo.bat": "ObjectGame 1", "foo.bar.baz": "ObjectGame 2",fiz: "ObjectGame 3"};
   */
  let newObj = {};
  const newObjCopy = newObj;
  Object.keys(params).map((key) => {
    let keys = key.split(".");
    newObj = newObjCopy;
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] in newObj) {
        console.log(keys[i] + " already exists");
      } else {
        newObj[keys[i]] = {};
        console.log("New key created - " + keys[i]);
      }
      if (keys.length - 1 === i) {
        newObj[keys[i]] = params[key];
      } else {
        newObj = newObj[keys[i]];
      }
    }
  });
  console.log(newObjCopy);
}

const obj = {
  "foo.bat": "ObjectGame 1",
  "foo.bar.baz": "ObjectGame 2",
  fiz: "ObjectGame 3",
};
getNestedObjects(obj);

function loadScript(src) {
  let promise = new Promise(function (resolve, reject) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      // console.log("Script loaded!");
      resolve("Script successfully loaded");
    };
    script.onerror = () => {
      console.log("oops, script loading failed!");
      reject("Scipts loading failed");
    };
    document.head.append(script);
  });
  return promise;
}

let scriptsLoadingPromise = loadScript("/iterators/index.js");

scriptsLoadingPromise.then((data) => {
  // code of loading of the script goes here
});

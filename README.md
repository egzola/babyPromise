# tinyPromise
tinyPromise is a sort of light version of Javascript Promises

```javascript

// ---- Method 1:  autoRun: True -----
// Promise will be auto-executed as soon as created

const tinyPromise = require("./tinyPromise.js");

let myPromise = new tinyPromise(async (p) => { 

  setTimeout(function() {
     myPromise.resolve('Promise resolved');
     //myPromise.reject('Promise error: Stack overflow');
  }, 2000);

});

myPromise.then((ret) => console.log(ret));
myPromise.catch((ret) => console.log("ERRO: "+ret));




// ---- Method 2: autoRun: False  -----
// Promise will be executed just when the method run is called

const tinyPromise = require("./tinyPromise.js");

let myPromise = new tinyPromise(async (p) => { 

  setTimeout(function() {
     myPromise.resolve('Promise resolved');
     //myPromise.reject('Promise error: Stack overflow');
  }, 2000);

}, false);  // <=== PAY ATTENTION HERE (autoRun parameter) !!!!


async function init() {
   myPromise.run("ok, 1234 extra parameters !!!");
   let ret = await myPromise;
   console.log(ret);

   console.log("Status of Promise: " + myPromise.status);   // 0 = pending, 1 = running, 2 = resolved, 3 = rejected
   
}

init();

```

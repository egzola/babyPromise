# babyPromise

What is babyPromise ?

1) It's an easier way to deal with promises.
2) It's a sort of light version of Javascript Native Promises.

Author: Eduardo Zola

# INSTALL:  npm install babypromise


```javascript

// ----- Example 1 -----
// Promise will be auto-executed as soon as created

const babyPromise = require("babyPromise");

let myPromise = new babyPromise(async (p) => { 

  setTimeout(function() {
     myPromise.resolve('Promise resolved');
     //myPromise.reject('Promise error: Stack overflow');
  }, 2000);

});

myPromise.then((ret) => console.log(ret));
myPromise.catch((ret) => console.log("ERROR: "+ret));




// ----- Example 2 -----
// Promise will be executed just when the method run is called

const babyPromise = require("babyPromise");

let myPromise = new babyPromise(async (p) => { 

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





// ----- Example 3 -----
// Promise with a chain of Then's

const babyPromise = require("babyPromise");

let myPromise = new babyPromise(async (p) => { 

  setTimeout(function() {
     myPromise.resolve(5);
     //myPromise.reject('Promise error: Stack overflow');
  }, 2000);


});


myPromise.then((ret) => ret*3);
myPromise.then((ret) => {console.log(ret);return(ret*10);});
myPromise.then((ret) => console.log(ret));
myPromise.catch((ret) => console.log("ERROR: "+ret));



```

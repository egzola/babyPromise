# tinyPromise
tinyPromise is a sort of light version of Javascript Promises

const tinyPromise = require("./tinyPromise.js");

let myPromise = new tinyPromise(async (p) => { 

  setTimeout(function() {
     myPromise.resolve('Promise resolved');
     //myPromise.reject('Promise error: Stack overflow');
  }, 2000);


});



Method 1:

myPromise.then((ret) => console.log(ret));
myPromise.catch((ret) => console.log("ERRO: "+ret));


Method 2:

async function init() {
   myPromise.run("ok, 1234 extra parameters !!!");
   let ret = await myPromise;
   console.log(ret);

   console.log("Status of Promise: " + myPromise.status);   // 0 = pending, 1 = running, 2 = resolved, 3 = rejected
   
}

init();

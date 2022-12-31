// Description: babyPromise is a sort of light version of Javascript Promises
// Created by: Eduardo Zola 
// Email me at: egzola@gmail.com
// License: GNU General Public License v3.0 - Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.


// INSTALL:  npm install babypromise

// Promise will be executed just when the method run is called

'use strict';

const babyPromise = require("babyPromise");


let myPromise = new babyPromise(async (p) => { 

  setTimeout(function() {
     myPromise.resolve('Promise resolved '+p);
     //myPromise.reject('Promise error: stack overflow');
  }, 2500);


},false);  // <=== PAY ATTENTION HERE (autoRun parameter) !!!!



async function init() {
   myPromise.run("ok, 1234 extra parameters !!!");
   let ret = await myPromise;
   console.log(ret);

   console.log("Status of Promise: " + myPromise.status);   // 0 = pending, 1 = running, 2 = resolved, 3 = rejected
   
}


init();



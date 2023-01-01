// Description: babyPromise is a sort of light version of Javascript Promises
// Created by: Eduardo Zola 
// Email me at: egzola@gmail.com
// License: GNU General Public License v3.0 - Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.


// INSTALL:  npm install babypromise


// Promise will be auto-executed as soon as created


'use strict';

const babyPromise = require("babyPromise");


let myPromise = new babyPromise(async (p) => { 

  setTimeout(function() {
     myPromise.resolve('Promise resolved');
     //myPromise.reject('Promise error: Stack overflow');
  }, 2000);


});



myPromise.then((ret) => console.log(ret));
myPromise.catch((ret) => console.log("ERROR: "+ret));




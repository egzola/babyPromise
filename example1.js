// Description: tinyPromise is a sort of light version of Javascript Promises
// Created by: Eduardo Zola 
// Email me at: egzola@gmail.com
// License: GNU General Public License v3.0 - Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.



'use strict';

const tinyPromise = require("./tinyPromise.js");


let myPromise = new tinyPromise(async (p) => { 

  setTimeout(function() {
     myPromise.resolve('Promise resolved');
     //myPromise.reject('Promise error: Stack overflow');
  }, 2000);


});



myPromise.then((ret) => console.log(ret));
myPromise.catch((ret) => console.log("ERRO: "+ret));




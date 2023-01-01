// Description: babyPromise is a sort of light version of Javascript Promises
// Created by: Eduardo Zola 
// Email me at: egzola@gmail.com
// License: GNU General Public License v3.0 - Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.


function babyPromise(userInitFunc,autoRun = true) {
   
   this.ret = null;
   
   this.status = 0;  // 0 = pending, 1 = running, 2 = resolved, 3 = rejected
   
   this.autoRun = autoRun;
   
   this.funcThen = [];
   
   this.funcCatch = function() {};
   
   this.resolve = async function(p) { 
      this.ret = p; 
	  this.status=2; 
	  for(this.i=0;this.i<this.funcThen.length;this.i++) {
		  this.ret = await this.funcThen[this.i](this.ret); 
	  }
   }
   
   this.reject = function(p) { 
      this.ret = p; 
	  this.status=3; 
	  this.funcCatch(this.ret); 
   }
   
   this.then = async function(p) {
	  this.funcThen.push(p);
   }
   
   this.catch = async function(p) {
      this.funcCatch = p;
   }
   
   this.userInitFunc = userInitFunc;
   
   this.run = async function(...p) {
	   if(this.status == 0) {
		   this.status = 1;
		   this.userInitFunc(...p);
	   }
	   
   }
   
   if(this.autoRun) this.run();
}


module.exports = babyPromise;

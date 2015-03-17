/** 
  @title Template.js
  @overview A template for modular node projects
  @author Ben Taylor
  @copyright &copy; 2015
  @license MIT
 */ 


/************************************************
*  THE CODE THAT WILL INITIALIZE YOUR PROJECT	*
************************************************/


// Loading a module. These modules can be anything: variables, objects, functions,
//  or constructor functions

var Manager = require('./lib/core/manager');

var m = new Manager();




// Look into the utils/math file. It's a different setup. This lets you export
// lots of functions bundled as one exported object.

var MyMath = require('./lib/utils/math');

console.log(MyMath)







/* also a good place for your window.onload function if needed */
window.onload = function() {
	//Manager.init() maybe
};




/* A library like Tone might use this space to export the Tone object!
module.exports = new ToneConstructorFunc() { .......... }


Then I, as a user, can  require Tone as a module,
just like I required Manager up above.

var Tone = require('Tone')

*/
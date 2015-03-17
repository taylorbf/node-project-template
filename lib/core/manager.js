/* list of requirements */

var Tone = require('tone')
var ezmath = require('../utils/math')


/* the actual module */

/**
 * @class Talker
 * This module talks to me
 * @return {Object} Returns itself
 */
var Talker = module.exports = function() {

  /** 
   * A prop
   * @memberof Talker
   * @type {String}
   */
  this.prop = "hello"

  /**
   * another prop
   * @memberof Talker
   * @type {String}
   */
  this.erty = "world"

  /**
   * Talks to me
   * @memberof Talker
   * @param  {string} arg yes
   * @return {string}     yes
   */
  this.talk = function(arg) {
    return(this.prop + this.erty)
  }

  return this

}
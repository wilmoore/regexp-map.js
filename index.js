'use strict'

/*!
 * imports.
 */

var curry2 = require('curry2')
var string = Object.prototype.toString

/*!
 * exports.
 */

module.exports = curry2(remap)

/**
 * Curried function which takes a map of `RegExp` string keys which when successfully matched given string, resolves to mapped value.
 *
 * @param {Object.<string, string>} map
 * Map of `RegExp` strings which when matched against string successfully, resolves to mapped value.
 *
 * @param {String} str
 * String to search.
 *
 * @return {String}
 * When matched returns corresponding mapped value; otherwise, an empty string.
 */

function remap (map, str) {
  str = string.call(str) === '[object String]' ? str : ''

  for (var key in map) {
    if (str.match(new RegExp(key, 'i'))) return map[key]
  }

  return ''
}

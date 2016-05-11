'use strict'

/*!
 * imports.
 */

var test = require('tape-catch')

/*!
 * imports (local).
 */

var remap = require('./')

/*!
 * tests.
 */

test('remap/1', function (t) {
  var makes = remap({
    '^toyota': 'Toyota',
    '^ford': 'Ford',
    '^dodge': 'Dodge',
    '^5': 'Five'
  })

  t.equal(makes('Toyota RAV4'), 'Toyota', 'a string match returns expected value')
  t.equal(makes('5'), 'Five', 'a numeric string match returns expected value')
  t.equal(makes('Not a match'), '', 'a non-match returns empty string')
  t.equal(makes(undefined), '', 'undefined key returns empty string')
  t.equal(makes(null), '', 'null key returns empty string')
  t.equal(makes(5), '', 'non-string key returns empty string')

  t.end()
})

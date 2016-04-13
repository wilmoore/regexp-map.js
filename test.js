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
    '^dodge': 'Dodge'
  })

  t.equal(makes('Toyota RAV4'), 'Toyota', 'a match returns expected value')
  t.equal(makes('Not a match'), '', 'a non-match returns empty string')

  t.end()
})

'use strict';
var test = require('tape')
  , luceneEscapeQuery = require('../')

test('lucene-escape-query#escape', function getTest(t){
  var fn = luceneEscapeQuery.escape

  t.doesNotThrow(
    fn.bind(null, 'string')
    , 'does not throw'
  )

  t.equal(fn('string'), 'string', 'normal strings are untouched')
  t.equal(fn('\\string'), '\\\\string', 'escapes a backslash in front of characters')
  t.equal(fn('+string'), '\\+string', 'escapes a backslash in front of special characters')
  t.equal('+', '\+', 'escapes +')
  t.equal('-', '\-', 'escapes -')
  t.equal('&', '\&', 'escapes &')
  t.equal('|', '\|', 'escapes |')
  t.equal('!', '\!', 'escapes !')
  t.equal('(', '\(', 'escapes (')
  t.equal(')', '\)', 'escapes )')
  t.equal('{', '\{', 'escapes {')
  t.equal('}', '\}', 'escapes }')
  t.equal('[', '\[', 'escapes [')
  t.equal(']', '\]', 'escapes ]')
  t.equal('^', '\^', 'escapes ^')
  t.equal('"', '\"', 'escapes "')
  t.equal('~', '\~', 'escapes ~')
  t.equal('*', '\*', 'escapes *')
  t.equal('?', '\?', 'escapes ?')
  t.equal(':', '\:', 'escapes :')
  t.equal('\\', '\\', 'escapes \\')
  t.equal('?:', '\?\:', 'escapes multiple special characters')

  t.end()
})

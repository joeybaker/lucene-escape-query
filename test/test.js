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
  t.equal(fn('+string'), '\\+string', 'puts a backslash in front of special characters in front of a string')
  t.equal(fn('st+r+ing'), 'st\\+r\\+ing', 'puts a backslash in front of multiple special characters in front of a string')
  t.equal(fn('+'), '\\+', 'escapes +')
  t.equal(fn('-'), '\\-', 'escapes -')
  t.equal(fn('&'), '\\&', 'escapes &')
  t.equal(fn('|'), '\\|', 'escapes |')
  t.equal(fn('!'), '\\!', 'escapes !')
  t.equal(fn('('), '\\(', 'escapes (')
  t.equal(fn(')'), '\\)', 'escapes )')
  t.equal(fn('{'), '\\{', 'escapes {')
  t.equal(fn('}'), '\\}', 'escapes }')
  t.equal(fn('['), '\\[', 'escapes [')
  t.equal(fn(']'), '\\]', 'escapes ]')
  t.equal(fn('^'), '\\^', 'escapes ^')
  t.equal(fn('"'), '\\"', 'escapes "')
  t.equal(fn('~'), '\\~', 'escapes ~')
  t.equal(fn('*'), '\\*', 'escapes *')
  t.equal(fn('?'), '\\?', 'escapes ?')
  t.equal(fn(':'), '\\:', 'escapes :')
  t.equal(fn('\\'), '\\\\', 'escapes \\')
  t.equal(fn('/'), '\\/', 'escapes \\/')
  t.equal(fn('?:'), '\\?\\:', 'escapes multiple special characters')

  t.end()
})

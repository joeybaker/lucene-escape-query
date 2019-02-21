'use strict';

// special characters via http://lucene.apache.org/core/7_6_0/queryparser/org/apache/lucene/queryparser/classic/package-summary.html#package.description Special Characters
exports.escape = function escape(str){
  return [].map.call(str, function escapeSpecialCharacter(char){
    if (char === '+'
      || char === '-'
      || char === '&'
      || char === '|'
      || char === '!'
      || char === '('
      || char === ')'
      || char === '{'
      || char === '}'
      || char === '['
      || char === ']'
      || char === '^'
      || char === '"'
      || char === '~'
      || char === '*'
      || char === '?'
      || char === ':'
      || char === '\\'
      || char === '/'
    ) return '\\' + char
    else return char
  }).join('')
}


'use strict';

// special characters via https://lucene.apache.org/core/2_9_4/queryparsersyntax.html#Escaping Special Characters
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
    ) return '\\' + char
    else return char
  }).join('')
}


'use strict';

// special characters via https://lucene.apache.org/core/2_9_4/queryparsersyntax.html#Escaping Special Characters
var luceneSpecialCharactersRegEx = /(\+|\-|\&|\||\!|\(|\)|\{|\}|\[|\]|\^|\"|\~|\*|\?|\:|\\)/g

exports.escape = function escape(str){
  return str.replace(luceneSpecialCharactersRegEx, '\\$1')
}

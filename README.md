# lucene-escape-query [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

Escape a string for a lucene query. Effectively removes all special characters.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [Install](#install)
- [Usage](#usage)
- [Methods](#methods)
  - [escape `(<String> string)`](#escape-string-string)
- [Tests](#tests)
- [Developing](#developing)
  - [Requirements](#requirements)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install

```sh
npm i -S lucene-escape-query
```


## Usage

```js
var luceneEscapeQuery = require('lucene-escape-query')

luceneEscapeQuery.escape('+Rainbow') // \+Rainbow
```

## Methods
### escape `(<String> string)`
Returns the string passed to it, with [special characters](https://lucene.apache.org/core/2_9_4/queryparsersyntax.html#Escaping Special Characters) escaped.

## Tests
Tests are in [tape](https://github.com/substack/tape) and code coverage is run though [covert](https://github.com/substack/covert).

* `npm test` will run both server and browser tests
* `npm run test-browser` and `npm run test-server` run their respective tests
* `npm run tdd` will run the server tests on every file change.

## Developing
To publish, run `npm run release -- [{patch,minor,major}]`

_NOTE: you might need to `sudo ln -s /usr/local/bin/node /usr/bin/node` to ensure node is in your path for the git hooks to work_

### Requirements
* **npm > 2.0.0** So that passing args to a npm script will work. `npm i -g npm`
* **git > 1.8.3** So that `git push --follow-tags` will work. `brew install git`

## License

Artistic 2.0 © [Joey Baker](https://byjoeybaker.com)

[npm-url]: https://npmjs.org/package/lucene-escape-query
[npm-image]: https://badge.fury.io/js/lucene-escape-query.svg
[travis-url]: https://travis-ci.org/joeybaker/lucene-escape-query
[travis-image]: https://travis-ci.org/joeybaker/lucene-escape-query.svg?branch=master
[daviddm-url]: https://david-dm.org/joeybaker/lucene-escape-query.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/joeybaker/lucene-escape-query

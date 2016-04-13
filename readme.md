# regexp-map
> Curried function which takes a map of `RegExp` string keys which when successfully matched given string, resolves to mapped value.

[![Build Status](http://img.shields.io/travis/wilmoore/regexp-map.js.svg)](https://travis-ci.org/wilmoore/regexp-map.js) [![Code Climate](https://codeclimate.com/github/wilmoore/regexp-map.js/badges/gpa.svg)](https://codeclimate.com/github/wilmoore/regexp-map.js) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

```shell
npm install regexp-map --save
```

> You can also use Duo, Bower or [download the files manually](https://github.com/wilmoore/regexp-map.js/releases).

###### npm stats

[![npm](https://img.shields.io/npm/v/regexp-map.svg)](https://www.npmjs.org/package/regexp-map) [![NPM downloads](http://img.shields.io/npm/dm/regexp-map.svg)](https://www.npmjs.org/package/regexp-map) [![David](https://img.shields.io/david/wilmoore/regexp-map.js.svg)](https://david-dm.org/wilmoore/regexp-map.js)

## API Example

```js
var remap = require('regexp-map')
var makes = remap({
  '^toyota': 'Toyota',
  '^ford': 'Ford',
  '^dodge': 'Dodge'
})

makes('Toyota RAV4')
//=> 'Toyota'
```

## API

### `remap(map, str)`

###### arguments

 - `map (Object.<string, string>)` Map of `RegExp` strings which when matched against string successfully, resolves to mapped value.
 - `str (String)` String to search.

###### returns

 - `(String)` When matched returns corresponding mapped value; otherwise, an empty string.

## Contributing

> SEE: [contributing.md](contributing.md)

## Licenses

[![GitHub license](https://img.shields.io/github/license/wilmoore/regexp-map.js.svg)](https://github.com/wilmoore/regexp-map.js/blob/master/license)

[regexp-map]: https://www.npmjs.com/package/regexp-map

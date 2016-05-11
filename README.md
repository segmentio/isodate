# isodate

[![Circle CI](https://circleci.com/gh/segmentio/isodate.svg?style=svg)](https://circleci.com/gh/segmentio/isodate) [![Codecov](https://img.shields.io/codecov/c/github/segmentio/isodate.svg?maxAge=2592000)](https://codecov.io/gh/segmentio/isodate)
  
Parse an ISO date string into a Date. Works cross-browser, even in the old, dumb ones ;)

## Installation

```sh
$ component install segmentio/isodate
```

## Example

```js
var isodate = require('isodate');

var date = isodate.parse('2013-09-04T00:57:26.434Z');
date.toISOString(); // "2013-09-04T00:57:26.434Z"
```

```js
var isodate = require('isodate');

isodate.is('2013-09-04T00:57:26.434Z'); // true
isodate.is('string'); // false
```

## API

### .parse(string)

Parse the given ISO date `string` into a native `Date` object.

### .is(string, strict)

Check if the given `string` is an ISO date string. `strict` mode will return false for strings with a year, month _and_ date, for example `2013` would be `false`.

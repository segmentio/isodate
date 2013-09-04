# isodate
  
  Parse an ISO date string into a Date. Works cross-browser, even in the old, dumb ones ;)

## Installation

    $ component install segmentio/isodate

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

### .is(string)
  Check if the given `string` is an ISO date string.

## License

  MIT

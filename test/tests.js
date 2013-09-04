
describe('isodate', function () {

var assert = require('assert');
var each = require('each');
var isodate = require('isodate');

var isos = {
  '2013'                         : 1356998400000,
  '2013-09'                      : 1377993600000,
  '2013-09-04'                   : 1378252800000,
  '2013-09-04T01:15'             : 1378257300000,
  '2013-09-04T01:15:19'          : 1378257319000,
  '2013-09-04T01:15:19.610'      : 1378257319610,
  '2013-09-04T01:15:19.610Z'     : 1378257319610,
  '2013-09-04T01:15:19.610-0700' : 1378282519610,
  '2013-09-04T01:15:19.610-07:00': 1378282519610,
  '2013-09-04 01:15:19'          : 1378282519000
};

describe('.parse', function () {
  each(isos, function (string, number) {
    it(string, function () {
      var date = isodate.parse(string);
      assert(number == date.getTime());
    });
  });
});

describe('.is', function () {
  it('string', function () {
    assert(!isodate.is('string'));
  });

  each(isos, function (string, number) {
    it(string, function () {
      assert(isodate.is(string));
    });
  });
});

describe('.is (strict)', function () {
  it('string', function () {
    assert(!isodate.is('string', true));
  });

  it('2013', function () {
    assert(!isodate.is('2013', true));
  });

  it('2013-09', function () {
    assert(!isodate.is('2013-09', true));
  });

  it('2013-09-04', function () {
    assert(isodate.is('2013-09-04', true));
  });
});

});
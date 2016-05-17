'use strict';

var assert = require('proclaim');
var each = require('component-each');
var isodate = require('../lib');

describe('isodate', function() {
  var isos = {
    2013: 1356998400000,
    '2013-09': 1377993600000,
    '2013-09-04': 1378252800000,
    '2013-09-04T01:15': 1378257300000,
    '2013-09-04T01:15:19': 1378257319000,
    '2013-09-04T01:15:19.610': 1378257319610,
    '2013-09-04T01:15:19.610Z': 1378257319610,
    '2013-09-04T01:15:19.610-0700': 1378282519610,
    '2013-09-04T01:15:19.610-07:00': 1378282519610
  };

  describe('.parse', function() {
    each(isos, function(iso, timestamp) {
      it(iso, function() {
        var date = isodate.parse(iso);
        assert.equal(date.getTime(), timestamp);
      });
    });

    describe('regressions', function() {
      it('should not fail when the milliseconds start with a zero', function() {
        var iso = '2014-07-02T19:48:49.099Z';
        var date = isodate.parse(iso);
        assert.equal(date.getTime(), 1404330529099);
      });
    });
  });

  describe('.is', function() {
    it('string', function() {
      assert(!isodate.is('string'));
    });

    each(isos, function(iso) {
      it(iso, function() {
        assert(isodate.is(iso));
      });
    });
  });

  describe('.is (strict)', function() {
    it('string', function() {
      assert(!isodate.is('string', true));
    });

    it('2013', function() {
      assert(!isodate.is('2013', true));
    });

    it('2013-09', function() {
      assert(!isodate.is('2013-09', true));
    });

    it('2013-09-04', function() {
      assert(isodate.is('2013-09-04', true));
    });
  });
});

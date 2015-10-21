var assert = require('assert');
var isIPv4 = require('../lib/is-ipv4');

describe('is-ipv4', function () {
    describe('init', function () {
        it('should return true if String is an IPv4 address', function() {
            assert.equal(isIPv4('46.19.37.108'), true, 'String should be an IPv4 address');
        });

        it('should return false if String is not an IPv4 address', function() {
            assert.equal(isIPv4('Hello World!'), false, 'String should not be an IPv4 address');
        });
    });
});
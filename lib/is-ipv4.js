/**
 * @module is-ipv4
 * @description Provides function to check if {String} is an IPv4 address.
 * @version 1.0.6
 * @author Anatoliy Gatt [anatoliy.gatt@aol.com]
 * @copyright Copyright (c) 2015-2016 Anatoliy Gatt
 * @license MIT
 */

'use strict';

/**
 * @public
 * @function isIPv4
 * @description Check if {String} is an IPv4 address.
 * @param {String} string - String to check.
 * @returns {Boolean} - Determine whether a {String} is an IPv4 address.
 */

function isIPv4(string) {
    return !!/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(string);
}

/**
 * @public
 * @description Expose function to check if {String} is an IPv4 address.
 * @param {String} string - String to check.
 * @returns {Boolean} - Determine whether a {String} is an IPv4 address.
 */

module.exports = function (string) {
    return isIPv4(string);
};

/**
 * @module index
 * @description Entry point for is-ipv4-node module.
 * @version 1.0.3
 * @author Anatoliy Gatt [anatoliy.gatt@aol.com]
 * @copyright Copyright (c) 2015 Anatoliy Gatt
 * @license MIT
 */

'use strict';

/**
 * @public
 * @description Expose function to check if {String} is an IPv4 address.
 * @returns {Function} - Function to check if {String} is an IPv4 address.
 */

module.exports = require('./lib/is-ipv4');
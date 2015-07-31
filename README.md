# is-ipv4 for Node.js

Check if `String` is an IPv4 address.

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![License][license]][license-url]
[![Travis Build][travis-image]][travis-url]

[![NPM Statistics][npm-statistics-image]][npm-url]

## Installation

`npm install is-ipv4-node`

## Usage Example

```javascript
var isIPv4 = require("is-ipv4-node");

console.log(isIPv4("46.19.37.108"));
console.log(isIPv4("Hello World!"));
```

***

```javascript
true
false
```

## Tests

To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```

## License

Distributed under the [MIT License](LICENSE).

[npm-image]: https://img.shields.io/npm/v/is-ipv4-node.svg
[npm-url]: https://npmjs.org/package/is-ipv4-node
[downloads-image]: https://img.shields.io/npm/dm/is-ipv4-node.svg
[downloads-url]: https://npmjs.org/package/is-ipv4-node
[license]: https://img.shields.io/npm/l/is-ipv4-node.svg
[license-url]: https://github.com/AnatoliyGatt/is-ipv4-node/blob/master/LICENSE
[travis-image]: https://img.shields.io/travis/AnatoliyGatt/is-ipv4-node/master.svg
[travis-url]: https://travis-ci.org/AnatoliyGatt/is-ipv4-node
[npm-statistics-image]: https://nodei.co/npm/is-ipv4-node.png?downloads=true&downloadRank=true&stars=true
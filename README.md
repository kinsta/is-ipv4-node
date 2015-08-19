# is-ipv4 for Node.js

Check if `String` is an IPv4 address.

[![NPM Package Version][npm-package-version-badge]][npm-package-url]
[![NPM Package License][npm-package-license-badge]][npm-package-license-url]
[![NPM Package Downloads][npm-package-downloads-badge]][npm-package-url]
[![Travis CI Build Status][travis-ci-build-status-badge]][travis-ci-build-status-page-url]

[![NPM Package Statistics][npm-package-statistics-badge]][npm-package-url]

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

[npm-package-url]: https://npmjs.org/package/is-ipv4-node

[npm-package-version-badge]: https://img.shields.io/npm/v/is-ipv4-node.svg

[npm-package-license-badge]: https://img.shields.io/npm/l/is-ipv4-node.svg
[npm-package-license-url]: http://opensource.org/licenses/MIT

[npm-package-downloads-badge]: https://img.shields.io/npm/dm/is-ipv4-node.svg

[travis-ci-build-status-badge]: https://img.shields.io/travis/AnatoliyGatt/is-ipv4-node.svg
[travis-ci-build-status-page-url]: https://travis-ci.org/AnatoliyGatt/is-ipv4-node

[npm-package-statistics-badge]: https://nodei.co/npm/is-ipv4-node.png?downloads=true&downloadRank=true&stars=true
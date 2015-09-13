![is-ipv4-node Logo][logo]

Check if `String` is an IPv4 address.

[![NPM Package Version][npm-package-version-badge]][npm-package-url]
[![NPM Package License][npm-package-license-badge]][npm-package-license-url]
[![NPM Package Downloads][npm-package-downloads-badge]][npm-package-url]
[![devDependencies Status][devDependencies-status-badge]][devDependencies-status-page-url]

[![Node Version][node-version-badge]][node-downloads-page-url]
[![Travis CI Build Status][travis-ci-build-status-badge]][travis-ci-build-status-page-url]
[![Code Climate Status][code-climate-status-badge]][code-climate-status-page-url]
[![Code Climate Test Coverage Status][code-climate-test-coverage-status-badge]][code-climate-test-coverage-status-page-url]
[![Inch CI Documentation Coverage Status][inch-ci-documentation-coverage-status-badge]][inch-ci-documentation-coverage-status-page-url]

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

[logo]: https://cldup.com/R59vtF5-0x.png

[npm-package-url]: https://npmjs.org/package/is-ipv4-node

[npm-package-version-badge]: https://img.shields.io/npm/v/is-ipv4-node.svg?style=flat-square

[npm-package-license-badge]: https://img.shields.io/npm/l/is-ipv4-node.svg?style=flat-square
[npm-package-license-url]: http://opensource.org/licenses/MIT

[npm-package-downloads-badge]: https://img.shields.io/npm/dm/is-ipv4-node.svg?style=flat-square

[devDependencies-status-badge]: https://david-dm.org/AnatoliyGatt/is-ipv4-node/dev-status.svg?style=flat-square
[devDependencies-status-page-url]: https://david-dm.org/AnatoliyGatt/is-ipv4-node#info=devDependencies

[node-version-badge]: https://img.shields.io/node/v/is-ipv4-node.svg?style=flat-square
[node-downloads-page-url]: https://nodejs.org/en/download/

[travis-ci-build-status-badge]: https://img.shields.io/travis/AnatoliyGatt/is-ipv4-node.svg?style=flat-square
[travis-ci-build-status-page-url]: https://travis-ci.org/AnatoliyGatt/is-ipv4-node

[code-climate-status-badge]: https://img.shields.io/codeclimate/github/AnatoliyGatt/is-ipv4-node.svg?style=flat-square
[code-climate-status-page-url]: https://codeclimate.com/github/AnatoliyGatt/is-ipv4-node

[code-climate-test-coverage-status-badge]: https://img.shields.io/codeclimate/coverage/github/AnatoliyGatt/is-ipv4-node.svg?style=flat-square
[code-climate-test-coverage-status-page-url]: https://codeclimate.com/github/AnatoliyGatt/is-ipv4-node/coverage

[inch-ci-documentation-coverage-status-badge]: https://inch-ci.org/github/AnatoliyGatt/is-ipv4-node.svg?style=flat-square
[inch-ci-documentation-coverage-status-page-url]: https://inch-ci.org/github/AnatoliyGatt/is-ipv4-node

[npm-package-statistics-badge]: https://nodei.co/npm/is-ipv4-node.png?downloads=true&downloadRank=true&stars=true
# @bemoje/math-log10-approx

Approximate the logarithm base 10 of a small integer.

#### Version

<span><a href="https://npmjs.org/@bemoje/math-log10-approx" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/math-log10-approx" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/math-log10-approx" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-math-log10-approx.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/math-log10-approx" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-math-log10-approx.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/math-log10-approx" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/math-log10-approx" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-math-log10-approx/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-math-log10-approx" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/math-log10-approx
npm install --save @bemoje/math-log10-approx
npm install --save-dev @bemoje/math-log10-approx
```

## Usage

```javascript
import log10 from '@bemoje/math-log10-approx'

//=> undefined
log10(0)
//=> 0

log10(1)
//=> 0

log10(5)
//=> 0

log10(10)
//=> 1

log10(100)
//=> 2

log10(1000)
//=> 3

log10(10000)
//=> 4

log10(105000)
//=> 5

log10(1000200)
//=> 6

log10(10000010)
//=> 7

log10(100051000)
//=> 8

log10(1005100000)
//=> 9

log10(10055100727920584576600)
//=> 9

log10(100551007279206235576600)
//=> 9
```

## Tests

Uses _Jest_ to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API

### log10

Approximate the logarithm base 10 of a small integer.

#### Parameters

-  `x` **[number]** The integer to approximate the logarithm of.

Returns **[number]** The approximated logarithm of the integer.

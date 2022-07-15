# HubArithmetic

`HubArithmetic` is a library extends you with useful tools to make arithmetic operations more easily.

## Features

`HubArithmetic` extends you with powerful methods those you can use them to make math operation more easily and efficiently, some other feature are listed bellow.

-  Pure JavaScript.
-  Very Lightweight, Only About 2 Kilobytes.
-  Easy To Install.
-  Easy To Use.
-  Built Using OOP Pattern.
-  High Performance in Doing Math operation.

## Installation

### As normal plugin

1. Clone the repo in your PC.
2. Open the repo folder.
3. Copy the `dist` folder into your project directory.
4. Include the `hub-arithmetic.min.js` file in your html file.

```html
<script src="dist/hub-arithmetic.min.js"></script>
```

> **Notice:** I assume that your html file is in the root directory.

Now, you are all set to use `HubArithmetic` in your project.

### As NPM package

Install the package in your project.

```
npm install hub-arithmetic --save
```

Require the package.

```javascript
const HubArithmetic = require("hub-arithmetic");
```

Now, you are all set to use `HubArithmetic` in your project.

## Usage

To use `HubArithmetic`, you need an instance from the `HubArithmetic` constructor.

```javascript
const hubArithmetic = new HubArithmetic();
```

Now, you can use `HubArithmetic` methods, following is a table of `HubArithmetic` methods.

| Method              | Params             | Description                                                                                             |
| ------------------- | ------------------ | ------------------------------------------------------------------------------------------------------- |
| propertiesOf()      | Accepts one param. | Returns an array of properties depends on the value you passed (addition, subtraction, multiplication). |
| improperToMixed()   | Accepts one param. | Returns mixed number converted from the improper fraction that you passed.                              |
| mixedToImproper()   | Accepts one param. | Returns improper fraction converted from the mixed number that you passed.                              |
| wholeNumToPercent() | Accepts two param. | Returns a percentage converted from the number that you passed.                                         |
| percentToWholeNum() | Accepts two param. | Returns a number converted from the percentage that you passed.                                         |
| isEvenNum()         | Accepts one param. | Returns true if the passed number is even number otherwise false.                                       |
| isOddNum()          | Accepts one param. | Returns true if the passed number is odd number otherwise false.                                        |
| factorsOf()         | Accepts one param. | Returns the factors of the passed number.                                                               |
| isPrimeNum()        | Accepts one param. | Returns true if the passed number is prime number otherwise false.                                      |
| primeFactorsOf()    | Accepts one param. | Returns the prime factors of the passed number                                                          |
| LCMOf()             | Accepts two param. | Returns the least common multiple of the passed two number.                                             |
| GCFOf()             | Accepts two param. | Returns the great common factor of the passed two number.                                               |

### Usage Example:

#### propertiesOf

```javascript
const HubArithmetic = require("hub-arithmetic"); // you only need this statement if you are using nodejs
const hubArithmetic = new HubArithmetic();

console.log(
   `properties of the addition are ${hubArithmetic.propertiesOf("addition")}`
);
```

#### improperToMixed()

```javascript
const HubArithmetic = require("hub-arithmetic"); // you only need this statement if you are using nodejs
const hubArithmetic = new HubArithmetic();

console.log(`"6 1/8" is equal to ${hubArithmetic.improperToMixed("49/8")}`);
```

#### mixedToImproper()

```javascript
const HubArithmetic = require("hub-arithmetic"); // you only need this statement if you are using nodejs
const hubArithmetic = new HubArithmetic();

console.log(`"49/8" is equal to ${hubArithmetic.mixedToImproper("6 1/8")}`);
```

#### wholeNumToPercent()

```javascript
const HubArithmetic = require("hub-arithmetic"); // you only need this statement if you are using nodejs
const hubArithmetic = new HubArithmetic();

console.log(`6 out of 12 is ${hubArithmetic.wholeNumToPercent(6, 12)}%`);
```

#### percentToWholeNum()

```javascript
const HubArithmetic = require("hub-arithmetic"); // you only need this statement if you are using nodejs
const hubArithmetic = new HubArithmetic();

console.log(`50% of 12 is ${hubArithmetic.percentToWholeNum(50, 12)}`);
```

#### isEvenNum()

```javascript
const HubArithmetic = require("hub-arithmetic"); // you only need this statement if you are using nodejs
const hubArithmetic = new HubArithmetic();

console.log(`Is 10 an even number? ${hubArithmetic.isEvenNum(10)}`);
```

#### isOddNum()

```javascript
const HubArithmetic = require("hub-arithmetic"); // you only need this statement if you are using nodejs
const hubArithmetic = new HubArithmetic();

console.log(`Is 10 an odd number? ${hubArithmetic.isOddNum(10)}`);
```

#### factorsOf()

```javascript
const HubArithmetic = require("hub-arithmetic"); // you only need this statement if you are using nodejs
const hubArithmetic = new HubArithmetic();

console.log(`Factors of 12 are: ${hubArithmetic.factorsOf(12)}`);
```

#### isPrimeNum()

```javascript
const HubArithmetic = require("hub-arithmetic"); // you only need this statement if you are using nodejs
const hubArithmetic = new HubArithmetic();

console.log(`is 11 a prime number? ${hubArithmetic.isPrimeNum(11)}`);
```

#### primeFactorsOf()

```javascript
const HubArithmetic = require("hub-arithmetic"); // you only need this statement if you are using nodejs
const hubArithmetic = new HubArithmetic();

console.log(`Prime factors of 12 are: ${hubArithmetic.primeFactorsOf(12)}`);
```

#### LCMOf()

```javascript
const HubArithmetic = require("hub-arithmetic"); // you only need this statement if you are using nodejs
const hubArithmetic = new HubArithmetic();

console.log(
   `Least common multiple of 3 and 4 is: ${hubArithmetic.LCMOf(3, 4)}`
);
```

#### GCFOf()

```javascript
const HubArithmetic = require("hub-arithmetic"); // you only need this statement if you are using nodejs
const hubArithmetic = new HubArithmetic();

console.log(
   `Greates common Factor of 18 and 24 is: ${hubArithmetic.GCFOf(18, 24)}`
);
```

## Support

Thank you for using `HubArithmetic`, if you experienced any issue feel free to describe it [here](https://github.com/gitmhd/hub-arithmetic/issues).

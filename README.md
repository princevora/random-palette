## Introduction 
The random-palette package will help developers to generate random color palettes for Such Packages

## Installation
The random-palette Package is available on the [npm](https://www.npmjs.com/package/random-palette)

Run the following command to install the package

```bash
npm i random-palette
```

## Usage
```js
// Install the random palette package and import it
const paletteGenerator = require("random-palette");

// Usage
const palettes = paletteGenerator(2);

console.log(palettes);

/**
 * Output Should be
 * 
 * [#******, #******] stars would be random integer or chars..
 * in my case the output is [#29FAB1, #39EAA1]
 */
```

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



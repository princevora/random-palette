/**
 * @function { generatePalette }
 * 
 * @param { number } amount  Amount stands for the number of palettes should be generated.
 * @returns { string }
 */

function generatePalette(amount: number = 5): string {
    const VALID_PALETTE_CHARS = "0123456789ABCDEF";
    console.log(VALID_PALETTE_CHARS);
    return "!";
}

module.exports = generatePalette;
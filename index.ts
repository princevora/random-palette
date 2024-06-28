/**
 * @function { generatePalettes }
 * 
 * @param { number } amount  Amount stands for the number of palettes should be generated.
 * @returns { string }
 */

function generatePalettes(amount: number = 5): string | string[] {

    if (typeof amount !== "number") return "Please provide valid amount";
    if (amount < 1) amount = 1;

    // VALID_PALETTE_CHARS Are the Characters that used in creating palettes
    const VALID_PALETTE_CHARS: string = "0123456789ABCDEF";

    // VALID_PALETTE_LENGTH Is the numeric length of a normal color palette
    const PALETTE_LENGTH: number = 6;

    const generatePalette = (): string => {

        // Initial value for color palette
        let COLOR_PALETTE: string = "#";

        // Run the loop for palette_length's times
        for (let index = 0; index < PALETTE_LENGTH; index++) {

            /**
             * First of all we are generating a random number between 0 to 1
             * Then we are multipliying It by 16 as our VALID_PALETTE_CHARS 's length is 15 
             * And then we are retriving a absolute / Nearest number of the previous number => [Math.random() * 15]
             */
            const PALETTE_INDEX = Math.round(Math.random() * 15);

            /**
             * Get the palette char for the palette index
             */
            const PALETTE_CHAR = VALID_PALETTE_CHARS[PALETTE_INDEX];

            /**
             * Join the palette char to the color
             */

            COLOR_PALETTE += PALETTE_CHAR;
        }

        return COLOR_PALETTE;
    }

    const COLOR_PALETTES: string[] = [];

    // Run the loop for amount'th times..
    for (let i = 1; i <= amount; i++) {
        COLOR_PALETTES.push(generatePalette());
    }

    // Return the color palette
    return COLOR_PALETTES;
}

module.exports = generatePalettes;
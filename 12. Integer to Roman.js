/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    romanNumerals = [
        ['I', 1],
        ['IV', 4],
        ['V', 5],
        ['IX', 9],
        ['X', 10],
        ['XL', 40],
        ['L', 50],
        ['XC', 90],
        ['C', 100],
        ['CD', 400],
        ['D', 500],
        ['CM', 900],
        ['M', 1000]
    ];

    let roman = '';
    let remaining = num;

    // console.log('remaining: ', remaining, 'roman numerals: ', roman);

    for(let i = romanNumerals.length - 1; i >= 0; i--){
        if(remaining == 0){
            break;
        }

        while(remaining >= romanNumerals[i][1]){
            roman += romanNumerals[i][0];
            remaining -= romanNumerals[i][1];

            // console.log('remaining: ', remaining, 'roman numerals: ', roman);
        }
    }

    return roman;
};

console.log(intToRoman(3749)); // MMMDCCXLIX
console.log(intToRoman(58)); // LVIII
console.log(intToRoman(1994)); // MCMXCIV
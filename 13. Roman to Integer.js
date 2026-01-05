/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const symbols = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let pointer = 0;
    let output = 0;
    let iteration = 0;

    while (pointer < s.length) {
        console.log('iteration: ', iteration++)
        console.log('pointer: ', pointer)

        if(s[pointer + 1] != undefined) {
            if(symbols[s[pointer]] < symbols[s[pointer + 1]]){
                output = output + (symbols[s[pointer + 1]] - symbols[s[pointer]]);
                pointer += 2;
            }
            else{
                output += symbols[s[pointer]]
                pointer += 1;
            }
        }
        else{
            output += symbols[s[pointer]]
            pointer += 1;
        }

        console.log('new output:', output);
        console.log('\n')
    }

    return output;
};

console.log(romanToInt('MCMXCIV'));
console.log(romanToInt('III'));
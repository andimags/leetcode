/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // Get lowest count of characters from the strs
    let lowestCharCount;

    for (let i = 0; i < strs.length; i++) {
        if(strs[i] == ""){
            lowestCharCount = 0;
            break;
        }

        if (!lowestCharCount) {
            lowestCharCount = strs[i].length;
        }
        else {
            if (lowestCharCount > strs[i].length) {
                lowestCharCount = strs[i].length
            }
        }
    }

    // Check for longest prefix
    let longestPrefix = "";

    if(lowestCharCount == 0){
        return "";
    }

    for (let i = 0; i < lowestCharCount; i++) {
        let isSameChar = true;
        let currentChar;

        for (let j = 0; j < strs.length; j++) {
            if (!currentChar) {
                currentChar = strs[j][i];
            }

            if (currentChar != strs[j][i]) {
                isSameChar = false;
                break;
            }
        }

        if (isSameChar) {
            longestPrefix += currentChar;
        }
        else{
            break;
        }
    }

    return longestPrefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["", "b"]))
console.log(longestCommonPrefix(["cir","car"]))
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    s = s.trim();
    let output = "";

    for (const element of s) {
        const current_char = element;

        // Check if number
        if(isNaN(current_char) && current_char != "-" && current_char != "+") {
            break;
        }

        output += current_char;
    }

    if(output == ""){
        return 0;
    }

    let final_number = parseInt(output, 10);

    if(final_number > 2147483647){
        return 2147483647
    }
    else if(final_number < -2147483648){
        return -2147483648
    }
    else if(isNaN(final_number)){
        return 0;
    }
    else{
        return final_number;
    }
};
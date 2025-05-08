/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let is_pos = true;

    if(x < 0){
        x = x * (-1);
        is_pos = false;
    }

    let number = x.toString();
    let reversed = "";
    let is_leading_zero = true;

    for(let i = number.length - 1; i >= 0; i--){
        if(number[i] == "0" && is_leading_zero){
            if(i == 0){
                return x;
            }
        }
        else{
            reversed += number[i];
            is_leading_zero = false;
        }
    }

    let reversed_int = parseInt(reversed, 10);

    // Check if bit 32
    if((reversed_int < -2147483647) || (reversed_int > 2147483647)){
        return 0;
    }

    return is_pos ? reversed_int : (reversed_int * -1);
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(-120));
console.log(reverse(0));
console.log(reverse(000));
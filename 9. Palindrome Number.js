/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let string_number = x.toString();
    let pointer_one = 0;
    let pointer_two = string_number.length - 1;
    let is_palindrome = true;

    while(
        (pointer_one <= string_number.length / 2) &&
        (pointer_two >= string_number.length / 2)
    ){
        if(string_number[pointer_one] != string_number[pointer_two]){
            is_palindrome = false;
            break;
        }

        pointer_one++;
        pointer_two--;
    }

    return is_palindrome;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(2312132));
console.log(isPalindrome(-2312132));
console.log(isPalindrome(10));

// isPalindrome(121);
// isPalindrome(-121);

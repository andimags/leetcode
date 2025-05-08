/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start_index = 0;
    let current_longest_substring = '';

    if(s.length == 1){
        return 1;
    }

    while(start_index <= s.length){
        let current_substring = '';

        for(let i = start_index; i < s.length; i++){
            const current_letter = s[i];
            console.log('current_letter: ', current_letter, 'is first char: ', i === start_index, 'doesnt exist: ', current_substring.indexOf(current_letter) === -1);

            // Check if first character on string
            // Check if current letter does not exist on current substring
            if(
                (i === start_index) || 
                (current_substring.indexOf(current_letter) === -1)
            ){
                current_substring += current_letter;
            }
            else{
                break;
            }
        }
        if(current_substring.length > current_longest_substring.length){
            current_longest_substring = current_substring;
            // console.log('current_longest_substring:', current_longest_substring);
        }

        start_index++;
        console.log('');
    }

    return current_longest_substring;
}

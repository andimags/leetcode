/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let row = 0;
    let col = 0;
    let row_to_inc = true;
    let row_cols_to_insert = [];
    
    for(let i = 0; i < s.length; i++){
        row_cols_to_insert.push([row, col]);

        if(numRows == 1){
            col++;
            continue;
        }

        if(row == numRows - 1){
            row_to_inc = false;
        }

        if(row == 0){
            row_to_inc = true;
        }

        if(row_to_inc){
            row++;
        }
        else{
            row--
            col++;
        }
    }

    // Create empty array
    let zigzag_array = [];

    // console.log(row_cols_to_insert);
    // console.log(row_cols_to_insert[row_cols_to_insert.length - 1]);
    console.log(numRows, row_cols_to_insert[row_cols_to_insert.length - 1][1]);

    for(let i = 0; i < numRows; i++){
        for(let j = 0; j <= row_cols_to_insert[row_cols_to_insert.length - 1][1]; j++){
            if(zigzag_array[i] == undefined){
                zigzag_array.push([]);
            }

            zigzag_array[i].push('');
        }
    }

    console.table(zigzag_array);

    // Insert letters on appropriate indices
    for(let i = 0; i < row_cols_to_insert.length; i++){
        zigzag_array[row_cols_to_insert[i][0]][row_cols_to_insert[i][1]] = s[i];
    }

    let reversed = "";

    for(let i = 0; i < zigzag_array.length; i++){
        for(let j = 0; j < zigzag_array[i].length; j++){
            if(zigzag_array[i][j] != ''){
                reversed += zigzag_array[i][j];
            }
        }
    }

    return reversed;
};

// console.log(convert('PAYPALISHIRING', 3));
// console.log(convert('PAYPALISHIRING', 4));
// console.log('reversed: ', convert('AB', 1));
// console.log('reversed: ', convert('ABC', 1));
console.log('reversed: ', convert('ABCD', 1));
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let row = 0;
    let col = 0;
    let row_to_insert = 0;
    let inc_row_to_insert = true;
    let col_to_insert = 0;
    let current_index = 0;
    let zigzagArray = [];

    let iteration_number = 0;
    
    while(current_index < s.length){
        iteration_number++;

        if(iteration_number == 100){
            break;
        }

        const current_letter = s[current_index];

        if(typeof zigzagArray[row_to_insert] === 'undefined'){
            zigzagArray.push([]);
        }

        if(
            (row == row_to_insert) &&
            (col == col_to_insert)
        )
        {
            zigzagArray[row_to_insert].push(current_letter);
            current_index++;

            if(row_to_insert == numRows - 1){
                inc_row_to_insert = false;
            }
            
            if(row_to_insert == 0){
                inc_row_to_insert = true;
            }

            if(inc_row_to_insert){
                row_to_insert++;
            }
            else{
                row_to_insert--;
            }

            if(col_to_insert % 3 != 0){
                col_to_insert++;
            }

            console.log('row: ', row_to_insert, 'col: ', col_to_insert);
        }

        row++;
        col++;
    }

    // Output
    // zigzagArray.forEach(array => {
    //     console.log(array);
    // });
};

convert('PAYPALISHIRING', 4);
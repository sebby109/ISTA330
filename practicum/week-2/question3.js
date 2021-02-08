/*
An array of integers, input, is given.
A pair (i, j) is called an ordered pair if input[i] < input[j] and i < j.
Return the number of ordered pairs.
Example:
input: [4, 2, 6, 9]
output: 5
There are 5 ordered pairs: (4, 6), (4, 9), (2, 6), (2, 9), (6, 9)
*/

var numberOfOrderedPairs = function(input) {
    var retval = 0

    for(i = 0; i < input.length - 1; i++){
        for(j=1; j < input.length; j++){
            if(input[i] < input[j]){
                retval += 1;
            }
        }
    }

    return retval;
};
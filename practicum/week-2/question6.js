/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    var retval = 0;
    var get_len = input.length;

    if(get_len % 2 == 0){
        pos1 = get_len / 2;
        pos2 = pos1 + 1;
        retval = Math.round((pos1 + pos2) / 2);
    }
    else{
        tmp_lst = input.sort();  // so we dont edit the input array.
        retval = tmp_lst[(get_len - 1) / 2];
    }
    return retval;
};
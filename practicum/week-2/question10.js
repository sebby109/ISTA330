/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    var max_val = 0;
    var min_val = n;
    var str_num = n.toString();

    for(i=0; i<str_num.length;i++){
        var temp_int = parseInt(str_num[i])
        if(temp_int > max_val){
            max_val = temp_int;
        }
        if(temp_int < min_val){
            min_val = temp_int;
        }
    }

    var retval = max_val.toString() + ' - ' + min_val.toString() + ' = ' + (max_val - min_val).toString();

    return retval;

};
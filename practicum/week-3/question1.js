/*
Given an array of numbers, input, 
find whether the largest element in the array 
is at least twice as much as every other number
 in the array. If this is the case return true otherwise return false.

 Example:
         input: [3,2,21,50]
         output: true
*/

var largestNumberIsAtLeastTwice = function(input) {
        var largest_num = 0;
        var n = input.length

        for (i=0; i < n; i++){
                if (input[i] > largest_num){
                        largest_num = input[i];
                }
        }

        for (j=0; j < n - 1; j++){
                if ( (input[j] * 2) > largest_num){
                        return false;
                }
        }

        return true;
};
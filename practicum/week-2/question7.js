/*
Given an array of 2n numbers, group the numbers into n pairs of integer,
such that the sum of the minimum of each pair is the largest.

Example: 
input: [4, 3, 8, 0]
output: 4
       because we can make the following pairs: (4, 8) and (3, 0) and 
       min(4,8) + min(3,0) = 4
       whatever other pairs we choose the sum of the minimums will not exceed 4.
*/

var maxSumOfMins = function(input) {
       var num_tuples = [];

       for(i=0; i<input.length-2; i++){
              num_tuples.push([input[i], input[i+2]]);
       }


       //  Confused if the input would always be an array of 
       //  size 4, so just assumed it would be.
       var min1 = Math.min(num_tuples[0][0], num_tuples[0][1]);
       var min2 = Math.min(num_tuples[1][0], num_tuples[1][1]);
       var retval = min1 + min2;

       return retval;
};
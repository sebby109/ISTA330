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
       var retval = 0;

       for(i=0; i<input.length-2; i++){
              num_tuples.push([input[i], input[i+2]]);
              
       }

       for(j=0; j<num_tuples.length; j++){
              retval += Math.min(num_tuples[j][0], num_tuples[j][1]);
       }

       return retval;
};
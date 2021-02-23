
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

 var largestSubarray = function(input) {
        current_max = input[0];
        retval = input[0];

        for (i=1; i < input.length; i++){
                if ((current_max + input[i]) > input[i]){
                        current_max = (current_max + input[i]);
                }
                else if (input[i] > current_max){
                        current_max = input[i];
                }

                if (current_max > retval){
                        retval = current_max;
                }
        }

        return retval;
    
 };
/*
You are given strings A and B.  
How many of the letters in B are also present in A?

The letters in A are guaranteed distinct, and all characters in A and B are letters.
 Letters are case sensitive.

 Example:
 input: A='gtY', B = 'iTygrtg'
 output: 3
*/

var howManyCommon = function(A, B) {
    var shared_letters = 0;

    for(i = 0; i < B.length; i++){
        if(A.includes(B[i])){
            shared_letters += 1;
        }
    }
    
    return shared_letters;
};
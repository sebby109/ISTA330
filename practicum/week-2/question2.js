
/*
The array cookies represent the number of cookies that each kid has. 
Given the array cookies and an integer extraCookies, determine whether there is a
way to distribute the extraCookies among the kids in a way that kids get equal number of cookies.
Example: input: cookies = [3, 5, 8] , extraCookies = 8
         output: true
         Because we can give 5 of the extraCookies to the first kid and the remaining 3 to the second kid
         and therfore each of the three kids will get 8 cookies.
 */

 var canGetEqualCookies = function(cookies, extraCookies) {
        var greatest_num_cookie = 0;
        var current_extra = extraCookies;
        for(i = 0; i < cookies.length; i++){
                if (cookies[i] > greatest_num_cookie){
                        greatest_num_cookie = cookies[i];
                }
        }

        for(j = 0; j < cookies.length; j++){
                if(current_extra <= 0){
                        return false;
                }
                else if(cookies[i] < greatest_num_cookie){
                        current_extra = current_extra - cookies[i]
                }
        }

        return true;
    
 };
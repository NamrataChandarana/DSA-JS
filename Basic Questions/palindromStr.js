var isPalindrome = function(s) {
    let str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let reverseStr = str.split('').reverse().join('');
    return reverseStr === str;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))


// Mehod 2 
var isPalindrome = function(s) {
    if(s === "") return true
    let str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
     let left = 0, right = str.length - 1;
     while (left < right) {
         if (str[left] !== str[right]) {
             return false;
         }
         left++;
         right--;
     }
     return true;
 };
 
 console.log(isPalindrome("A man, a plan, a canal: Panama"))
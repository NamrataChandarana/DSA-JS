
var isPalindrome = function(x) {
    let reverseNum = 0;
    let num = x;
    while(num > 0 ){
        let lastDigit = num % 10;
        reverseNum = (reverseNum * 10) + lastDigit;
        num = Math.floor(num /10); 

    }
    console.log(reverseNum);
    return x === reverseNum
};
console.log(isPalindrome(121))
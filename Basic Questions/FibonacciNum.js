var fib = function(n) {
    if(n < 2) return n;
    let prev = 0, curr = 1, next ;
    for(i = 2; i <= n; i++){
        next = prev + curr;
        prev = curr;
        curr = next;
    }
    return next;
};

console.log(fib(5));


// Method 2

var missingNumber = function(nums) {
    let res = nums.length;
    
    for (let i = 0; i < nums.length; i++) {
        res += i - nums[i];
    }
    
    return res;
};

console.log(missingNumber([3,0,1]))
//https://leetcode.com/problems/maximum-subarray/
//Kadane's algorithm solution
function maxSubArray(nums: number[]): number {
    let res: number = nums[0];
    let max: number = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        max = Math.max(nums[i], max +nums[i]);
        res = Math.max(max, res);
    }
    return res;
};

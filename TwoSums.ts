// https://leetcode.com/problems/two-sum
function twoSum(nums: number[], target: number): number[] {
    var hash = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        let curRun = nums[i];
        
        let needed_number = target - curRun;
        
        if (hash.has(needed_number)) {
            
            let num = hash.get(needed_number)
            return [i, num]
        }
        
        hash.set(curRun, i)
    }
};

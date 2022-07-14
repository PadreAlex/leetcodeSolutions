// https://leetcode.com/problems/contains-duplicate/
function containsDuplicate(nums: number[]): boolean {
    let seen: Map<number, number> = new Map;
    
    for(let i = 0; i < nums.length; i++) {
        if (nums.length <= 1) return false;
        if(seen.has(nums[i])) return true;
        
        seen.set(nums[i], i)
    }
    return false;
};

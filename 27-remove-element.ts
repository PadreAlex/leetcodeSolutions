// https://leetcode.com/problems/remove-element/description/
function removeElement(nums: number[], val: number): number {
    let i = 0
    nums.map((el) => {
        if (el !== val) {
            nums[i++] = el
        }
    })
    return ind
};

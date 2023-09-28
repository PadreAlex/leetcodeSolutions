function sortArrayByParity(nums: number[]): number[] {
    const even = [];
    for (let i = 0; i < nums.length; i++) {
        nums[i] % 2 == 0 ? even.unshift(nums[i]) : even.push(nums[i])
    }
    return even
};

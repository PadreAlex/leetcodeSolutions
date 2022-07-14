// https://leetcode.com/problems/median-of-two-sorted-arrays/
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    
    const newArr: number[] = [...nums1, ...nums2].sort((a: number, b: number) => { return a - b });
    const median = newArr.length % 2 !== 0 ? newArr[Math.floor(newArr.length / 2)] : (newArr[Math.floor(newArr.length / 2) - 1] + newArr[Math.floor(newArr.length / 2)]) / 2;
    return median;
    
}

//https://leetcode.com/problems/longest-substring-without-repeating-characters/
//Memory Usage: 44.9 MB, less than 97.33% of TypeScript online submissions for Longest Substring Without Repeating Characters.
function lengthOfLongestSubstring(s: string): number {
    let seen = new Map;
    let noRep: number = 0;
    let size: number = 0;
    
    for(let i = 0; i < s.length; i++) {
        
      let curLet = s.charAt(i);

        if (seen.has(curLet)) {
            let prev = seen.get(curLet);
            noRep = Math.max(noRep, prev + 1);
        }

        seen.set(curLet, i);
        size = Math.max(size, i - noRep + 1);
    }
   
    return size;
};

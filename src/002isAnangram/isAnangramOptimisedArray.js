
/**
 * 
 * @param {*} str1 
 * @param {*} str2 
 * @returns 
 * Use an integer array of length 26 for counts.
 * Increment for str1, decrement for str2.
 * If all 0 → anagram.
 * Time Complexity : O(n).
 * Space Complexity : O(1) (fixed array of size 26)
 */
function isAnagramArrayOptimised(str1, str2) {
  if (str1.length !== str2.length) return false;

  const count = new Array(26).fill(0);

  for (let i = 0; i < str1.length; i++) {
    count[str1.charCodeAt(i) - 97]++; // 'a' -> 97
    count[str2.charCodeAt(i) - 97]--;
  }

  return count.every(c => c === 0);
}
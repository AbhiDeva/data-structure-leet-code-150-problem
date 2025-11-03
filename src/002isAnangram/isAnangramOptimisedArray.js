
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
function isAnagramArray(str1, str2) {
  // Different lengths can't be anagrams
  if (str1.length !== str2.length) {
    return false;
  }
  
  // Create frequency array for 26 letters
  const frequency = new Array(26).fill(0);
  
  // Process both strings together
  for (let i = 0; i < str1.length; i++) {
    // Increment for str1
    const char1 = str1[i].toLowerCase();
    const index1 = char1.charCodeAt(0) - 'a'.charCodeAt(0);
    frequency[index1]++;
    
    // Decrement for str2
    const char2 = str2[i].toLowerCase();
    const index2 = char2.charCodeAt(0) - 'a'.charCodeAt(0);
    frequency[index2]--;
  }
  
  // Check if all frequencies are zero
  for (let count of frequency) {
    if (count !== 0) {
      return false;
    }
  }
  
  return true;
}
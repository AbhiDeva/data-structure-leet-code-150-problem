
/**
 * 
 * @param {*} str1 
 * @param {*} str2 
 * @returns 
 * Count characters of str1 in a map.
 * Decrease counts for str2.
 * If all counts are 0 → it’s an anagram.
 * Time: O(n)
 * Space: O(1) (since alphabet size is fixed — at most 26 or 128 depending on charset)
 */

function isAnagramHashMap(str1, str2) {
  // Different lengths can't be anagrams
  if (str1.length !== str2.length) {
    return false;
  }
  
  // Create frequency map
  const charCount = new Map();
  
  // Count characters in str1
  for (let char of str1.toLowerCase()) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  
  // Subtract characters from str2
  for (let char of str2.toLowerCase()) {
    if (!charCount.has(char)) {
      return false; // Character not in str1
    }
    
    charCount.set(char, charCount.get(char) - 1);
    
    if (charCount.get(char) < 0) {
      return false; // Too many of this character
    }
  }
  
  // Check all counts are zero
  for (let count of charCount.values()) {
    if (count !== 0) {
      return false;
    }
  }
  
  return true;
}
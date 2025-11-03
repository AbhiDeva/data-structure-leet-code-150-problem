// BRUTE FORCE - O(n²)
// Time Complexity: O(n²)
// Space Complexity: O(n)

export default function isAnagramBruteForce(str1, str2) {
  // Different lengths can't be anagrams
  if (str1.length !== str2.length) {
    return false;
  }
  
  // Convert to lowercase and create arrays
  let arr1 = str1.toLowerCase().split('');
  let arr2 = str2.toLowerCase().split('');
  
  // For each character in str1
  for (let i = 0; i < arr1.length; i++) {
    let found = false;
    
    // Search for it in arr2
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        // Mark as used by removing it
        arr2.splice(j, 1);
        found = true;
        break;
      }
    }
    
    // If character not found, not an anagram
    if (!found) {
      return false;
    }
  }
  
  return true;
}

// QUADRATIC APPROACH using indexOf + splice
// Time Complexity: O(n²) - indexOf is O(n), splice is O(n), inside loop
// Space Complexity: O(n) - creates array copy

function isAnagramQuadratic(str1, str2) {
  // Different lengths cannot be anagrams
  if (str1.length !== str2.length) {
    return false;
  }

  // Convert str2 to array for manipulation
  let arr2 = str2.toLowerCase().split('');

  // Check each character from str1
  for (let ch of str1.toLowerCase()) {
    const index = arr2.indexOf(ch); // O(n) - searches entire array
    
    // Character not found in str2
    if (index === -1) {
      return false;
    }
    
    // Remove found character to mark as "used"
    arr2.splice(index, 1); // O(n) - shifts all elements after index
  }

  // If all characters matched, arr2 should be empty
  return arr2.length === 0;
}
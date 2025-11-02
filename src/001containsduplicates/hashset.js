// 3. HASH SET APPROACH
// Time Complexity: O(n)
// Space Complexity: O(n)
function containsDuplicatesHashSet(arr) {
  const seen = new Set();
  
  for (let num of arr) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}
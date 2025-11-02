// 2. Sorted Technique
// Time Complexity : O(n logn ) - due to sorting
// Space Complexity: O(1) or O(n) - depending on Sort implemention

export default function containsDuplicatesSorted(arr) {
  // Create a copy to avoid modifying original array
  const sorted = [...arr].sort((a, b) => a - b);
  
  // Check adjacent elements in sorted array
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] === sorted[i + 1]) {
      return true;
    }
  }
  return false;
}

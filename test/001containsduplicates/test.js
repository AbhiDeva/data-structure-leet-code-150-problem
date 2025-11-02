// TEST CASES
import containsDuplicatesBruteForce from '../../src/001containsduplicates/bruteforceapproach.js';
import containsDuplicatesSorted from '../../src/001containsduplicates/sortedapproach.js';
import  containsDuplicatesHashSet  from '../../src/001containsduplicates/hashset.js';
console.log("=== TEST CASES ===\n");

const testCases = [
  [1, 2, 3, 4, 5],           // No duplicates
  [1, 2, 3, 1],              // Has duplicates
  [1, 1, 1, 1],              // All duplicates
  [],                        // Empty array
  [5],                       // Single element
  [1, 5, 9, 3, 7, 2, 1]      // Duplicates at different positions
];

testCases.forEach((testCase, index) => {
  console.log(`Test Case ${index + 1}: [${testCase}]`);
  console.log(`  Brute Force: ${containsDuplicatesBruteForce(testCase)}`);
  console.log(`  Sorted:      ${containsDuplicatesSorted(testCase)}`);
  console.log(`  Hash Set:    ${containsDuplicatesHashSet(testCase)}`);
  console.log();
});

// PERFORMANCE COMPARISON
console.log("=== PERFORMANCE COMPARISON ===\n");

const largeArray = Array.from({ length: 10000 }, (_, i) => i);
largeArray.push(5000); // Add a duplicate

console.time("Brute Force");
containsDuplicatesBruteForce(largeArray);
console.timeEnd("Brute Force");

console.time("Sorted");
containsDuplicatesSorted(largeArray);
console.timeEnd("Sorted");

console.time("Hash Set");
containsDuplicatesHashSet(largeArray);
console.timeEnd("Hash Set");

console.log("\n=== COMPLEXITY SUMMARY ===");
console.log("1. Brute Force:  Time O(n²), Space O(1)");
console.log("2. Sorted:       Time O(n log n), Space O(n)");
console.log("3. Hash Set:     Time O(n), Space O(n) - BEST for large arrays");
// TEST CASES
import containsDuplicatesBruteForce from '../../src/001containsduplicates/bruteforceapproach.js';
import containsDuplicatesSorted from '../../src/001containsduplicates/sortedapproach.js';
import  containsDuplicatesHashSet  from '../../src/001containsduplicates/hashset.js';

// isanagram code
import isAnagramQuadratic from '../../src/002isAnangram/isAnangramQuadratic.js';
import isAnagramArray from '../../src/002isAnangram/isAnangramOptimisedArray.js';
import isAnagramBruteForce from '../../src/002isAnangram/isAnagramBruteFroce.js';
import isAnagramHashMap from '../../src/002isAnangram/isAnagramHash.js';
import isAnagramBruteSorted from '../../src/002isAnangram/isAnagramSorted.js';

import { performance } from 'perf_hooks';


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




function benchmark(fn, str1, str2, iterations = 100000) {
  const start = performance.now();
  for (let i = 0; i < iterations; i++) {
    fn(str1, str2);
  }
  const end = performance.now();
  return (end - start).toFixed(2);
}

const test1 = "listen";
const test2 = "silent";

console.log('Quadratic:', benchmark(isAnagramQuadratic, test1, test2), 'ms');
console.log('Sorted:', benchmark(isAnagramBruteSorted, test1, test2), 'ms');
console.log('HashMap:', benchmark(isAnagramHashMap, test1, test2), 'ms');
console.log('Array[26]:', benchmark(isAnagramArray, test1, test2), 'ms');
console.log('ForLoop:', benchmark(isAnagramBruteForce, test1, test2), 'ms');

let test1a = 'The Morse Code';
let test1b = 'Here come dots';
console.log('Quadratic:', benchmark(isAnagramQuadratic, test1a, test1b), 'ms');
console.log('Sorted:', benchmark(isAnagramBruteSorted, test1a, test1b), 'ms');
console.log('HashMap:', benchmark(isAnagramHashMap, test1a, test1b), 'ms');
console.log('Array[26]:', benchmark(isAnagramArray, test1a, test1b), 'ms');
console.log('ForLoop:', benchmark(isAnagramBruteForce, test1a, test1b), 'ms');

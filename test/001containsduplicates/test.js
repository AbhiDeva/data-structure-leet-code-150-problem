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

import { twoSumTwoPassMap, twoSumBruteForce, twoSumSorted , twoSumSlidingWindow, twoSumBinarySearch, twoSumSet, twoSumHashMap} from '../../src/003twosum/twosum.js';
import { twoSumAllBruteForce, twoSumAllSorted, twoSumAllSet, twoSumAllBinarySearch, twoSumAllHashMap, twoSumAllSlidingWindow,  twoSumAllTwoPassMap} from '../../src/003twosum/twosumallindexes.js'
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

let array = [1,1,2,3,3,4,5,5,6,6,7,9,];
let target = 8

console.log('BruteForceLoop:', benchmark(twoSumBruteForce, array, target), 'ms');
console.log('SumSorted+Pointer', benchmark(twoSumSorted,array, target), 'ms');
console.log('HashMap',benchmark(twoSumHashMap,array, target), 'ms');
console.log('HashSet', benchmark(twoSumSet, array, target), 'ms');
console.log('HashMapTwoPointer', benchmark(twoSumTwoPassMap,array, target), 'ms');
console.log('BinarySearch', benchmark(twoSumBinarySearch, array, target), 'ms');
console.log('SlidingWindow', benchmark(twoSumSlidingWindow, array, target), 'ms');

console.log(twoSumBruteForce(array, target));
console.log(twoSumSorted(array, target));
console.log(twoSumHashMap(array, target));
console.log(twoSumSet(array, target));
console.log(twoSumTwoPassMap(array,target));
console.log(twoSumBinarySearch(array, target));
console.log(twoSumSlidingWindow(array, target));


console.log('BruteForceLoop:', benchmark(twoSumAllBruteForce, array, target), 'ms');
console.log('SumSorted+Pointer', benchmark(twoSumAllSorted,array, target), 'ms');
console.log('HashMap',benchmark(twoSumAllHashMap,array, target), 'ms');
console.log('HashSet', benchmark(twoSumAllSet, array, target), 'ms');
console.log('HashMapTwoPointer', benchmark(twoSumAllTwoPassMap,array, target), 'ms');
console.log('BinarySearch', benchmark(twoSumAllBinarySearch, array, target), 'ms');
console.log('SlidingWindow', benchmark(twoSumAllSlidingWindow, array, target), 'ms');

console.log(twoSumAllBruteForce(array, target));
console.log(twoSumAllSorted(array, target));
console.log(twoSumAllHashMap(array, target));
console.log(twoSumAllSet(array, target));
console.log(twoSumAllTwoPassMap(array,target));
console.log(twoSumAllBinarySearch(array, target));
console.log(twoSumAllSlidingWindow(array, target));


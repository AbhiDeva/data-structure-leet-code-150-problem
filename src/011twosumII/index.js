/**
 * Given an array of numbers and a target,
  find if any two numbers add up to the target.
  Input array is Sorted 
 */

/* Brute Force Approach
* Idea
*Try all pairs (i, j) where i < j and check if their sum equals target.
*/

function twoSumBruteForce(nums, target) {
  const n = nums.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] + nums[j] === target) {
        return [i + 1, j + 1]; // 1-indexed
      }
    }
  }

  return [];
}


/**
 * Binary Search Approach
 *  Idea
 * For each element nums[i],
 * perform binary search for target - nums[i] in the remaining array (i+1...n-1).
 */

function twoSumBinarySearch(nums, target) {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    let low = i + 1, high = n - 1;
    const complement = target - nums[i];

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);

      if (nums[mid] === complement) {
        return [i + 1, mid + 1]; // 1-indexed
      } else if (nums[mid] < complement) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return [];
}


/**
 * Two-Pointer Approach (Optimal)
 * (Bonus — best for sorted inputs)
 * Idea
 * Use two pointers: one at start, one at end.
 * Move pointers based on sum comparison.
 */

function twoSumTwoPointer(nums, target) {
  let left = 0, right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) return [left + 1, right + 1];
    if (sum < target) left++;
    else right--;
  }

  return [];
}

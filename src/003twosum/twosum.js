/**
 * Given an array of numbers and a target, find if any two numbers add up to the target.
 */

/**
 * 1. Brute Force Approach
 * 2. Sorting + Two Pointer 
 * 3. HashMap (optimal)
 * 4. Using a Set (Variation of HashMap)
 * 5. Binary Search (Works only if array is sorted)
 * 6. Two-Pass HashMap (Alternative Optimal)
 * 7. Math Trick (Special Constraint Case)
 */


/*
Idea: Brute Force Approach
Check every possible pair (i, j) to see if nums[i] + nums[j] === target.
*/

export function twoSumBruteForce(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]; // return indices (like LeetCode)
      }
    }
  }
  return null; // no pair found
}

/*
* Idea: Brute Force Approach
* Sort the array (but remember sorting changes indices).
* Use two pointers (left, right) to find a pair that sums to the target.
* If sum < target, move left++; if sum > target, move right--.
* ⚠️ Note: If you need original indices, store (value, index) pairs before sorting.
*/

export function twoSumSorted(nums, target) {
  // Keep original indices
  const arr = nums.map((num, index) => [num, index]);
  arr.sort((a, b) => a[0] - b[0]); // sort by value

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left][0] + arr[right][0];
    if (sum === target) {
      return [arr[left][1], arr[right][1]]; // return original indices
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return null;
}

/***
 *  HashMap (Optimal Approach)
 *  Loop through array once.
 * For each number, check if target - num exists in a map.
 * If yes → found pair.
 * Otherwise → store number → index in map.
 */

export function twoSumHashMap(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return null;
}

/***
 *  Using a Set (Variation of HashMap)
 *  If you only need to check if a pair exists (not indices),
 *  you can use a Set for faster and cleaner logic.
 */
export function twoSumSet(nums, target) {
  const seen = new Set();

  for (let num of nums) {
    const complement = target - num;
    if (seen.has(complement)) return true;
    seen.add(num);
  }

  return false;
}


/**
 *  Binary Search (Works only if array is sorted)
 *  Idea
 *  For every element nums[i], use binary search to find target - nums[i].
 * Works efficiently when the array is already sorted.
 */

export function twoSumBinarySearch(nums, target) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    let left = i + 1, right = nums.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === complement) return true;
      if (nums[mid] < complement) left++;
      else right--;
    }
  }
  return false;
}

/**
 * Two-Pass HashMap (Alternative Optimal)
 * Idea: First pass → store each value with its index.
 * Second pass → check if complement exists in the map (and not same index).
 */

 export function twoSumTwoPassMap(nums, target) {
  const map = new Map();

  // 1st pass - store values
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  // 2nd pass - check complements
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement) && map.get(complement) !== i) {
      return [i, map.get(complement)];
    }
  }

  return null;
}

/***
 * 7. Math Trick (Special Constraint Case)
 * Idea
 * If the array is sorted and non-negative,
 * you can use prefix sums or sliding window —
 * but only when numbers are positive and increasing.
 */

export function twoSumSlidingWindow(nums, target) {
  let left = 0, right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) return [left, right];
    if (sum < target) left++;
    else right--;
  }

  return null;
}

//export default { twoSumTwoPassMap, twoSumBruteForce, twoSumSorted , twoSumSlidingWindow, twoSumBinarySearch, twoSumSet, twoSumHashMap };





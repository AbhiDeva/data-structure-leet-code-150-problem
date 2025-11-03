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
  return []; // no pair found
}

/*
* Idea: Sorting + TWO POINTER
* Sort the array (but remember sorting changes indices).
* Use two pointers (left, right) to find a pair that sums to the target.
* If sum < target, move left++; if sum > target, move right--.
* ⚠️ Note: If you need original indices, store (value, index) pairs before sorting.
*/

export function twoSumSorted(nums, target) {
  // Keep original indices
  const arr = nums.map((num, index) => [num, index]);
  arr.sort((a, b) => a.num - b.num); // sort by value

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left].num + arr[right].num;
    if (sum === target) {
      return [arr[left].index, arr[right].index]; // return original indices
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
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

  return [];
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
  // Create array with original indices
  const arr = nums.map((num, index) => ({ num, index }));
  arr.sort((a, b) => a.num - b.num);

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i].num;
    let left = i + 1;
    let right = arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      
      if (arr[mid].num === complement) {
        return [arr[i].index, arr[mid].index];
      } else if (arr[mid].num < complement) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return [];
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

  return [];
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

  return [];
}






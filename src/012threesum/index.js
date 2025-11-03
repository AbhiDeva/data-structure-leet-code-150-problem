/**
 * Give an integer array nums,
 * return all triplets in arrays
 * [nums[i], nums[j], nums[k]]
 * such i!=j , i!=k, and j!=k 
 * and nums[i]+nums[j]+nums[k] === 0
 * 
 */

/**
 * Brute Force Approach
 * Check all possible triplets and store unique ones.
 * Idea
 * Use 3 nested loops → i, j, k
 * If nums[i] + nums[j] + nums[k] == 0, store it
 * Use Set (or string representation) to avoid duplicates
 */

function threeSumBruteForce(nums) {
  const result = new Set();
  const n = nums.length;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
          result.add(JSON.stringify(triplet)); // store as string for uniqueness
        }
      }
    }
  }

  return Array.from(result).map(JSON.parse);
}

/**
 * Hashing Approach (Better O(n²))
 * Idea
 * Sort the array (important for avoiding duplicates).
 * Fix one number nums[i].
 * Use a Set to find pairs in the remaining subarray that sum up to -nums[i]
 */

function threeSumHashing(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  const n = nums.length;

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicates
    const seen = new Set();
    for (let j = i + 1; j < n; j++) {
      const complement = -nums[i] - nums[j];
      if (seen.has(complement)) {
        result.push([nums[i], nums[j], complement].sort((a, b) => a - b));
        // skip duplicates in j
        while (j + 1 < n && nums[j] === nums[j + 1]) j++;
      }
      seen.add(nums[j]);
    }
  }

  // remove duplicates from result
  const unique = new Set(result.map(JSON.stringify));
  return Array.from(unique).map(JSON.parse);
}


/**
 * Two Pointer (Optimal) Approach — O(n²)
 * Idea
 * Sort the array (so we can skip duplicates easily and use two pointers).
 * Fix one element (nums[i]).
 * Use two pointers (left and right) to find pairs such that:
 * If sum < 0 → move left++
 * If sum > 0 → move right--
 * If sum == 0 → store result, then move both pointers skipping duplicates.
 */

function threeSumTwoPointer(nums) {
  nums.sort((a, b) => a - b); // Step 1: sort
  const result = [];
  const n = nums.length;

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicate 'i'

    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        // skip duplicates for left
        while (left < right && nums[left] === nums[left - 1]) left++;
        // skip duplicates for right
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) {
        left++; // increase sum
      } else {
        right--; // decrease sum
      }
    }
  }

  return result;
}

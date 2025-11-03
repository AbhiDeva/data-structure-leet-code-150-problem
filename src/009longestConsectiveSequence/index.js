/**
 * Given an unsorted array of integers, find the length of the longest consecutive sequence.
 * 
 */

/**
 * Brute Force Approach
 */

function longestConsecutiveBruteForce(nums) {
  if (!nums.length) return 0;
  let longest = 0;

  for (let num of nums) {
    let length = 1;
    let next = num + 1;

    while (nums.includes(next)) {
      length++;
      next++;
    }

    longest = Math.max(longest, length);
  }

  return longest;
}


/**
 * Sorting Approach
 * Sort array first → consecutive elements become neighbors.
 * Then, count the longest streak.
 */

function longestConsecutiveSorted(nums) {
  if (!nums.length) return 0;
  nums.sort((a, b) => a - b);

  let longest = 1;
  let curr = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue; // skip duplicates
    if (nums[i] === nums[i - 1] + 1) {
      curr++;
    } else {
      longest = Math.max(longest, curr);
      curr = 1;
    }
  }

  return Math.max(longest, curr);
}

/**
 * HashSet Approach (Optimal)
 * Store all numbers in a Set for O(1) lookup.
 * Only start counting sequences when num - 1 is not in the set (means it’s a sequence start).
 */

function longestConsecutiveHashSet(nums) {
  const set = new Set(nums);
  let longest = 0;

  for (let num of set) {
    // start of sequence
    if (!set.has(num - 1)) {
      let curr = num;
      let length = 1;

      while (set.has(curr + 1)) {
        curr++;
        length++;
      }

      longest = Math.max(longest, length);
    }
  }

  return longest;
}


/**
 * Union-Find (Disjoint Set) — for Educational Interest
 * Group consecutive numbers into connected components using union-find.
 * Largest set size = longest sequence.
 * 
 */

function longestConsecutiveUnionFind(nums) {
  if (!nums.length) return 0;
  const parent = new Map();
  const size = new Map();

  const find = (x) => {
    if (parent.get(x) !== x) parent.set(x, find(parent.get(x)));
    return parent.get(x);
  };

  const union = (a, b) => {
    const rootA = find(a);
    const rootB = find(b);
    if (rootA === rootB) return;
    if (size.get(rootA) < size.get(rootB)) {
      parent.set(rootA, rootB);
      size.set(rootB, size.get(rootA) + size.get(rootB));
    } else {
      parent.set(rootB, rootA);
      size.set(rootA, size.get(rootA) + size.get(rootB));
    }
  };

  // init sets
  for (let num of nums) {
    parent.set(num, num);
    size.set(num, 1);
  }

  for (let num of nums) {
    if (parent.has(num + 1)) union(num, num + 1);
  }

  return Math.max(...size.values());
}

/**
 * HashMap (Dynamic Sequence Length Tracking)
 * Track sequence lengths dynamically using a map to merge intervals.
 */

function longestConsecutiveHashMap(nums) {
  const map = new Map();
  let longest = 0;

  for (let num of nums) {
    if (map.has(num)) continue;

    const left = map.get(num - 1) || 0;
    const right = map.get(num + 1) || 0;
    const sum = left + right + 1;

    map.set(num, sum);
    map.set(num - left, sum);
    map.set(num + right, sum);

    longest = Math.max(longest, sum);
  }

  return longest;
}


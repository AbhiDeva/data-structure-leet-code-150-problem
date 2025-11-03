export function twoSumAllBruteForce(nums, target) {
  const pairs = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        pairs.push([i, j]);
      }
    }
  }

  return pairs;
}


export function twoSumAllHashMap(nums, target) {
  const map = new Map();
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      // There might be multiple indices for same number
      for (let index of map.get(complement)) {
        result.push([index, i]);
      }
    }

    if (!map.has(nums[i])) {
      map.set(nums[i], []);
    }
    map.get(nums[i]).push(i);
  }

  return result;
}

export function twoSumAllSorted(nums, target) {
  nums.sort((a, b) => a - b);
  const result = [];
  let left = 0, right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) {
      result.push([nums[left], nums[right]]);
      left++;
      right--;
      while (left < right && nums[left] === nums[left - 1]) left++;
      while (left < right && nums[right] === nums[right + 1]) right--;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return result;
}

export function twoSumAllTwoPassMap(nums, target) {
  const map = new Map();
  const result = [];

  // First pass: group indices
  nums.forEach((num, i) => {
    if (!map.has(num)) map.set(num, []);
    map.get(num).push(i);
  });

  // Second pass: find complements
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      for (let j of map.get(complement)) {
        if (i < j) result.push([i, j]);
      }
    }
  }

  return result;
}

export function twoSumAllSet(nums, target) {
  const seen = new Set();
  const result = new Set(); // To avoid duplicates

  for (let num of nums) {
    const complement = target - num;
    if (seen.has(complement)) {
      result.add([Math.min(num, complement), Math.max(num, complement)].toString());
    }
    seen.add(num);
  }

  return Array.from(result).map(str => str.split(',').map(Number));
}


export function twoSumAllBinarySearch(nums, target) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    let left = i + 1, right = nums.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === complement) {
        result.push([nums[i], nums[mid]]);
        break;
      }
      if (nums[mid] < complement) left++;
      else right--;
    }
  }

  return result;
}

export function twoSumAllSlidingWindow(nums, target) {
  let left = 0, right = nums.length - 1;
  const result = [];

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) {
      result.push([left, right]);
      left++;
      right--;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return result;
}







/***
 * Given an integer array nums, return an array output such that
*output[i] = product of all elements of nums except nums[i].
* Input:  nums = [1,2,3,4]
Output: [24,12,8,6]
 */

/** Brute force approach */

function productExceptSelfBrute(nums) {
  const n = nums.length;
  const result = [];

  for (let i = 0; i < n; i++) {
    let prod = 1;
    for (let j = 0; j < n; j++) {
      if (i !== j) prod *= nums[j];
    }
    result.push(prod);
  }

  return result;
}


/**
 * Prefix & Postfix Arrays
 * Logic:
 * prefix[i] = product of all elements before index i.
 * postfix[i] = product of all elements after index i.
 * result[i] = prefix[i] * postfix[i].
 */

function productExceptSelfPrefixPostfix(nums) {
  const n = nums.length;
  const prefix = Array(n).fill(1);
  const postfix = Array(n).fill(1);
  const result = Array(n).fill(1);

  // prefix products
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  // postfix products
  for (let i = n - 2; i >= 0; i--) {
    postfix[i] = postfix[i + 1] * nums[i + 1];
  }

  // multiply prefix * postfix
  for (let i = 0; i < n; i++) {
    result[i] = prefix[i] * postfix[i];
  }

  return result;
}


/***
 * Prefix & Postfix Variables (Optimized)
 * storing separate arrays, use prefix pass and postfix variable.
 * 
 */

function productExceptSelfOptimized(nums) {
  const n = nums.length;
  const result = Array(n).fill(1);

  // prefix pass
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  // postfix pass
  let postfix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= postfix;
    postfix *= nums[i];
  }

  return result;
}

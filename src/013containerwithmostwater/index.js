/**
 *  Leet Code - Container With Most Water
 *  You are given an integer array height of length n
 * there are n vertical lines drawn such that the two endpoints of the ith line are(i, 0)
 *  and (i, height(i))
 * find two lines that integer with the x-axis from a container contain the most water
 * Return the maximium amount of water a container can store
 * 
 */

/**
 * Brute Force Approach
 * Idea
 * Compare every pair (i, j) and calculate area.
 */

function maxAreaBruteForce(height) {
  let maxArea = 0;
  const n = height.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const area = Math.min(height[i], height[j]) * (j - i);
      maxArea = Math.max(maxArea, area);
    }
  }

  return maxArea;
}

/**
 * Two Pointer Optimal Approach
 * Intuition
 * Use two pointers: one at start (left), one at end (right).
 * Calculate area each time.
 * Move the pointer with smaller height, since that’s the limiting factor for the water height.
 * Keep updating the maximum area.
 */

function maxAreaTwoPointer(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const width = right - left;
    const h = Math.min(height[left], height[right]);
    const area = width * h;
    maxArea = Math.max(maxArea, area);

    // Move the smaller height inward
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}


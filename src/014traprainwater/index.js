/****
 * Trapping Rain water
 *  given n non-negative integers/representing an elevation map
 * where the width of each bar is 1  
 * compute how much water it can trap after raining 
 */

/***
 *  Brute Force 
 * Brute Force — O(n²)
 * Intuition
 * For every element, find:
 * The maximum bar on its left
 * The maximum bar on its right
 * Then,water[i] = min(leftMax, rightMax) - height[i]
 * Add all water[i].
 */

function trapBruteForce(height) {
  const n = height.length;
  let total = 0;

  for (let i = 0; i < n; i++) {
    let leftMax = 0, rightMax = 0;

    for (let l = 0; l <= i; l++) leftMax = Math.max(leftMax, height[l]);
    for (let r = i; r < n; r++) rightMax = Math.max(rightMax, height[r]);

    total += Math.min(leftMax, rightMax) - height[i];
  }

  return total;
}
/***
 * LMax & RMax Precomputation — O(n)
 * Idea
 * Instead of recomputing left & right maximums for each index,
 * precompute them using two arrays:
 * leftMax[i] = max(height[0..i])
 * rightMax[i] = max(height[i..n-1])
 * Then:
 * water[i] = min(leftMax[i], rightMax[i]) - height[i]
 */

function trapLmaxRmax(height) {
  const n = height.length;
  if (n === 0) return 0;

  const leftMax = Array(n);
  const rightMax = Array(n);

  leftMax[0] = height[0];
  for (let i = 1; i < n; i++) leftMax[i] = Math.max(leftMax[i - 1], height[i]);

  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) rightMax[i] = Math.max(rightMax[i + 1], height[i]);

  let total = 0;
  for (let i = 0; i < n; i++) {
    total += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  return total;
}

/***
 * Two Pointer (Optimal) — O(n), O(1) Space
 * Idea
 * We can avoid the extra space for leftMax[] and rightMax[].
 * Use two pointers (left, right) and keep running leftMax & rightMax variables.
 * At every step:
 * Whichever side is smaller decides the trapped water, because it limits the height.
 */

function trapTwoPointer(height) {
  let left = 0, right = height.length - 1;
  let leftMax = 0, rightMax = 0, total = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        total += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        total += rightMax - height[right];
      }
      right--;
    }
  }

  return total;
}

/**
 * Monotonic Stack Approach — O(n), Interesting Alternative
 * Idea
 * Use a stack to keep track of bars.
 * When we find a bar higher than the top of stack,
 * we’ve found a right boundary — pop, calculate water trapped, and continue.
 */

function trapStack(height) {
  const stack = [];
  let total = 0;
  let current = 0;

  while (current < height.length) {
    while (stack.length && height[current] > height[stack[stack.length - 1]]) {
      const top = stack.pop();
      if (!stack.length) break;
      const distance = current - stack[stack.length - 1] - 1;
      const boundedHeight = Math.min(height[current], height[stack[stack.length - 1]]) - height[top];
      total += distance * boundedHeight;
    }
    stack.push(current++);
  }

  return total;
}

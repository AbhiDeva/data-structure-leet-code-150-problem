/**
 * “Given an integer array nums, return the k most frequent elements.”
 * Brute Force Approach
 * Count frequencies manually (using nested loops)
 * Sort by frequency (O(n²))
 */

function topKFrequentBrute(nums, k) {
  const freq = [];

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) count++;
    }
    freq.push([nums[i], count]);
  }

  // remove duplicates
  const unique = Array.from(new Map(freq).entries());

  // sort by frequency descending
  unique.sort((a, b) => b[1] - a[1]);

  // extract top k
  return unique.slice(0, k).map(([num]) => num);
}

/**
 * HashMap + Sorting (Efficient & Simple)
 * Build a frequency map.
 * Convert to array of [num, freq].
 * Sort by frequency descending.
 * Take top k.
 */

function topKFrequentSort(nums, k) {
  const freqMap = new Map();

  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // sort entries by frequency
  const sorted = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);

  return sorted.slice(0, k).map(([num]) => num);
}

/***
 * 3. HashMap + Priority Queue (Heap)
 * Build frequency map.
 * Use a min heap of size k to keep top frequent elements.
 * Pop smallest frequency if heap exceeds k.
 */

class MinHeap {
  constructor() {
    this.data = [];
  }

  push([num, freq]) {
    this.data.push([num, freq]);
    this._heapifyUp();
  }

  pop() {
    if (this.size() === 1) return this.data.pop();
    const top = this.data[0];
    this.data[0] = this.data.pop();
    this._heapifyDown();
    return top;
  }

  size() { return this.data.length; }

  _heapifyUp() {
    let i = this.data.length - 1;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.data[i][1] >= this.data[parent][1]) break;
      [this.data[i], this.data[parent]] = [this.data[parent], this.data[i]];
      i = parent;
    }
  }

  _heapifyDown() {
    let i = 0;
    const n = this.data.length;
    while (true) {
      let smallest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;

      if (left < n && this.data[left][1] < this.data[smallest][1]) smallest = left;
      if (right < n && this.data[right][1] < this.data[smallest][1]) smallest = right;

      if (smallest === i) break;
      [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];
      i = smallest;
    }
  }
}

function topKFrequentHeap(nums, k) {
  const freqMap = new Map();
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const heap = new MinHeap();

  for (const [num, freq] of freqMap.entries()) {
    heap.push([num, freq]);
    if (heap.size() > k) heap.pop();
  }

  return heap.data.map(([num]) => num);
}

/***
 * 4. HashMap + Bucket Sort (Best for Linear Time)
 * Build a frequency map.
 * Create “buckets” where index = frequency.
 * Flatten buckets from high to low.
 */

function topKFrequentBucket(nums, k) {
  const freqMap = new Map();
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const buckets = Array(nums.length + 1).fill(null).map(() => []);
  for (const [num, freq] of freqMap.entries()) {
    buckets[freq].push(num);
  }

  const result = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    result.push(...buckets[i]);
  }

  return result.slice(0, k);
}

/***
 * Counting Sort Optimization (When Range is Small)
 * If the numbers have a small, known range (e.g., 0–1000), you can use a direct frequency array instead of a Map or Hash.
 */

function topKFrequentCountingSort(nums, k) {
  const maxVal = Math.max(...nums);
  const count = new Array(maxVal + 1).fill(0);

  for (const num of nums) count[num]++;

  const freqArr = count
    .map((freq, num) => [num, freq])
    .filter(([num, freq]) => freq > 0)
    .sort((a, b) => b[1] - a[1]);

  return freqArr.slice(0, k).map(([num]) => num);
}


/**
 * Quickselect (Partial Sorting / k-th Largest)
 * sorting the entire array, use a partition algorithm (like QuickSort’s partition step) to find the k most frequent elements.
 * 
 */

function topKFrequentQuickSelect(nums, k) {
  const freqMap = new Map();
  for (let num of nums) freqMap.set(num, (freqMap.get(num) || 0) + 1);

  const unique = [...freqMap.keys()];

  function partition(left, right, pivotIdx) {
    const pivotFreq = freqMap.get(unique[pivotIdx]);
    [unique[pivotIdx], unique[right]] = [unique[right], unique[pivotIdx]];
    let storeIdx = left;
    for (let i = left; i < right; i++) {
      if (freqMap.get(unique[i]) < pivotFreq) {
        [unique[i], unique[storeIdx]] = [unique[storeIdx], unique[i]];
        storeIdx++;
      }
    }
    [unique[right], unique[storeIdx]] = [unique[storeIdx], unique[right]];
    return storeIdx;
  }

  function quickSelect(left, right, kSmallest) {
    if (left === right) return;
    const pivotIdx = Math.floor(Math.random() * (right - left + 1)) + left;
    const pivotFinal = partition(left, right, pivotIdx);
    if (pivotFinal === kSmallest) return;
    else if (pivotFinal < kSmallest) quickSelect(pivotFinal + 1, right, kSmallest);
    else quickSelect(left, pivotFinal - 1, kSmallest);
  }

  quickSelect(0, unique.length - 1, unique.length - k);
  return unique.slice(unique.length - k);
}


/**
 * Streaming / Online Top-K (Dynamic Data)
 * input is a data stream (continuous input), you can maintain the top K elements on the fly using a min-heap
 * 
 */

function topKFrequentStreaming(stream, k) {
  const freq = new Map();
  const heap = [];

  for (const num of stream) {
    freq.set(num, (freq.get(num) || 0) + 1);

    const entry = [num, freq.get(num)];
    const existingIndex = heap.findIndex(([n]) => n === num);
    if (existingIndex >= 0) heap.splice(existingIndex, 1);

    heap.push(entry);
    heap.sort((a, b) => a[1] - b[1]);

    if (heap.length > k) heap.shift(); // pop smallest freq
  }

  return heap.map(([num]) => num);
}

/**
 * Using Map + Reduce / Functional Programming
 * cleaner, declarative style — not the fastest, but expressive.
 * 
 */

function topKFrequentFunctional(nums, k) {
  const freq = nums.reduce((map, n) => {
    map.set(n, (map.get(n) || 0) + 1);
    return map;
  }, new Map());

  return [...freq.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([n]) => n);
}


/***
 * Using Map + Array.from() + Custom Comparator
 * 
 */

function topKFrequentModern(nums, k) {
  const freq = new Map();
  nums.forEach(n => freq.set(n, (freq.get(n) || 0) + 1));

  return Array.from(freq)
    .sort(([, a], [, b]) => b - a)
    .slice(0, k)
    .map(([n]) => n);
}


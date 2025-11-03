/**
 * Given an array of strings, group all the anagrams together.
 * Example: Input: ["eat", "tea", "tan", "ate", "nat", "bat"];
 * Output: [["eat","tea","ate"],["tan","nat"],["bat"]];
 */

/**
 * BRUTE FORCE - O(n² × k log k)
 * Compare each word with existing groups
 */

export function groupAnagramsBruteForce(strs) {
  const groups = [];

  for (let i = 0; i < strs.length; i++) {
    let found = false;

    // check if current word belongs to any existing group
    for (let group of groups) {
      if (isAnagram(strs[i], group[0])) {
        group.push(strs[i]);
        found = true;
        break;
      }
    }

    // if not found in any group, create new group
    if (!found) groups.push([strs[i]]);
  }

  return groups;
}


// Helper : check if two words are anagrams
function isAnagram(a, b) {
  if (a.length !== b.length) return false;
  return a.split('').sort().join('') === b.split('').sort().join('');
}


/**
 * Sorting key (Optimized and Common)
 * O(n × k log k)
 * Sort characters of each word — same sorted form = same group.
 */

export function groupAnagramsSort(strs) {
  const map = new Map();

  for (let word of strs) {
    // Create sorted key: "eat" -> "aet"
    const key = word.split('').sort().join('');
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(word);
  }

  return Array.from(map.values());
}


/**
 * Character Frequency (Hash Map of 26 counts)
 * O(n × k)
 * Avoid sorting — use frequency counts as unique keys.
 */

function groupAnagramsCharCount(strs) {
  const map = new Map();

  for (let word of strs) {
    // Count frequency of each character
    const count = new Array(26).fill(0);
    for (let ch of word) {
      count[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
     // Create unique key from counts
    const key = count.join('#'); // unique signature
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(word);
  }

  return Array.from(map.values());
}


/**
 * Using Object Instead of Map
 * O(n × k log k)
 * Uses plain object instead of Map
 * For simpler syntax when key is string-based:
 */

function groupAnagramsObject(strs) {
  const obj = {};

  for (let word of strs) {
    const key = word.split('').sort().join('');
    obj[key] = obj[key] ? [...obj[key], word] : [word];
  }

  return Object.values(obj);
}

/**
 * Prime Multiplication Hash - O(n × k)
 * Mathematical hashing using unique primes for each letter.
 * Assign each letter a unique prime number (2,3,5,7,…).
 */

export function groupAnagramsPrime(strs) {
  // Assign unique prime to each letter a-z
  const primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43,
    47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101
  ];

  const map = new Map();

  for (const word of strs) {
    let hash = 1n; // Use BigInt to prevent overflow
    // Multiply primes for each character
    for (const ch of word) {
      hash *= BigInt(primes[ch.charCodeAt(0) - 97]);
    }
    const key = hash.toString();
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(word);
  }

  return Array.from(map.values());
}


/**
 * Canonical Hash (Character Frequency Key as Object)
 * O(n × k)
 * Instead of a string signature,
 *
 *  store each word’s frequency in a fixed JSON-like key.
 *  Uses JSON.stringify for unique key
 */

export function groupAnagramsCanonical(strs) {
  const map = {};

  for (const word of strs) {
    const freq = new Array(26).fill(0);
    for (const ch of word) {
      freq[ch.charCodeAt(0) - 97]++;
    }

    // JSON.stringify used as canonical key
    const key = JSON.stringify(freq);
    map[key] = map[key] ? [...map[key], word] : [word];
  }

  return Object.values(map);
}

/**
 * Trie (Prefix Tree) Based Grouping
 * Build a Trie where each branch corresponds to sorted letters.
 * Words that end at the same node are anagrams.
 * O(n × k log k)
 * Build prefix tree with sorted characters
 */

class TrieNode {
  constructor() {
    this.children = {};
    this.words = [];
  }
}

function groupAnagramsTrie(strs) {
  const root = new TrieNode();

  // Insert each word into trie
  for (const word of strs) {
    const sorted = word.split('').sort().join('');
    let node = root;
    for (const ch of sorted) {
      if (!node.children[ch]) node.children[ch] = new TrieNode();
      node = node.children[ch];
    }
    node.words.push(word);
  }

  // Collect all word groups
  const result = [];
  function dfs(node) {
    if (node.words.length > 0) result.push(node.words);
    for (const child in node.children) dfs(node.children[child]);
  }
  dfs(root);

  return result;
}

/**
 * Bucket Counting (Fixed-Length Encoding Key)
 * Instead of storing long count.join(","), store a compressed form like a2b0c1....
 * O(n × k)
 * Creates compressed frequency key
 */

function groupAnagramsBucket(strs) {
  const map = new Map();

  for (const word of strs) {
    const count = new Array(26).fill(0);
    for (const ch of word) count[ch.charCodeAt(0) - 97]++;
    // Create compressed key: "a2b1c1" instead of full array
    const key = count.map((c, i) => (c ? `${String.fromCharCode(i + 97)}${c}` : '')).join('');
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(word);
  }

  return Array.from(map.values());
}

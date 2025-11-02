
/**
 * 
 * @param {*} str1 
 * @param {*} str2 
 * @returns 
 * Count characters of str1 in a map.
 * Decrease counts for str2.
 * If all counts are 0 → it’s an anagram.
 * Time: O(n)
 * Space: O(1) (since alphabet size is fixed — at most 26 or 128 depending on charset)
 */

function isAnagramHashMap(str1, str2) {
  if (str1.length !== str2.length) return false;

  const map = {};

  for (let ch of str1) {
    map[ch] = (map[ch] || 0) + 1;
  }

  for (let ch of str2) {
    if (!map[ch]) return false;
    map[ch]--;
  }

  return true;
}
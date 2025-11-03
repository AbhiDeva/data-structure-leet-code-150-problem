/**
 * 
 * @param {*} str1 
 * @param {*} str2 
 * @returns 
 * 
 * Split both strings into arrays.
 * Sort both.
 * Compare if equal.
 * Time Complexity : O(n log n) (sorting both strings)
 * Space Complexity: O(n) (for sorting arrays)
 */

export default function isAnagramBruteSorted(str1, str2) {
  if (str1.length !== str2.length) return false;

  const sorted1 = str1.toLowerCase().split('').sort().join('');
  const sorted2 = str2.toLowerCase().split('').sort().join('');

  return sorted1 === sorted2;
}


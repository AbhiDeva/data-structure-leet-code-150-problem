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

function isAnagramBruteForce(str1, str2) {
  if (str1.length !== str2.length) return false;

  const sorted1 = str1.tolowercase().split('').sort().join('');
  const sorted2 = str2.tolowercase().split('').sort().join('');

  return sorted1 === sorted2;
}


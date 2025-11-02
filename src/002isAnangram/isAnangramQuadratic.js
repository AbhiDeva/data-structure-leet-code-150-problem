/**
 * 
 * @param {*} str1 
 * @param {*} str2 
 * @returns 
 *  Brute Froce approach for looping 
 *  Time Complexity Each indexOf() and splice() is O(n), done for n characters.
 *  Space Complexity Because of arr2 (copy of string2)
 */
function isAnagramQuadratic(str1, str2) {
  if (str1.length !== str2.length) return false;

  let arr2 = str2.split('');

  for (let ch of str1) {
    const index = arr2.indexOf(ch); // O(n)
    if (index === -1) return false;
    arr2.splice(index, 1); // O(n)
  }

  return arr2.length === 0;
}
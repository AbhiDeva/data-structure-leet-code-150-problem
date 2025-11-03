/**
 * Valid Palindrome problem in JavaScript,
which involves checking if a string reads the same forward and backward,
ignoring non-alphanumeric characters and case differences.
 */

/**
 * Brute Force Approach — Clean & Reverse Compare
 * Idea:
Remove all non-alphanumeric chars
Convert to lowercase
Reverse and compare
 */

function isPalindromeBrute(s) {
  const cleaned = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}


/**
 * Two-Pointer Approach — No Full Copy
 * Idea: Use two pointers: left and right
 * Move inward, skip non-alphanumeric characters
 * Compare characters (case-insensitive)
 */

function isPalindromeTwoPointer(s) {
  let left = 0, right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphaNumeric(s[left])) left++;
    while (left < right && !isAlphaNumeric(s[right])) right--;

    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

    left++;
    right--;
  }

  return true;
}

function isAlphaNumeric(char) {
  return /^[a-z0-9]$/i.test(char);
}

/**
 * Optimized Character Code Version (No Regex)
 * Idea: Check characters using ASCII values manually (faster than regex).
 * Valid chars: '0'-'9', 'A'-'Z', 'a'-'z'.
 */

function isPalindromeCharCode(s) {
  let left = 0, right = s.length - 1;

  const isAlphaNum = (ch) => {
    const code = ch.charCodeAt(0);
    return (
      (code >= 48 && code <= 57) ||  // 0-9
      (code >= 65 && code <= 90) ||  // A-Z
      (code >= 97 && code <= 122)    // a-z
    );
  };

  while (left < right) {
    while (left < right && !isAlphaNum(s[left])) left++;
    while (left < right && !isAlphaNum(s[right])) right--;

    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    left++;
    right--;
  }

  return true;
}

/**
 * Using Filter + Join
 * Split into array
 * Filter only alphanumeric
 * Reverse and compare
 */

function isPalindromeFunctional(s) {
  const arr = s
    .toLowerCase()
    .split('')
    .filter(c => /[a-z0-9]/.test(c));

  return arr.join('') === arr.slice().reverse().join('');
}
/**
 * Preprocessing using replaceAll and normalize
 * If the input may contain Unicode accents (e.g. “Ábã”),
 * you can normalize before comparing:
 */

function isPalindromeUnicode(s) {
  const cleaned = s
    .normalize('NFD')               // split accents from letters
    .replace(/[\u0300-\u036f]/g, '') // remove accents
    .replace(/[^a-z0-9]/gi, '')      // keep only alphanumeric
    .toLowerCase();

  return cleaned === [...cleaned].reverse().join('');
}

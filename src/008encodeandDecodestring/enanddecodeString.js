/***
 * Implement encode(str) and decode(encodedStr) functions that can:
 *  Convert a string to an encoded form (not necessarily encryption, just transformation),
 * Then reconstruct the exact original string.
 */


/**
 * Using an Extra Character Delimiter
 * Concatenate all strings with a special delimiter (like # or |) that doesn’t appear in the input.
 * 
 */

function encodeExtraChar(strs) {
  return strs.map(s => s.replace(/#/g, '##')).join('#,');
}

function decodeExtraChar(encoded) {
  return encoded.split('#,').map(s => s.replace(/##/g, '#'));
}
/**
 * Fixed-Length Prefix (Length Encoding)
 * Store the length of each string before it, separated by a known marker (e.g., :).
 * This avoids issues with special characters.
 */

function encodeLengthPrefix(strs) {
  return strs.map(s => `${s.length}:${s}`).join('');
}

function decodeLengthPrefix(encoded) {
  const res = [];
  let i = 0;

  while (i < encoded.length) {
    let j = i;
    while (encoded[j] !== ':') j++;
    const len = parseInt(encoded.slice(i, j));
    const word = encoded.slice(j + 1, j + 1 + len);
    res.push(word);
    i = j + 1 + len;
  }
  return res;
}

/**
 * Add 4 Bits to Each Character (Bitwise Encoding)
 * Use bit manipulation — shift or XOR each character’s ASCII code to create an encoded version.
 * To decode, reverse the operation.
 */

function encodeAddBits(str) {
  let encoded = '';
  for (let ch of str) {
    encoded += String.fromCharCode(ch.charCodeAt(0) + 4);
  }
  return encoded;
}

function decodeAddBits(encoded) {
  let decoded = '';
  for (let ch of encoded) {
    decoded += String.fromCharCode(ch.charCodeAt(0) - 4);
  }
  return decoded;
}

/**
 * Base64 Encoding (Browser Built-in)
 * Use built-in btoa() (browser-safe Base64 encoding).
 * For decoding, use atob().
 */

function encodeBase64(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

function decodeBase64(encoded) {
  return decodeURIComponent(escape(atob(encoded)));
}

/**
 * JSON Serialization (for Array of Strings)
 */

function encodeJSON(strs) {
  return JSON.stringify(strs);
}

function decodeJSON(encoded) {
  return JSON.parse(encoded);
}

/**
 * UTF-8 Safe Base64 Encoding/Decoding
 */

function encodeBase64Unicode(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

function decodeBase64Unicode(encoded) {
  return decodeURIComponent(escape(atob(encoded)));
}

/**
 * Encode Using TextEncoder / TextDecoder (Modern & Fast)
 */
function encodeUTF8(str) {
  const encoder = new TextEncoder();
  const bytes = encoder.encode(str);
  return Array.from(bytes).join(',');
}

function decodeUTF8(encodedStr) {
  const decoder = new TextDecoder();
  const bytes = new Uint8Array(encodedStr.split(',').map(Number));
  return decoder.decode(bytes);
}

/**
 * Safe Character Mapping (Using CodePoint)
 * Instead of charCodeAt(), use codePointAt() for full Unicode.
 */

function encodeAddBitsUnicode(str) {
  return Array.from(str).map(ch => String.fromCodePoint(ch.codePointAt(0) + 4)).join('');
}

function decodeAddBitsUnicode(encoded) {
  return Array.from(encoded).map(ch => String.fromCodePoint(ch.codePointAt(0) - 4)).join('');
}

/**
 * Binary (Hex) Representation Encoding
 */

function encodeHex(str) {
  return Array.from(str)
    .map(ch => ch.codePointAt(0).toString(16).padStart(4, '0'))
    .join(' ');
}

function decodeHex(hexStr) {
  return hexStr
    .split(' ')
    .map(h => String.fromCodePoint(parseInt(h, 16)))
    .join('');
}
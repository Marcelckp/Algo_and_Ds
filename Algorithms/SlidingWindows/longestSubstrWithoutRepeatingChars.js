function longestSubWithoutRepeatingChars(str) {
  // Easy way to remove spaces from the string
  // str = str.replaceAll(" ", "");
  // We use the map to detect the repeating characters
  const map = new Map();

  let windowStart,
    windowEnd,
    maxLength = 0,
    tempLength = 0;

  for (windowStart = 0, windowEnd = 0; windowEnd < str.length; windowEnd++) {
    // Check if we have seen the value before
    if (map.has(str[windowEnd])) {
      // Set the positions of the window to the repeating value
      windowStart, (windowEnd = map.get(str[windowEnd]) + 1);

      // Clear the map to start a new window from the current value
      map.clear();

      // Set the current value that caused the window to close as the first value in the new window and store its index in the map to store its index to be used as the start of the new window
      map.set(str[windowEnd], windowEnd);

      if (tempLength > maxLength) {
        maxLength = tempLength;
      }

      tempLength = 1;
      continue;
    } else {
      // More difficult way to exclude spaces from counting within the string
      if (str[windowEnd] !== " ") {
        map.set(str[windowEnd], windowEnd);
        tempLength++;
      }
    }
  }

  return maxLength > tempLength ? maxLength : tempLength;
}

console.log(longestSubWithoutRepeatingChars("abcabcbb")); // Output: 3
console.log(longestSubWithoutRepeatingChars("bbbbb")); // Output: 1
console.log(longestSubWithoutRepeatingChars("pwwkew")); // Output: 3
console.log(longestSubWithoutRepeatingChars("")); // Output: 0
console.log(longestSubWithoutRepeatingChars("abba")); // Output: 2
console.log(longestSubWithoutRepeatingChars("aab")); // Output: 2
console.log(longestSubWithoutRepeatingChars("dvdf")); // Output: 3
console.log(longestSubWithoutRepeatingChars("tmmzuxt")); // Output: 5
console.log(longestSubWithoutRepeatingChars("ohvhjdml")); // Output: 6
console.log(longestSubWithoutRepeatingChars("abcabcbb")); // Output: 3
console.log(longestSubWithoutRepeatingChars("abba")); // Output: 2
console.log(longestSubWithoutRepeatingChars("a b c d e")); // Output: 5
console.log(
  longestSubWithoutRepeatingChars(
    "a b c d e f g h i j k l m n o p q r s t u v w x y z"
  )
); // Output: 26
console.log(longestSubWithoutRepeatingChars("a")); // Output: 1
console.log(longestSubWithoutRepeatingChars("aa")); // Output: 1
console.log(longestSubWithoutRepeatingChars("aaa")); // Output: 1
console.log(longestSubWithoutRepeatingChars("aaaa")); // Output: 1

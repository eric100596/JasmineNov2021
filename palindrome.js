function palindrome(str) {
  let reverseStr = str
  .split("")
  .reverse()
  .join("");
  return reverseStr === str;
}

module.exports = palindrome;

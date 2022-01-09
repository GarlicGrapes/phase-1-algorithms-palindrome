function isPalindrome(word) {
  return word == word.split('').reverse().join('')
}


/* 
  return true for if word forward == word backward
*/

/*
  Add written explanation of your solution here
  compares word to word reversed
  reverse is split into an array, reversed, then joined into a new string
  could also work with word.split == word.split.reverse
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

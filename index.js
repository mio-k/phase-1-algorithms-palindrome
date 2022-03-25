function isPalindrome(word) {
  word = word.toLowerCase();
  let splitWord = word.split("");
  let reversedLetters = splitWord.reverse();
  let reversedWord = reversedLetters.join("");
   return word === reversedWord;
}

/* 
  Add your pseudocode here
  take an input and make it all lowercase using toLowerCase.
  split a word into individual letters using split().
  reverse the order of the letters using reverse().
  join the letters back into a string using join().
  compare the original word and the resulting string.
*/

/*
  Add written explanation of your solution here
  Take the word and reverse the letters, then compare it with the original word. If the value matches, then reutrn true, if not return false.
*/

// You can run `node index.js` to view these console logs

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome('pop'));

  console.log("Expecting: false");
  console.log("=>", isPalindrome('dog'));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

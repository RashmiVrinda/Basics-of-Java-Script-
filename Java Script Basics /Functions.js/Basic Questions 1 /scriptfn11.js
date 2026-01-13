function countVowels(text) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("hello"));   // 2
console.log(countVowels("javascript")); // 3

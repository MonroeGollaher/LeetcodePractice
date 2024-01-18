// 13. ROMAN NUMERAL TO INTEGER
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

const romanToInt = (str) => {
  const romanNumeralMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < str.length; i++) {
    const currentSymbol = str[i];
    const nextSymbol = str[i + 1];

    if (romanNumeralMap[currentSymbol] < romanNumeralMap[nextSymbol]) {
      result += romanNumeralMap[nextSymbol] - romanNumeralMap[currentSymbol];
      i++;
    } else {
      result += romanNumeralMap[currentSymbol];
    }
  }

  return result;
};

// PASSES ✅🤠
console.log("NO. 13; ROMAN NUMERAL TO INT: ", romanToInt("MCMXCIV"));

// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

const arrayOne = ["Blue", "Bloom", "Blunder"];
const arrayTwo = ["Baseball", "Football", "Soccer"];

const longestCommonPrefix = (stringArray) => {
  const prefix = stringArray[0].slice(0, 2);

  for (let i = 1; i < stringArray.length; i++) {
    if (!stringArray.length) return "";
    if (stringArray[i].slice(0, 2) !== prefix) {
      return "";
    }
  }
  return prefix;
};

// PASSES ✅🤠
// Returns "Bl"
console.log("NO. 14; LONGEST COMMON PREFIX", longestCommonPrefix(arrayOne));
// Returns ""
console.log("NO. 14; LONGEST COMMON PREFIX", longestCommonPrefix(arrayTwo));

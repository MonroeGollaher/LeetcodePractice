// 1. TWO SUM
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const nums = [2, 7, 11, 15];
const target = 9;

// PASSES ✅🤠
const twoSum = (nums, target) => {
  let hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    const answer = target - nums[i];
    if (answer in hashMap) {
      return [hashMap[answer], i];
    }
    hashMap[nums[i]] = i;
  }
  return [];
};

console.log("NO. 1; twoSum: ", twoSum(nums, target));

//////////////////////////////////////////////////////////////////////////////////////////

// 9. PALIDRONE NUMBER
// Given an integer x, return true if x is a palindrome, and false otherwise.

// PASSES ✅🤠
const isPalindrone = (s) => {
  const str = s.toString();
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
};

// Returns true
console.log("NO. 9; isPalidone number: ", isPalindrone(121));

// Returns false
console.log("NO. 9; isPalidone number: ", isPalindrone(345));

//////////////////////////////////////////////////////////////////////////////////////////

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

// PASSES ✅🤠
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

console.log("NO. 13; ROMAN NUMERAL TO INT: ", romanToInt("MCMXCIV"));

//////////////////////////////////////////////////////////////////////////////////////////

// 14. LONGEST COMMON PREFIX
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

const arrayOne = ["Blue", "Bloom", "Blunder"];
const arrayTwo = ["Baseball", "Football", "Soccer"];
const arrayThree = ["Baseball", "Football", "c"];
const arrayFour = ["Car", "Cherry", "c"];

// PASSES ✅🤠
const longestCommonPrefix = (array) => {
  if (!array.length) return "";

  for (let i = 0; i <= array[0].length; i++) {
    if (
      !array.every(
        (string) => string[i].toUpperCase() === array[0][i].toUpperCase()
      )
    ) {
      return array[0].slice(0, i);
    }
  }

  return array[0];
};

// Returns "Bl"
console.log("NO. 14; LONGEST COMMON PREFIX", longestCommonPrefix(arrayOne));
// Returns ""
console.log("NO. 14; LONGEST COMMON PREFIX", longestCommonPrefix(arrayTwo));
// Returns ""
console.log("NO. 14; LONGEST COMMON PREFIX", longestCommonPrefix(arrayThree));
// Returns "C"
console.log("NO. 14; LONGEST COMMON PREFIX", longestCommonPrefix(arrayFour));

//////////////////////////////////////////////////////////////////////////////////////////

// 20. VALID PARENTHESES
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

const parenthesesTestOne = "[]{}()";
const parenthesesTestTwo = "[]{}(){]";

// PASSES ✅🤠
const validParentheses = (str) => {
  const hashMap = {
    "[": "]",
    "{": "}",
    "(": ")",
  };
  let stack = [];
  for (let character of str) {
    if (hashMap[character]) {
      // character is an opening bracket
      stack.push(hashMap[character]);
    } else if (stack.length > 0 && stack[stack.length - 1] === character) {
      // character is closing bracket and top of stack matches
      stack.pop();
    } else {
      // character is a closing bracket and top of stack does not match
      return false;
    }
  }
  return stack.length === 0;
};

// Returns true
console.log(validParentheses(parenthesesTestOne));
// Returns false
console.log(validParentheses(parenthesesTestTwo));

//////////////////////////////////////////////////////////////////////////////////////////

// 26. REMOVE DUPLICATES FROM ARRAY

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// NOTE:
// Leetcode uses poor phrasing to determine what they want you to submit for this answer. After trial and error I was able to get it to pass because I saw this comment from user @nvythedead.

// "They don't really want you to remove the duplicates. They want you to sort the uniques at the front, then return the length of the sorted part. Then, behind the scenes, they slice the array at the length you give them and the result of that is what they check."

const removeDuplicatesArr = [1, 1, 2];

// PASSES ✅🤠
const removeDuplicates = (numbers) => {
  if (numbers.length === 0) {
    return 0;
  }

  // Position of first unique element.
  let k = 1;
  for (let i = 1; i < numbers.length; i++) {
    // If the current element is different from the previous one, update nums[k] and increment k
    if (numbers[i] !== numbers[i - 1]) {
      numbers[k] = numbers[i];
      k++;
    }
  }

  return k;
};

console.log("removeDuplicates", removeDuplicates(removeDuplicatesArr));

//////////////////////////////////////////////////////////////////////////////////////////

// 27. REMOVE DUPLICATES FROM ARRAY

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

const removeElementArr = [0, 1, 2, 2, 3, 0, 4, 2];

// PASSES ✅🤠
const removeElement = (nums, val) => {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
};

console.log("NO. 27: removeElement", removeElement(removeElementArr, 2));

//////////////////////////////////////////////////////////////////////////////////////////

// 28. FIND THE INDEX OF THE FIRST OCCURENCE IN A STRING

// PASSES ✅🤠
const strStr = (haystack, needle) => {
  return haystack.indexOf(needle);
};

// returns 0
console.log("NO. 28: ", strStr("sadbutsad", "sad"));

// returns -1
console.log("NO. 28: ", strStr("leetcode", "leeto"));

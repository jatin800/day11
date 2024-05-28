// // Increasing Decreasing String
// function func(s) {
//   const chars = s.split("");
//   let count = new Array(26).fill(0);
//   const result = [];
//   for (let char of chars) {
//     count[char.charCodeAt(0) - 97]++;
//   }
//   while (result.length < s.length) {
//     for (let i = 0; i < count.length; i++) {
//       if (count[i] > 0) {
//         result.push(String.fromCharCode(i + 97));
//         count[i]--;
//       }
//     }
//     for (let j = count.length - 1; j >= 0; j--) {
//       if (count[j] > 0) {
//         result.push(String.fromCharCode(j + 97));
//         count[j]--;
//       }
//     }
//   }
//   return result.join("");
// }
// function func(str1, str2) {
//   let s1 = str1.join("");
//   let s2 = str2.join("");
//   return s1 === s2;
// }
// const word1 = ["ab", "c"],
//   word2 = ["a", "bc"];
// console.log(func(word1, word2));
// function func1(first, second, third) {
//   let firstVal = helper(first);
//   let secondVal = helper(second);
//   let thirdVal = helper(third);
//   return firstVal + secondVal === thirdVal;
// }
// function helper(word) {
//   let numerical = "";
//   for (let char of word) {
//     let letterVal = char.charCodeAt(0) - 97;
//     numerical += letterVal;
//   }
//   return parseInt(numerical);
// }
// console.log(func1("acb", "cba", "cdb"));
// function func(s1, s2) {
//   if (s1.length !== s2.length) return false;
//   let missMatched = [];
//   console.log(missMatched);
//   for (let i = 0; i < s1.length; i++) {
//     let charOfS1 = s1[i];
//     let charOfS2 = s2[i];
//     if (charOfS1 !== charOfS2) {
//       missMatched.push(i);
//     }
//   }
//   if (missMatched.length === 0) {
//     return true;
//   } else if (missMatched.length === 2) {
//     const [i, j] = missMatched;
//     return s1[i] === s2[j] && s1[j] === s2[i];
//   } else {
//     return false;
//   }
// }
// console.log(func((s1 = "bank"), (s2 = "kanb")));
// function func(s) {
//   let removeAlphaNumeric = s.toLowerCase().replace(/[^a-z0-9]/g, "");
//   let ulta = removeAlphaNumeric.split("").reverse().join("");
//   return removeAlphaNumeric === ulta;
// }
// console.log(func((s = "A man, a plan, a canal: Panama")));
// function func(s) {
//   debugger;
//   function helper(s, left, right) {
//     while (left < right) {
//       if (s[left] !== s[right]) {
//         return false;
//       }
//       left++;
//       right--;
//     }
//     return true;
//   }
//   let left = 0;
//   let right = s.length - 1;
//   while (left < right) {
//     if (s[left] !== s[right]) {
//       return helper(s, left + 1, right) || helper(s, left, right + 1);
//     }
//     left++;
//     right--;
//   }
//   return true;
// }
// console.log(func((s = "abc")));
// var longestPalindrome = function (s) {
//   let ans = 0;
//   let key = {};
//   for (let char of s) {
//     key[char] = (key[char] || 0) + 1;
//     if (key[char] % 2 == 0) {
//       ans += 2;
//     }
//   }
//   return s.length > ans ? ans + 1 : ans;
// };
// console.log(longestPalindrome((s = "abccccdd")));
// function func(s) {
//   for (let i = 0, j = s.length - 1; i < j; i++, j--) {
//     if (s.charAt(i) !== s.charAt(j)) return 2;
//   }
//   return 1;
// }
// console.log(func((s = "ababa")));
// var largestOddNumber = function (num) {
//   debugger;
//   for (i = num.length - 1; i >= 0; i--) {
//     if (Number(num[i]) % 2 != 0) return num.slice(0, i + 1);
//   }
//   return "";
// };
// console.log(largestOddNumber((num = "52")));
// var islandPerimeter = function (grid) {
//   let totalPerimeter = 0;
//   let overlapPerimeter = 0;

//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[i].length; j++) {
//       if (grid[i][j] === 0) {
//         continue;
//       }
//       if (grid[i][j] === 1) {
//         totalPerimeter++;
//       }
//       if (j < grid[i].length - 1 && grid[i][j] === 1 && grid[i][j + 1] === 1) {
//         overlapPerimeter++;
//       }
//       if (i < grid.length - 1 && grid[i][j] === 1 && grid[i + 1][j] === 1) {
//         overlapPerimeter++;
//       }
//     }
//   }
//   totalPerimeter = 4 * totalPerimeter;
//   overlapPerimeter = overlapPerimeter * 2;
//   return totalPerimeter - overlapPerimeter;
// };
// console.log(
//   islandPerimeter(
//     (grid = [
//       [0, 1, 0, 0],
//       [1, 1, 1, 0],
//       [0, 1, 0, 0],
//       [1, 1, 0, 0],
//     ])
//   )
// );

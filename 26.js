// Find the second most occurring character in the given string.
// Example 1:
// Input: '3553853335'
// Output: ‘5’
// Example 2:
// Input: "assassin"
// Output: "a"

const countChar = (str) => {
  //code for finding occurance of char
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]] = Number(obj[str[i]]) + 1;
    } else {
      obj[str[i]] = 1;
    }
  }
  // console.log(obj); //{ a: 2, s: 4, i: 1, n: 1 }

  //code for converting in array and then sorting based on deceding order
  let sortArray = Object.entries(obj).sort((a, b) => b[1] - a[1]); //[[s,4],[a,2],[i,1],[n,1]]

  //for finding second most occured char, so we should have atleast how element
  //below condition we are checking
  if (sortArray.length > 1) {
    //code for finding second most occuranced char
    return sortArray[1][0];
  } else {
    return null;
  }
};

const mostOccuredChar = countChar("assassin");

console.log(mostOccuredChar);

//ques 2. Given a string srt_a, write a program to return the sum
// and average of the digits that appear in the string, ignoring all other characters.
// Example:
// Input: str_a = "PYnative29@#8496"
// Output: Sum: 38, Average: 6.333333333333333

function sumAndAvg(str) {
  let sum = 0;
  let validNumStr = "";
  let avg = 0;
  for (let char of str) {
    if (Number(char)) {
      sum = sum + Number(char);
      validNumStr = validNumStr + char;
    }
  }
  console.log(`sum of valid Number in given string is ${sum}`);
  avg = sum / Number(validNumStr.length);
  console.log(`average of given string ${avg}`);
}

sumAndAvg("PYnative29@#8496");

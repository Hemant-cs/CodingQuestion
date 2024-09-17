// how to find even or odd numbers in array

//method - 1

const arry = [1,3,4,5,6,7,9,10];

const evenNum = [];

const oddNum = [];

for (let i = 0; i < arry.length; i++) {
  if (arry[i] % 2 == 0) {
    evenNum.push(arry[i]);
  } else {
    oddNum.push(arry[i]);
  }
}

console.log("even Numbers : " + evenNum);
console.log("odd Numbers : " + oddNum);

//method - 2

// const evenNumArry = arry.filter(item=>item %2 == 0);

// const oddNumArry = arry.filter(item=>item %2 != 0);

// console.log("even Numbers : " + evenNumArry);
// console.log("odd Numbers : " + oddNumArry);
//find second largest value in given array and remove it.

//method - 1

const arry = [5, 2, 6, 0, 1, 10, 3, -3];

// const decendingOrder = arry.sort((a,b)=>b-a);
// console.log("decending Order Array : "+decendingOrder);

// console.log("second largest number : "+decendingOrder[1]);

// /*
//     should use below method to delete and add item in a array
//     array.splice(index, count, item1, ....., itemX)
// */

// arry.splice(1,1)

// console.log(arry); //[10, 5,  3, 2, 1, 0, -3]

//successfully remove second largest number in a given array

//method - 2

function removeLargestNumber(arr) {
  const largestNum = Math.max(...arr); //will find max number in given array

  const indexOfLargestNum = arr.indexOf(largestNum); //will find index of largest num

  const removeLargestItem = arr.splice(indexOfLargestNum, 1); // will remove largest number

  return removeLargestItem;
}

removeLargestNumber(arry); //will remove large one

const answer = removeLargestNumber(arry); //will remove second large one

console.log(answer); //will print second large delete num

console.log(arry); //will print entrire array

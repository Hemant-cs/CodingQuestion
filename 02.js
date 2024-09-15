//find min and max element of an array

const arry = [5,2,6,0,1,10,3,-3];

/*
    @sytax of reduce method
    array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
*/



//method1
// const arry1 = [...arry]; //sort method will update original array hence cloning the array

//for accending order
// const accendingOrderItem = arry.sort((a,b)=>a-b);
// const minValue = accendingOrderItem[0];

//for decending order
// const decendingOrderItem = arry1.sort((a,b)=>b-a);
// const maxValue = decendingOrderItem[0];

// console.log(minValue);
// console.log(maxValue);

//method2 use reduce method

//max num
const maxNum = arry.reduce(((a,b)=>a > b ? a : b),arry[0]);

console.log("Maximum number of given array is : "+maxNum);

//min num

const minNum = arry.reduce(((a,b)=> a < b ? a : b),arry[0]);

console.log("Minimum number of given Array is : "+minNum);

//find min and max element of an array

const arry = [5,2,6,0,1,10,3,];

//method1
const arry1 = [...arry];

//for accending order
const accendingOrderItem = arry.sort((a,b)=>a-b); //sort method will update original array
const minValue = accendingOrderItem[0];

//for decending order
const decendingOrderItem = arry1.sort((a,b)=>b-a);
const maxValue = decendingOrderItem[0];

console.log(minValue);
console.log(maxValue);

//method2 use reduce method
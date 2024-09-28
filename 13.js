// merged two arrays

const arry1 = [0,1,3,4,6];
const arry2 = [5,2,7,8,9];

// arry1.push(...arry2); //using triple dot method
// const finalArray = [...arry1, ...arry2]; //using triple dot method
 
const finalArray = arry1.concat(arry2); //using concat method - will return a new Array
const sortedArray = finalArray.sort((a,b)=>a-b); //sorting array based on accending order

console.log(sortedArray);
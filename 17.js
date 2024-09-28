// find union of two arrays

const arr1 = [2,4,5,6];
const arr2 = [4,6,7,8];

//[0,1,2,3,4,5,6,7,8,9,10]

const allItemArray = [...arr1, ...arr2]; // all Item of both will be present

const uniqueItemArry = [...new Set(allItemArray)]; // will create a new array with unique Item

console.log("uniqueItemArry : " + JSON.stringify(uniqueItemArry));
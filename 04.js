//How to Find missing elements in a given Array 1 to 10
const arry = [1,3,4,5,6,7,9,10];

// let missingNumber;

// for(let i = 0; i<10;i++){
//     if(!(arry[i]==i+1)){
//         missingNumber = i+1;
//         break;
//     }
// }

// console.log(missingNumber);


//method - 2 more efficent

const missingNumberArray = [];

const minNum = Math.min(...arry); //will return minimum number of array

const maxNum = Math.max(...arry); //will return maximum number of array

for(let i=minNum; i<maxNum; i++){
    if(arry.indexOf(i)<0) missingNumberArray.push(i);
}

console.log(missingNumberArray);
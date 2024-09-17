// find the sum of all elements in array

// Method - 1

const arry = [1,3,4,5,6,7,9,10];
let sum = 0;

for(let i = 0; i < arry.length; i++){
    sum += arry[i];
}

console.log(sum);

//method - 2 using reduce mehtod

const total = arry.reduce((curr, acc)=>curr + acc);

console.log("total : "+total);
//How To find duplicate elements in array


const arr = [1,2,8,2,9,8];

//method1

// const dup  = arr.filter((item, index, arry)=>arry.indexOf(item) != index);

// console.log(dup);




//method2 - more efficent

// let obj = {...arr}; //{0:1, 1:2, 2:8, 3:2, 4:9, 5:8}
// let uniqueProp = {};

// for(let key in obj){
//     if(uniqueProp[obj[key]]>=0){
//         uniqueProp[obj[key]] +=1;
//     }else{
//         uniqueProp[obj[key]]  = 1;
//     }
// }

// console.log(uniqueProp) //{ '1': 1, '2': 2, '8': 2, '9': 1 }


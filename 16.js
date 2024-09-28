// find intersection of two arrays

const arry1 = [0,1,2,3,4,5,6,7,6,6];
const arry2 = [5,6,7,8,9,0,8,9,1,6,7,9];

const commonItem = (arr1,arr2)=>{
    // let commonItemArray = [];

    //metod1

    // for(let item of arr1){
    //     if(arr2.indexOf(item) >= 0){
    //         commonItemArray.push(item);
    //     }
    // }

    //method2 - using filter method

    const commonItemArray = arr1.filter(item=>arr2.indexOf(item) >= 0);

    //for removing duplicate item

    const uniqueItem = [...new Set(commonItemArray)];
    return uniqueItem;
}

const result = commonItem(arry1,arry2);
console.log(result);
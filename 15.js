// compare two Arrays are Equal or Not

const arry1 = [1,2,3,4,5];
const arry2 = [5,4,3,2,1];

const isArrayLengthSame = arry1.length === arry2.length;

if(isArrayLengthSame){
    for(let item of arry1){
        if(arry2.indexOf(item) < 0){
            console.log("Given Array is not Equal")
            return;
        }
    }
    console.log("Given Array is Equal")
}else{
    console.log("Given Array is not Equal")
}
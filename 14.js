// find factor of a given integer

const findFactor = num =>{
    if(num < -1){
        console.log("Factor is not possible for Negative number");
    }else{
        console.log(`Factor of ${num} is `)
        for(let i = 1; i <= num; i++){
            if(num % i == 0){
                console.log(i)
            }
        }
    }
}

findFactor(20);
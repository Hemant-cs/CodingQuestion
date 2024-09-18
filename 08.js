//find prime number - prime number are those number which can we divide by 1 or itself.

function isPrimeNumber(num){
    let primeFlag = true;
    if(num<1){
        console.log("Number can't be less then 1");
    }else if(num == 1){
        console.log("1 is nor a prime number neigther a composite");
    }else{
        for(let i=2; i<num; i++){
            if(num%i==0){ 
                primeFlag = false;
                console.log(`${num} is not a prime number`)
                break;
            }
        }
        primeFlag ? console.log(`${num} is a prime number`) : "";
    }

}


isPrimeNumber(-2);
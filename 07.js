//find fictorial of a given number

// !9 = 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 = xyz


function factorialOfNum(num){
    let total = 1;
    for(let i = 1; i <= num; i++){
        total = i * total
    }
    return total;
}

const ans = factorialOfNum(9);
console.log(ans);

//method - 2 

const factNew = num =>{
    const numArry = []
    for(let i = 1; i <= num; i++){
        numArry.push(i);
    }

    const ans = numArry.reduce(((pre,curr)=>pre*curr),1);
    console.log(ans);
}

factNew(9);
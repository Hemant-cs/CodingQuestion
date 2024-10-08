// print the table of any user defined number

const printTable = num =>{
    for(let i=1; i <=10; i++){
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

const ans = printTable(2);
console.warn(ans); //will return undefined
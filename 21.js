// find fibonacci sequence

const fibonacciSeries = num =>{
    /*
    0 1 1
    */
    let a = 0;
    let b = 1;
    let temp;
    let fibonacciSeriesArray = [];
    fibonacciSeriesArray.push(a,b);
    for(let i = 0; i < num -2; i++){        
        temp = a + b;    
        fibonacciSeriesArray.push(temp);
        a = b;
        b = temp;
    }
    
    return fibonacciSeriesArray;
}

const result = fibonacciSeries(5); // 0, 1, 1, 2, 3

console.log(result);
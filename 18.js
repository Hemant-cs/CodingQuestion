// convert celsius to fahrenheit or vice versa

// F = C × (9/5) + 32

const tempConvertor = (temp, unit = 'c') => {
    let f;
    if(unit.toLowerCase() == 'c'){ //if passed value is in celsius then calculate 'F'
        f = temp * (9/5) + 32;
    }else{ //else calculate 'C'
        f = ((temp - 32) * 5)/9;
    } 
    return f;       
}

const result = tempConvertor(38, 'F');
console.log(result);
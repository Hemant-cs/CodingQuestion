#!/usr/bin/env node

// Program to Check Armstrong Number

/* if number is 371
371 = 3 * 3 * 3 + 7 * 7 * 7 + 1 * 1 *
371 = 27 + 343 + 1
371 = 371

hence it's armstrong number

at line number 1, we use shibang that make this file executable,
you can run this file from github terminal using ./25.js
*/

//method 1
let findArmstrong = number =>{
    number = number.toString();
    let total = 0;
    for(let digit of number){
        let temp = 1;
        for(let i=1; i<=number.length; i++){
            temp = temp * Number(digit);
        }
        total = temp + total
    }
    console.log("total of given number "+total);
    number == total ? console.log(`given number ${number} is armstrong number`) : console.log(`given number ${number} is not an armstring number`);
}

//method2

let findArmstrongV2 = number =>{
    let lengthOfNumber = number.toString().length;
    let temp = number
    let total = 0;
    while(temp>0){
        let digit = temp%10;
        digit = digit ** lengthOfNumber;
        total = total + digit
        temp = parseInt(temp/10);        
    }
    console.log("total of given number "+total);
    number == total ? console.log(`given number ${number} is armstrong number`) : console.log(`given number ${number} is not an armstring number`);
}


findArmstrongV2(370); //371, 153
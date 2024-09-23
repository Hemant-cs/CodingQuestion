// find palindrome - A number or String which same as forward and backward.

const isPalindrome = params => {
    const str = typeof params == 'string' ?  params.toLowerCase() : params.toString() ; 

    const strToArry = [...str]; //will convert string to Array
    const reverseArray = strToArry.reverse();
    const arryToStr = reverseArray.join("");
    if(str == arryToStr){
        console.log(`Yes! Given ${typeof params == "number" ? "Number" : "String"} is Palindrome`);
    }else{
        console.log(`Sorry! Given ${typeof params == "number" ? "Number" : "String"} is not a Palindrome`);
    }
}

isPalindrome("madam");
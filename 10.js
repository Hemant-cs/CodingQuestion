// reverse a string

    // Q1."Hemant" -> "tnameH"

const reverseString=str=>{ //we don't have any String Build-in method to reverse any string
    const strToArray = [...str];

    //or
    // const strToArray = str.split(""); // will split based on empty space

    const reverseArray = strToArray.reverse();

    const arrayToString = reverseArray.join(""); //will merge the entire array in a single String

    return arrayToString;

}

    //Q2. "Hi! I am Hemant"-> !iH I ma tnameH"

const specialReverse = str => {
    const strToArray = str.split(" ");
    const reverseItem = [];
    for(let word of strToArray){
        let tempArry = [...word];
        let tempArrayReverse = tempArry.reverse();
        let ArrayToStr = tempArrayReverse.join("");
        reverseItem.push(ArrayToStr);
    }

    const finalAns = reverseItem.join(" ");
    console.log(finalAns);
}

// console.log(reverseString("Hemant"));

specialReverse("Hemant")
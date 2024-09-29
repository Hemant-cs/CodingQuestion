// convert first letter of string in uppercase

const pacalCase = str =>{
    let splitStr = str.split(" ");
    let pacalCaseArray = [];
    for(let word of splitStr){
        const ch =  word.charAt(0).toUpperCase();
        const restWord = word.slice(1).toLowerCase();
        pacalCaseArray.push(ch+restWord);
    }
    const finalStr = pacalCaseArray.join(" ")
    return finalStr;
}

const pacalCaseStr = pacalCase("hello fRom hemAnt");

console.log(pacalCaseStr);
// Check the No of Occurrence of Character in String


//str = Hemhem

const countDuplicateChar = str =>{
    let lowerCaseStr = str.toLowerCase();
    let newObjStr = {...lowerCaseStr}
    let countedObj = {};

    // console.log(Object.values(newObjStr));
    for(let key in newObjStr){
        if(countedObj[newObjStr[key]]){
            countedObj[newObjStr[key]] += 1 
        }else{
            countedObj[newObjStr[key]] = 1
        }
    }

    console.log(countedObj);

}

countDuplicateChar("hemhemm");
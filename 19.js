// convert kilometers into miles
// 1km = 0.621371 miles

const distanceConvertor = (dist, unit = 'km') => {
    let result;
    if(unit.toLowerCase()== 'km'){ //if passed unit is km then convert to miles
        result = dist * 0.621371
    }else{
        result = dist / 0.621371
    }
    return result;
}

const ans = distanceConvertor(10, 'km');
console.log(ans)
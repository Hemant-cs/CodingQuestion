// find vowels from string

const vowelsFinder = str=>{
    const vowels = ['a','e','i','o','u'];
    const ans = [];
    for(let char of str){
        if(vowels.includes(char.toLowerCase())){
            ans.push(char);
        }
    }
    return ans;
}

const ans = vowelsFinder("hemant");

console.log(ans);

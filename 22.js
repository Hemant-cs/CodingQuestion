//print star pattern in diamond shape

for(let i = 1; i <= 6; i++ ){
    for(let k = 1; k <= 6-i; k++){
        process.stdout.write(" ");
    }
    for(let j = 1; j <= i; j++){
        process.stdout.write("*")
    }
    process.stdout.write("\n")
}
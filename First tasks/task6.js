function countBs(str){
    return countChar(str, 'B');
}

function countChar(str, char){
    let countChar = 0;
    for (let i = 0; i < str.length; i++){
        if (str.charAt(i) == char){
            countChar += 1;
        }
    }
    return countChar;
}

console.log(`"BBC": ${countBs("BBC")}`);
// → 2
console.log(`"kakkerlak", "k": ${countChar("kakkerlak", "k")}`);
// → 4
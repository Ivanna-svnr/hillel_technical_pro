// ДЗ 2
function pad(str, symb, num, statement) {
    let result = str;
    let strLength = 0;
    for (let char in str) {
        strLength++;
    }
    if (statement == true) {
    for (let i = 0; i < num - strLength; i++) {
          result = symb + result;
    } 
    return result;
} else {
    for (let i = 0; i < num - strLength; i++) {
          result = result + symb;
    } 
    return result;
}
}
console.log(pad("example", "$", 9, true));

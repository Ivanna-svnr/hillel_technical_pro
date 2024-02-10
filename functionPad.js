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
    console.log(result);
} else {
    for (let i = 0; i < num - strLength; i++) {
          result = result + symb;
    } 
    console.log(result);
}
}
pad("example", "$", 9, true);

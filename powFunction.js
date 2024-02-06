// ДЗ 3
function pow(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
        result *= x;
    }
    console.log(result);
}

pow(3,7);

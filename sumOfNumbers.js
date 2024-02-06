// ДЗ 2
var sum = 0
for (var number = 1; number <= 100; number++){
    if (number % 3 !== 0) {
        sum += number;
    }
}
console.log(sum);

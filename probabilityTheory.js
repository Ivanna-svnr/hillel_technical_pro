// ДЗ 3
function checkProbabilityTheory(count) {
    let min = 100;
    let max = 1000;
    let evenNumbers = 0;
    let oddNumbers = 0;

    for (let i = 0; i < count; i++) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1) + 100);
        
        if (randomNumber % 2 === 0) {
            evenNumbers++;
        } else {
            oddNumbers++;
        }
    }
    let total = evenNumbers + oddNumbers;
    let evenPercentage = Math.round((evenNumbers / total) * 100);
    let oddPercentage = Math.round((oddNumbers / total) * 100);

console.log(`Кількість згенерованих чисел: ${count}`);
console.log(`Парних чисел: ${evenNumbers}`);
console.log(`Не парних чисел: ${oddNumbers}`);
console.log(`Відсоток парних до не парних: ${evenPercentage} / ${oddPercentage}`);
}

checkProbabilityTheory(55);

// js_homework2
var age = prompt('Скільки вам років?', '');
if (age % 10 === 1 && age % 100 !== 11) {
alert(`Вам ${age} рік!`)
} else if (age % 10 === 2 && age % 100 !== 12 || age % 10 === 3 && age % 100 !== 13 || age % 10 === 4 && age % 100 !== 14) {
  alert(`Вам ${age} роки!`)
} else if (age < 0) {
  alert(`Ви ввели від'ємне число. Будь ласка, вкажіть свій вік!`, '')
} else if (age.includes(" ") || age === "") {
    alert(`Ви не можете використовувати пробіли.`);
}
else if (isNaN(age)) {
  alert(`Будь ласка, введіть число!`)
} else {
  alert(`Вам ${age} років!`)
};  


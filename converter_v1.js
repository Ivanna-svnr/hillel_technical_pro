var measureUnit = prompt("Введіть одиницю вимірювання, яку потрібно конвертувати - км, кг або год", "")
var number = prompt("Введіть число", "")
var result
switch (measureUnit) {
    case "км":
    result = number + " км це " + number * 1000 + " м.";
    break;
    case "кг":
    result = number + " кг це " + number * 1000 + " грм.";
    break;
    case "год":
    result = number + " год це " + number * 60 + " хв.";
    break;
    default: 
    result = "Упс! Схоже ви ввели невідому одиницю вимірювання! Спробуйте ще раз";
} 
alert(result);

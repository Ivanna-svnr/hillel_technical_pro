let measureUnit = "кг"
let convert;
switch (measureUnit) {
    case "кг":
        convert = function () {
        let number = 10;
        console.log(number + " кг це " + number * 1000 + " грм.");
        }
        break;
    case "км":
        convert = function () {
        let number = 1;
        console.log(number + " км це " + number * 1000 + " м.");
        }
        break;
    case "год":
        convert = function () {
        let number = 1;
        console.log(number + " год це " + number * 60 + " хв.");
        }
        break;
    default: 
    convert = function() {
    console.log("Упс! Схоже ви ввели невідому одиницю вимірювання! Спробуйте ще раз");
} 
}
convert();

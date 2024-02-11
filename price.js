// ДЗ 2
var services = {
    haircut: "60 грн",
    shaving: "80 грн",
    headWashing: "100 грн",

    price () {
        var sum = 0;
        for (var value in this) {
            
            if (!isNaN(parseFloat(this[value]))) {
          
            sum += parseFloat(this[value]);
            }
        } return sum;
    } ,
    maxPrice () {
        var max = 0;
        for (var value in this) {
            
            if (!isNaN(parseFloat(this[value]))) {
                if (parseFloat(this[value]) > max) {
                    max = parseFloat(this[value]);
                } 
            }
        } return max;
},
minPrice () {
    var min = Infinity;
        for (var value in this) {
            
            if (!isNaN(parseFloat(this[value]))) {
                if (parseFloat(this[value]) < min) {
                    min = parseFloat(this[value]);
                } 
            }
        } return min;
}
}
console.log(services.price());
console.log(services.maxPrice());
console.log(services.minPrice());

services.breakGlass = "200 гнр";
services.nailPolish = "20 гнр";
console.log(services.price());
console.log(services.maxPrice());
console.log(services.minPrice());

// ДЗ 1
// variant 1
function drawTriangle(number,symbol) {
    for (var i = 0; i <= number; i++) {
        var result = " ";
        for (var j = 0; j < i; j++){
            result += symbol;
            
        } console.log(result);
    } 
}
drawTriangle|(7,"#");

// variant 2
function drawTriangle(number,symbol) {
var result = " ";
for (var i = 0; i <= number; result += symbol, i++) {
    console.log(result); 
   }  
}
drawTriangle(5,"^");

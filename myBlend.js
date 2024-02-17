arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
function myBlend(arr) {
    for (var i = 0; i < arr.length; i++) {
    
        var blend = Math.floor(Math.random() * arr.length);
    
        var result = arr[i];
        arr[i] = arr[blend];
        arr[blend] = result;
    }

    console.log(arr);
}
myBlend(arr);

// ДЗ 1
var book = {
title: "'Little drama'",
author: "V.Pidmohylnyi",
edition: 1000,

getInfo() {
   var info = ""; 
   for (var key in this) {
    if (typeof this[key] !== "function") {
        info += key + ": " + this[key] + "\n";
    }
}
return info;
   }
}
console.log(book.getInfo());
book.publisher = "Folio"
console.log(book.getInfo());


const text = "Текст — це витвір мовленнєвого процесу, що відзначається завершеністю.";
const pattern = /[^аА\s]{6,}/g;
console.log(text.match(pattern));

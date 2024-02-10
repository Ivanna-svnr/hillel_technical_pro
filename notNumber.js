// ДЗ 1
function notNumber(value) {
    return typeof value === 'number' && value !== value;
}

    
  console.log(notNumber(0/0));

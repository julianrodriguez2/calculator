function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    if (b === 0){
        return "Error!";
    } else {
        return a / b;
    }
}

console.log(add(5, 4));
console.log(subtract(5, 4));
console.log(multiply(5, 4));
console.log(divide(5, 4));
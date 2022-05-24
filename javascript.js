
//todo: Creating functions for math operators (add, subtract, multiply, divide):
const add = function add(num1, num2) {
    return (num1 + num2);
}
// console.log(add(2, 2)); // 4

const subtract = function subtract(num1, num2) {
    return (num1 - num2);
}
// console.log(subtract(4, 2)); // 2

const multiply = function multiply(num1, num2) {
    return (num1 * num2);
}
// console.log(multiply(5, 5)); // 25

const divide = function divide(num1, num2) {
    return (num1 / num2);
}
// console.log(divide(10, 2)); // 5

//todo: Create a new function 'operate' that takes an operator and 2 numbers and then calls one of the above functions on the numbers:
function operate(operator, num1, num2) {
    return (operator(num1, num2));
}
// console.log(operate(multiply, 10, 2));
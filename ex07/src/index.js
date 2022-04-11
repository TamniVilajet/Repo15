// Only change code below this line
const sum = (num1, num2 = 1) => {
    'using strict';
    return num1 + num2;
}
// Only change code above this line
module.exports = sum;
console.log(sum(4,6));
console.log(sum(3));
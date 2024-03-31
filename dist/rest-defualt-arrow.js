"use strict";
function showMsg(name = "no name", age, salary, bonus) {
    if (salary > 0) {
        if (bonus != undefined) {
            return `${name}, with age ${age} his salry is ${salary} 💸 and bonus ${bonus}`;
        }
        return `${name}, with age ${age} his salry is ${salary} 💸`;
    }
    return "cann't show a message! 💔";
}
console.log(showMsg(undefined, 20, 4000, 200));
function addNums(...nums) {
    let result = 0;
    nums.forEach(num => {
        result += num;
    });
    return result;
}
console.log(addNums(1, 2, 3, 4, 5));
let addTwoNum = (num1, num2) => {
    return num1 + num2;
};
console.log(addTwoNum(1, 2));

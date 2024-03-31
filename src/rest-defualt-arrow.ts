
function showMsg(name :string = "no name", age:number, salary:number, bonus?: number) : string{
  if (salary > 0) {
    if (bonus != undefined) {
      return `${name}, with age ${age} his salry is ${salary} 💸 and bonus ${bonus}`;
    }
    return `${name}, with age ${age} his salry is ${salary} 💸`;
  }
  return "cann't show a message! 💔";
}
console.log(showMsg(undefined ,20, 4000, 200));


function addNums(...nums: number[]) : number {
  let result: number = 0;

  nums.forEach(num => {
    result += num;
  });

  return result;
}

console.log(addNums(1, 2, 3, 4, 5));

let addTwoNum = (num1: number, num2: number) : number => {
  return num1 + num2;
}

console.log(addTwoNum(1, 2));
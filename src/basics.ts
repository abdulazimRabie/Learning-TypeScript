function add(n1:number, n2:number, showResult: boolean, phrase:string) {
  if (showResult) {
    console.log(`${phrase}${n1+n2}`);
  } else {
    return n1+n2;
  }
}

let variable:number;


let number1 = 5;
const number2 = 2.5;
const printResult = true;
let resultPhrase = "Result is : ";

add(number1, number2, printResult, resultPhrase);
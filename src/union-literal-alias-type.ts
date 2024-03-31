type Combinable = number | string;
type literalType = 'as-number' | 'as-text';
function combine (
  input1           : Combinable, 
  input2           : Combinable, 
  resultConversion : literalType) 
{
  let result;
  if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
let addAges = combine(20, 1, 'as-number');
let addIntegers = combine("30", "20", 'as-text')
let addNames = combine("abdo", "rabie", 'as-text');

console.log(addAges);
console.log(addIntegers);
console.log(addNames);
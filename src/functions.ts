function addNum(n1:number , n2:number, cb: (result: number) => void) : number {
  let val = n1+n2;
  cb(val);
  return n1  +n2;
}

function printVal(result:number):void {
  console.log(`Result : ${result}`);
  return;
}

// printResult(addNum(3, 2));

// let combine : (n1:number, n2:number) => number;
// let combine = 4
// combine = addNum;
// printVal(combine(combine(3, 2), combine(1, 2)));

let a = addNum(2, 1, (num) => {
  if (num > 3) {
    console.log("From callback: result = " + num);
    return;
  }
  console.log("Consider Calling back again");
});

console.log(a);
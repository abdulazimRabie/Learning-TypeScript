let userInput : unknown;
let anyType: any;

userInput = 4;

userInput = "string";
anyType = "string";

let userName: string = "name";

// userName = userInput // error, cann't assign "unknown" to string
// userName = anyType; // accepted

/// Never type
function generateError(message: string, code: number): never {
  throw {message: message, msgCode: code};
}

/**
  ➡ we use never to tell other developers
  ➡ that this function doesn't return any thing
  ➡ and clash your script
  ➡ which means that anything comming after will not be executed
**/

let val = generateError("Error after error", 321);
console.log(val);

function func() {
  console.log("void func");
}

let result = func();
console.log(result);


console.log("test");


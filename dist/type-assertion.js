"use strict";
// let image = document.getElementById("image") as HTMLImageElement;
// console.log(image.src);
// by default each element is an HTMLElement
// HTMLImageElement extends HTMLElement
// HtMLInputElement extends HTMLElement
// & SO ON
let image = document.getElementById("image");
// type assertion will not check after you 
// if you assert the type then compiler will not check if it's true or not
let s;
s = "string-";
// type of s ➡ any
// any could be (string , number , boolean, number[] , Function)
// so, if you assert it to string, TS compiler will deal with it as string.
// it will show all string methods and any thing related to string type
// s = "string " as string; won't do any assertion at runtime
// console.log(s.) => error, can't access 
console.log(s.toLowerCase());

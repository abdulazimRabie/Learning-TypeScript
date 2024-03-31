"use strict";
// const person : {
//   name: string;
//   age: number;
//   title: string;
//   hobbies: string[];
//   role : [number, string]
// } = {
//   name: "abdulazim",
//   age: 20,
//   title: "SE",
//   hobbies: ["Sports", "Movies"],
//   role: [0, "admin"]
// };
// let favoriteActivites: string[];
// favoriteActivites  = ["coding", "gaming"];
// for(const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
// }
// person.role.push("author"); // push is a special case with tuple
// person.role[0] = 1;
// person.role[1] = "moderator";
// console.log(person.role);
// const Admin = 2;
// const moderator = 1;
// const Read_only = 0;
// enum Role {ADMIN, MODERATOR, READ_ONLY_USER}; // default starts with zero and increase it
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMNIN";
    Role["MODERATOR"] = "MODERATOR";
    Role["READ_ONLY_USER"] = "READONLYUSER";
})(Role || (Role = {}));
; // default starts with zero and increase it
const person = {
    name: "abdulazim",
    age: 20,
    role: Role.ADMIN
};
if (person.role === Role.READ_ONLY_USER) {
    console.log("you are admin after using enum");
}

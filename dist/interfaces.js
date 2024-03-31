"use strict";
/*
interface Settings {
  theme: true;
  color: string;
}

interface Settings {
  sidebar: boolean;
}

let settings : Settings = {
  theme : true,
  color : "red",
  sidebar : true,
}
*/
let moderator = {
    username: "abdelazem",
    id: 101,
    role: "MODERATOR"
};
let admin = {
    username: "abdulazim",
    id: 102,
    doAction: function () {
        console.log("Iam admin, i can do many actions 😊");
    }
};
console.log(moderator);
admin.doAction();


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

interface User {
  username: string;
  id: number;
}

interface Moderator extends User {
  role: string;
}

interface Admin extends User {
  doAction: Function;
}


let moderator : Moderator = {
  username : "abdelazem",
  id : 101,
  role: "MODERATOR"
}

let admin : Admin = {
  username : "abdulazim",
  id : 102,
  doAction : function () {
    console.log("Iam admin, i can do many actions 😊");
  }
}

console.log(moderator);
admin.doAction();

"use strict";
// Generic
function returnValue(val) {
    return val;
}
console.log(returnValue(3));
console.log(returnValue("string"));
console.log(returnValue(true));
// Arrow Function With Generics
let arrowReturnFunc = (val) => {
    return val;
};
console.log(arrowReturnFunc(3));
console.log(arrowReturnFunc("String"));
console.log(arrowReturnFunc(true));
// Multiple Value With Generics
function sendMessage(val_one, val_two) {
    return `val one is ${val_one}, val two is ${val_two}`;
}
console.log(sendMessage("Abdulazim", 100));
// Generic Classes
// <T = stirng ➡ default type, you can write it, and compiler will infer it later
class Monster {
    constructor(id) {
        this.id = id;
    }
    ;
    show(msg) {
        console.log(`msg content : ${msg}, user id : ${this.id}`);
    }
    sayHi(name) {
        console.log(`Hi ${name}`);
    }
}
let monster_one = new Monster("100");
console.log(monster_one.id);
monster_one.show("Message 1");
let monster_two = new Monster(100);
monster_two.show("Message");
monster_two.sayHi("Abdulazim");
class Spider {
    constructor() {
        this.weapon = "Axe";
        this.power = 98;
        this.dead = false;
    }
}
let me = {
    weapon: "Axe",
    power: 90,
    dead: false,
};
console.log(typeof me);
console.log(typeof Spider);
class Collections {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
}
let book1 = {
    title: "The Notebook",
    price: 120,
    publisher: "Author"
};
let book2 = {
    title: "Turbulent Winds",
    price: 20,
    publisher: "Author"
};
let collection_books = new Collections();
collection_books.add(book1);
collection_books.add(book2);
let game1 = {
    itemType: "EA Sport",
    style: "Football",
    price: 10
};
let game2 = {
    itemType: "Minecraft",
    style: "Adventure",
    price: 20
};
let collection_games = new Collections();
collection_games.add(game1);
collection_games.add(game2);
console.log(collection_books);
console.log(collection_games);

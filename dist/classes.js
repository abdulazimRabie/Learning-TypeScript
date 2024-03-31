"use strict";
class Human {
    constructor(name) {
    }
    move() {
        console.log("iam a human i can move");
    }
}
class Man extends Human {
    constructor(name) {
        super(name);
        this.name = name;
    }
    talk() {
        console.log("Man only talk");
    }
}
let young_man = new Man("Abdulazim");
young_man.move();
young_man.talk();
console.log(young_man.name);

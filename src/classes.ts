abstract class Human {
  abstract name: string;
  abstract talk() : void;

  constructor(name : string) {
    
  }
  move() {
    console.log("iam a human i can move");
  }
}

class Man extends Human {
  constructor(public name: string) {
    super(name);
  }

  talk(): void {
    console.log("Man only talk");
  }
}

let young_man = new Man("Abdulazim");
young_man.move();
young_man.talk();
console.log(young_man.name);
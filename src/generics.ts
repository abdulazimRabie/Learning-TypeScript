// Generic
function returnValue <GenericType>(val: GenericType) : GenericType {
  return val;
}

console.log(returnValue<number>(3));
console.log(returnValue<string>("string"));
console.log(returnValue<boolean>(true));

// Arrow Function With Generics
let arrowReturnFunc = <T> (val : T) : T => {
  return val;
};

console.log(arrowReturnFunc<number>(3));
console.log(arrowReturnFunc<string>("String"));
console.log(arrowReturnFunc<boolean>(true));

// Multiple Value With Generics
function sendMessage <T, S>(val_one: T, val_two: S) : string {
  return `val one is ${val_one}, val two is ${val_two}`;
}

console.log(sendMessage <string, number> ("Abdulazim", 100));

// Generic Classes
// <T = stirng ➡ default type, you can write it, and compiler will infer it later

class Monster <T = string> {
  constructor(public id: T) {};
  show (msg: T): void {
    console.log(`msg content : ${msg}, user id : ${this.id}`);
  }
  sayHi(name : string) {
    console.log(`Hi ${name}`);
  }
}

let monster_one = new Monster("100");
console.log(monster_one.id);
monster_one.show("Message 1");

let monster_two = new Monster <number | string>(100);
monster_two.show("Message");
monster_two.sayHi("Abdulazim");


interface Hero {
  weapon: string;
  power: number;
  dead: boolean;
}

class Spider implements Hero {
  weapon: string = "Axe";
  power: number = 98;
  dead: boolean = false;
}

let me : Hero = {
  weapon: "Axe",
  power: 90,
  dead: false,
}

console.log(typeof me);
console.log(typeof Spider);


// Generics Interfaces

interface Book {
  title: string;
  price: number;
  publisher: string;
}

interface Game {
  itemType: string;
  style: string;
  price: number;
}

class Collections<T> {
  public data: T[] = [];
  add(item : T) {
    this.data.push(item);
  }
}

let book1: Book = {
  title: "The Notebook",
  price: 120,
  publisher: "Author"
}
let book2: Book = {
  title: "Turbulent Winds",
  price: 20,
  publisher: "Author"
}

let collection_books = new Collections <Book> ();
collection_books.add(book1);
collection_books.add(book2);

let game1: Game = {
  itemType: "EA Sport",
  style: "Football",
  price: 10
}
let game2: Game = {
  itemType: "Minecraft",
  style: "Adventure",
  price: 20
}

let collection_games = new Collections <Game> ();
collection_games.add(game1);
collection_games.add(game2);

console.log(collection_books);
console.log(collection_games);
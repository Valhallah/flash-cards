var command = process.argv[2];

class Card {
  constructor(front, back) {
    this.front = front;
    this.back = back;
  }
}


const basicCard = new Card("Who was the first president of the United States?", "George Washington");
console.log(basicCard);

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//
//   speak() {
//     console.log(this.name + ' makes a noise.');
//   }
// }
//
// class Dog extends Animal {
//   speak() {
//     console.log(this.name + ' barks.');
//   }
// }
//
// var d = new Dog('Mitzie');
// d.speak();

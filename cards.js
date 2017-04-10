var command = process.argv[2];

class Card {
  constructor(front, back) {
    this.front = front;
    this.back = back;
  }
}


  const basicCard = new Card("Who was the first president of the United States?", "George Washington");
    console.log(basicCard);

    // class Food {
    //   constructor(calories, sodium, type) {
    //     this.calories = calories;
    //     this.sodium = sodium;
    //     this.type = type;
    //   }
    //
    //   getCalories() {
    //     return this.calories;
    //   }
    // }
    //
    // class Pizza extends Food {
    //   constructor(toppings, sauce) {
    //     super(900, 8, "dinner");
    //     this.toppings = toppings;
    //     this.sauce = sauce;
    //   }
    //
    //   listToppings() {
    //     console.log(this.toppings);
    //   }
    // }
    //
    // class Tomato extends Food {
    //   constructor() {
    //     super(3, 4, "snack");
    //   }
    // }
    //
    // const x = new Pizza("sausage", "alfredo");
    // console.log(x);
    //
    // const y = new Tomato();
    // console.log(y);



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

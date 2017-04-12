const fs = require('fs');

class Basic_card {
  constructor(front, back) {
    this.front = front;
    this.back = back;
    this.create = function() {
      // flashcard object to be appended to file
      var data = {
          front: this.front,
          back: this.back,
          type: "basic",
      };
      // add card to log.txt
      fs.appendFile("log.txt", JSON.stringify(data) + ';', "utf8", function(error) {
          // if there is an error, log the error
          if (error) {
              console.log(error);
          }
      });
    };
  }
}

module.exports = Basic_card;


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

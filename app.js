const fs = require('fs');
// const command = process.argv[2];
const Basic = require('./basic');
const Cloze = require('./cloze');
const inquirer = require('inquirer');


inquirer.prompt([{
    name: 'command',
    message: 'Which flashcard would you like to generate?',
    type: 'list',
    choices: ["Basic", "Cloze"]
}]).then(function(answer) {
    if (answer.command === "Basic") {
        inquirer.prompt([{
            name: "front",
            message: "Enter the statement you would like on the front of the card here:",
            type: "input"
        }, {
            name: "back",
            message: "Enter the statement you would like on the back of your card here:",
            type: "input"
        }]).then(function(answer){
            console.log(answer.front);
            const newBasic = new Basic(answer.front, answer.back);
            newBasic.create();
          });
    } else if (answer.command === "Cloze") {
        inquirer.prompt([{
            name: "full",
            message: "Enter the full statement here:",
            type: "input"
        }, {
            name: "hidden",
            message: "Enter the portion of your statement you want to hide here:",
            type: "input"
        }]).then(function(answer) {
            console.log(answer.front);
            const newCloze = new Cloze(answer.full, answer.hidden);
            newCloze.create();
        });
     }
});



// if(user.message === "Basic"){
//   const basicCard = new Cards("Who was the first president of the United States?", "George Washington");
//   console.log(basicCard);

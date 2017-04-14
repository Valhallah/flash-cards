const fs = require('fs');

class Basic_card {
    constructor(front, back) {
        this.front = front;
        this.back = back;
        this.create = function() {
            var data = {
                front: this.front,
                back: this.back, 
                type: "basic",
            };
            console.log(data);
            fs.appendFile("log.txt", JSON.stringify(data) + ';', "utf8", function(error) {

                if (error) {
                    console.log(error);
                }
            });
        };
    }
}

module.exports = Basic_card;

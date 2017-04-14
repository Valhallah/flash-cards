const fs = require('fs');

class Cloze_card {
    constructor(full, hidden) {
        this.full = full;
        this.hidden = hidden;
        this.create = function() {
            var data = {
                full: this.full,
                hidden: this.hidden,
                type: "cloze"
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

module.exports = Cloze_card;

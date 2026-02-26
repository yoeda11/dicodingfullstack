const { Wolf } = require("./Wolf");

class Tiger {
    constructor() {
        this.strength = Math.floor(Math.random() * 100);
    
    }

    growl() {
        console.log('GRRRRR')

    }

}

// TODO 1
//module.exports = { Tiger }

module.exports = Tiger;
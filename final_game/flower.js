let LivingCreature = require('./LivingCreature')

module.exports = class Flower extends LivingCreature{
    constructor(x, y) {
        super(x, y)
        this.energy = 8;
        this.multiply = 0
    }
    // mul() {
    //     this.multiply++;
    //     var emptyCells = this.chooseCell(0);
    //     var newCell = random(emptyCells);

    //     if (newCell && this.multiply >= 15) {
    //         var newX = newCell[0];
    //         var newY = newCell[1];
    //         matrix[newY][newX] = 3;

    //     }
    // }
}



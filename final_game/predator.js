let LivingCreature = require('./LivingCreature')

module.exports = class Predator extends LivingCreature{
    constructor(x, y) {
        super(x, y)
        this.energy = 8;
        this.multiply = 0
    }
    mul() {
        this.multiply++;
        var emptyCells = super.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random()*emptyCells.length)];

        if (newCell && this.multiply >= 15) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;

            var newGrass = new Predator(newX, newY);
            predatorArr.push(newGrass);
            this.multiply = 0;
        }
        
        // if(weath == "winter"){
        //     this.energy --
        //     this. muliply --
        // }
        // if(weath == "spring"){
        //     this.energy ++
        //     this. muliply ++
        // }
        // if(weath == "fall"){
        //     this.energy --
        // }
        
    }

    eat() {
        var emptyCells = super.chooseCell(2)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        var emptyCells4= this.chooseCell(4)
        var newCell4 = emptyCells4[Math.floor(Math.random() * emptyCells4.length)]

        if (newCell) {
            this.energy++
            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)
                    break
                }
            }
        }
        else if (newCell4) {
            this.energy+=3
            var newX = newCell4[0]
            var newY = newCell4[1]

            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in flowerArr) {
                if (newX == flowerArr[i].x && newY == flowerArr[i].y) {
                    flowerArr.splice(i, 1)
                    break
                }
            }
        }
        else {
            this.move()
        }
    }
    move() {
        this.energy--
        var emptyCells = super.chooseCell(0)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell && this.energy >= 0) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        }
        else {
            if (this.energy < 0) {
                this.die()
            }
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in predatorArr) {
            if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                predatorArr.splice(i, 1);
                break;
            }
        }
    }
}
class Regenerator{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.multiply = 0
        this.directions = [];
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if(grassEaterArr.length < 3 && newCell){
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 2;

            var newGrassEater = new GrassEater(newX, newY);
            grassEaterArr.push(newGrassEater);
        }
         if(grassArr.length < 3 && newCell){
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 1;

            var newGrass = new Grass(newX, newY);
            grassArr.push(newGrass);
        }
        if(flowerArr.length < 3 && newCell){
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 4;

            var newFlower = new Flower(newX, newY);
            flowerArr.push(newFlower);
        }
        if(predatorArr.length < 3 && newCell){
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 3;

            var newPredator = new Predator(newX, newY);
            predatorArr.push(newPredator);
        }
    }
}
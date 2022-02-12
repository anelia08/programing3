class Regenerator extends LivingCreature{
    constructor(x, y) {
        super(x, y)
        this.energy = 8;
        this.multiply = 0
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
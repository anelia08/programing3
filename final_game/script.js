var socket = io();



let side = 20;







function setup() {
    frameRate(5);
    createCanvas(25 * side, 25 * side);
    background('#E0FFFF');

    

}





function nkarel(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("pink");
            }
            else if (matrix[y][x] == 5) {
                fill("#4169E1");
            }
            rect(x * side, y * side, side, side);



        }
    }
}


socket.on('send matrix', nkarel)

function kill(){
 socket.emit("Kill All")
}
function AddGrass(){
    socket.emit("Add Grass")
}
function AddGrassEater(){
    socket.emit("Add GrassEater")
}
function AddPredator(){
    socket.emit("Add Predator")
}
function AddFlower(){
    socket.emit("Add Flower")
}
function AddRegenerator(){
    socket.emit("Add Regenerator")
}

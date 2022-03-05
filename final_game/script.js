var socket = io();



var side = 20;


 weath = "spring"

socket.on('Weather', function (data) {
    weath = data;
    console.log(weath);
})



function setup() {
    frameRate(5);
    createCanvas(25 * side, 25 * side);
    // background("gray");

    

}



function nkarel(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            var obj = matrix[y][x];
            if(obj == 0){
                fill("gray")
            }
            if(obj == 1){
                if(weath == "summer") {
                    fill("green");
                }else if (weath == "autumn") {
                    fill("#333300");
                }else if (weath == "winter") {
                    fill("white");
                }else if (weath == "spring") {
                    fill("#4dffa6");
                }
            }
        


            if(obj == 2){
                fill("yellow")
            }


            if(obj == 3){
                fill("red")
            }


            
          if(obj == 4){
                fill("pink")
        }
        if(obj == 5){
            fill("#4169E1")
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
function weather(){
 socket.emit('Weather')
} 
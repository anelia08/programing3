var socket = io();



var side = 20;


let weath = "spring"




function setup() {
    frameRate(5);
    createCanvas(25 * side, 25 * side);
    background("gray");

    

}

socket.on("Weather", function (data) {
    weath = data;
    console.log(weath);
})



function nkarel(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            var obj = matrix[y][x];
            if(obj == 1){
                if(weath == "winter"){
                    fill("white")
                }
                if(weath == "spring"){
                    fill("#8FBC8F")
                }
                if(weath == "summer"){
                    fill("green")
                }
                if(weath == "fall"){
                    fill("#556b2f")
                }
            }


            if(obj == 2){
                if(weath == "winter"){
                    fill("#cccc00")
                }
                if(weath == "spring"){
                    fill("#ffff66")
                }
                if(weath == "summer"){
                    fill("yellow")
                }
                if(weath == "fall"){
                    fill("#ffb84d")
                }
            }


            if(matrix[y][x] == 3){
        //         if(weath == "winter"){
        //             fill("#800000")
        //         }
        //         if(weath == "spring"){
        //             fill("#ff4d4d")
        //         }
                if(weath == "summer"){
                    fill("red")
                }
        //         if(weath == "fall"){
        //             fill("#b30000")
        //         }
            }


            
          if(matrix[y][x] == 4){
        //     if(weath == "winter"){
        //         fill("#b30059")
        //     }
        //     if(weath == "spring"){
        //         fill("#ff3385")
        //     }
            if(weath == "summer"){
                fill("pink")
            }
        //     if(weath == "fall"){
        //         fill("#ed0c66")
            }
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
 socket.emit("Weather")
} 
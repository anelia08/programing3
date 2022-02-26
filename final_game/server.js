
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);


function generator(matLen, gr, grEat, pred, flo, regen) {
    let matrix = [];
    for (let i = 0; i < matLen; i++) {
        matrix[i] = [];
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0;
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let i = 0; i < pred; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3;
        }
    }
    for (let i = 0; i < flo; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 4;
        }
    }
    for (let i = 0; i < regen; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 5;
        }
    }
    return matrix;
}

 matrix = generator(25, 10, 10, 10, 8, 8);



io.sockets.emit("send matrix", matrix)

grassArr = [];
grassEaterArr = [];
predatorArr = []
flowerArr = []
regeneratorArr = []



Grass = require("./Grass")
GrassEater = require("./GrassEater")
Predator = require("./Predator")
Flower = require("./Flower")
Regenerator = require("./Regenerator")






function createObject() {
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var eat = new GrassEater(x, y)
                grassEaterArr.push(eat)
            }
            else if (matrix[y][x] == 3) {
                var pred = new Predator(x, y)
                predatorArr.push(pred)
            }
            else if (matrix[y][x] == 4) {
                var flo = new Flower(x, y)
                flowerArr.push(flo)
            }
            else if (matrix[y][x] == 5) {
                var toxFlo = new Regenerator(x, y)
                regeneratorArr.push(toxFlo)
            }

        }
    }
    
    io.sockets.emit('send matrix', matrix)
}

function game() {

    for (var i in grassArr) {
        grassArr[i].mul();
    }

    for (var i in grassEaterArr) {
        grassEaterArr[i].mul();
        grassEaterArr[i].eat()
    }

    for (var i in predatorArr) {
        predatorArr[i].mul();
        predatorArr[i].eat()
    }
    for (let j in regeneratorArr) {
        regeneratorArr[j].mul()
    }
    io.sockets.emit('send matrix', matrix);
}

setInterval(game, 300)


function kill() {
    grassArr = [];
    grassEaterArr = []
    predatorArr = []
    flowerArr = []
    regeneratorArr = []
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            matrix[y][x] = 0;
        }
    }
    io.sockets.emit("send matrix", matrix);
}

function AddGrass(){
    for (let i = 0; i < 1; i++) {
        let x = Math.floor(Math.random() * matrixSize);;
        let y = Math.floor(Math.random() * matrixSize);;
        matrix[y][x] = 1;
    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y);
                grassArr.push(grass);
            }

        }
    }
    io.sockets.emit('send matrix', matrix);
}

function AddGrassEater(){
    for (let i = 0; i < 1; i++) {
        let x = Math.floor(Math.random() * matrixSize);;
        let y = Math.floor(Math.random() * matrixSize);;
        matrix[y][x] = 1;
    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 2) {
                let grassEat = new GrassEater(x, y);
                grassEaterArr.push(grassEat);
            }

        }
    }
    io.sockets.emit('send matrix', matrix);
}


function AddPredator(){
    for (let i = 0; i < 1; i++) {
        let x = Math.floor(Math.random() * matrixSize);;
        let y = Math.floor(Math.random() * matrixSize);;
        matrix[y][x] = 1;
    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 3) {
                let pred = new Predator(x, y);
                predatorArr.push(pred);
            }

        }
    }
    io.sockets.emit('send matrix', matrix);
}


function AddFlower(){
    for (let i = 0; i < 1; i++) {
        let x = Math.floor(Math.random() * matrixSize);;
        let y = Math.floor(Math.random() * matrixSize);;
        matrix[y][x] = 1;
    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 4) {
                let flo = new Flower(x, y);
                flowerArr.push(flo);
            }

        }
    }
    io.sockets.emit('send matrix', matrix);
}


function AddRegenerator(){
    for (let i = 0; i < 1; i++) {
        let x = Math.floor(Math.random() * matrixSize);;
        let y = Math.floor(Math.random() * matrixSize);;
        matrix[y][x] = 1;
    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 5) {
                let regen = new Regenerator(x, y);
                regeneratorArr.push(regen);
            }

        }
    }
    io.sockets.emit('send matrix', matrix);
}




io.on('connection', function (socket) {
    createObject();
    socket.on("Add Grass", AddGrass);
    socket.on("Add GrassEater", AddGrassEater);
    socket.on("Add Predator", AddPredator);
    socket.on("Add Flower", AddFlower);
    socket.on("Add Regenerator", AddRegenerator);
    socket.on("Kill All", kill);
});


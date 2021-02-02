var gameStage = 0,playerCounter = 0
var player,form,game;
var db,dbref;
var allPlayers
var car1,car2,car3,car4,cars;
var carI,carI2,carI3,carI4,ground,track

function preload(){
    carI = loadImage("Images/car1.png")
    carI2 = loadImage("Images/car2.png")
    carI3 = loadImage("Images/car3.png")
    carI4 = loadImage("Images/car4.png")
    track= loadImage("Images/track.jpg")
    ground = loadImage("Images/ground.png")
}
function setup(){
    createCanvas(displayWidth-100,displayHeight-100);
    db=firebase.database();
    game = new Game()
    game.getState()
    game.start()

    
}

function draw(){
    if(playerCounter ==4){
        game.update(1)

    }
    if(gameStage ==1){
        clear ()
        game.play()

    }
    if(gameStage ==2){
        game.end();
    }
}


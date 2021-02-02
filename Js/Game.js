class Game{
    constructor(){}

   getState(){
       var stateref = db.ref("gamestate")
       stateref.on("value",(data)=>{
           gameStage = data.val()
       })
   }

   update(State){
       db.ref("/").update({
           gamestate:State
       })
   }

   start(){
       if(gameStage ==0){
           player = new Player()
           player.getCount()
           form = new Form ()
           form.display()
       }
       
       car1 = createSprite(100,200)
       car2 = createSprite(300,200)
       car3 = createSprite(500,200)
       car4 = createSprite(700,200)
       car1.addImage(carI)
       car2.addImage(carI2)
       car3.addImage(carI3)
       car4.addImage(carI4)
       cars =[car1,car2,car3,car4]

   }
   play(){
       form.hide()
       background(ground)
       image (track,0,-displayHeight*4,displayWidth,displayHeight*5)
       Player.getPlayerinfo()
       player.getRank()
    //    text ("Game Start",120,100)
    //   console.log(allPlayers)
       if(allPlayers!=undefined){
           var positionX = 360
           var positionY  
           var index = 0
           for(var p in allPlayers){
           /*    if(p =="player"+player.index){
                   fill ("red")
               }
               else{
                   fill ("black")
               }*/
               positionY = displayHeight-allPlayers[p].distance

              
               cars[index].x = positionX
               cars[index].y = positionY 
              // text(allPlayers[p].name+": "+allPlayers[p].distance,120,positionY)
              if(index ==player.index-1){
                // cars[index].shapeColor = "red"
                 stroke ("black")
                 fill ("red")
                 ellipse (positionX,positionY,70,70)
              
              
               camera .position.x = displayWidth/2
               camera.position.y = cars[index].y

               
              }
               positionX +=200
               index ++
           }
       }
       if(keyDown(UP_ARROW) && player.index != null){
           player.distance +=50
           player.update()
       }
       

       
       if(player.distance>3850){
           gameStage=2
           player.Rank ++
           player.updateRank(player.Rank)
           alert("Your Rank ="+player.Rank)
       }
       drawSprites();
   }

   end(){
       console.log(player.Rank+player.name)
       var rank = createElement("h1")
       rank.html("Your Rank : "+player.Rank)
       rank.position(displayWidth/2,60)
   }
    
}
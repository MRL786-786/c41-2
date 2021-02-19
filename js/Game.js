class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref("gameState")
        gameStateRef.on("value",function(data){
            gameState=data.val()
        })
    }
    update(state){
        database.ref("/").update({gameState:state})
    }
    start(){
        if (gameState === 0){
            player=new Player()
            player.getCount()
            form = new Form()
            form.display()
        }
        car1=createSprite(100,200,50,50);
        car1.addImage(car1Image);
    car2=createSprite(300,200,50,50);
    car2.addImage(car2Image);
    car3=createSprite(500,200,50,50);
    car3.addImage(car3Image);
    car4=createSprite(700,200,50,50);
    car4.addImage(car4Image);
    cars=[car1,car2,car3,car4]

    }

play(){
    
    form.hide()
   // textSize(40)
   // text("gameStart",150,100)
   var pos=0;
   var x=100;
   var y;

  image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5) 

    Player.getPlayerInfo()
    player.getCarsAtEnd()
    console.log(player.rank)
    var displayPosition = 130
    for(var plr in allPlayers){
       x=x+200
       y=displayHeight-allPlayers[plr].distance
       cars[pos].x=x
       cars[pos].y=y
       pos=pos+1
       if(pos===player.index){
        fill("red");   
        ellipse(x,y,75,75);
           cars[pos-1].shapeColor= "red"
           camera.position.x=displayWidth/2
           camera.position.y=cars[pos-1].y
       }
        //textSize(30)
        //text(allPlayers[plr].name + ":"+ allPlayers[plr].distance, 200,displayPosition)
        if(keyIsDown(UP_ARROW)&& player.distance<3500){
        player.distance+=10
        player.update()
}
//console.log(player.distance)
if (player.distance>=3500){
    gameState=2
    console.log(player.rank)
    player.rank+=1;
    console.log(player.rank)
    Player.updateCarsAtEnd(player.rank)
}



    }



    drawSprites()
}

End(){
    
    console.log("game has ended");
}

}
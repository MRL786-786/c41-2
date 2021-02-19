class Player{
    constructor(){
        this.distance=0;
        this.name=null;
        this.index-null;
        this.rank=null;

    }
    getCount(){
        var playerCountRef = database.ref("playerCount")
        playerCountRef.on("value",function(data){
            playerCount=data.val()
        })
    }
    updateCount(count){
database.ref("/").update({playerCount:count})
console.log(count)
    }
    update(){
        var playerIndex= ("players/player"+this.index)
        console.log(playerIndex)
        database.ref(playerIndex).update({name:this.name,distance:this.distance})
    }

static getPlayerInfo(){
    var playerInfoRef = database.ref("players")
    playerInfoRef.on("value",function(data){
        allPlayers=data.val()
    })
}


getCarsAtEnd(){
    var playerRanking=database.ref("carsAtEnd")
    playerRanking.on("value", (data)=>{
    this.rank=data.val()
    })
}

static updateCarsAtEnd(rank){
    database.ref("/").update({carsAtEnd:rank})
}
    



}
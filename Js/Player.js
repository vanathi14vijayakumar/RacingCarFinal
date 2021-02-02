class Player{
    constructor(){
        this.name = null
        this.distance = 0
        this.index = null
        this.Rank = 0

    }

    getCount(){
        var cRef = db.ref("playercount")
        cRef.on("value",(data)=>{
            playerCounter = data.val()
        })
    }

    updateCount(num){
        db.ref("/").update({
            playercount:num
        })
    }

    update(){
        var playerIndex = "players/player"+this.index
        db.ref(playerIndex).set({name:this.name,distance:this.distance})
    }

    getRank(){
        var ran = db.ref("rank")
        ran.on("value",(data) =>{
            this.Rank = data.val();
        })

    }

    updateRank(no){
        db.ref("/").update({rank:no})
    }

    static getPlayerinfo(){
        db.ref("players").on("value",(data)=>{
            allPlayers = data.val()
        })
        

    }
}
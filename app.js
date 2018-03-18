/* flow

1- user select a box item
each box item has an event attach to them 
on click it return a number from 1 to 9 associated to the box item

*/

var box={
   item1:1,
   item2:2,
   item3:3,
   item4:4,
   item5:5,
   item6:6,
   item7:7,
   item8:8,
   item9:9
}

var player1={
    active:true,
    score_ref:"#score-1",
    score:0,
    game:[],
    icon:`<i class="material-icons box__icon">clear</i>`,
    hold:function(players){
        console.log("pholding...")
        for(player of players){
            if(player===this){
                player.active=false
                
            }else{
                player.active=true
            }
        }
       
    },
    selectBox:function(boxId){
        console.log("selecting box")
        console.log(boxId.getAttribute("Id"))
        for(var i of Object.keys(box)){
            switch(boxId.getAttribute("Id")){
                case i:
                this.pusher(box[i])
                console.log(box[i])
                break;
            }
        }
    },
    pusher:function(num){
        console.log("pushing in list")
        this.game.push(num)
        console.log(this.game)
        this.check()
    },
    check:function(){
        console.log("checking ...")
        if(this.game.length===3){
            for(var i of set){
                var isValid=true
                for(var j of this.game){
                    isValid=isValid * (j===i[0] || j===i[1] || j===i[2])
                   
                }
                this.isWinner(isValid)
            }

        }else{
            this.hold(players)
        }

    },
    isWinner:function(valid){
        console.log("verifying winner")
        if (valid){
            console.log("you win")
            this.score+=1
            document.querySelector(this.score_ref).textContent=this.score
           setTimeout(reset(),3000)
            
        }else{
            this.hold(players)
        }
    }
}
var player2={
    game:[],
    score_ref:"#score-2",
    active:false,
    score:0,
    icon:`<i class="material-icons box__icon icon--white">panorama_fish_eye</i>`
}

player2.hold=player1.hold
player2.selectBox=player1.selectBox
player2.pusher=player1.pusher
player2.isWinner=player1.isWinner
player2.check=player1.check
players=[player1,player2]

//console.log(players)

var set=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]





function checkActivePlayer(players){
    console.log("checking active player")
    for(var player of players){
        if(player.active){
            console.log(player)
            return player
        }
    }
}


function controller(player,box){
    console.log("adding to the DOM")
    console.log(box)
    box.innerHTML=player.icon
    player.selectBox(box)
    
}





var ids={}
// for (var i of Object.keys(box)){
//     ids[i]="#"+i

// document.querySelector(ids[i]).addEventListener('click',function(){document.querySelector(ids[i]).innerHTML=circle}



//console.log(ids)
var box1=document.querySelector("#item1")
var box2=document.querySelector("#item2")
var box3=document.querySelector("#item3")
var box4=document.querySelector("#item4")
var box5=document.querySelector("#item5")
var box6=document.querySelector("#item6")
var box7=document.querySelector("#item7")
var box8=document.querySelector("#item8")
var box9=document.querySelector("#item9")

// function click_control(boxId){
//     switch(boxId){
//         case '#item1':

//     }
// }

box1.addEventListener('click',function(){
    controller(checkActivePlayer(players),box1)
})
box2.addEventListener('click',function(){
    controller(checkActivePlayer(players),box2)
})
box3.addEventListener('click',function(){
    controller(checkActivePlayer(players),box3)
})
box4.addEventListener('click',function(){
    controller(checkActivePlayer(players),box4)
})
box5.addEventListener('click',function(){
    controller(checkActivePlayer(players),box5)
})
box6.addEventListener('click',function(){
    controller(checkActivePlayer(players),box6)
})
box7.addEventListener('click',function(){
    controller(checkActivePlayer(players),box7)
})
box8.addEventListener('click',function(){
    controller(checkActivePlayer(players),box8)
})
box9.addEventListener('click',function(){
    controller(checkActivePlayer(players),box9)
})

function reset(){
    box1.textContent=''
    box2.textContent=''
    box3.textContent=''
    box4.textContent=''
    box5.textContent=''
    box6.textContent=''
    box7.textContent=''
    box8.textContent=''
    box9.textContent=''
    
}

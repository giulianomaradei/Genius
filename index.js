document.querySelector("#start-button").addEventListener("click",start);

var LastCollors = [];
var turn = 0;
var level=1;

function randomColor(){
    let colors = ["red","green","blue","yellow"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function start(){
    let start = document.getElementById("start-button");
    start.style.visibility = "hidden";

    let title = document.querySelector(".page-title");
    title.innerHTML = "Genius";
    title.style.color = "white";

    turn = 0;
    level = 1;
    LastCollors = [];
    LastCollors.push(randomColor());


    setTimeout(function(){
        addEvents(0);
        show_order(0);
    },1000);

}

function gameover(){
    let title = document.querySelector(".page-title");
    title.innerHTML = "GAME OVER";
    title.style.color = "red";
    let start = document.getElementById("start-button");
    start.style.visibility = "visible";
    start.innerHTML = "Click to restart";

    var audio = new Audio("Audios\\gameover.mp3")
    audio.play();

    addEvents(0);
}

function clicked(event){
    let cor = this.getAttribute("id");

    var audio = new Audio("Audios\\player_beep.mp3");
    audio.play();
    
    if(LastCollors[turn] != cor){
        gameover();
    }else{
        if(turn+1 < level){
            turn++;
        }else{
            nextPhase();
        }

    }

}

function show_order(i){
    var current = document.getElementById(LastCollors[i]);
    setTimeout(function(){
    current.classList.add("blink"); 
    },200);
    var audio = new Audio("Audios\\beep.mp3");
    audio.play();
    setTimeout(function(){
        current.classList.remove("blink");
    },800);
    
    if(i+1 < LastCollors.length){
        setTimeout(show_order, 1000,i+1);
    }else{
        addEvents(1);
    }
}

function nextPhase(){
    LastCollors.push(randomColor());
    turn = 0;
    level++;
    setTimeout(function(){
        show_order(0);
        addEvents(0);
    },1000);
}

function addEvents(op){
    var listOfButtons = document.querySelectorAll('#red , #green , #blue,#yellow');
    for(var i=0;i<listOfButtons.length;i++){
        if(op == 1)
            listOfButtons[i].addEventListener("click",clicked);
        else if(op==0){
            listOfButtons[i].removeEventListener("click",clicked);
        }
    }
}






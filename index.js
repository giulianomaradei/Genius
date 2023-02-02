var listOfButtons = document.querySelectorAll('#red , #green , #blue,#yellow');
for(var i=0;i<listOfButtons.length;i++){
    listOfButtons[i].addEventListener("click",clicked);
}

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

    show_order(0);
}

function gameover(){
    let title = document.querySelector(".page-title");
    title.innerHTML = "GAME OVER";
    title.style.color = "red";
    let start = document.getElementById("start-button");
    start.style.visibility = "visible";
    start.innerHTML = "Click to restart";
}

function clicked(event){
    let cor = this.getAttribute("id");
    
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
    setTimeout(function(){
        current.classList.remove("blink");
    },800);
    console.log(i);
    if(i+1 < LastCollors.length){
        setTimeout(show_order, 1000,i+1);
    }
}

function nextPhase(){
    LastCollors.push(randomColor());
    turn = 0;
    level++;
    show_order(0);
}





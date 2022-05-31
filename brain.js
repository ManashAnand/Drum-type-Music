aboom = document.getElementById("boom");
clap = document.getElementById("clap");
kick = document.getElementById("kick");
punch = document.getElementById("punch");
snare = document.getElementById("snare");
same = document.getElementsByClassName("same");

document.addEventListener('keydown',sound);
document.addEventListener('keyup',soundOff);
function soundOff(e)
{   
    Audio.currentTime = 0;
    if(e.keyCode == 65) {

                boom.style.fontSize = "2rem";
                boom.style.border = "2px solid lightgreen";

    }
    else if(e.keyCode == 83){


        clap.style.fontSize = "2rem";
        clap.style.border = "2px solid lightgreen";
    }
    else if(e.keyCode == 68){

        kick.style.fontSize = "2rem";
        kick.style.border = "2px solid lightgreen";
    }
    else if(e.keyCode == 70)
    {
        punch.style.fontSize = "2rem";
        punch.style.border = "2px solid lightgreen";
    }
    else if(e.keyCode == 71)
    {
        snare.style.fontSize = "2rem";
        snare.style.border = "2px solid lightgreen";
    }
}
function sound(e){
    if(e.keyCode == 65) {
        var bo = new Audio('boom.mp3');
                bo.play();
                boom.style.fontSize = "2.5rem";
                boom.style.border = "3px solid orange";
                boom.style.color = "white";

    }
    else if(e.keyCode == 83){
        var cl = new Audio('clap.wav');
        cl.play();

        clap.style.fontSize = "2.5rem";
        clap.style.border = "3px solid orange";
        clap.style.color = "white";
    }
    else if(e.keyCode == 68){
        var ki = new Audio('kick.mp3');
        ki.play();
        kick.style.fontSize = "2.5rem";
        kick.style.border = "3px solid orange";
        kick.style.color = "white";
    }
    else if(e.keyCode == 70)
    {
        var pun = new Audio('punch.wav');
        pun.play();
        punch.style.fontSize = "2.5rem";
        punch.style.border = "3px solid orange";
        punch.style.color = "white";
    }
    else if(e.keyCode == 71)
    {
        var sna = new Audio('snare.mp3');
        sna.play();
        snare.style.fontSize = "2.5rem";
        snare.style.border = "3px solid orange";
        snare.style.color = "white";
    }


    
    else {
        console.log("Invalid Key");
    }
}
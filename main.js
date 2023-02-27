let sequenceGame = [];
let sequencePlayer = [];
let level = 0;
let body = document.querySelector('body');
let start_level = document.querySelector('#start_level');

let colors = ["red", "green", "blue", "yellow"];

let divs = document.querySelectorAll('.div-simon');
let check = true;

/* Flash function */
function flash (idEl, color) {
    idEl.style.backgroundColor = "var(--r-" + color + "-flash)";
    setTimeout(() => {
        idEl.style.backgroundColor = "var(--r-" + color + ")";
    }, 300)
}

/* Inizio gioco */
function start(){
    document.addEventListener('keypress',() => {
        if(check == true){
            createSequenceGame();
            console.log('game started');
            body.style.backgroundColor = 'var(--black)';
        } 
    })
}

/* Restart */
function restart(){
    level = 0;
    sequencePlayer = [];
    sequenceGame = [];
    check = true;
}

/* Compara sequenze */
function checkAnswer(currentLevel){

    if(sequenceGame[currentLevel] === sequencePlayer[currentLevel]){
        if(sequenceGame.length === sequencePlayer.length){
        console.log('success');
        setTimeout(()=>{
            createSequenceGame();
        },1000)}
    } else {
        console.log('wrong');
        body.style.backgroundColor = 'var(--dark-red)';
        start_level.innerHTML = "Game Over, press any key to restart the game";
        restart();
    }
}

/* Sequenza gioco */
function createSequenceGame(){
    sequencePlayer = [];
    level++;
    let randomColor = colors[Math.floor(Math.random() * 4)];
    let colorFlash = document.getElementById(randomColor);
    
    sequenceGame.push(randomColor);
    
    switch(level){
        case 10: 
        start_level.innerHTML = "Level " + level + ", very good, keep going...";
        break;
        case 20: 
        start_level.innerHTML = "Level " + level + ", impressive!";
        break;
        default:
        start_level.innerHTML = "Level " + level ;
    }

    flash(colorFlash, randomColor);
    console.log(sequenceGame);
    check = false;
}

/* GIOCO */
start();

divs.forEach((item, i) => {
    item.addEventListener('click', () => {
        if(item[i] == this[i]){
            sequencePlayer.push(item.id);
            flash(item, item.id);
            console.log(sequencePlayer);
            
            if(check == false){
                checkAnswer(sequencePlayer.length - 1);
            }
        }
    })
})


































let sequenceGame = [];
let sequencePlayer = [];
let level = 0;

let colors = ["red", "green", "blue", "yellow"];

let divs = document.querySelectorAll('.div-simon');
let check = true;

/* Flash function */
function flash (x, color) {
    x.style.backgroundColor = "white";
    setTimeout(() => {
        x.style.backgroundColor = color;
    }, 300)
}

/* Inizio gioco */
function start(){
    document.addEventListener('keypress',() => {
        if(check == true){
            createSequenceGame();
            console.log('game started');
        } 
    })
}

/* Compara sequenze */
function checkAnswer(currentLevel){
    if(sequenceGame[(currentLevel - 1)] == sequencePlayer[(currentLevel - 1)] && sequenceGame.length == sequencePlayer.length){
        console.log('success');
        console.log(sequenceGame[(currentLevel - 1)]);
        console.log(sequencePlayer[(currentLevel - 1)]);
        setTimeout(()=>{
            sequencePlayer = [];
            createSequenceGame();
        },1000)
    } else {
        console.log('wrong');
    }
}

/* Sequenza gioco */
function createSequenceGame(){
    let randomColor = colors[Math.round(Math.random() * (3 - 0) + 0)];
    let colorFlash = document.getElementById(randomColor);
    
    sequenceGame.push(randomColor);
    flash(colorFlash, randomColor);
    console.log(sequenceGame);
    check = false;
    level++;
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
                if(sequenceGame.length == sequencePlayer.length){
                    checkAnswer(level);
                    console.log(level);
                }
            }
        }
    })
})

































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
            setTimeout(()=>{
                createSequenceGame();
            },1000)}
        } else {
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
            start_level.innerHTML = "Level " + level + ", impressive! From here on you'll be closer and closer to a God";
            break;
            default:
            start_level.innerHTML = "Level " + level ;
        }
        
        flash(colorFlash, randomColor);
        check = false;
    }
    
    /* GIOCO */
    start();
    
    divs.forEach((item, i) => {
        item.addEventListener('click', () => {
            if(item[i] == this[i]){
                sequencePlayer.push(item.id);
                flash(item, item.id);
                
                if(check == false){
                    checkAnswer(sequencePlayer.length - 1);
                }
            }
        })
    })
    
    /* Regole */
    
    let check_rules = true; 
    let btn_rules = document.querySelector('.btn-rules');
    let btn_dismiss = document.querySelector('.btn-dismiss');
    let rules = document.querySelector('.modale-regole-wrapper');

    btn_rules.addEventListener('click', () => {
        if(check_rules){
            rules.classList.toggle('d-none');
            check_rules = false;
        } else {
            rules.classList.toggle('d-none');
            check_rules = true;
        }
    })

    btn_dismiss.addEventListener('click', () => {
        if(!check_rules){
            rules.classList.toggle('d-none');
            check_rules = true;
        } 
    })

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//building score 
let score = 0;
let cross = true;
let space = true;
let gameAudio = new Audio('kal.mp3')


document.onkeydown = function (e) {
    console.log("you pressed", e.keyCode)
    //dino kuda
    if (e.keyCode == 38) {
        let dino = document.getElementById('dino')
        dino.classList.add('dinoanimate')
        setTimeout(() => {
            console.log("dino land")
            dino.classList.remove('dinoanimate')
        }, 258);
    }
    //dino move right-left
    if (e.keyCode == 39) {
        console.log("you preseed right arrow ")
        dinoy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
        dino.style.left = dinoy + 112 + "px";
    }
    if (e.keyCode == 37) {
        console.log("you preseed left arrow")
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
        dino.style.left = (dinox - 115) + "px";
    }
    //game continue
    if (e.keyCode == 32 && space) {
        console.log("game continue");
        gameAudio.play()

        let bush1 = document.getElementById('bush1')
        let bush2 = document.getElementById('bush2')
        let clouds = document.getElementById('clouds')
        let bird1 = document.getElementById('bird')
        bush1.classList.add('bush1ani')
        clouds.classList.add('cloudani')
        bird1.classList.add('bird1ani')
        bush1.classList.add('bush1fast')
        //dino.classList.remove('dinoover')
        gameover.style.visibility = "hidden";
        gameName.style.visibility = "hidden";
        starter.style.visibility = "hidden";
        space = false;
    } else if (e.keyCode == 32 && space == false) {

        //game pause
        gameAudio.pause()
        console.log("game paused");
        let bush1 = document.getElementById('bush1')
        let bush2 = document.getElementById('bush2')
        let clouds = document.getElementById('clouds')
        let bird1 = document.getElementById('bird')
        bush1.classList.remove('bush1ani')
        clouds.classList.remove('cloudani')
        bird1.classList.remove('bird1ani')
        bush1.classList.remove('bush1fast')
        setTimeout(() => {
            space = true;
        }, 50);
    }
}
//gameover  
setInterval(() => {
    gamePause = false
    dino = document.getElementById('dino')
    bush1 = document.getElementById('bush1')
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'))
    bx = parseInt(window.getComputedStyle(bush1, null).getPropertyValue('left'))
    by = parseInt(window.getComputedStyle(bush1, null).getPropertyValue('top'))
    offsetX = Math.abs(dx - bx)
    offsetY = Math.abs(dy - by)
    //console.log(offsetX, offsetY)
    if (offsetX < 73 && offsetY < 52) {
        let bird1 = document.getElementById('bird')
        gameover = document.getElementById('gameover')
        console.log("gameover bhai")
        gameAudio.pause()
        bush1.classList.remove('bush1ani')
        bush1.classList.remove('bush1fast')
        clouds.classList.remove('cloudani')
        bird1.classList.remove('bird1ani')
        dino.classList.add('dinoover')
        setTimeout(() => {
            dino.classList.remove('dinoover')

        }, 880);
        gameover.style.visibility = "visible";

        score = 0;


    } else if (offsetX < 153 && cross == true) {
        score += 1;
        let yourscore = document.getElementById('score')
        yourscore.innerText = "your score is:" + score;
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 100);
        //fast bush seed 
        if (score >= 5) {
            let bush1speed = document.querySelector('.bush1ani')
            let oldBush1 = parseFloat(window.getComputedStyle(bush1, null).getPropertyValue('animation-duration'))
            setTimeout(() => {

                bush1speed.style.animationDuration = oldBush1 - 0.1 + "s";
            }, 300);
        } else if (score >= 10) {
            setTimeout(() => {

                bush1speed.style.animationDuration = oldBush1 - 0.1 + "s";
            }, 300);
        } else if (score >= 15) {
            setTimeout(() => {

                bush1speed.style.animationDuration = oldBush1 - 0.1 + "s";
            }, 300);
        } else if (score >= 20) {
            setTimeout(() => {

                bush1speed.style.animationDuration = oldBush1 - 0.1 + "s";
            }, 300);
        } else if (score >= 25) {
            setTimeout(() => {

                bush1speed.style.animationDuration = oldBush1 - 0.1 + "s";
            }, 300);
        }
    }

}, 200);
// gameover color animation
let gameover = document.getElementById('gameover')
setInterval(() => {
    gameover.style.color = "red";
}, 300);
setInterval(() => {
    gameover.style.color = "blue";
}, 450);


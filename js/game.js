const gameStartBtn = document.querySelector('.gameStartBtn');
const gamesSection = document.querySelector('.games');
gameStartBtn.addEventListener('click', (e) => {
    gamesSection.classList.add('game-start');
})

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const lvl = document.querySelector('.lvl');
const arcanoid = document.querySelector('.arcanoid');
let lvlNum = 1;
let score = 0;

const brickRowCount = 9;
const brickColumnCount = 5;

//ELEMENTS COLOR

let color = 'crimson'
let s = 0;

//CREATE BALL PROPS

const ball = {
    x: canvas.width /2,
    y: canvas.height /2,
    size: 10,
    speed: 4,
    dx: 0,
    dy: 0,
}

//CREATE PADDLE

const paddle = {
    x: canvas.width / 2 - 40,
    y: canvas.height - 20,
    w: 100,
    h: 10,
    speed: 8,
    dx: 0,
}

//CREATE BRICK

const brickInfo = {
    w: 70,
    h: 20,
    padding: 10,
    offsetX: 45,
    offsetY: 60,
    visible: true,
}

const bricks = [];
for(let i=  0; i< brickRowCount; i++) {
    bricks[i] = [];
    for(let j = 0; j< brickColumnCount; j++) {
        const x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX;
        const y = j * (brickInfo.h + brickInfo.padding) + brickInfo.offsetY;
        bricks[i][j] = {x,y, ...brickInfo}
    }
}

//DRAW BALL

function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x,ball.y, ball.size, 0, Math.PI * 2);
    ctx.fillStyle = `${color}`;
    ctx.fill();
    ctx.closePath();
}

//Draw Paddle

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
    ctx.fillStyle = `${color}`;
    ctx.fill();
    ctx.closePath();
}

//DRAW SCORE

function drawScore () {
    ctx.font = '20px Cursive';
    ctx.fillText(`Score: ${score}`, canvas.width - 775, 40);
}

//DRAW BRICKS

function drawBricks() {
    bricks.forEach(column => {
        column.forEach(brick => {
            ctx.beginPath();
            ctx.rect(brick.x, brick.y, brick.w, brick.h);
            ctx.fillStyle = brick.visible ? `${color}` : 'transparent';
            ctx.fill();
            ctx.closePath();
        })
    })
}

//MOVE PADDLE

function movePaddle(){
    paddle.x += paddle.dx;

    //Wall Detection

    //RIGHT WALL
    if(paddle.x + paddle.w > canvas.width){
        paddle.x  = 0;
    }
    //LEFT WALL
    if(paddle.x < 0) {
        paddle.x = canvas.width - paddle.w;
    }

}

//MOVE BALL

function moveBall(){
    ball.x += ball.dx;
    ball.y += ball.dy;

    //WALL COLLISION (x)

    if(ball.x + ball.size > canvas.width || ball.x - ball.size < 0) {
        ball.dx *= -1;
    }

    //WALL COLLISION (y)

    if(ball.y + ball.size > canvas.height || ball.y - ball.size < 0) {
        ball.dy *= -1;
        //LOSE
        if(ball.y - ball.size > 0) {
            showAllbricks();
            score = 0;
            const lose = () => {
                arcanoid.classList.add('activeGame')
                ball.dx = 0;
                ball.dy = 0;
                ball.x = canvas.width /2;
                ball.y = canvas.height /2;
                ball.speed = 4;
                lvlNum = 1;
                lvl.innerHTML = lvlNum;
                document.querySelector('.arcanoid h2').classList.add('lose');
            }
            lose();
            // console.log("ga")
            // alert('Lose')
        }
    }

    //PADDLE COLLISION

    if(ball.x - ball.size > paddle.x && ball.x + ball.size < paddle.x + paddle.w && ball.y + ball.size > paddle.y) {
        ball.dy = -ball.speed;
        if (ball.dx > 0) {
            ball.dx = ball.speed;
        }else {
            ball.dx = -ball.speed;
        }
        
    }

    //BRICK COLLISION

    bricks.forEach(column => {
        column.forEach(brick => {
            if(brick.visible) {
                if(ball.x - ball.size > brick.x && ball.x + ball.size < brick.x + brick.w &&
                    ball.y + ball.size > brick.y && ball.y - ball.size < brick.y + brick.h) {
                        ball.dy *= -1;
                        brick.visible = false;
                        increaseScore();
                    }
            }
        })
    })

}

//INCRESE SCORE

let speedOfaBall = ball.speed;
// let speedXofABall = ball.dx;

function increaseScore() {
    score++;

    if(score % (brickRowCount * brickColumnCount) === 0) {
        showAllbricks();
        s++;
        ball.speed = ball.speed + 0.4;
        // if
        // ball.dx = ball.dx + 0.4;
        speed = ball.speed
        lvlNum = lvlNum + 1;
        lvl.innerHTML = lvlNum;
        if(s === 1) {
            color = 'yellowgreen';
            document.body.style.backgroundColor = 'yellowgreen';
        } else if(s === 2) {
            document.body.style.backgroundColor = 'deepskyblue';
            color = 'deepskyblue'
        } else if(s === 3) {
            s = 0;
            color = 'crimson';
            document.body.style.backgroundColor = 'crimson'
        }
    }
}
//START GAME
const start = function () {
    ball.dx = 4;
    ball.dy = 4;
    arcanoid.classList.remove('activeGame')
    document.querySelector('.arcanoid h2').classList.remove('lose');
    // console.log(this.innerHTML)
    // this.classlist.add('none');
}

document.querySelector('.start-game').addEventListener('click', start);


//PAUSE GAME

let p = 1;
document.addEventListener('keydown', pause = (e) =>{
    if(e.key == 'p') {
        if(arcanoid.classList.contains('activeGame')){}
        else {
            document.querySelector('.arcanoid').classList.toggle('paused');
            if(ball.dx > 0 && ball.dy < 0) {
                ball.dx = 0;
                ball.dy = 0;
                p = 2;
            } else if( p == 2) {
                ball.dx = speedOfaBall;
                ball.dy = -speedOfaBall;
                p = 1
            } else if(ball.dx < 0 && ball.dy < 0) {
                ball.dx = 0;
                ball.dy = 0;
                p = 3;
            } else if( p == 3) {
                ball.dx = -speedOfaBall;
                ball.dy = -speedOfaBall;
                p = 1
            } else if(ball.dx < 0 && ball.dy > 0) {
                ball.dx = 0;
                ball.dy = 0;
                p = 4;
            } else if( p == 4) {
                ball.dx = -speedOfaBall;
                ball.dy = speedOfaBall;
                p = 1
            } else if(ball.dx > 0 && ball.dy > 0) {
                ball.dx = 0;
                ball.dy = 0;
                p = 5;
            } else if( p == 5) {
                ball.dx = speedOfaBall;
                ball.dy = speedOfaBall;
                p = 1
            }
        }
    }
})

function showAllbricks() {
    bricks.forEach(column => {
        column.forEach(brick => brick.visible = true);
    })
}

//DRAW EVERYTHING

function draw () {
    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    drawPaddle();
    drawBall();
    drawScore ()
    drawBricks();
}

function update() {
    movePaddle();
    moveBall();


    draw();

    requestAnimationFrame(update);
}

update();

//PADDLE CONTROLS

function keyDown(e) {
    if(e.key === 'ArrowRight' || e.key === 'Right') {
        paddle.dx = paddle.speed;
    } else if(e.key === 'Left' || e.key === 'ArrowLeft') {
        paddle.dx = -paddle.speed;
    }
}

function keyUp(e) {
    if(e.key === 'ArrowRight' || e.key === 'Right' || e.key === 'Left' || e.key === 'ArrowLeft') {
        paddle.dx = 0;
    }
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
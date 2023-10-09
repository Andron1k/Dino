const ball = document.querySelector('.ball');
const obstacle = document.querySelector('.obstacle');
const scoreDisplay = document.querySelector('.score');

let score = 0;

// Функція для рахунку
function updateScore() {
    score++;
    scoreDisplay.textContent = score;
}
setInterval(updateScore, 100); 


// Зчитування стрибка
let isJumping = false;
document.addEventListener('keydown', jump);


// Функція стрибка
function jump(event) {
    if (event.keyCode === 32 && !isJumping) {
        isJumping = true;

        let jumpHeight = 0;
        const jumpInterval = setInterval(() => {
            if (jumpHeight >= 120) {
                clearInterval(jumpInterval);

                const fallInterval = setInterval(() => {
                    if (jumpHeight <= 0) {
                        clearInterval(fallInterval);
                        isJumping = false;
                    } else {
                        jumpHeight -= 10;
                        ball.style.bottom = jumpHeight + 'px';
                    }
                }, 20);
            } else {
                jumpHeight += 10;
                ball.style.bottom = jumpHeight + 'px';
            }
        }, 20);
    }
}

// Функція зіткнення
function checkCollision() {
    const ballBottom = parseInt(getComputedStyle(ball).bottom);
    const obstacleLeft = parseInt(getComputedStyle(obstacle).left);

    if (ballBottom <= 20 && obstacleLeft >= 0 && obstacleLeft <= 100) {
        alert('Гра закінчена. Ваш рахунок: ' + score);
        document.location.reload();
    }
}

setInterval(checkCollision, 10);



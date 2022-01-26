const allSquares = [...document.querySelectorAll(".square")];
let randomSquare;
let randomSquareId;
let currentClick;
let clickedSquareId;

//scores
let gameResult;
let livesNum;
let gameTime = 60; 

//intervals
let showAndHideId; 
let timePastId;

//html
let livesPanel = document.getElementById('livesPanel');
let pointsPanel = document.getElementById('pointsPanel');
let gameTimePanel = document.getElementById('timePanel');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

function timePast() {
    if(gameTime > 0) {
        gameTime-= 1;
        gameTimePanel.innerHTML=gameTime;
        console.log(gameTime);
    } else {
        gameTimePanel.innerHTML=0;
        gameTime = 0;
        gameOver();
    };
}

function showRandomSquare() {
    let randomSquareNumb = Math.floor(Math.random()*25+0);
    allSquares[randomSquareNumb].classList.add('square__clicked');
    randomSquare = allSquares[randomSquareNumb];
    randomSquareId = randomSquare.id;    
};

function hideAllSquares() {
    allSquares.forEach(function (square, i) {
        square.classList.remove('square__clicked');
    });
};

function showAndHide() {
    if (gameTime > 0) {
        showRandomSquare();
        setTimeout(() => {
            hideAllSquares();
        }, 2000);
    }
};    

function addPoints(e) {
    currentClick = e.target;
    clickedSquareId = currentClick.id;

    if(randomSquareId===clickedSquareId) {
        gameResult +=1;
        pointsPanel.innerHTML=gameResult;
    } else if (currentClick===startBtn || currentClick===resetBtn) {
        gameResult = gameResult;
    } else {
        alert("Straciłeś życie gapo!");
        livesNum -=1;
        livesPanel.innerHTML=livesNum;
    }

    if(livesNum <= 0) {
        alert("Straciłeś wszystkie życia łamago.");
        gameTime = 0;
    }
};

function runGame() {
    gameResult = 0;
    livesNum = 3;
    gameTime = 60;
    
    pointsPanel.innerHTML=gameResult;
    livesPanel.innerHTML=livesNum;

    showAndHideId = setInterval(showAndHide, 2500);
    window.addEventListener('click', addPoints);     
    timePastId = setInterval(timePast, 1000); 
};

function resetGame() {
    alert("Reset gry");
    
    clearInterval(showAndHideId);  
    clearInterval(timePastId);

    runGame();      
};

function gameOver() {
    alert("Koniec gry! Twój wynik to " + gameResult + " punktów");
    clearInterval(showAndHideId);  
    clearInterval(timePastId);
}

function startGame() {
    if(gameTime === 60) {
        runGame();
    } else {
        alert("Nie można ponownie uruchomić gry w jej trakcie. Jeśli chcesz ponownie rozpocząć grę kliknij Reset");
    }
};

startBtn.addEventListener("click", startGame);
resetBtn.addEventListener("click", resetGame);

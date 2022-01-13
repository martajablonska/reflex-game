const allSquares = [...document.querySelectorAll(".square")];
let randomSquare;
let randomSquareId;
let currentClick;
let clickedSquareId;
let gameResult = 0;
let livesNum = 3;
let gameTime = 10;
let livesPanel = document.getElementById('livesPanel');
let pointsPanel = document.getElementById('pointsPanel');
let gameTimePanel = document.getElementById('timePanel');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');



function showRandomSquare() {
    let randomSquareNumb = Math.floor(Math.random()*25+0);
    allSquares[randomSquareNumb].classList.add('square__clicked');
    randomSquare = allSquares[randomSquareNumb];
    randomSquareId = randomSquare.id;
};

function hideAllSquares() {
    for(let i=0; i <allSquares.length; i++) {
        allSquares[i].classList.remove('square__clicked');
    };
};

/*setInterval(() => {
    gameTime-= 1;
    gameTimePanel.innerHTML=gameTime;
}, 1000);*/


window.addEventListener('click', function(e) {
    currentClick = e.target;
    clickedSquareId = currentClick.id;

    if(randomSquareId===clickedSquareId) {
        gameResult +=1;
        pointsPanel.innerHTML=gameResult;
    } else {
        alert("Straciłeś życie gapo!");
        livesNum -=1;
        livesPanel.innerHTML=livesNum;
    } 

    if(livesNum <= 0) {
        this.alert("Koniec gry :(");
    }

    console.log(gameResult);
    console.log(livesNum);
});

function start() {

    
    

    setInterval(() => {
        showRandomSquare();
        setTimeout(() => {
            hideAllSquares();
        }, 1999);
    }, 2000);
};

function resetGame() {
    gameResult = 0;
    livesNum = 3;
    gameTime = 60;
};

startBtn.addEventListener("click", start);
resetBtn.addEventListener("click", resetGame);

 
    setInterval(() => {
        if(gameTime > 0) {
            gameTime-= 1;
            gameTimePanel.innerHTML=gameTime;
        } else {
            //this.alert("Czas sie skończył");
            gameTimePanel.innerHTML=0;
        }
        
    }, 1000); 



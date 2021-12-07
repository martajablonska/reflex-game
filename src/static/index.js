const allSquares = [...document.querySelectorAll(".square")];
let randomSquareNumb = Math.floor(Math.random()*25+0);
let randomSquare;
let randomSquareId;
let currentClick;
let clickedSquareId;
let gameResult = 0;
let livesNum = 3;


function showRandomSquare() {
    allSquares[randomSquareNumb].classList.add('square__clicked');
    randomSquare = allSquares[randomSquareNumb];
    randomSquareId = randomSquare.id;
};

showRandomSquare();

window.addEventListener('click', function(e) {
    currentClick = e.target;
    clickedSquareId = currentClick.id;

    if(randomSquareId===clickedSquareId) {
        console.log("bingo!");
        gameResult +=1;
    } else {
        alert("Straciłeś życie gapo!");
        livesNum -=1;
    } 

    if(livesNum <= 0) {
        this.alert("Koniec gry");
    }

    console.log(gameResult);
    console.log(livesNum);
});



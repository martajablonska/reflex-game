const allSquares = [...document.querySelectorAll(".square")];
let randomSquare = Math.floor(Math.random()*25+0);

function showRandomSquare() {
    allSquares[randomSquare].classList.add('square__clicked');
};

showRandomSquare();


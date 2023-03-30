//GLOBAL VARIABLES SECTION
const playersSection = document.querySelector(".players-section");
const submitPlayersButton = document.getElementById("submit-players-button");
const playerOneInput = document.getElementById("player-one");
const playerTwoInput = document.getElementById("player-two");
let playerOne = "";
let playerTwo = "";
const playerTurnSection = document.querySelector(".player-turn-section");
const playerTurn = document.getElementById("player-turn");
const markerOne = "O";
const markerTwo = "X";
const squaresSection = document.querySelector(".squares-section");
const squares = document.querySelectorAll(".squares");
const playerOneSelectedSquares = [];
const playerTwoSelectedSquares = [];
let playerOrder = 1;

//CODE SECTION
submitPlayersButton.addEventListener("click", () => {
    playerOne = playerOneInput.value;
    playerTwo = playerTwoInput.value;
    playerOneInput.value = "";
    playerTwoInput.value = "";
    showBattleground();
    switchPlayer();
});

squares.forEach((square) => {
    square.addEventListener("click", (event) => {
        console.log(event.target);
        switch (event.target.id) {
            case "square-one":
                placeMarker(event);
                switchPlayer();
                break;
            case "square-two":
                placeMarker(event);
                switchPlayer();
                break;
            case "square-three":
                placeMarker(event);
                switchPlayer();
                break;
            case "square-four":
                placeMarker(event);
                switchPlayer();
                break;
            case "square-five":
                placeMarker(event);
                switchPlayer();
                break;
            case "square-six":
                placeMarker(event);
                switchPlayer();
                break;
            case "square-seven":
                placeMarker(event);
                switchPlayer();
                break;
            case "square-eight":
                placeMarker(event);
                switchPlayer();
                break;
            case "square-nine":
                placeMarker(event);
                switchPlayer();
                break;
        };
    });
});

//FUNCTIONS SECTION
function showBattleground() {
    playersSection.classList.add("delete-section");
    playerTurnSection.classList.remove("delete-section");
    squaresSection.classList.remove("delete-section");
};

function switchPlayer() {
    if(playerOrder === 1) {
        playerTurn.innerText = `${playerOne}'s turn!`;
    } else if(playerOrder === 2) {
        playerTurn.innerText = `${playerTwo}'s turn!`;
    };
};

function placeMarker(event) {
    if(playerOrder === 1) {
        event.target.innerText = markerOne;
        playerOrder = 2;
    } else if(playerOrder === 2) {
        event.target.innerText = markerTwo;
        playerOrder = 1;
    };
    console.log(playerOrder);
};
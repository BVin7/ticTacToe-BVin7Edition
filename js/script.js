//GLOBAL VARIABLES SECTION
const playersInputSection = document.querySelector(".players-input-section");
const submitPlayersButton = document.getElementById("submit-players-button");
const playerOneInput = document.getElementById("player-one");
const playerTwoInput = document.getElementById("player-two");
const playerOneName = document.getElementById("player-one-name");
const playerTwoName = document.getElementById("player-two-name");
const playerOneScore = document.getElementById("player-one-score");
const playerTwoScore = document.getElementById("player-two-score");
const playerOneWinningMessage = document.getElementById("player-one-winning-message");
const playerTwoWinningMessage = document.getElementById("player-two-winning-message");
let drawManager = 0;
let playerOrder = 1;
let playerOne = "";
let playerTwo = "";
const playerTurnSection = document.querySelector(".player-turn-section");
const playerTurnMessage = document.getElementById("player-turn-message");
const newMatchSection = document.querySelector(".new-match-section");
const newMatchButton = document.getElementById("new-match-button");
const newPlayersButton = document.getElementById("new-players-button");
const markerOne = "X";
const markerTwo = "O";
const gameBoardSection = document.querySelector(".gameboard-section");
const squares = document.querySelectorAll(".squares");
const playerOneMarkedSquares = [];
const playerTwoMarkedSquares = [];
const allMarkedSquares = [];

//CODE EXECUTION SECTION
submitPlayersButton.addEventListener("click", () => {
	if (playerOneInput.value === "" || playerTwoInput.value === "") {
		alert("Please, identify players 1 and 2!");
	} else {
		playerOne = playerOneInput.value;
		playerTwo = playerTwoInput.value;
		playerOneName.innerText = playerOneInput.value;
		playerTwoName.innerText = playerTwoInput.value;
		playerOneInput.value = "";
		playerTwoInput.value = "";
		showGameBoard();
		switchPlayer();
	};
});

squares.forEach((square, squareIndex) => {
	square.addEventListener("click", () => {
		switch (square.id) {
			case "square-one":
				placeMarker(square, squareIndex);
				checkIfPlayerOneWon();
				checkIfPlayerTwoWon();
				checkIfTheresADraw();
				switchPlayer();
				break;
			case "square-two":
				placeMarker(square, squareIndex);
				checkIfPlayerOneWon();
				checkIfPlayerTwoWon();
				checkIfTheresADraw();
				switchPlayer();
				break;
			case "square-three":
				placeMarker(square, squareIndex);
				checkIfPlayerOneWon();
				checkIfPlayerTwoWon();
				checkIfTheresADraw();
				switchPlayer();
				break;
			case "square-four":
				placeMarker(square, squareIndex);
				checkIfPlayerOneWon();
				checkIfPlayerTwoWon();
				checkIfTheresADraw();
				switchPlayer();
				break;
			case "square-five":
				placeMarker(square, squareIndex);
				checkIfPlayerOneWon();
				checkIfPlayerTwoWon();
				checkIfTheresADraw();
				switchPlayer();
				break;
			case "square-six":
				placeMarker(square, squareIndex);
				checkIfPlayerOneWon();
				checkIfPlayerTwoWon();
				checkIfTheresADraw();
				switchPlayer();
				break;
			case "square-seven":
				placeMarker(square, squareIndex);
				checkIfPlayerOneWon();
				checkIfPlayerTwoWon();
				checkIfTheresADraw();
				switchPlayer();
				break;
			case "square-eight":
				placeMarker(square, squareIndex);
				checkIfPlayerOneWon();
				checkIfPlayerTwoWon();
				checkIfTheresADraw();
				switchPlayer();
				break;
			case "square-nine":
				placeMarker(square, squareIndex);
				checkIfPlayerOneWon();
				checkIfPlayerTwoWon();
				checkIfTheresADraw();
				switchPlayer();
				break;
		};
	});
});

newMatchButton.addEventListener("click", () => {
	createNewMatch();
});

newPlayersButton.addEventListener("click", () => {
	playerOneScore.innerText = 0;
	playerTwoScore.innerText = 0;
	createNewMatch();
	showPlayersInputSection();
});

//FUNCTIONS SECTION
function showGameBoard() {
	playersInputSection.classList.add("hidden-section");
	playerTurnSection.classList.remove("hidden-section");
	gameBoardSection.classList.remove("hidden-section");
};

function switchPlayer() {
	if (playerOrder === 1) {
		playerTurnMessage.innerText = `${playerOne}'s turn!`;
	} else if (playerOrder === 2) {
		playerTurnMessage.innerText = `${playerTwo}'s turn!`;
	};
};

function placeMarker(square, squareIndex) {
	if (playerOrder === 1) {
		square.innerText = markerOne;
		playerOneMarkedSquares.push(squareIndex);
		allMarkedSquares.push(squareIndex);
		square.disabled = true;
		playerOrder = 2;
	} else if (playerOrder === 2) {
		square.innerText = markerTwo;
		playerTwoMarkedSquares.push(squareIndex);
		allMarkedSquares.push(squareIndex);
		square.disabled = true;
		playerOrder = 1;
	};
};

function checkIfPlayerOneWon() {
	//HORIZONTAL COMBOS
	if (playerOneMarkedSquares.includes(0) && playerOneMarkedSquares.includes(1) && playerOneMarkedSquares.includes(2)) {
		squares.forEach((square) => {
			if (square.id === "square-one" || square.id === "square-two" || square.id === "square-three") {
				square.classList.add("highlighted-squares");
			};
			square.disabled = true;
		});
		playerOneScore.innerText++;
		playerOneWinningMessage.innerText = `${playerOne} WON !`;
		showNewMatchSection();

	} else if (playerOneMarkedSquares.includes(3) && playerOneMarkedSquares.includes(4) && playerOneMarkedSquares.includes(5)) {
		squares.forEach((square) => {
			if (square.id === "square-four" || square.id === "square-five" || square.id === "square-six") {
				square.classList.add("highlighted-squares");
			};
			square.disabled = true;
		});
		playerOneScore.innerText++;
		playerOneWinningMessage.innerText = `${playerOne} WON !`;
		showNewMatchSection();

	} else if (playerOneMarkedSquares.includes(6) && playerOneMarkedSquares.includes(7) && playerOneMarkedSquares.includes(8)) {
		squares.forEach((square) => {
			if (square.id === "square-seven" || square.id === "square-eight" || square.id === "square-nine") {
				square.classList.add("highlighted-squares");
			};
			square.disabled = true;
		});
		playerOneScore.innerText++;
		playerOneWinningMessage.innerText = `${playerOne} WON !`;
		showNewMatchSection();
	};

	//VERTICAL COMBOS
	if (playerOneMarkedSquares.includes(0) && playerOneMarkedSquares.includes(3) && playerOneMarkedSquares.includes(6)) {
		squares.forEach((square) => {
			if (square.id === "square-one" || square.id === "square-four" || square.id === "square-seven") {
				square.classList.add("highlighted-squares");
			};
			square.disabled = true;
		});
		playerOneScore.innerText++;
		playerOneWinningMessage.innerText = `${playerOne} WON !`;
		showNewMatchSection();

	} else if (playerOneMarkedSquares.includes(1) && playerOneMarkedSquares.includes(4) && playerOneMarkedSquares.includes(7)) {
		squares.forEach((square) => {
			if (square.id === "square-two" || square.id === "square-five" || square.id === "square-eight") {
				square.classList.add("highlighted-squares");
			};
			square.disabled = true;
		});
		playerOneScore.innerText++;
		playerOneWinningMessage.innerText = `${playerOne} WON !`;
		showNewMatchSection();

	} else if (playerOneMarkedSquares.includes(2) && playerOneMarkedSquares.includes(5) && playerOneMarkedSquares.includes(8)) {
		squares.forEach((square) => {
			if (square.id === "square-three" || square.id === "square-six" || square.id === "square-nine") {
				square.classList.add("highlighted-squares");
			};
			square.disabled = true;
		});
		playerOneScore.innerText++;
		playerOneWinningMessage.innerText = `${playerOne} WON !`;
		showNewMatchSection();
	};

	//DIAGONAL COMBOS
	if (playerOneMarkedSquares.includes(0) && playerOneMarkedSquares.includes(4) && playerOneMarkedSquares.includes(8)) {
		squares.forEach((square) => {
			if (square.id === "square-one" || square.id === "square-five" || square.id === "square-nine") {
				square.classList.add("highlighted-squares");
			};
			square.disabled = true;
		});
		playerOneScore.innerText++;
		playerOneWinningMessage.innerText = `${playerOne} WON !`;
		showNewMatchSection();

	} else if (playerOneMarkedSquares.includes(2) && playerOneMarkedSquares.includes(4) && playerOneMarkedSquares.includes(6)) {
		squares.forEach((square) => {
			if (square.id === "square-three" || square.id === "square-five" || square.id === "square-seven") {
				square.classList.add("highlighted-squares");
			};
			square.disabled = true;
		});
		playerOneScore.innerText++;
		playerOneWinningMessage.innerText = `${playerOne} WON !`;
		showNewMatchSection();
	} else {
		drawManager++;
	};
};

function checkIfPlayerTwoWon() {
	//HORIZONTAL COMBOS
	if (playerTwoMarkedSquares.includes(0) && playerTwoMarkedSquares.includes(1) && playerTwoMarkedSquares.includes(2)) {
		squares.forEach((square) => {
			if (square.id === "square-one" || square.id === "square-two" || square.id === "square-three") {
				square.classList.add("highlighted-squares");
			};
			square.disabled = true;
		});
		playerTwoScore.innerText++;
		playerTwoWinningMessage.innerText = `${playerTwo} WON !`;
		showNewMatchSection();

	} else if (playerTwoMarkedSquares.includes(3) && playerTwoMarkedSquares.includes(4) && playerTwoMarkedSquares.includes(5)) {
		squares.forEach((square) => {
			if (square.id === "square-four" || square.id === "square-five" || square.id === "square-six") {
				square.classList.add("highlighted-squares");
			};
			square.disabled = true;
		});
		playerTwoScore.innerText++;
		playerTwoWinningMessage.innerText = `${playerTwo} WON !`;
		showNewMatchSection();

	} else if (playerTwoMarkedSquares.includes(6) && playerTwoMarkedSquares.includes(7) && playerTwoMarkedSquares.includes(8)) {
		squares.forEach((square) => {
			if (square.id === "square-seven" || square.id === "square-eight" || square.id === "square-nine") {
				square.classList.add("highlighted-squares");
			};
			square.disabled = true;
		});
		playerTwoScore.innerText++;
		playerTwoWinningMessage.innerText = `${playerTwo} WON !`;
		showNewMatchSection();
	};

	//VERTICAL COMBOS
	if (playerTwoMarkedSquares.includes(0) && playerTwoMarkedSquares.includes(3) && playerTwoMarkedSquares.includes(6)) {
		squares.forEach((square) => {
			if (square.id === "square-one" || square.id === "square-four" || square.id === "square-seven") {
				square.classList.add("highlighted-squares");
			};
			square.disabled = true;
		});
		playerTwoScore.innerText++;
		playerTwoWinningMessage.innerText = `${playerTwo} WON !`;
		showNewMatchSection();

	} else if (playerTwoMarkedSquares.includes(1) && playerTwoMarkedSquares.includes(4) && playerTwoMarkedSquares.includes(7)) {
		squares.forEach((square) => {
			if (square.id === "square-two" || square.id === "square-five" || square.id === "square-eight") {
				square.classList.add("highlighted-squares");
			};
			square.disabled = true;
		});
		playerTwoScore.innerText++;
		playerTwoWinningMessage.innerText = `${playerTwo} WON !`;
		showNewMatchSection();

	} else if (playerTwoMarkedSquares.includes(2) && playerTwoMarkedSquares.includes(5) && playerTwoMarkedSquares.includes(8)) {
		squares.forEach((square) => {
			if (square.id === "square-three" || square.id === "square-six" || square.id === "square-nine") {
				square.classList.add("highlighted-squares");
			};
			square.disabled = true;
		});
		playerTwoScore.innerText++;
		playerTwoWinningMessage.innerText = `${playerTwo} WON !`;
		showNewMatchSection();
	};

	//DIAGONAL COMBOS
	if (playerTwoMarkedSquares.includes(0) && playerTwoMarkedSquares.includes(4) && playerTwoMarkedSquares.includes(8)) {
		squares.forEach((square) => {
			if (square.id === "square-one" || square.id === "square-five" || square.id === "square-nine") {
				square.classList.add("highlighted-squares");
			};
			square.disabled = true;
		});
		playerTwoScore.innerText++;
		playerTwoWinningMessage.innerText = `${playerTwo} WON !`;
		showNewMatchSection();

	} else if (playerTwoMarkedSquares.includes(2) && playerTwoMarkedSquares.includes(4) && playerTwoMarkedSquares.includes(6)) {
		squares.forEach((square) => {
			if (square.id === "square-three" || square.id === "square-five" || square.id === "square-seven") {
				square.classList.add("highlighted-squares");
			};
			square.disabled = true;
		});
		playerTwoScore.innerText++;
		playerTwoWinningMessage.innerText = `${playerTwo} WON !`;
		showNewMatchSection();
	} else {
		drawManager++;
	};
};

function checkIfTheresADraw() {
	if (allMarkedSquares.length === 9 && drawManager === 18) {
		alert("Draw!");
		squares.forEach((square) => {
			square.disabled = true;
		});
		showNewMatchSection();
	};
};

function showNewMatchSection() {
	playerTurnSection.classList.add("hidden-section");
	newMatchSection.classList.remove("hidden-section");
};

function createNewMatch() {
	squares.forEach((square) => {
		square.disabled = false;
		square.innerText = "";
		square.classList.remove("highlighted-squares");
	});
	playerOneMarkedSquares.splice(0, playerOneMarkedSquares.length);
	playerTwoMarkedSquares.splice(0, playerTwoMarkedSquares.length);
	allMarkedSquares.splice(0, allMarkedSquares.length);
	drawManager = 0;
	playerOneWinningMessage.innerText = "";
	playerTwoWinningMessage.innerText = "";
	newMatchSection.classList.add("hidden-section");
	playerTurnSection.classList.remove("hidden-section");
	playerOrder = 1;
	switchPlayer();
};

function showPlayersInputSection() {
	playerTurnSection.classList.add("hidden-section");
	newMatchSection.classList.add("hidden-section");
	gameBoardSection.classList.add("hidden-section");
	playersInputSection.classList.remove("hidden-section");
};

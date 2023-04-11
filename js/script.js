//GLOBAL VARIABLES SECTION
const playersSection = document.querySelector(".players-section");
const submitPlayersButton = document.getElementById("submit-players-button");
const playerOneInput = document.getElementById("player-one");
const playerTwoInput = document.getElementById("player-two");
let playerOrder = 1;
let playerOne = "";
let playerTwo = "";
const playerTurnSection = document.querySelector(".player-turn-section");
const playerTurn = document.getElementById("player-turn");
const newMatchSection = document.querySelector(".new-match-section");
const newMatchButton = document.getElementById("new-match-button");
const newPlayersButton = document.getElementById("new-players-button");
const markerOne = "X";
const markerTwo = "O";
const squaresSection = document.querySelector(".squares-section");
const squares = document.querySelectorAll(".squares");
const playerOneMarkedSquares = [];
const playerTwoMarkedSquares = [];
const allMarkedSquares = [];

//CODE EXECUTION SECTION
submitPlayersButton.addEventListener("click", () => {
	if (playerOneInput.value === "" && playerTwoInput.value === "") {
		alert("Please, identify players 1 and 2!");
	} else {
		playerOne = playerOneInput.value;
		playerTwo = playerTwoInput.value;
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
	createNewMatch();
	showPlayersSection();
});

//FUNCTIONS SECTION
function showGameBoard() {
	playersSection.classList.add("delete-section");
	playerTurnSection.classList.remove("delete-section");
	squaresSection.classList.remove("delete-section");
};

function switchPlayer() {
	if (playerOrder === 1) {
		playerTurn.innerText = `${playerOne}'s turn!`;
	} else if (playerOrder === 2) {
		playerTurn.innerText = `${playerTwo}'s turn!`;
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
	console.log({ playerOneMarkedSquares, playerTwoMarkedSquares, allMarkedSquares });
};

function compareNumbersAndSortThem(a, b) {
	return a - b;
};

function checkIfPlayerOneWon() {
	//HORIZONTAL COMBOS
	if (playerOneMarkedSquares.includes(0) && playerOneMarkedSquares.includes(1) && playerOneMarkedSquares.includes(2)) {
		alert(`${playerOne} Ganhou!`);
		squares.forEach((square) => {
			if (square.id === "square-one" || square.id === "square-two" || square.id === "square-three") {
				console.log(square);
				square.classList.add("highlighted-squares");
			};
			square.disabled = true;
		});
		showNewMatchSection();

	} else if (playerOneMarkedSquares.includes(3) && playerOneMarkedSquares.includes(4) && playerOneMarkedSquares.includes(5)) {
		alert(`${playerOne} Ganhou!`);
		squares.forEach((square) => {
			if (square.id === "square-four" || square.id === "square-five" || square.id === "square-six") {
				console.log(square);
				square.classList.add("highlighted-squares");
			};
			square.disabled = true;
		});
		showNewMatchSection();

	} else if (playerOneMarkedSquares.includes(6) && playerOneMarkedSquares.includes(7) && playerOneMarkedSquares.includes(8)) {
		alert(`${playerOne} Ganhou!`);
		squares.forEach((square) => {
			if (square.id === "square-seven" || square.id === "square-eight" || square.id === "square-nine") {
				console.log(square);
				square.classList.add("highlighted-squares");
			};
			square.disabled = true;
		});
		showNewMatchSection();
	};

	//VERTICAL COMBOS
	if (playerOneMarkedSquares.includes(0) && playerOneMarkedSquares.includes(3) && playerOneMarkedSquares.includes(6)) {
		alert(`${playerOne} Ganhou!`);
		squares.forEach((square) => {
			if (square.id === "square-one" || square.id === "square-four" || square.id === "square-seven") {
				console.log(square);
				square.classList.add("highlighted-squares");
			};
			square.disabled = true;
		});
		showNewMatchSection();

	} else if (playerOneMarkedSquares.includes(1) && playerOneMarkedSquares.includes(4) && playerOneMarkedSquares.includes(7)) {
		alert(`${playerOne} Ganhou!`);
		squares.forEach((square) => {
			if (square.id === "square-two" || square.id === "square-five" || square.id === "square-eight") {
				console.log(square);
				square.classList.add("highlighted-squares");
			};
			square.disabled = true;
		});
		showNewMatchSection();

	} else if (playerOneMarkedSquares.includes(2) && playerOneMarkedSquares.includes(5) && playerOneMarkedSquares.includes(8)) {
		alert(`${playerOne} Ganhou!`);
		squares.forEach((square) => {
			if (square.id === "square-three" || square.id === "square-six" || square.id === "square-nine") {
				console.log(square);
				square.classList.add("highlighted-squares");
			};
			square.disabled = true;
		});
		showNewMatchSection();
	};

	//DIAGONAL COMBOS
	if (playerOneMarkedSquares.includes(0) && playerOneMarkedSquares.includes(4) && playerOneMarkedSquares.includes(8)) {
		alert(`${playerOne} Ganhou!`);
		squares.forEach((square) => {
			if (square.id === "square-one" || square.id === "square-five" || square.id === "square-nine") {
				console.log(square);
				square.classList.add("highlighted-squares");
			};
			square.disabled = true;
		});
		showNewMatchSection();

	} else if (playerOneMarkedSquares.includes(2) && playerOneMarkedSquares.includes(4) && playerOneMarkedSquares.includes(6)) {
		alert(`${playerOne} Ganhou!`);
		squares.forEach((square) => {
			if (square.id === "square-three" || square.id === "square-five" || square.id === "square-seven") {
				console.log(square);
				square.classList.add("highlighted-squares");
			};
			square.disabled = true;
		});
		showNewMatchSection();
	};
};

function checkIfPlayerTwoWon() {
	//HORIZONTAL COMBOS
	if (playerTwoMarkedSquares.includes(0) && playerTwoMarkedSquares.includes(1) && playerTwoMarkedSquares.includes(2)) {
		alert(`${playerTwo} Ganhou!`);
		squares.forEach((square) => {
			if (square.id === "square-one" || square.id === "square-two" || square.id === "square-three") {
				console.log(square);
				square.classList.add("highlighted-squares");
			};
			square.disabled = true;
		});
		showNewMatchSection();

	} else if (playerTwoMarkedSquares.includes(3) && playerTwoMarkedSquares.includes(4) && playerTwoMarkedSquares.includes(5)) {
		alert(`${playerTwo} Ganhou!`);
		squares.forEach((square) => {
			if (square.id === "square-four" || square.id === "square-five" || square.id === "square-six") {
				console.log(square);
				square.classList.add("highlighted-squares");
			};
			square.disabled = true;
		});
		showNewMatchSection();

	} else if (playerTwoMarkedSquares.includes(6) && playerTwoMarkedSquares.includes(7) && playerTwoMarkedSquares.includes(8)) {
		alert(`${playerTwo} Ganhou!`);
		squares.forEach((square) => {
			if (square.id === "square-seven" || square.id === "square-eight" || square.id === "square-nine") {
				console.log(square);
				square.classList.add("highlighted-squares");
			};
			square.disabled = true;
		});
		showNewMatchSection();
	};

	//VERTICAL COMBOS
	if (playerTwoMarkedSquares.includes(0) && playerTwoMarkedSquares.includes(3) && playerTwoMarkedSquares.includes(6)) {
		alert(`${playerTwo} Ganhou!`);
		squares.forEach((square) => {
			if (square.id === "square-one" || square.id === "square-four" || square.id === "square-seven") {
				console.log(square);
				square.classList.add("highlighted-squares");
			};
			square.disabled = true;
		});
		showNewMatchSection();

	} else if (playerTwoMarkedSquares.includes(1) && playerTwoMarkedSquares.includes(4) && playerTwoMarkedSquares.includes(7)) {
		alert(`${playerTwo} Ganhou!`);
		squares.forEach((square) => {
			if (square.id === "square-two" || square.id === "square-five" || square.id === "square-eight") {
				console.log(square);
				square.classList.add("highlighted-squares");
			};
			square.disabled = true;
		});
		showNewMatchSection();

	} else if (playerTwoMarkedSquares.includes(2) && playerTwoMarkedSquares.includes(5) && playerTwoMarkedSquares.includes(8)) {
		alert(`${playerTwo} Ganhou!`);
		squares.forEach((square) => {
			if (square.id === "square-three" || square.id === "square-six" || square.id === "square-nine") {
				console.log(square);
				square.classList.add("highlighted-squares");
			};
			square.disabled = true;
		});
		showNewMatchSection();
	};

	//DIAGONAL COMBOS
	if (playerTwoMarkedSquares.includes(0) && playerTwoMarkedSquares.includes(4) && playerTwoMarkedSquares.includes(8)) {
		alert(`${playerTwo} Ganhou!`);
		squares.forEach((square) => {
			if (square.id === "square-one" || square.id === "square-five" || square.id === "square-nine") {
				console.log(square);
				square.classList.add("highlighted-squares");
			};
			square.disabled = true;
		});
		showNewMatchSection();
		
	} else if (playerTwoMarkedSquares.includes(2) && playerTwoMarkedSquares.includes(4) && playerTwoMarkedSquares.includes(6)) {
		alert(`${playerTwo} Ganhou!`);
		squares.forEach((square) => {
			if (square.id === "square-three" || square.id === "square-five" || square.id === "square-seven") {
				console.log(square);
				square.classList.add("highlighted-squares");
			};
			square.disabled = true;
		});
		showNewMatchSection();
	};
};

function checkIfTheresADraw() {
	if (allMarkedSquares.length >= 8) {
		alert("Draw!");
		squares.forEach((square) => {
			square.disabled = true;
		});
		showNewMatchSection();
	};
};

function showNewMatchSection() {
	playerTurnSection.classList.add("delete-section");
	newMatchSection.classList.remove("delete-section");
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
	console.log({ playerOneMarkedSquares, playerTwoMarkedSquares, allMarkedSquares });
	newMatchSection.classList.add("delete-section");
	playerTurnSection.classList.remove("delete-section");
	playerOrder = 1;
	switchPlayer();
};

function showPlayersSection() {
	playerTurnSection.classList.add("delete-section");
	newMatchSection.classList.add("delete-section");
	squaresSection.classList.add("delete-section");
	playersSection.classList.remove("delete-section");
};
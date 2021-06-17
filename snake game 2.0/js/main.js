var canvas;
var canvasContext;

var tileCount = 20;
var tileSize = 20;

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	var framesPerSecond = 10;
	setInterval(updateAll, 1000 / framesPerSecond);

	document.addEventListener('keydown', handleKeyDown);
	canvas.addEventListener('mousedown', handleMouseClick);
}

function updateAll() {
	moveAll();
	drawAll();
}

function moveAll() {
	snake1X += xSpeed1;
	snake1Y += ySpeed1;
	snake2X += xSpeed2;
	snake2Y += ySpeed2;	

	snakeWallCollision();
}

function clearScreen() {
	drawRectangle(0, 0, canvas.width, canvas.height, 'black');
}

function winning() {
	if (snake1Won) {
		clearScreen();
		writeText(canvas.width / 2 - 50, canvas.height / 2 - 50, "Green snake won!", 'white');
		writeText(canvas.width / 2 - 50, canvas.height / 2 + 50, "Click to continue", 'white');
	}
	if (snake2Won) {
		clearScreen();
		writeText(canvas.width / 2 - 50, canvas.height / 2 - 50, "Yellow snake won!", 'white');
		writeText(canvas.width / 2 - 50, canvas.height / 2 + 50, "Click to continue", 'white');
	}
}

function drawAll() {
	clearScreen();

	snakeBodies();

	drawRectangle(apple1X * tileCount, apple1Y * tileCount, tileSize - 2, tileSize - 2, 'red');
	drawRectangle(apple2X * tileCount, apple2Y * tileCount, tileSize - 2, tileSize - 2, 'orange');

	writeText(2, 10, "GREEN Score: " + tail1, 'lime');
	writeText(canvas.width - 90, 10, "YELLOW Score: " + tail2, 'yellow');
	writeText(canvas.width / 2 - 45, 10, "Winning Score: " + WINNING_SCORE, 'yellow');

	winning();
}
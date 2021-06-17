var snake1X = 7;
var snake1Y = 7;
var xSpeed1 = 0;
var ySpeed1 = 0;
var trail1 = [];
var tail1 = 5;

var snake2X = 7;
var snake2Y = 13;
var xSpeed2 = 0;
var ySpeed2 = 0;
var trail2 = [];
var tail2 = 5;

var snake1Won = false;
var snake2Won = false;
var snake1Score = trail1;
var snake2Score = trail2;
const WINNING_SCORE = 18;

var denyCollision = true;

function resetGame() {
	snake1X = 7;
	snake1Y = 7;
	snake2X = 7;
	snake2Y = 13;

	xSpeed1 = 0;
	ySpeed1 = 0;
	xSpeed2 = 0;
	ySpeed2 = 0;

	apple1X = 13;
	apple1Y = 7;
	apple2X = 13;
	apple2Y = 13;
}

function snakeBodies() {
	/* SNAKE 1 */

	canvasContext.fillStyle = 'lime';
	for (var i = 0; i < trail1.length; i++) {
		canvasContext.fillRect(trail1[i].x * tileCount, trail1[i].y * tileCount, tileSize - 2, tileSize - 2);

		if (denyCollision) {
			if (snake1X == apple1X && snake1Y == apple1Y) {
				apple1Math();
				tail1++;
					if (tail1 >= WINNING_SCORE) {
						snake1Won = true;
					}
			} // CORRECT APPLE
			if (snake1X == apple2X && snake1Y == apple2Y) {
				apple2Math();
				tail1 = 5;
			} // WRONG APPLE

			if (trail1[i].x == snake1X && trail1[i].y == snake1Y) {
				tail1 = 5;
			} // COLLIDES WITH ITSELF

			if (trail1[i].x == snake2X && trail1[i].y == snake2Y) {
				tail2 = 5;
				// console.log("Yellow hit green");
			} // SNAKE 1 COLLIDES WITH SNAKE 2
		} // denyCollision check
	} // end of for loop for trail1

	trail1.push({x:snake1X,y:snake1Y}); // Adds a new index in the array with new x and y coords based on the new position of snakeX and snakeY which is updating 10 times / second
	while(trail1.length > tail1) {
		trail1.shift(); // While there are more index in the array than what the tail variable is worth it will remove the oldest index so that the snake isn't infinite and stays in the boundries
	}

	/* SNAKE 2 */

	canvasContext.fillStyle = 'yellow';
	for (var i = 0; i < trail2.length; i++) {
		canvasContext.fillRect(trail2[i].x * tileCount, trail2[i].y * tileCount, tileSize - 2, tileSize - 2);

		if (denyCollision) {
			if (snake2X == apple2X && snake2Y == apple2Y) {
				apple2Math();
				tail2++;
				if (tail2 >= WINNING_SCORE) {
					snake2Won = true;
				}
			} // CORRECT APPLE
			if (snake2X == apple1X && snake2Y == apple1Y) {
				apple1Math();
				tail2 = 5;
			} // WRONG APPLE

			if (trail2[i].x == snake2X && trail2[i].y == snake2Y) {
				tail2 = 5;
			} // COLLIDES WITH ITSELF

			if (trail2[i].x == snake1X && trail2[i].y == snake1Y) {
				tail1 = 5;
				// console.log("Green hit yellow");
			} // SNAKE 2 COLLIDES WITH SNAKE 1
		} // end of denyCollision check
	} // end of for loop for trail2

	trail2.push({x:snake2X,y:snake2Y}); // Adds a new index in the array with new x and y coords based on the new position of snakeX and snakeY which is updating 10 times / second
	while(trail2.length > tail2) {
		trail2.shift(); // While there are more index in the array than what the tail variable is worth it will remove the oldest index so that the snake isn't infinite and stays in the boundries
	}
}
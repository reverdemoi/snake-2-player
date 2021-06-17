const ARROW_KEY_LEFT = 37;
const ARROW_KEY_UP = 38;
const ARROW_KEY_RIGHT = 39;
const ARROW_KEY_DOWN = 40;

const KEY_W = 87;
const KEY_A = 65;
const KEY_S = 83;
const KEY_D = 68;

function handleMouseClick(evt) {
	if (snake1Won) {
		resetGame();
		snake1Won = false;
	}
	if (snake2Won) {
		resetGame();
		snake2Won = false;
	}
}

function handleKeyDown(evt) {
	/*
	if (evt.keyCode == 32) {
		resetGame();
	}
	*/

	/* SNAKE 1 */

	if (evt.keyCode == ARROW_KEY_UP) {
		if (ySpeed1 == 1)
			return;
		xSpeed1 = 0;
		ySpeed1 = -1;		
	}
	if (evt.keyCode == ARROW_KEY_DOWN) {
		if (ySpeed1 == -1)
			return;
		xSpeed1 = 0;
		ySpeed1 = 1;		
	}
	if (evt.keyCode == ARROW_KEY_LEFT) {
		if (xSpeed1 == 1)
			return;
		xSpeed1 = -1;
		ySpeed1 = 0;		
	}
	if (evt.keyCode == ARROW_KEY_RIGHT) {
		if (xSpeed1 == -1)
			return;
		xSpeed1 = 1;
		ySpeed1 = 0;		
	}

	/* SNAKE 2 */

	if (evt.keyCode == KEY_W) {
		if (ySpeed2 == 1)
			return;
		xSpeed2 = 0;
		ySpeed2 = -1;		
	}
	if (evt.keyCode == KEY_S) {
		if (ySpeed2 == -1)
			return;
		xSpeed2 = 0;
		ySpeed2 = 1;		
	}
	if (evt.keyCode == KEY_A) {
		if (xSpeed2 == 1)
			return;
		xSpeed2 = -1;
		ySpeed2 = 0;		
	}
	if (evt.keyCode == KEY_D) {
		if (xSpeed2 == -1)
			return;
		xSpeed2 = 1;
		ySpeed2 = 0;		
	}
}
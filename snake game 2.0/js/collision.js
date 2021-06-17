function snakeWallCollision() {
	/* SNAKE 1 */

	if (snake1X > tileCount - 1) {
		snake1X = 0;
	}
	if (snake1X < 0) {
		snake1X = tileCount - 1;
	}
	if (snake1Y > tileCount - 1) {
		snake1Y = 0;
	}
	if (snake1Y < 0) {
		snake1Y = tileCount - 1;
	}

	/* SNAKE 2 */

	if (snake2X > tileCount - 1) {
		snake2X = 0;
	}
	if (snake2X < 0) {
		snake2X = tileCount - 1;
	}
	if (snake2Y > tileCount - 1) {
		snake2Y = 0;
	}
	if (snake2Y < 0) {
		snake2Y = tileCount - 1;
	}
}
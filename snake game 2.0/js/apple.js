var apple1X = 13;
var apple1Y = 7;
var apple2X = 13;
var apple2Y = 13;

function apple1Math() {
	apple1X = Math.floor(Math.random() * tileCount);
	apple1Y = Math.floor(Math.random() * tileCount);

	for (var i = 0; i < trail1.length; i++) {
		if (trail1[i].x == apple1X && trail1[i].y == apple1Y) {
			apple1Math();
		}
	}
	for (var i = 0; i < trail2.length; i++) {
		if (trail2[i].x == apple1X && trail2[i].y == apple1Y) {
			apple1Math();
		}
	}
	if (apple1Y == apple2Y && apple1X == apple2X) {
		apple1Math();
		apple2Math();
	}
}

function apple2Math() {
	apple2X = Math.floor(Math.random() * tileCount);
	apple2Y = Math.floor(Math.random() * tileCount);

	for (var i = 0; i < trail2.length; i++) {
		if (trail2[i].x == apple2X && trail2[i].y == apple2Y) {
			apple2Math();
		}
	}
	for (var i = 0; i < trail1.length; i++) {
		if (trail1[i].x == apple2X && trail1[i].y == apple2Y) {
			apple2Math();
		}
	}
	if (apple1Y == apple2Y && apple1X == apple2X) {
		apple1Math();
		apple2Math();
	}
}

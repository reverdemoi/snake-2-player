function drawRectangle(x, y, width, height, color) {
	canvasContext.fillStyle = color;
	canvasContext.fillRect(x, y, width, height);
}

function writeText(x, y, text, color) {
	canvasContext.fillStyle = color;
	canvasContext.fillText(text, x, y);
}
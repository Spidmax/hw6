function setup() {
	createCanvas(400, 400);
	colorMode(HSB);
	stroke(213, 45, 67);
}

function draw() {
	background(218, 89, 41);
	for (i = 0; i < width; i += 20) {
		line(i, 0, i, height-i);
		line(i, height-i, width, height-i);
	}
}

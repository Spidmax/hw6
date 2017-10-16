function setup() {
	createCanvas(400, 400);
	colorMode(HSB);
	stroke(255);
}

function draw() {
	background(0);
	for (i = 0; i < width/4; i += 5) {
		line(i, i, i, height);
		line(i, i, width/2-i, i);
		line(width/2-i, i, width/2-i, height);
		line(width/2+i, i, width/2+i, height);
		line(width/2+i, i, width-i, i);
		line(width-i, i, width-i, height);
	}
}

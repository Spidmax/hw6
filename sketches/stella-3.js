function setup() {
	createCanvas(400, 400);
	colorMode(HSB);
	stroke(54, 15, 50);
	fill(255);
}

function draw() {
	background(125, 6, 67);
	rect(0, 0, 10, 10);
	rect(width-10, 0, 10, 10);
	rect(0, height-10, 10, 10);	
	rect(width-10, height-10, 10, 10);
	line(width/2, 0, width/2, height);
	rect(width/2-10, height/2-5, 20, 10);
	for (i = 0; i < width/2; i += 10) {
		line(i, 0, i, i);
		line(i, i, i-10, i);
		line(i-10, i, i-10, height-i);
		line(i-10, height-i, i, height-i);
		line(i, height-i, i, height);
		line(width-i, 0, width-i, i);
		line(width-i, i, width-i+10, i);
		line(width-i+10, i, width-i+10, height-i);
		line(width-i+10, height-i, width-i, height-i);
		line(width-i, height-i, width-i, height);
	}
}

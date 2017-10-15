function setup() { 
	createCanvas(400, 400);

	noStroke();
	colorMode(HSB);
} 

function draw() { 
	background(0);
	
	rectMode(CORNER);
	for (yellowX = 0; yellowX < width; yellowX += 8) {
		fill(53, 66, 98);
		rect(yellowX, 0, 5, height);
	}
	
	fill(167, 49, 98);
	rect(width-50, 0, width-50, height);
}

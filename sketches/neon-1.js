function setup() { 
	createCanvas(400, 400);

	noStroke();
	colorMode(HSB);
} 

function draw() { 
	
	rectMode(CENTER);
	for (yellow = 0; yellow < 100; yellow ++) {
		fill(53, 66, 98-yellow);
		rect(width/2, height/2, width-yellow, height-yellow);
	}

	rectMode(CORNER);
	for (pinkX = 20; pinkX < width; pinkX += 40) {
		fill(345, 58, 87);
		rect(pinkX, 0, 20, height);
	}
}

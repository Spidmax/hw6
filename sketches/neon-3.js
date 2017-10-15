function setup() { 
	createCanvas(400, 400);

	noStroke();
	colorMode(HSB);
} 

function draw() { 
	
	rectMode(CORNER);
	fill(245, 81, 98);
	rect(0, 0, width*2/3, height);
	fill(162, 93, 69);
	rect(width*2/3, 0, width/3, height);
	
	rectMode(CENTER);
	for (i = 0; i < 6; i ++) {
		
		fill(352, 67, 33);
		rect(width/7*(i+1), height/2, 20, height);	
		
		if (i < 3) {
			fill(12, 71, 83);
			rect(width/2, width/7*(i+1), width, 20);
		}
		else {
			fill(57, 92, 86);
			rect(width/2, width/7*(i+1), width, 20);
		}
	}
	
}

function setup() { 
	createCanvas(460, 460);

	noStroke();
	colorMode(HSB);
} 

function draw() { 
	
	rectMode(CORNER);
	for (i = 0; i < 6; i ++) {
		if (i/2 == 0) {
			fill(295-80*i, 100, 45);
			rect(width/2, height/2, width-(i+1)*width*2/23, height-(i+1)*height*2/23);
		}
		else {
			fill(0);
			rect(width/2, height/2, width-(i+1)*width*2/23, height-(i+1)*height*2/23);
		}
		
	}
	
}

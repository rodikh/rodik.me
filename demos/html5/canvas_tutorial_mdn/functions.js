// JavaScript Document
function clear_canvas(ctx){
	// Store the current transformation matrix
	ctx.save();
	// Use the identity matrix while clearing the canvas
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// Restore the transform
	ctx.restore();
	console.log("Canvas Cleared");	
}
function mark(x,y){
	ctx.fillStyle="red";
	ctx.fillRect(x-1,y-1,3,3);
}
function yin_yang(ctx){
	ctx.fillStyle="black";
	ctx.lineWidth = 2;		
	
	var midX = 150;
	var midY = 150;
	var rad = 100;
	
	clear_canvas(ctx);
	ctx.beginPath();  
	ctx.arc(midX,midY,rad,Math.PI/2,Math.PI*1.5,true); // Outer circle  
	ctx.moveTo(midX,midY+rad/2);  			
	ctx.arc(midX,midY+rad*0.5,rad*0.5,Math.PI*0.5,Math.PI*1.5,false);  // Right eye
	ctx.fill();
	ctx.fillStyle = 'rgba(255,255,255,1)';		
	ctx.beginPath();  		
	ctx.moveTo(midX,midY);  		
	ctx.arc(midX,midY-rad/2,rad*0.5,Math.PI*0.5,Math.PI*1.5,true);  // Right eye  	
	ctx.fill();
	ctx.beginPath();  
	ctx.moveTo(midX-rad/2,midY*0.75);  		
	ctx.arc(midX+rad/10,midY+rad/2,rad*0.2,0,Math.PI*2,true);  // Right eye  
	ctx.fill();	
	ctx.fillStyle = 'rgba(0,0,0,1)';			
	ctx.beginPath();  	
	ctx.moveTo(midX-rad/2,midY+rad/2);  			
	ctx.arc(midX-rad/10,midY-rad/2,rad*0.2,0,Math.PI*2,true);  // Right eye
	ctx.fill();	
	ctx.beginPath();  
	ctx.arc(midX,midY,rad,0,Math.PI*2,true); // Outer circle  
	ctx.stroke();  	
	console.log("Yin Yang Drawn");			
}
function heart(ctx,scale){
	var ox=150, oy=100;
	var cp = [[ox+50,oy-50],[ox+100,oy+25],[ox-100,oy+25],[ox-50,oy-50]];
	var tcp1,tcp2;
	
	clear_canvas(ctx);
	ctx.fillStyle = 'black';
	ctx.beginPath();  			
	ctx.moveTo(ox, oy);
	tcp1 = cp.shift();
	tcp2 = cp.shift();
	ctx.bezierCurveTo(tcp1[0], tcp1[1], tcp2[0], tcp2[1], ox, oy+80)			
	mark (tcp1[0], tcp1[1]);
	mark (tcp2[0], tcp2[1]);	
	tcp1 = cp.shift();
	tcp2 = cp.shift();
	ctx.bezierCurveTo(tcp1[0], tcp1[1], tcp2[0], tcp2[1], ox, oy)			
	mark (tcp1[0], tcp1[1]);
	mark (tcp2[0], tcp2[1]);	
	ctx.fillStyle = 'black';
	ctx.fill();
	console.log("Heart Drawn");				
}

function draw_image(ctx){
	var ox=0, oy=0;
	var img = new Image();
	img.src = 'rodik.jpg';
	ctx.drawImage(img,ox,oy,300,300);	
}
function s_heart(ctx,scale){
	var ox=150, oy=150-(50*scale);

	var cp = [[ox+(50*scale),oy-(50*scale)],[ox+(100*scale),oy+(25*scale)],[ox-(100*scale),oy+(25*scale)],[ox-(50*scale),oy-(50*scale)]];
	var tcp1,tcp2;
	

	ctx.beginPath();  			
	ctx.moveTo(ox, oy);
	tcp1 = cp.shift();
	tcp2 = cp.shift();
	ctx.bezierCurveTo(tcp1[0], tcp1[1], tcp2[0], tcp2[1], ox, oy+(80*scale))			

	tcp1 = cp.shift();
	tcp2 = cp.shift();
	ctx.bezierCurveTo(tcp1[0], tcp1[1], tcp2[0], tcp2[1], ox, oy)			
	
	ctx.fill();

	console.log("Heart Drawn");				
}

function heart3(ctx){
	var lingrad = ctx.createLinearGradient(200,100,120,200);  
	lingrad.addColorStop(0, '#f60505');  
	lingrad.addColorStop(0.4, '#f60505');  
	lingrad.addColorStop(1, 'rgba(130,10,10,1)'); 
	ctx.fillStyle = lingrad;		
	s_heart(ctx,1);
	
	ctx.beginPath();
	ctx.moveTo(150,110);
	var p1x=200, p1y=65;
	var p2x=220, p2y=120;
	ctx.bezierCurveTo(p1x, p1y, p2x, p2y, 170, 150);
	mark(p1x,p1y);
	mark(p2x,p2y);	
	var lingrad2 = ctx.createLinearGradient(200,100,120,200);  
	lingrad2.addColorStop(0, 'rgba(255,255,255,0.2)');  
	lingrad2.addColorStop(0.4, 'rgba(130,10,10,0.2)');  
	lingrad2.addColorStop(1, 'rgba(130,10,10,0)'); 		
	ctx.fillStyle = lingrad2;	
	ctx.fill();		
}
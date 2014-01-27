// JavaScript Document
window.onload = start;
var canvas = document.getElementById('main_canvas');

function start(){
	var stage = new Stage(canvas);

	var bg = new Image();
	bg.src = "img.jpg";
	bg.onload = function(){
		stage.addChild(new Bitmap(bg));
		stage.update();
	}
	
	var person = new Image();
	person.src = "ryu_sprite.png";
	person.onload = function(e){
		var personSprite = new SpriteSheet({
			images: [person],
			frames: {width:29.8, height:42, regX:15, regY:21},
			animations: {idle:[0,9, "idle"]}
		});	
		SpriteSheetUtils.addFlippedFrames(personSprite, true, false, false);
		var bmpAnim = new BitmapAnimation(personSprite);
		bmpAnim.x = 50;
		bmpAnim.y = 50;			
		bmpAnim.gotoAndPlay("idle");
		
		stage.addChild(bmpAnim);
		
		Ticker.addListener(stage);
	}
}
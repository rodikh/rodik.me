// JavaScript Document
var canvas = "";
var ctx = "";

window.onload = start;
function start(){
    canvas = document.getElementById('main_canvas');  
    if (canvas.getContext){		
      	ctx = canvas.getContext('2d');  
		console.log("Context loaded");
/*
*/
		heart(ctx);

	
    } else {  
		console.error("Canvas is not Supported!");
    }  
}



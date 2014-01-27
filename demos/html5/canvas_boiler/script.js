// JavaScript Document
window.onload = start;
function start(){
    var canvas = document.getElementById('main_canvas');  
    if (canvas.getContext){		
      	var ctx = canvas.getContext('2d');  
		console.log("Context loaded");
				
    } else {  
		console.error("Canvas is not Supported!");
    }  
}
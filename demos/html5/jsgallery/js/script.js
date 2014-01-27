// JavaScript Document
$(document).ready(function(){
	$('.aa').silk({width:"800px",height:"600px"});
	$('.aa').on('silkg_imagesDisplayed','.silkg',function(){
//		$('.bb').silk({width:"600px",height:"600px"});
	});
	$('.bb').on('silkg_imagesDisplayed','.silkg',function(){
		$('.cc').silk({width:"400px",height:"300px"});
	});
	$('.cc').on('silkg_imagesDisplayed','.silkg',function(){
		$('.dd').silk({width:"184px",height:"160px"});
	});
});

(function( $ ) {
  	$.fn.silk = function( opts ) {
		var settings = $.extend({
			'width':'800px',
			'height':'600px'
		}, opts);
		var silk = $('<div class="silkg"></div>');
		$(this).append(silk);
		var view = $('<div class="view"></div>');  
		var list = $('<div class="list"></div>');
		var bimg = $('<img class="bigImg" style="display:none"/>');
	    view.append(bimg);
   		silk.append(view);
   		silk.append(list);
		silk.wrap('<div style="width:'+settings.width+';height:'+settings.height+';position:relative;"></div>');
    	var imgs = getImages();
		
		preload(imgs, silk);
		
		silk.bind('silkg_imagesLoaded', function(){
			var lastI;
			$(imgs).each(function(i){
				var csrc= this.src;
				setTimeout(function(){
					var img = $('<img class="listItem" src="'+csrc+'"/>');
					list.append(img);	
					img.fadeIn();
				}, 60*i);
				lastI = i;
			});
			setTimeout(function(){
				bimg.attr('src',imgs[0].src);
				bimg.fadeIn(function(){
					silk.trigger('silkg_imagesDisplayed');		
				});
			}, 60*(lastI+2));

			list.on('click','.listItem:not(.selected)',function(e){
				goBig(this,view);
			});			
		});
  	};
	function goBig(that, view){
		if(view.find('.bigImg').length){	
			var bimg = view.find('.bigImg');
		}		
		bimg.stop().fadeOut(200,function(){
			bimg.attr('src', that.src);
			bimg.fadeIn();
		});		
		$(that).addClass('selected').siblings('.selected').removeClass('selected');
	}
	function getImages(){
		return([{'name':'first','src':'cnt/1.jpg'},{'name':'second','src':'cnt/2.jpg'},{'name':'third','src':'cnt/3.jpg'},{'name':'fourth','src':'cnt/4.jpg'},{'name':'fifth','src':'cnt/5.jpg'}]);	
	}
	function preload(arrayOfImages, that) {
		var len = arrayOfImages.length; var i = 0;
		$(arrayOfImages).each(function(){
			var el = $('<img/>').attr('src', this.src).load(function(){
				i++;
				if(i == len)
					$(that).trigger('silkg_imagesLoaded');
			});
		});
	}	
})( jQuery );
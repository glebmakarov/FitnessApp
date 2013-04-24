var aligner = '#frontpage';
var plus = 0;
var last = "";
var arr = new Array();

jQuery(window).resize(function ($){

	jQuery('.page-wrap').css('height', Number(jQuery(aligner).height() + plus) +  'px');
	
	console.log(jQuery(window).width() + 'px');
});

function resizeby(_this, _plus){
	var height = $(_this).height() ;
	var newheight = Number( height + _plus );
	
	jQuery('.page-wrap').css('height', newheight + 'px');

	aligner = _this;
	plus = _plus;
			
	//setTimeout( function(){
	jQuery('.loading').hide();
	for(var i=1; i < arr.length; i++){
		jQuery('#'+arr[i]).removeClass('open').removeClass('hide');
	}	
	//}, 10);
}

(function($){
	$(document).ready(function (){
		
		setTimeout( function(){
			resizeby('#frontpage', 105);
			$('body').css('opacity','1');
		}, 200);
		
		
		function hideallexcept( _this ){
			last = '';
			$('.frame').each(function(){
				last += '#' + $(this).attr('id');
			});
			
			last = last.replace(_this, '');
			arr = last.split('#');
			
			for(var i=1; i < arr.length; i++){
				$('#'+arr[i]).addClass('hide');
			}	
		}
		
		
		
		$('.logo').click(function(e){
			e.preventDefault();
			$(this).addClass('active');
			
			hideallexcept('#frontpage');	
			$('#frontpage').addClass('open').removeClass('hide');
			
			$('.loading').show();
			
			setTimeout(function(){
				resizeby('#frontpage', 105);
			}, 300);
			
		});
		
		
		$('.fb').click(function(e){
			e.preventDefault();
			$(this).addClass('active');
			
			hideallexcept('#index');
			$('#index').addClass('open').removeClass('hide');
			
			$('.bottombar').addClass('up');
			
			$('.loading').show();
			
			setTimeout(function(){
				resizeby('#index', 105);
			}, 300);
			
		});
		
		$('.acc').click(function(e){
			e.preventDefault();
			$(this).addClass('active');
			
			hideallexcept('#login');
			$('#login').addClass('open').removeClass('hide');
			
			
			$('.loading').show();
			
			setTimeout(function(){
				resizeby('#login', 105);
			}, 300);
			
		});
			
			
		/* MAKE HOVER */
		$('.touchhover').on('touchstart', function(e){
			//e.preventDefault();
			$(this).addClass('hover');
		});
		$('.touchhover').on('touchend', function(e){
			//e.preventDefault();
			$(this).removeClass('hover');
		});
		
		
		

	});
})(window.jQuery);


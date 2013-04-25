
var aligner = '#lisandid';
var plus = 0;
var last = "";
var arr = new Array();
var offset = jQuery('.topbar').height();
var me = "";
var bbar = "";
var wind = "";



jQuery(window).resize(function ($){

	offset = jQuery('.topbar').height();
	jQuery('.centered').css('top', offset + 'px');
	jQuery('.page-wrap').css('height', Number(jQuery(aligner).height() + plus) +  'px');
	
	console.log(jQuery(window).width() + 'px');
});

function resizeby(_this, _plus){
	var height = $(_this).height();
	var newheight = Number( height + _plus );
	
	
	offset = jQuery('.topbar').height();
	me = jQuery(_this + ' .me').height();
	bbar = jQuery('.bottombar').height();
	wind = jQuery(window).height();
	
	if(_this == '#index'){
		jQuery('.bottombar .homebtn').removeClass('hidden');
		jQuery('.bottombar .profilebtn').addClass('hidden');
	}else{
		jQuery('.bottombar .homebtn').addClass('hidden');
		jQuery('.bottombar .profilebtn').removeClass('hidden');
	}
	
	
	var toscrollheight = Number( wind - ( offset + me + bbar ) );
	console.log(newheight , toscrollheight);
	
	jQuery('.centered').css('top', offset + 'px');
	jQuery('.page-wrap').css('height', wind + 'px');
	
	jQuery('.toscroll').css('height', toscrollheight + 'px');
	
	aligner = _this;
	plus = _plus;

}
function reposition(){
		
	jQuery('.loading').hide();
	for(var i=1; i < arr.length; i++){
		jQuery('#'+arr[i]).removeClass('open').removeClass('hide');
	}	
	
	jQuery('#menu').removeClass('active');
	jQuery('#themenu').removeClass('show');
	jQuery('.topbar, .bottombar, '+aligner).removeClass('showmenu');
	
}

(function($){
	$(document).ready(function (){
		
		setTimeout( function(){
			resizeby('#lisandid', 105);
			$('body').css('opacity','1');
			offset = jQuery('.topbar').height();
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
			
			$('#menu').removeClass('active');
			$('#themenu').removeClass('show');
			$('.topbar, .bottombar, '+aligner).removeClass('showmenu');
		}
		
		
		
		$('#menu').click(function(e){
			e.preventDefault();
			
			if(!$(this).hasClass('active')){
				$(this).addClass('active');			
				$('#themenu').addClass('show');
				$('.topbar, .bottombar, '+aligner).addClass('showmenu');
				
			}else{
				$(this).removeClass('active');	
				$('#themenu').removeClass('show');
				$('.topbar, .bottombar, '+aligner).removeClass('showmenu');
			}
		});
		
		$('body').touchwipe({
			 wipeLeft: function() { 
					$('#menu').removeClass('active');
					$('#themenu').removeClass('show');
					$('.topbar, .bottombar, '+aligner).removeClass('showmenu');
			 },
			 //wipeRight: function() { alert("right"); },		 
			//wipeUp: function() { alert("up"); },
			//wipeDown: function() { alert("down"); },
			 min_move_x: 15,
			 min_move_y: 15,
			 preventDefaultEvents: false
		});

		
		$('.logo').click(function(e){
			e.preventDefault();
			$(this).addClass('active');
			
			hideallexcept('#frontpage');	
			$('#frontpage').addClass('open').removeClass('hide');
			
			$('.bottombar, .topbar').removeClass('menuin');
			
			$('.loading').show();
			
			resizeby('#frontpage', 105);
			
			setTimeout(function(){
				reposition();
			}, 300);
			
		});
		
		
		$('.fb, .homebtn').click(function(e){
			e.preventDefault();
			$(this).addClass('active');
			
			hideallexcept('#index');
			$('#index').addClass('open').removeClass('hide');
			
			$('.bottombar, .topbar').addClass('menuin');
			
			$('.loading').show();
			
			resizeby('#index', 105);
			
			setTimeout(function(){
				reposition();
			}, 300);
			
		});
		
		$('.acc').click(function(e){
			e.preventDefault();
			$(this).addClass('active');
			
			hideallexcept('#login');
			$('#login').addClass('open').removeClass('hide');
			
			
			$('.loading').show();
			
			resizeby('#login', 105);
			
			setTimeout(function(){
				reposition();
			}, 300);
			
		});
		
			
		$('.diarybtn').click(function(e){
			e.preventDefault();
			$(this).addClass('active');
			
			hideallexcept('#diary');
			$('#diary').addClass('open').removeClass('hide');
			
			
			$('.loading').show();
			
			resizeby('#diary', 105);
			
			setTimeout(function(){
				reposition();
			}, 300);
		});
			
			
			
		
		$('.pakkumisedbtn').click(function(e){
			e.preventDefault();
			$(this).addClass('active');
			
			hideallexcept('#pakkumised');
			$('#pakkumised').addClass('open').removeClass('hide');
			
			
			$('.loading').show();
			
			resizeby('#pakkumised', 105);
			
			setTimeout(function(){
				reposition();
			}, 300);
		});
			
			
		
		$('.soodustusedbtn').click(function(e){
			e.preventDefault();
			$(this).addClass('active');
			
			hideallexcept('#soodustused');
			$('#soodustused').addClass('open').removeClass('hide');
			
			
			$('.loading').show();
			
			resizeby('#soodustused', 105);
			
			setTimeout(function(){
				reposition();
			}, 300);
		});
			
			
		
		$('.lisandidbtn').click(function(e){
			e.preventDefault();
			$(this).addClass('active');
			
			hideallexcept('#lisandid');
			$('#lisandid').addClass('open').removeClass('hide');
			
			
			$('.loading').show();
			
			resizeby('#lisandid', 105);
			
			setTimeout(function(){
				reposition();
			}, 300);
		});

		
		
		
		
		
		
		$('.detailsbtn').click(function(e){
			//e.preventDefault();
			
			$('#overlay').addClass('prepare').addClass('scale');
			setTimeout(function(){
				$('#overlay').addClass('scaleIn');
			}, 500);
		});
		
		
		$('.backbtn').click(function(e){
			e.preventDefault();
			
			$(this).parent().removeClass('scaleIn');
			
			var _this = $(this);
			
			setTimeout(function(){
				_this.parent().removeClass('scale').removeClass('prepare');
			}, 400);
		});
		
			
		/* MAKE HOVER */
		/* FOR STATIC ELEMENTS ONLY, NOT WORKING ON SCROLLABLE!! */
		
		 $('.touchhover').on('touchstart', function(e){
			e.preventDefault();
			$(this).addClass('hover');
		}).on('touchend', function(e){
			e.preventDefault();
			$(this).removeClass('hover');
		});
		

	});
})(window.jQuery);


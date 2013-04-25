var LATEST = '';
var aligner = '#treenerpakkumised';
var plus = 0;
var last = "";
var arr = new Array();
var offset = jQuery('.topbar').height();
var me = "";
var bbar = "";
var wind = "";

var toBuy = new Array();



jQuery(window).resize(function ($){

	offset = jQuery('.topbar').height();
	jQuery('.centered').css('top', offset + 'px');
	jQuery('.page-wrap').css('height', Number(jQuery(aligner).height() + plus) +  'px');
	
	console.log(jQuery(window).width() + 'px');
});

function resizeby(_this, _plus){
	var height = $(_this).height();
	var newheight = Number( height + _plus );
	
	LATEST = _this;
	
	offset = jQuery('.topbar').height();
	me = jQuery(_this + ' .me').height();
	bbar = jQuery('.bottombar').height();
	wind = jQuery(window).height();

	
	var toscrollheight = Number( wind - ( offset + me + bbar ) );
	//console.log(newheight , toscrollheight);
	
	jQuery('.centered').css('top', offset + 'px');
	jQuery('.page-wrap').css('height', wind + 'px');
	
	jQuery('.toscroll').css('height', toscrollheight + 'px');
	
	aligner = _this;
	plus = _plus;

}
function reposition(){
		
	//jQuery('.loading').hide();
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
			resizeby('#treenerpakkumised', 105);
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
				//$('#'+arr[i]).addClass('hide');
			}	
			
			$(LATEST).addClass('hide');
			
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
			$('#frontpage').addClass('open');
			
			$('.bottombar, .topbar').removeClass('menuin');
			
			//$('.loading').show();
			
			resizeby('#frontpage', 105);
			
			setTimeout(function(){
				reposition();
			}, 300);
			
		});
		
		
		$('.fb, .homebtn').click(function(e){
			e.preventDefault();
			$(this).addClass('active');
			
			hideallexcept('#index');
			$('#index').addClass('open');
			
			$('.bottombar, .topbar').addClass('menuin');
			
			//$('.loading').show();
			
			resizeby('#index', 105);
			
			setTimeout(function(){
				reposition();
			}, 300);
			
		});
		
		$('.acc').click(function(e){
			e.preventDefault();
			$(this).addClass('active');
			
			hideallexcept('#login');
			$('#login').addClass('open');
			
			
			//$('.loading').show();
			
			resizeby('#login', 105);
			
			setTimeout(function(){
				reposition();
			}, 300);
			
		});
		
			
		$('.diarybtn').click(function(e){
			e.preventDefault();
			$(this).addClass('active');
			
			hideallexcept('#diary');
			$('#diary').addClass('open');
			
			
			//$('.loading').show();
			
			resizeby('#diary', 105);
			
			setTimeout(function(){
				reposition();
			}, 300);
		});
			
			
			
		
		$('.pakkumisedbtn').click(function(e){
			e.preventDefault();
			$(this).addClass('active');
			
			hideallexcept('#pakkumised');
			$('#pakkumised').addClass('open');
			
			
			//$('.loading').show();
			
			resizeby('#pakkumised', 105);
			
			setTimeout(function(){
				reposition();
			}, 300);
		});
			
			
		
		$('.soodustusedbtn').click(function(e){
			e.preventDefault();
			$(this).addClass('active');
			
			hideallexcept('#soodustused');
			$('#soodustused').addClass('open');
			
			
			//$('.loading').show();
			
			resizeby('#soodustused', 105);
			
			setTimeout(function(){
				reposition();
			}, 300);
		});
			
			
		
		$('.lisandidbtn').click(function(e){
			e.preventDefault();
			$(this).addClass('active');
			
			hideallexcept('#lisandid');
			$('#lisandid').addClass('open');
			
			
			//$('.loading').show();
			
			resizeby('#lisandid', 105);
			
			setTimeout(function(){
				reposition();
			}, 300);
		});

		
			
		
		$('.treenerpakkumisedbtn').click(function(e){
			e.preventDefault();
			$(this).addClass('active');
			
			hideallexcept('#treenerpakkumised');
			$('#treenerpakkumised').addClass('open');
			
			
			//$('.loading').show();
			
			resizeby('#treenerpakkumised', 105);
			
			setTimeout(function(){
				reposition();
			}, 300);
		});
		
		
		
		
		
		
		
		
		
		
		$('.selectbtn img').click(function(e){
			//e.preventDefault();
			var id = $(this).parent().parent().data('id');
			if(!$(this).parent().parent().hasClass('selected')){
				$(this).parent().parent().addClass('selected');					
				toBuy.push(id);			
			}else{
				$(this).parent().parent().removeClass('selected');	
				while (toBuy.indexOf( id ) !== -1) {
					toBuy.splice(toBuy.indexOf( id ), 1);
				}
			}			
			if(toBuy.length >= 1){
				$('.buybtn').addClass('slideIn');
			}else{
				$('.buybtn').removeClass('slideIn');
			}
			//console.log(toBuy.length);
		});
		
		
		
		
		
		$('.buybtn').click(function(e){
			//e.preventDefault();
			
			$('#buyoverlay').addClass('prepare').addClass('scale');
			setTimeout(function(){
				$('#buyoverlay').addClass('scaleIn');
			}, 500);
			
			var here = $('#buyoverlay .checkout');
			
			here.html('');
			
			for(var i = 0; i < toBuy.length; i++){
				
				var id = toBuy[i];
				
				var name = $('#treenerpakkumised .box33[data-id='+ id +']').children('h4.name').text();
				var price = $('#treenerpakkumised .box33[data-id='+ id +']').children('h4.price').text();
				
				var html = '<div class="inbasket"></div>';
				
				here.append( name + ' ' );
				
			}
			
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
			//e.preventDefault();
			$(this).addClass('hover');
		}).on('touchend', function(e){
			//e.preventDefault();
			$(this).removeClass('hover');
		});
		

	});
})(window.jQuery);


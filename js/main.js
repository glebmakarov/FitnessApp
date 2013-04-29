var LATEST = '';
var SUBLATEST = '';
var LEVEL = 0;
var newLATEST = '';
var aligner = '#frontpage';
var plus = 0;
var last = "";
var arr = new Array();
var offset = jQuery('.topbar').height();
var me = "";
var bbar = "";
var wind = jQuery(window).height();
var toBuy = new Array();
var eventEnd = (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) ? "touchend" : "click";
var goingback = false;
var updating = false;

jQuery(window).resize(function ($) {

	offset = jQuery('.topbar').height();
	jQuery('.centered').css('top', offset + 'px');
	//jQuery('.page-wrap').css('height', Number(jQuery(aligner).height() + plus) +  'px');

	console.log(jQuery(window).width() + 'px');
});


function resizeby(_this, _plus) {

	me = jQuery(_this + ' .me').height();

	var toscrollheight = Number(wind - (offset + me + bbar));
	//console.log(newheight , toscrollheight);

	
	jQuery('.page-wrap').css('height', wind + 'px');
	//setTimeout(function () {
		jQuery('.toscroll').css('height', toscrollheight + 'px');

		if (LEVEL >= 2) {
			$('#topbar .backbtn').show();
			$('#menu').hide();
			if (!goingback)
				$('#topbar .backbtn').attr('data-deep' + LEVEL, LATEST);
				
		} else {
			$('#topbar .backbtn').hide();
			$('#menu').show();
		}

		goingback = false;
	//}, 100);
	aligner = _this;
	plus = _plus;

}

function reposition() {
	setTimeout(function () {
		//jQuery('.loading').hide();
		//for(var i=1; i < arr.length; i++){
		//jQuery('#'+arr[i]).removeClass('open').removeClass('hide');
		//}
		if (LATEST != aligner) {
			jQuery(LATEST).removeClass('open').removeClass('hide').remove();
		}
		hideMenu();
	}, 500);
}

function hideMenu() {
	if (jQuery('#menu').hasClass('active')) {
		jQuery('#menu').removeClass('active');
		jQuery('#themenu').removeClass('show');
		jQuery('.topbar, .bottombar, ' + aligner).removeClass('showmenu');
	}
}

$(window).load(function () {
	setTimeout(function () {

		offset = jQuery('#topbar').height();
		bbar = jQuery('#bottombar').height();
		offset = jQuery('.topbar').height();

		resizeby('#frontpage', 105);
		$('body').addClass('fadeIn');

		LATEST = '#' + $('.open').attr('id');

	}, 800);
});

(function ($) {
	$(document).ready(function () {
	
	
		function teleportMe( where ){
			//if(updating){
				LATEST = '#' + $('.open').attr('id');
		
				if (LATEST != '#'+where) {
				
					$('#topbar .backbtn').attr('data-deep', LEVEL);
					
					$.get(where + '.html', function(data){
						$(data).insertAfter( LATEST )
						
						jQuery('.centered').css('top', offset + 'px');
						resizeby('#' + where, 105);
						
						//console.log(LATEST);
						
						$(LATEST).addClass('hide');
						
						setTimeout(function () {
							$('#' + where).addClass('open');
							
							if( LEVEL >= '1' ){
								$('.bottombar, .topbar').addClass('menuin');
							}else{
								$('.bottombar, .topbar').removeClass('menuin');
							}
							
							

							reposition();
							
							hideMenu();
							
							bindEvents();
							
							updating = false;
						}, 10);

					});
				}
				
			//}  /* updating */

		}

		function hideallexcept(_this, caller) {

			if ($(caller).data('level')) {
				LEVEL = $(caller).data('level');
				$('#topbar .backbtn').attr('data-deep', LEVEL);
			}

			LATEST = '#' + $('.open').attr('id');
			//alert(LATEST);
			if (LATEST != _this) {
				$(LATEST).addClass('hide');
			}

			$('#menu').removeClass('active');
			$('#themenu').removeClass('show');
			$('.topbar, .bottombar, ' + aligner).removeClass('showmenu');

		}

		function goBack(_this, caller) {

			//LEVEL = $(caller).data('level');
			LEVEL = $('#topbar .backbtn').attr('data-deep');

			var LATESTBackup = LATEST;
			LATEST = aligner;

			$(aligner).addClass('hide');

			setTimeout(function () {
				$(LATEST).removeClass('open').removeClass('hide').remove();
			}, 300);
			hideMenu()
			aligner = LATESTBackup;

		}

		$('#topbar .backbtn').bind(eventEnd, function (e) {
			e.preventDefault();

			goingback = true;

			var d = $('#topbar .backbtn').attr('data-deep');

			if (d) {

				//console.log(d);
				newLATEST = $('#topbar .backbtn').attr('data-deep' + d);

				$('.menu').removeClass('active');
				
				//$(newLATEST).addClass('open');

				$('#topbar .backbtn').attr('data-deep' + d, '');
				d = Number(d) - Number(1);
				$('#topbar .backbtn').attr('data-deep', d);

				goBack(LATEST, this);
				
				newLATESTnohash = newLATEST.replace('#','');
				
				teleportMe( newLATESTnohash );

				//$('.bottombar, .topbar').addClass('menuin');
				//resizeby(newLATEST, 105);

				//console.log(d, newLATEST, LEVEL);

				//LEVEL = d ;

			} else {

				$('.menu').removeClass('active');
				$(LATEST).addClass('open');
				goBack(LATEST, this);

				$('.bottombar, .topbar').addClass('menuin');
				resizeby(LATEST, 105);
				//reposition();
			}
		});

		$('#menu').on(eventEnd, function (e) {
			e.preventDefault();

			if (!$(this).hasClass('active')) {
				$(this).addClass('active');
				$('#themenu').addClass('show');
				$('.topbar, .bottombar, ' + aligner).addClass('showmenu');

			} else {
				$(this).removeClass('active');
				$('#themenu').removeClass('show');
				$('.topbar, .bottombar, ' + aligner).removeClass('showmenu');
			}
		});

		$('body').touchwipe({
			wipeLeft : function () {
				$('#menu').removeClass('active');
				$('#themenu').removeClass('show');
				$('.topbar, .bottombar, ' + aligner).removeClass('showmenu');
			},
			wipeRight : function () {
				$('#menu').addClass('active');
				$('#themenu').addClass('show');
				$('.topbar, .bottombar, ' + aligner).addClass('showmenu');
			},
			//wipeUp: function() { alert("up"); },
			//wipeDown: function() { alert("down"); },
			min_move_x : 15,
			min_move_y : 15,
			preventDefaultEvents : false
		});


		bindEvents();
		
		function bindEvents(){
		
			$('.teleport').unbind(eventEnd).bind(eventEnd, function (e) {
				e.preventDefault();
				var _this = this;
				
				$(_this).addClass('active');
				setTimeout(function () {
					$(_this).removeClass('active')
				}, 500);
				//updating = true;
						
				$('.menu').removeClass('active');
				
				var where = $(this).attr('data-page');
				LEVEL = $(this).attr('data-level');
				console.log(LEVEL);
				
				teleportMe( where );

			});


			$('.selectbtn img').unbind(eventEnd).bind(eventEnd, function (e) {
				//e.preventDefault();
				var id = $(this).parent().parent().data('id');
				if (!$(this).parent().parent().hasClass('selected')) {
					$(this).parent().parent().addClass('selected');
					toBuy.push(id);
				} else {
					$(this).parent().parent().removeClass('selected');
					while (toBuy.indexOf(id) !== -1) {
						toBuy.splice(toBuy.indexOf(id), 1);
					}
				}
				if (toBuy.length >= 1) {
					$('.buybtn').addClass('slideIn');
				} else {
					$('.buybtn').removeClass('slideIn');
				}
				//console.log(toBuy.length);
			});

			$('.buybtn').unbind(eventEnd).bind(eventEnd, function (e) {
				//e.preventDefault();

				$('#buyoverlay').addClass('prepare').addClass('scale');
				setTimeout(function () {
					$('#buyoverlay').addClass('scaleIn');
				}, 500);

				var here = $('#buyoverlay .checkout');

				here.html('');

				for (var i = 0; i < toBuy.length; i++) {

					var id = toBuy[i];

					var name = $('#treenerpakkumised .box33[data-id=' + id + ']').children('h4.name').text();
					var price = $('#treenerpakkumised .box33[data-id=' + id + ']').children('h4.price').text();

					var html = '<div class="inbasket"></div>';

					here.append(name + ' ');

				}

			});

			$('.detailsbtn').unbind(eventEnd).bind(eventEnd, function (e) {
				//e.preventDefault();

				$('#overlay').addClass('scale');
				setTimeout(function () {
					$('#overlay').addClass('scaleIn');
				}, 100);
			});

			$('.overlay .backbtn').unbind(eventEnd).bind(eventEnd, function (e) {
				e.preventDefault();

				$('#overlay').addClass('scaleOut');
				//$(this).parent().removeClass('scaleIn');

				var _this = $(this);

				setTimeout(function () {
					//_this.parent().removeClass('scale').removeClass('prepare');
					_this.parent('#overlay').removeClass('scaleIn');
					_this.parent().removeClass('scaleOut');
					_this.parent().removeClass('scale');
				}, 300);
			});

			/* MAKE HOVER */
			/* FOR STATIC ELEMENTS ONLY, NOT WORKING ON SCROLLABLE!! */

			$('.touchhover').unbind(eventEnd).bind('touchstart', function (e) {
				e.preventDefault();
				$(this).addClass('hover');
			}).unbind(eventEnd).bind(eventEnd, function (e) {
				//e.preventDefault();
				$(this).removeClass('hover');
			});
		
		}

	});
})(window.jQuery);
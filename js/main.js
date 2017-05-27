/*---------- PRELOADER ----------*/
var transitionLayer=$(".cd-transition-layer"),transitionBackground=transitionLayer.children(),frameProportion=1.78,frames=25,resize=!1;setLayerDimensions();$(window).on("resize",function(){resize||(resize=!0,window.requestAnimationFrame?window.requestAnimationFrame(setLayerDimensions):setTimeout(setLayerDimensions,300))});function loadTransition(){transitionLayer.addClass("visible opening");var a=0<$(".no-cssanimations").length?0:800;setTimeout(function(){$("body").addClass("loaded")},a)}
function setLayerDimensions(){var a=$(window).width(),b=$(window).height();a/b>frameProportion?(b=a,a=b/frameProportion):(a=1.2*b,b=a*frameProportion);transitionBackground.css({width:b*frames+"px",height:a+"px"});resize=!1};


/*---------- FORM ----------*/
(function(){function b(a){classie.add(a.target.parentNode,"input-filled")}function c(a){""===a.target.value.trim()&&classie.remove(a.target.parentNode,"input-filled")}String.prototype.trim||function(){var a=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;String.prototype.trim=function(){return this.replace(a,"")}}();[].slice.call(document.querySelectorAll(".txtbox")).forEach(function(a){""!==a.value.trim()&&classie.add(a.parentNode,"input-filled");a.addEventListener("focus",b);a.addEventListener("blur",c)})})();


$(document).ready(function(){
	
	setInterval(function(){
		$(".counter").hasClass("active") ? $(".counter").removeClass('active') : $(".counter").addClass('active');
		$(".icon-call").hasClass("active") ? $(".icon-call").removeClass('active') : $(".icon-call").addClass('active');
	},3000);
	
	$(".caption-slider").owlCarousel({
		items:1,
		nav:false,
		dots:false,
		responsiveRefreshRate:0,
		loop:true,
		autoplay: true
	});
	
	
	
	$(".btn-actions").click(function() {
		var target = $("#actions");
		if (target.length) {
			$('html, body').animate({
					scrollTop: target.offset().top
			}, 1000);
		}
		return false;
	});
	
	$(".btn-learn").click(function() {
		var target = $("#learn");
		if (target.length) {
			$('html, body').animate({
					scrollTop: target.offset().top
			}, 1000);
		}
		return false;
	});
	
	$('.fancybox-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {}
		},
		aspectRatio : true,
		padding:[60,15,15,15]
	});
	
	$('.anim-element').viewportChecker();
	
	$(".banner.second .btn-more").on("click", function(){
		$(".banner.second").addClass("open-info");
		return false;
	});
	
	$(".banner.second .btn.back, .banner.second .caption-tbl").on("click", function(){
		$(".banner.second").removeClass("open-info");
		return false;
	});
	
	if($(window).width() > 1000){
		$(".scroll-wrapper").niceScroll({cursorcolor:"#000", cursorborder:"0px", autohidemode:false});
	}
	
	$(".action-list .form-trigger").on("click", function(){
		var popID = $(this).attr("href");
		$("body").addClass("popup-show");
		$("popup").removeClass("show");
		$(popID).addClass("show");
		$(".popup input:text").val("");
		return false;
	});
	
	/*--- Close Popup ---*/
	$(".popup .back").on("touchstart click", function(){
		$("body").removeClass("popup-show");
		$(".popup").removeClass("show");
		$(".popup input:text").val("");
		return false;
  });
	
	$(".infographics").owlCarousel({
		items:1,
		nav:true,
		navText:["<i class='icon-prev'></i>","<i class='icon-next'></i>"],
		dots:false,
		responsiveRefreshRate:0,
		loop:true
	});
	
});

$(document).mouseup(function (e){
	var container = $(".popup");

	if (!container.is(e.target) && container.has(e.target).length === 0) 
	{	
		$("body").removeClass("popup-show");
		$(".popup").removeClass("show");
		$(".popup input:text").val("");
	}
});

$(document).keydown(function(e) {
	// ESCAPE key pressed
	if (e.keyCode == 27) {
		if($("body").hasClass("popup-show")){
			$("body").removeClass("popup-show");
			$(".popup").removeClass("show");
			$(".popup input:text").val("");
		}
	}
});

$(window).load(function() {
	loadTransition();	
});
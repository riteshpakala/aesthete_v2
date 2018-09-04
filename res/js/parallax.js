$(document).ready(function() {
	// $('html, body').animate({
	//     scrollTop: $('.hero:visible:first').offset().top
	// }, 1000);
	// var current =  $('#feature1').width();

	var timedout = false;
	var scroll = 0;
	$(window).scroll(function() { 
		if (scroll > 0)
  		{
			timedout = false;
			clearTimeout($.data(this, 'scrollTimer'));
		    $.data(this, 'scrollTimer', setTimeout(function() {
		       console.log("Havent scrolled");
		   //      if (inViewport($('#feature1')) > inViewport($('#feature2')) && timedout == false){
		        	
		   //      	$('html, body').animate({
					//     scrollTop: $('#feature1').offset().top-50
					// }, 800, function(){
					// 	timedout = true;
					// });

		   //      }else 
		        if (inViewport($('#feature2')) > inViewport($('#feature1')) && inViewport($('#feature2')) > inViewport($('#feature3')) && timedout == false){
		        	
		        	$('html, body').animate({
					    scrollTop: $('#feature2').offset().top-50
					}, 800, function(){
						timedout = true;
					});

		        }else if (inViewport($('#feature3')) > inViewport($('#feature2')) && inViewport($('#feature3')) > inViewport($('#feature4')) && timedout == false){
		        	
		        	$('html, body').animate({
					    scrollTop: $('#feature3').offset().top-50
					}, 800, function(){
						timedout = true;
					});

		        }else if (inViewport($('#feature4')) > inViewport($('#feature3')) && inViewport($('#feature4')) > inViewport($('#feature5')) && timedout == false){
		        	
		        	$('html, body').animate({
					    scrollTop: $('#feature4').offset().top-50
					}, 800, function(){
						timedout = true;
					});

		        }else if (inViewport($('#feature5')) > inViewport($('#feature4')) && inViewport($('#feature5')) > inViewport($('#feature6')) && timedout == false){
		        	
		        	$('html, body').animate({
					    scrollTop: $('#feature5').offset().top-50
					}, 800, function(){
						timedout = true;
					});

		        }else if (inViewport($('#feature6')) > inViewport($('#feature5')) && timedout == false){
		        	
		        	$('html, body').animate({
					    scrollTop: $('#feature6').offset().top-50
					}, 800, function(){
						timedout = true;
					});
		        }

		    }, 500));
		}
		scroll++;
	});

	function inViewport($el) {
	    var elH = $el.outerHeight(),
	        H   = $(window).height(),
	        r   = $el[0].getBoundingClientRect(), t=r.top, b=r.bottom;
	    return Math.max(0, t>0? Math.min(elH, H-t) : (b<H?b:H));
	}
});
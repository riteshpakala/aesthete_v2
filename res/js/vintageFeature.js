$(document).ready(function() {

	var everythingLoaded = setInterval(function() {
      if (/loaded|complete/.test(document.readyState)) {
        clearInterval(everythingLoaded);
        // init(); // this is the function that gets called when everything is loaded
        
        if ($('#lastVintageFeatureMobile').css("display") == "none"){
        	$('#overlay').css({'height': ($('#lastVintageFeature').offset().top + $('#lastVintageFeature').height()) - 100});
		}else{
			$('#overlay').css({'height': ($('#lastVintageFeatureMobile').offset().top + $('#lastVintageFeatureMobile').height()) - 100});
		
		}
		console.log($('#lastVintageFeature').offset().top);
      }
    }, 10);

    $(window).resize(function(){

    	if ($('#lastVintageFeatureMobile').css("display") == "none"){
    		$('#overlay').css({'height': ($('#lastVintageFeature').offset().top + $('#lastVintageFeature').height()) - 100});
		}else{
			$('#overlay').css({'height': ($('#lastVintageFeatureMobile').offset().top + $('#lastVintageFeatureMobile').height()) - 100});
		
		}

    });
});
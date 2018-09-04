$(document).ready(function() {
    // $("div").each(function(index) {
    //     if (this != document.getElementById('menuToggle')){
    //         $(this).fadeIn(500);
    //     }
    // });

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        if(window.location.href.indexOf("cart") < 0){
            window.location.href='/shop';
        }
    }

	$("#landingHeroFeatureDownArrow").click(function() {
    	$("html, body").animate({
        	scrollTop: $('#landingMemberPortal').offset().top 
   		 }, 1000);
    });
    $("#heroFeatureShopMobileInactive, #heroFeatureShopMobile, #heroFeatureShop").click(function() {
    	
    	window.location.href='/shop';
    });

    $("#createAccount").click(function() {
    	
    	window.location.href='/signup';
    });

    $("#loginAccount").click(function() {
    	
    	window.location.href='/login';
    });



    $("#landingMobile").hide();
    $("#landingMemberPortal").hide();
    $("#closing").hide();
    $("div.landing").hide();
    $("div.footer").hide();
    //Slider Animation for Mobile
    //


    if(window.location.href == "https://aesthete.us" || window.location.href == "https://aesthete.us/" || window.location.href == "https://www.aesthete.us" || window.location.href == "https://www.aesthete.us/"){

        var everythingLoaded = setInterval(function() {
          if (/loaded|complete/.test(document.readyState)) {
            clearInterval(everythingLoaded);
            // init(); // this is the function that gets called when everything is loaded

            
            setTimeout(function(){
                $("#landingMemberPortal").fadeIn(2000);
                $("#closing").fadeIn(2000);
                $("div.footer").fadeIn(2000);
                $("#landingMobile").fadeIn(1000);
                $("div.landing").fadeIn(1000);


            
                 // $("#landingMobile").css({"height": $("#landingMobileHeroImage").height().toString()+'px'});
                // if($("#landingMobileHeroImage").height()){
                //     $("#landingMobile").css({"height": $("#landingMobileHeroImage").height().toString()+'px'});
                // }else{
                //     $("#landingMobile").css({"height": $("#landingMobileHeroImageInactive").height().toString()+'px'});
                // }
            }, 500);

    
          }
        }, 10);
    }
        

        $(window).resize(function(){
            
            // if($("#landingMobileHeroImage").height()){
            //     $("#landingMobile").css({"height": $("#landingMobileHeroImage").height().toString()+'px'});

            // }else{
            //     $("#landingMobile").css({"height": $("#landingMobileHeroImageInactive").height().toString()+'px'});
            // }
            // console.log($("#feature12").height().toString());
        });


        // $( "#book" ).animate({
        //     opacity: 0.25,
        //     left: "+=50",
        //     height: "toggle"
        //   }, 5000, function() {
        //     // Animation complete.
        //   });


        var imageIndex = 1;
        var images = 3;
        function slide(){
            imageIndex++;
            setTimeout(function(){
                //Text Animations
                if (imageIndex == 1){
                    $("#heroText").css({"text-align":"left"});
                    $("#heroText").animate({
                        top: "8vw"
                    }, 1000);

                    $("#heroFeatureShopMobile").animate({
                        bottom: "16vw",
                    }, 1000);

                    $("#closing").css({"text-align":"left", "left":"4vw"});
                }else if (imageIndex == 2){
                    $("#heroText").css({"text-align":"center"});
                    $("#heroText").animate({
                        top: "+85vw"
                    }, 1000);

                    $("#heroFeatureShopMobile").animate({
                        bottom: "+36vw",
                        left: "+36vw"
                    }, 1000);


                    $("#closing").css({"text-align":"center"});
                    
                }else if (imageIndex == 3){

                    $("#heroText").css({"text-align":"left"});

                    $("#heroText").animate({
                        top: "135vw",
                        right: "4vw"
                    }, 1000);

                    $("#heroFeatureShopMobile").animate({
                        left: "4vw"
                    }, 1000);


                    $("#closing").css({"text-align":"left"});
                }





                $("#landingMobileHeroImage").animate({
                    opacity: 0.0,
                  }, 1000, function() {
                        $("#landingMobileHeroImage").attr("src", "/images/landing/mobile/slider/"+imageIndex.toString()+".png");
                    
                        $("#landingMobileHeroImage").animate({
                            opacity: 1.0,
                        }, 1000, function(){
                            if (imageIndex == images){
                                imageIndex = 0;
                            }

                            slide();
                        });
                  });
                
            }, 4500);

        }

        slide();
});
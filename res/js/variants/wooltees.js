$(document).ready(function() {

	$("#variant1, #variant2, #variant3, #variant4, #variant5, #variant6").click(function(event) {
		var idOfButton = event.target.id;
        var toRemove = 'variant';
        var index = idOfButton.replace(toRemove,'');
        if (index == "1"){
     //    	$( "#alert" ).animate({
			  //   opacity: 1
			  // }, 500, function() {
			  //   $( "#alert" ).animate({
			  //   opacity: 0
			  // 	}, 500);
			  // });

			$("#productSizeSButton1").css("background-color","transparent");
        	$("#productSizeSButton1").css("color","#000");

	        $("#productSizeMButton1").css("background-color","transparent");
	        $("#productSizeMButton1").css("color","#000");

	        $("#productSizeLButton1").css("background-color","transparent");
	        $("#productSizeLButton1").css("color","#000");

	        $("#productSizeXLButton1").css("background-color","transparent");
	        $("#productSizeXLButton1").css("color","#000");

        	$("#productTitle").html("Pure Black");
        	$("#firstImage").attr('src', '../../../images/shop/product/wooltees/variants/black/1.png');
        	$("#firstImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/black/mobile/1.png');
        	$("#secondImage").attr('src', '../../../images/shop/product/wooltees/variants/black/2.png');
        	$("#thirdImage").attr('src', '../../../images/shop/product/wooltees/variants/black/3.png');
        	$("#secondImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/black/mobile/2.png');
        	$("#thirdImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/black/mobile/3.png');


        	$("#productSizeSButton1").attr('class', "0");
        	$("#productSizeMButton1").attr('class', "1");
        	$("#productSizeLButton1").attr('class', "2");
        	$("#productSizeXLButton1").attr('class', "3");

        	$('div.heroCart').addClass('switchToWhiteInMainBlacks');
        }else if (index == "2"){
        	$("#productSizeSButton1").css("background-color","transparent");
        	$("#productSizeSButton1").css("color","#000");

	        $("#productSizeMButton1").css("background-color","transparent");
	        $("#productSizeMButton1").css("color","#000");

	        $("#productSizeLButton1").css("background-color","transparent");
	        $("#productSizeLButton1").css("color","#000");

	        $("#productSizeXLButton1").css("background-color","transparent");
	        $("#productSizeXLButton1").css("color","#000");

        	$("#productTitle").html("Cream White");
        	$("#firstImage").attr('src', '../../../images/shop/product/wooltees/variants/white/1.png');
        	$("#firstImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/white/mobile/1.png');
        	$("#secondImage").attr('src', '../../../images/shop/product/wooltees/variants/white/2.png');
        	$("#thirdImage").attr('src', '../../../images/shop/product/wooltees/variants/white/3.png');
        	$("#secondImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/white/mobile/2.png');
        	$("#thirdImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/white/mobile/3.png');

        	$("#productSizeSButton1").attr('class', "4");
        	$("#productSizeMButton1").attr('class', "5");
        	$("#productSizeLButton1").attr('class', "6");
        	$("#productSizeXLButton1").attr('class', "7");

        	$('div.heroCart').removeClass('switchToWhiteInMainBlacks');
        }else if (index == "3"){
        	$("#productSizeSButton1").css("background-color","transparent");
        	$("#productSizeSButton1").css("color","#000");

	        $("#productSizeMButton1").css("background-color","transparent");
	        $("#productSizeMButton1").css("color","#000");

	        $("#productSizeLButton1").css("background-color","transparent");
	        $("#productSizeLButton1").css("color","#000");

	        $("#productSizeXLButton1").css("background-color","transparent");
	        $("#productSizeXLButton1").css("color","#000");

        	$("#productTitle").html("Military Green");
        	$("#firstImage").attr('src', '../../../images/shop/product/wooltees/variants/green/1.png');
        	$("#firstImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/green/mobile/1.png');
        	$("#secondImage").attr('src', '../../../images/shop/product/wooltees/variants/green/2.png');
        	$("#thirdImage").attr('src', '../../../images/shop/product/wooltees/variants/green/3.png');
        	$("#secondImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/green/mobile/2.png');
        	$("#thirdImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/green/mobile/3.png');

        	$("#productSizeSButton1").attr('class', "16");
        	$("#productSizeMButton1").attr('class', "17");
        	$("#productSizeLButton1").attr('class', "18");
        	$("#productSizeXLButton1").attr('class', "19");

        	$('div.heroCart').addClass('switchToWhiteInMainBlacks');
        }else if (index == "4"){
        	$("#productSizeSButton1").css("background-color","transparent");
        	$("#productSizeSButton1").css("color","#000");

	        $("#productSizeMButton1").css("background-color","transparent");
	        $("#productSizeMButton1").css("color","#000");

	        $("#productSizeLButton1").css("background-color","transparent");
	        $("#productSizeLButton1").css("color","#000");

	        $("#productSizeXLButton1").css("background-color","transparent");
	        $("#productSizeXLButton1").css("color","#000");

        	$("#productTitle").html("Heather Grey");
        	$("#firstImage").attr('src', '../../../images/shop/product/wooltees/variants/heather/1.png');
        	$("#firstImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/heather/mobile/1.png');
        	$("#secondImage").attr('src', '../../../images/shop/product/wooltees/variants/heather/2.png');
        	$("#thirdImage").attr('src', '../../../images/shop/product/wooltees/variants/heather/3.png');
        	$("#secondImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/heather/mobile/2.png');
        	$("#thirdImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/heather/mobile/3.png');

        	$("#productSizeSButton1").attr('class', "20");
        	$("#productSizeMButton1").attr('class', "21");
        	$("#productSizeLButton1").attr('class', "22");
        	$("#productSizeXLButton1").attr('class', "23");

        	$('div.heroCart').addClass('switchToWhiteInMainBlacks');
        }else if (index == "5"){
        	$("#productSizeSButton1").css("background-color","transparent");
        	$("#productSizeSButton1").css("color","#000");

	        $("#productSizeMButton1").css("background-color","transparent");
	        $("#productSizeMButton1").css("color","#000");

	        $("#productSizeLButton1").css("background-color","transparent");
	        $("#productSizeLButton1").css("color","#000");

	        $("#productSizeXLButton1").css("background-color","transparent");
	        $("#productSizeXLButton1").css("color","#000");

        	$("#productTitle").html("Navy Blue");
        	$("#firstImage").attr('src', '../../../images/shop/product/wooltees/variants/navy/1.png');
        	$("#firstImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/navy/mobile/1.png');
        	$("#secondImage").attr('src', '../../../images/shop/product/wooltees/variants/navy/2.png');
        	$("#thirdImage").attr('src', '../../../images/shop/product/wooltees/variants/navy/3.png');
        	$("#secondImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/navy/mobile/2.png');
        	$("#thirdImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/navy/mobile/3.png');

        	$("#productSizeSButton1").attr('class', "8");
        	$("#productSizeMButton1").attr('class', "9");
        	$("#productSizeLButton1").attr('class', "10");
        	$("#productSizeXLButton1").attr('class', "11");

        	$('div.heroCart').addClass('switchToWhiteInMainBlacks');
        }else if (index == "6"){
        	$("#productSizeSButton1").css("background-color","transparent");
        	$("#productSizeSButton1").css("color","#000");

	        $("#productSizeMButton1").css("background-color","transparent");
	        $("#productSizeMButton1").css("color","#000");

	        $("#productSizeLButton1").css("background-color","transparent");
	        $("#productSizeLButton1").css("color","#000");

	        $("#productSizeXLButton1").css("background-color","transparent");
	        $("#productSizeXLButton1").css("color","#000");

        	$("#productTitle").html("Charcoal Grey");
        	$("#firstImage").attr('src', '../../../images/shop/product/wooltees/variants/grey/1.png');
        	$("#firstImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/grey/mobile/1.png');
        	$("#secondImage").attr('src', '../../../images/shop/product/wooltees/variants/grey/2.png');
        	$("#thirdImage").attr('src', '../../../images/shop/product/wooltees/variants/grey/3.png');
        	$("#secondImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/grey/mobile/2.png');
        	$("#thirdImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/grey/mobile/3.png');

        	$("#productSizeSButton1").attr('class', "12");
        	$("#productSizeMButton1").attr('class', "13");
        	$("#productSizeLButton1").attr('class', "14");
        	$("#productSizeXLButton1").attr('class', "15");

        	$('div.heroCart').addClass('switchToWhiteInMainBlacks');
        }

	});

var everythingLoaded = setInterval(function() {
                 if (/loaded|complete/.test(document.readyState)) {
                    clearInterval(everythingLoaded);
        
            if ($("#firstImageMobile").css("display") == "none"){
                  $("#feature12").css({"height": $("#firstImage").height().toString()+'px'});

                    $("#feature12").css({"width": $("div.headerBar").width().toString()+'px'});
                 }else{
                  $("#feature12").css({"height": $("#firstImageMobile").height().toString()+'px'});
                  $("#feature12").css({"width": $("div.headerBar").width().toString()+'px'});

                 }
         }
            }, 10);

$(window).resize(function(){
         if ($("#firstImageMobile").css('display') == 'none'){
          $("#feature12").css({"height": $("#firstImage").height().toString()+'px'});
          $("#feature12").css({"width": $("div.headerBar").width().toString()+'px'});
         }else{
          $("#feature12").css({"height": $("#firstImageMobile").height().toString()+'px'});
          $("#feature12").css({"width": $("div.headerBar").width().toString()+'px'});

         }
          console.log($("#feature12").height().toString());
      });
});

	if(window.location.href.indexOf("navywool") > -1) {
		var everythingLoaded = setInterval(function() {
                 if (/loaded|complete/.test(document.readyState)) {
                    clearInterval(everythingLoaded);
		$("#productTitle").html("Navy Blue");
        	$("#firstImage").attr('src', '../../../images/shop/product/wooltees/variants/navy/1.png');
        	$("#firstImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/navy/mobile/1.png');
        	$("#secondImage").attr('src', '../../../images/shop/product/wooltees/variants/navy/2.png');
        	$("#thirdImage").attr('src', '../../../images/shop/product/wooltees/variants/navy/3.png');
        	$("#secondImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/navy/mobile/2.png');
        	$("#thirdImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/navy/mobile/3.png');

        	$("#productSizeSButton1").attr('class', "8");
        	$("#productSizeMButton1").attr('class', "9");
        	$("#productSizeLButton1").attr('class', "10");
        	$("#productSizeXLButton1").attr('class', "11");
         }
            }, 10);

	}else if(window.location.href.indexOf("heatherwool") > -1) {
		var everythingLoaded = setInterval(function() {
                 if (/loaded|complete/.test(document.readyState)) {
                    clearInterval(everythingLoaded);
		$("#productTitle").html("Heather Grey");
        	$("#firstImage").attr('src', '/images/shop/product/wooltees/variants/heather/1.png');
        	$("#firstImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/heather/mobile/1.png');
        	$("#secondImage").attr('src', '../../../images/shop/product/wooltees/variants/heather/2.png');
        	$("#thirdImage").attr('src', '../../../images/shop/product/wooltees/variants/heather/3.png');
        	$("#secondImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/heather/mobile/2.png');
        	$("#thirdImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/heather/mobile/3.png');

        	$("#productSizeSButton1").attr('class', "20");
        	$("#productSizeMButton1").attr('class', "21");
        	$("#productSizeLButton1").attr('class', "22");
        	$("#productSizeXLButton1").attr('class', "23");
         }
            }, 10);

	}else if(window.location.href.indexOf("militarywool") > -1) {
		var everythingLoaded = setInterval(function() {
                 if (/loaded|complete/.test(document.readyState)) {
                    clearInterval(everythingLoaded);
		$("#productTitle").html("Military Green");
        	$("#firstImage").attr('src', '../../../images/shop/product/wooltees/variants/green/1.png');
        	$("#firstImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/green/mobile/1.png');
        	$("#secondImage").attr('src', '../../../images/shop/product/wooltees/variants/green/2.png');
        	$("#thirdImage").attr('src', '../../../images/shop/product/wooltees/variants/green/3.png');
        	$("#secondImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/green/mobile/2.png');
        	$("#thirdImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/green/mobile/3.png');

        	$("#productSizeSButton1").attr('class', "16");
        	$("#productSizeMButton1").attr('class', "17");
        	$("#productSizeLButton1").attr('class', "18");
        	$("#productSizeXLButton1").attr('class', "19");
         }
            }, 10);

	}else if(window.location.href.indexOf("creamwool") > -1) {
		var everythingLoaded = setInterval(function() {
                 if (/loaded|complete/.test(document.readyState)) {
                    clearInterval(everythingLoaded);
		$("#productTitle").html("Cream White");
        	$("#firstImage").attr('src', '../../../images/shop/product/wooltees/variants/white/1.png');
        	$("#firstImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/white/mobile/1.png');
        	$("#secondImage").attr('src', '../../../images/shop/product/wooltees/variants/white/2.png');
        	$("#thirdImage").attr('src', '../../../images/shop/product/wooltees/variants/white/3.png');
        	$("#secondImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/white/mobile/2.png');
        	$("#thirdImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/white/mobile/3.png');

        	$("#productSizeSButton1").attr('class', "4");
        	$("#productSizeMButton1").attr('class', "5");
        	$("#productSizeLButton1").attr('class', "6");
        	$("#productSizeXLButton1").attr('class', "7");
         }
            }, 10);

	}else if(window.location.href.indexOf("charcoalwool") > -1) {
		var everythingLoaded = setInterval(function() {
                 if (/loaded|complete/.test(document.readyState)) {
                    clearInterval(everythingLoaded);
		$("#productTitle").html("Charcoal Grey");
        	$("#firstImage").attr('src', '../../../images/shop/product/wooltees/variants/grey/1.png');
        	$("#firstImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/grey/mobile/1.png');
        	$("#secondImage").attr('src', '../../../images/shop/product/wooltees/variants/grey/2.png');
        	$("#thirdImage").attr('src', '../../../images/shop/product/wooltees/variants/grey/3.png');
        	$("#secondImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/grey/mobile/2.png');
        	$("#thirdImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/grey/mobile/3.png');

        	$("#productSizeSButton1").attr('class', "12");
        	$("#productSizeMButton1").attr('class', "13");
        	$("#productSizeLButton1").attr('class', "14");
        	$("#productSizeXLButton1").attr('class', "15");
         }
            }, 10);

	}else if(window.location.href.indexOf("blackwool") > -1) {
		var everythingLoaded = setInterval(function() {
                 if (/loaded|complete/.test(document.readyState)) {
                    clearInterval(everythingLoaded);
		$("#productTitle").html("Pure Black");
        	$("#firstImage").attr('src', '../../../images/shop/product/wooltees/variants/black/1.png');
        	$("#firstImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/black/mobile/1.png');
        	$("#secondImage").attr('src', '../../../images/shop/product/wooltees/variants/black/2.png');
        	$("#thirdImage").attr('src', '../../../images/shop/product/wooltees/variants/black/3.png');
        	$("#secondImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/black/mobile/2.png');
        	$("#thirdImageMobile").attr('src', '../../../images/shop/product/wooltees/variants/black/mobile/3.png');


        	$("#productSizeSButton1").attr('class', "0");
        	$("#productSizeMButton1").attr('class', "1");
        	$("#productSizeLButton1").attr('class', "2");
        	$("#productSizeXLButton1").attr('class', "3");
         }
            }, 10);

	}
    




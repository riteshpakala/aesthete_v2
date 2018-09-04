$(document).ready(function() {

	$("#variant1, #variant2, #variant3, #variant4, #variant5").click(function(event) {
		var idOfButton = event.target.id;
        var toRemove = 'variant';
        var index = idOfButton.replace(toRemove,'');
        if (index == "1"){
                $("#productSizeSButton1").css("background-color","transparent");
                $("#productSizeSButton1").css("color","#000");

                $("#productSizeMButton1").css("background-color","transparent");
                $("#productSizeMButton1").css("color","#000");

                $("#productSizeLButton1").css("background-color","transparent");
                $("#productSizeLButton1").css("color","#000");

                $("#productSizeXLButton1").css("background-color","transparent");
                $("#productSizeXLButton1").css("color","#000");

        	$("#productTitle").html("Faded Black");
        	$("#firstImage").attr('src', '../../../images/shop/product/cottontees/variants/black/1.png');
                $("#firstImageMobile").attr('src', '../../../images/shop/product/cottontees/variants/black/mobile/1.png');
        	$("#secondImage").attr('src', '../../../images/shop/product/cottontees/variants/black/2.png');
        	$("#thirdImage").attr('src', '../../../images/shop/product/cottontees/variants/black/3.png');
                $("#infoButton12").attr('src', '../../../images/shop/product/infoButtonWhite.png');
                $("#secondImageMobile").attr('src', '../../../images/shop/product/cottontees/variants/black/mobile/2.png');
                $("#thirdImageMobile").attr('src', '../../../images/shop/product/cottontees/variants/black/mobile/3.png');
                

        	$("#productSizeSButton1").attr('class', "20");
        	$("#productSizeMButton1").attr('class', "21");
        	$("#productSizeLButton1").attr('class', "22");
        	$("#productSizeXLButton1").attr('class', "23");

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
                $("#firstImage").attr('src', '../../../images/shop/product/cottontees/variants/white/1.png');
                $("#firstImageMobile").attr('src', '../../../images/shop/product/cottontees/variants/white/mobile/1.png');
        	$("#secondImage").attr('src', '../../../images/shop/product/cottontees/variants/white/2.png');
        	$("#thirdImage").attr('src', '../../../images/shop/product/cottontees/variants/white/3.png');
                $("#infoButton12").attr('src', '../../../images/shop/product/infoButton.png');
                $("#secondImageMobile").attr('src', '../../../images/shop/product/cottontees/variants/white/mobile/2.png');
                $("#thirdImageMobile").attr('src', '../../../images/shop/product/cottontees/variants/white/mobile/3.png');


        	$("#productSizeSButton1").attr('class', "0");
        	$("#productSizeMButton1").attr('class', "1");
        	$("#productSizeLButton1").attr('class', "2");
        	$("#productSizeXLButton1").attr('class', "3");

                $('div.heroCart').removeClass('switchToWhiteInMainBlacks');
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


        if(window.location.href.indexOf("blackcotton") > -1) {
              var everythingLoaded = setInterval(function() {
                 if (/loaded|complete/.test(document.readyState)) {
                    clearInterval(everythingLoaded);
                $("#firstImage").attr('src', '../../../images/shop/product/cottontees/variants/black/1.png');
                $("#firstImageMobile").attr('src', '../../../images/shop/product/cottontees/variants/black/mobile/1.png');
                $("#secondImage").attr('src', '../../../images/shop/product/cottontees/variants/black/2.png');
                $("#thirdImage").attr('src', '../../../images/shop/product/cottontees/variants/black/3.png');
                $("#infoButton12").attr('src', '../../../images/shop/product/infoButtonWhite.png');
                $("#secondImageMobile").attr('src', '../../../images/shop/product/cottontees/variants/black/mobile/2.png');
                $("#thirdImageMobile").attr('src', '../../../images/shop/product/cottontees/variants/black/mobile/3.png');
                

                $("#productSizeSButton1").attr('class', "4");
                $("#productSizeMButton1").attr('class', "5");
                $("#productSizeLButton1").attr('class', "6");
                $("#productSizeXLButton1").attr('class', "7");
              }
            }, 10);

        }else if(window.location.href.indexOf("creamcotton") > -1) {
              var everythingLoaded = setInterval(function() {
                 if (/loaded|complete/.test(document.readyState)) {
                    clearInterval(everythingLoaded);
                $("#firstImage").attr('src', '../../../images/shop/product/cottontees/variants/white/1.png');
                $("#firstImageMobile").attr('src', '../../../images/shop/product/cottontees/variants/white/mobile/1.png');
                $("#secondImage").attr('src', '../../../images/shop/product/cottontees/variants/white/2.png');
                $("#thirdImage").attr('src', '../../../images/shop/product/cottontees/variants/white/3.png');
                $("#infoButton12").attr('src', '../../../images/shop/product/infoButton.png');
                $("#secondImageMobile").attr('src', '../../../images/shop/product/cottontees/variants/white/mobile/2.png');
                $("#thirdImageMobile").attr('src', '../../../images/shop/product/cottontees/variants/white/mobile/3.png');


                $("#productSizeSButton1").attr('class', "0");
                $("#productSizeMButton1").attr('class', "1");
                $("#productSizeLButton1").attr('class', "2");
                $("#productSizeXLButton1").attr('class', "3");
               }
            }, 10);

        }
});
$(document).ready(function() {

	$("#variant1, #variant2, #variant3, #variant4, #variant5").click(function(event) {
		var idOfButton = event.target.id;
        var toRemove = 'variant';
        var index = idOfButton.replace(toRemove,'');
        if (index == "1"){
          $("div.contents").attr('id', '0');

        	$("#firstImage").attr('src', '../../../images/shop/product/cuff/variants/black/1.png');
                $("#firstImageMobile").attr('src', '../../../images/shop/product/cuff/variants/black/mobile/1.png');
        	$("#secondImage").attr('src', '../../../images/shop/product/cuff/variants/black/2.png');
        	$("#thirdImage").attr('src', '../../../images/shop/product/cuff/variants/black/3.png');

        	$("#productSizeSButton1").attr('class', "8");
        	$("#productSizeMButton1").attr('class', "8");
        	$("#productSizeLButton1").attr('class', "8");
        	$("#productSizeXLButton1").attr('class', "8");

        }else if (index == "2"){
          $("div.contents").attr('id', '1');

        	$("#firstImage").attr('src', '../../../images/shop/product/cuff/variants/gold/1.png');
                $("#firstImageMobile").attr('src', '../../../images/shop/product/cuff/variants/gold/mobile/1.png');
        	$("#secondImage").attr('src', '../../../images/shop/product/cuff/variants/gold/2.png');
        	$("#thirdImage").attr('src', '../../../images/shop/product/cuff/variants/gold/3.png');


        	$("#productSizeSButton1").attr('class', "8");
        	$("#productSizeMButton1").attr('class', "8");
        	$("#productSizeLButton1").attr('class', "8");
        	$("#productSizeXLButton1").attr('class', "8");

        }else if (index == "3"){

              $("div.contents").attr('id', '2');

                $("#firstImage").attr('src', '../../../images/shop/product/cuff/variants/silver/1.png');
                $("#firstImageMobile").attr('src', '../../../images/shop/product/cuff/variants/silver/mobile/1.png');
                $("#secondImage").attr('src', '../../../images/shop/product/cuff/variants/silver/2.png');
                $("#thirdImage").attr('src', '../../../images/shop/product/cuff/variants/silver/3.png');


                $("#productSizeSButton1").attr('class', "8");
                $("#productSizeMButton1").attr('class', "8");
                $("#productSizeLButton1").attr('class', "8");
                $("#productSizeXLButton1").attr('class', "8");

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


        if(window.location.href.indexOf("blackcuff") > -1) {
                 var everythingLoaded = setInterval(function() {
                 if (/loaded|complete/.test(document.readyState)) {
                    clearInterval(everythingLoaded);
                $("div.contents").attr('id', '0');

          $("#firstImage").attr('src', '../../../images/shop/product/cuff/variants/black/1.png');
                $("#firstImageMobile").attr('src', '../../../images/shop/product/cuff/variants/black/mobile/1.png');
          $("#secondImage").attr('src', '../../../images/shop/product/cuff/variants/black/2.png');
          $("#thirdImage").attr('src', '../../../images/shop/product/cuff/variants/black/3.png');

          $("#productSizeSButton1").attr('class', "8");
          $("#productSizeMButton1").attr('class', "8");
          $("#productSizeLButton1").attr('class', "8");
          $("#productSizeXLButton1").attr('class', "8");
                }
            }, 10);

        }else if(window.location.href.indexOf("goldcuff") > -1) {
                
                 var everythingLoaded = setInterval(function() {
                 if (/loaded|complete/.test(document.readyState)) {
                    clearInterval(everythingLoaded);
                $("div.contents").attr('id', '1');

          $("#firstImage").attr('src', '../../../images/shop/product/cuff/variants/gold/1.png');
                $("#firstImageMobile").attr('src', '../../../images/shop/product/cuff/variants/gold/mobile/1.png');
          $("#secondImage").attr('src', '../../../images/shop/product/cuff/variants/gold/2.png');
          $("#thirdImage").attr('src', '../../../images/shop/product/cuff/variants/gold/3.png');


          $("#productSizeSButton1").attr('class', "8");
          $("#productSizeMButton1").attr('class', "8");
          $("#productSizeLButton1").attr('class', "8");
          $("#productSizeXLButton1").attr('class', "8");
        }
            }, 10);
        }else if(window.location.href.indexOf("silvercuff") > -1) {
                 var everythingLoaded = setInterval(function() {
                 if (/loaded|complete/.test(document.readyState)) {
                    clearInterval(everythingLoaded);
                $("div.contents").attr('id', '2');

                $("#firstImage").attr('src', '../../../images/shop/product/cuff/variants/silver/1.png');
                $("#firstImageMobile").attr('src', '../../../images/shop/product/cuff/variants/silver/mobile/1.png');
                $("#secondImage").attr('src', '../../../images/shop/product/cuff/variants/silver/2.png');
                $("#thirdImage").attr('src', '../../../images/shop/product/cuff/variants/silver/3.png');


                $("#productSizeSButton1").attr('class', "8");
                $("#productSizeMButton1").attr('class', "8");
                $("#productSizeLButton1").attr('class', "8");
                $("#productSizeXLButton1").attr('class', "8");
        }
            }, 10);
                

        }
});
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

        	$("#productTitle").html("Stripes: White on Charcoal");
                $("#firstImage").attr('src', '../../../images/shop/product/cottonstriped/variants/black/1.png');
                $("#firstImageMobile").attr('src', '../../../images/shop/product/cottonstriped/variants/black/mobile/1.png');
        	$("#secondImage").attr('src', '../../../images/shop/product/cottonstriped/variants/black/2.png');
        	$("#thirdImage").attr('src', '../../../images/shop/product/cottonstriped/variants/black/3.png');
                $("#secondImageMobile").attr('src', '../../../images/shop/product/cottonstriped/variants/black/mobile/2.png');
                $("#thirdImageMobile").attr('src', '../../../images/shop/product/cottonstriped/variants/black/mobile/3.png');
               

        	$("#productSizeSButton1").attr('class', "12");
        	$("#productSizeMButton1").attr('class', "13");
        	$("#productSizeLButton1").attr('class', "14");
        	$("#productSizeXLButton1").attr('class', "15");
        }else if (index == "2"){
                $("#productSizeSButton1").css("background-color","transparent");
                $("#productSizeSButton1").css("color","#000");

                $("#productSizeMButton1").css("background-color","transparent");
                $("#productSizeMButton1").css("color","#000");

                $("#productSizeLButton1").css("background-color","transparent");
                $("#productSizeLButton1").css("color","#000");

                $("#productSizeXLButton1").css("background-color","transparent");
                $("#productSizeXLButton1").css("color","#000");

        	$("#productTitle").html("Stripes: Charcoal on White");
        	$("#firstImage").attr('src', '../../../images/shop/product/cottonstriped/variants/white/1.png');
                $("#firstImageMobile").attr('src', '../../../images/shop/product/cottonstriped/variants/white/mobile/1.png');
        	$("#secondImage").attr('src', '../../../images/shop/product/cottonstriped/variants/white/2.png');
        	$("#thirdImage").attr('src', '../../../images/shop/product/cottonstriped/variants/white/3.png');
                $("#secondImageMobile").attr('src', '../../../images/shop/product/cottonstriped/variants/white/mobile/2.png');
                $("#thirdImageMobile").attr('src', '../../../images/shop/product/cottonstriped/variants/white/mobile/3.png');
               


        	$("#productSizeSButton1").attr('class', "8");
        	$("#productSizeMButton1").attr('class', "9");
        	$("#productSizeLButton1").attr('class', "10");
        	$("#productSizeXLButton1").attr('class', "11");
        }

	});

        setTimeout(function(){
        
            if ($("#firstImageMobile").css("display") == "none"){
                  $("#feature12").css({"height": $("#firstImage").height().toString()+'px'});
                 }else{
                  $("#feature12").css({"height": $("#firstImageMobile").height().toString()+'px'});

                 }
        }, 500);

        $(window).resize(function(){
         if ($("#firstImageMobile").css('display') == 'none'){
          $("#feature12").css({"height": $("#firstImage").height().toString()+'px'});
         }else{
          $("#feature12").css({"height": $("#firstImageMobile").height().toString()+'px'});

         }
          console.log($("#feature12").height().toString());
      });

        if(window.location.href.indexOf("charcoalstriped") > -1) {
                setTimeout(
                        function() 
                {
                $("#firstImage").attr('src', '../../../images/shop/product/cottonstriped/variants/white/1.png');
                $("#firstImageMobile").attr('src', '../../../images/shop/product/cottonstriped/variants/white/mobile/1.png');
                $("#secondImage").attr('src', '../../../images/shop/product/cottonstriped/variants/white/2.png');
                $("#thirdImage").attr('src', '../../../images/shop/product/cottonstriped/variants/white/3.png');
                $("#secondImageMobile").attr('src', '../../../images/shop/product/cottonstriped/variants/white/mobile/2.png');
                $("#thirdImageMobile").attr('src', '../../../images/shop/product/cottonstriped/variants/white/mobile/3.png');
               


                $("#productSizeSButton1").attr('class', "8");
                $("#productSizeMButton1").attr('class', "9");
                $("#productSizeLButton1").attr('class', "10");
                $("#productSizeXLButton1").attr('class', "11");
                
                }, 500);

        }else if(window.location.href.indexOf("whitestriped") > -1) {
                
                setTimeout(
                        function() 
                {
                $("#firstImage").attr('src', '../../../images/shop/product/cottonstriped/variants/black/1.png');
                $("#firstImageMobile").attr('src', '../../../images/shop/product/cottonstriped/variants/black/mobile/1.png');
                $("#secondImage").attr('src', '../../../images/shop/product/cottonstriped/variants/black/2.png');
                $("#thirdImage").attr('src', '../../../images/shop/product/cottonstriped/variants/black/3.png');
                $("#secondImageMobile").attr('src', '../../../images/shop/product/cottonstriped/variants/black/mobile/2.png');
                $("#thirdImageMobile").attr('src', '../../../images/shop/product/cottonstriped/variants/black/mobile/3.png');
               

                $("#productSizeSButton1").attr('class', "12");
                $("#productSizeMButton1").attr('class', "13");
                $("#productSizeLButton1").attr('class', "14");
                $("#productSizeXLButton1").attr('class', "15");
        }, 500);
        }
});
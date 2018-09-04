$(document).ready(function() {

	$("#variant1, #variant2, #variant3, #variant4, #variant5").click(function(event) {
                var idOfButton = event.target.id;
        var toRemove = 'variant';
        var index = idOfButton.replace(toRemove,'');
        if (index == "1"){
                $("#productTitle").html("Pure Black");
                $("#firstImage").attr('src', '../../../images/shop/product/laceup/variants/black/1.png');
                $("#firstImageMobile").attr('src', '../../../images/shop/product/laceup/variants/black/mobile/1.png');

                $("#secondImage").attr('src', '../../../images/shop/product/laceup/variants/black/2.png');
                $("#thirdImage").attr('src', '../../../images/shop/product/laceup/variants/black/3.png');
                $("#secondImageMobile").attr('src', '../../../images/shop/product/laceup/variants/black/mobile/2.png');
                $("#thirdImageMobile").attr('src', '../../../images/shop/product/laceup/variants/black/mobile/3.png');
               

                $("div.heroCart").attr('id', "10244795336");
        }else if (index == "2"){
                $("#productTitle").html("Natural");
                $("#firstImage").attr('src', '../../../images/shop/product/laceup/variants/blackr/1.png');
                $("#firstImageMobile").attr('src', '../../../images/shop/product/laceup/variants/blackr/mobile/1.png');
                

                $("#secondImage").attr('src', '../../../images/shop/product/laceup/variants/blackr/2.png');
                $("#thirdImage").attr('src', '../../../images/shop/product/laceup/variants/blackr/3.png');
                $("#secondImageMobile").attr('src', '../../../images/shop/product/laceup/variants/blackr/mobile/2.png');
                $("#thirdImageMobile").attr('src', '../../../images/shop/product/laceup/variants/blackr/mobile/3.png');
               
               $("div.heroCart").attr('id', "10244726408");

        }else if (index == "3"){
                $("#productTitle").html("Brown with Raw Sole");
                $("#firstImage").attr('src', '../../../images/shop/product/laceup/variants/brown/1.png');
                $("#firstImageMobile").attr('src', '../../../images/shop/product/laceup/variants/brown/mobile/1.png');
                
                $("#secondImage").attr('src', '../../../images/shop/product/laceup/variants/brown/2.png');
                $("#thirdImage").attr('src', '../../../images/shop/product/laceup/variants/brown/3.png');
                $("#secondImageMobile").attr('src', '../../../images/shop/product/laceup/variants/brown/mobile/2.png');
                $("#thirdImageMobile").attr('src', '../../../images/shop/product/laceup/variants/brown/mobile/3.png');
               
                $("div.heroCart").attr('id', "10244776904");
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

        if(window.location.href.indexOf("blacklaceup") > -1) {
                setTimeout(
                        function() 
                {
                $("#firstImage").attr('src', '../../../images/shop/product/laceup/variants/black/1.png');
                $("#firstImageMobile").attr('src', '../../../images/shop/product/laceup/variants/black/mobile/1.png');

                $("#secondImage").attr('src', '../../../images/shop/product/laceup/variants/black/2.png');
                $("#thirdImage").attr('src', '../../../images/shop/product/laceup/variants/black/3.png');
                $("#secondImageMobile").attr('src', '../../../images/shop/product/laceup/variants/black/mobile/2.png');
                $("#thirdImageMobile").attr('src', '../../../images/shop/product/laceup/variants/black/mobile/3.png');
               

                $("div.heroCart").attr('id', "10244795336");
                }, 500);

        }else if(window.location.href.indexOf("naturallaceup") > -1) {
                
                setTimeout(
                        function() 
                {
                $("#firstImage").attr('src', '../../../images/shop/product/laceup/variants/blackr/1.png');
                $("#firstImageMobile").attr('src', '../../../images/shop/product/laceup/variants/blackr/mobile/1.png');
                

                $("#secondImage").attr('src', '../../../images/shop/product/laceup/variants/blackr/2.png');
                $("#thirdImage").attr('src', '../../../images/shop/product/laceup/variants/blackr/3.png');
                $("#secondImageMobile").attr('src', '../../../images/shop/product/laceup/variants/blackr/mobile/2.png');
                $("#thirdImageMobile").attr('src', '../../../images/shop/product/laceup/variants/blackr/mobile/3.png');
               
               $("div.heroCart").attr('id', "10244726408");
        }, 500);
        }else if(window.location.href.indexOf("cognaclaceup") > -1) {
                setTimeout(
                        function() 
                {
                $("#productTitle").html("Brown with Raw Sole");
                $("#firstImage").attr('src', '../../../images/shop/product/laceup/variants/brown/1.png');
                $("#firstImageMobile").attr('src', '../../../images/shop/product/laceup/variants/brown/mobile/1.png');
                
                $("#secondImage").attr('src', '../../../images/shop/product/laceup/variants/brown/2.png');
                $("#thirdImage").attr('src', '../../../images/shop/product/laceup/variants/brown/3.png');
                $("#secondImageMobile").attr('src', '../../../images/shop/product/laceup/variants/brown/mobile/2.png');
                $("#thirdImageMobile").attr('src', '../../../images/shop/product/laceup/variants/brown/mobile/3.png');
               
                $("div.heroCart").attr('id', "10244776904");
        }, 500);
                

        }
});
$(document).ready(function() {
    $("div.discountBanner").click(function(event){
      if($("div.discountBanner").hasClass("discountBannerHoverAction")){
          $("p.discountPreText").removeClass("discountPreTextActive");
          $("div.discountBanner").removeClass("discountBannerHoverAction");
          $("p.discountMainText").removeClass("discountMainTextActive");
          $("p.discountSubText").removeClass("discountMainTextActive");
          $("p.discountSubtext2").removeClass("discountMainTextActive");
          $("#discountShopNow").removeClass("discountMainTextActive");

          $("p.discountTitle").removeClass("discountMainTextActive");

          $("div.discountBanner").css({"height":40});
      }else{
          $("p.discountPreText").addClass("discountPreTextActive");
          $("div.discountBanner").addClass("discountBannerHoverAction");
          $("p.discountMainText").addClass("discountMainTextActive");
          $("p.discountSubText").addClass("discountMainTextActive");
          $("p.discountSubtext2").addClass("discountMainTextActive");
          $("#discountShopNow").addClass("discountMainTextActive");

          $("p.discountTitle").addClass("discountMainTextActive");

                 $("div.discountBanner").css({"height":$(window).height()-50});
      }


 
    });


    console.log($(".newsletterHide").val());

    $(window).resize(function(){

      if($("div.discountBanner").hasClass("discountBannerHoverAction")){
        $("div.discountBanner").css({"height":$(window).height()-50});
      }
    });

    var everythingLoaded = setInterval(function() {
        if (/loaded|complete/.test(document.readyState)) {
            clearInterval(everythingLoaded);



        }

    });


    function calculateDayChange(){
      var d = new Date();

      var month = d.getMonth()+1;
      var day = d.getDate();

      var output = d.getFullYear() + '/' +
          (month<10 ? '0' : '') + month + '/' +
          (day<10 ? '0' : '') + day;

      // console.log(24-day);

      if(24-day > 0){
        $("p.discountMainText").html(20-day+" DAYS");
      }else{
        $("p.discountMainText").html("DAYS");

      }
    }

    calculateDayChange();
});
$(document).ready(function() {
    $("#featuredButton").click(function() {
        $("#featuredButton").css("font-weight", "bold");
        window.location.href='/shop';
    });
    $("#teesButton").click(function() {
        $("#teesButton").css("font-weight", "bold");
        window.location.href='/shop/tees';
    });
    $("#bootsButton").click(function() {
        $("#bootsButton").css("font-weight", "bold");
        
        window.location.href='/shop/boots';
    });
    $("#coatsButton").click(function() {
        $("#coatsButton").css("font-weight", "bold");
        
        window.location.href='/shop/coats';
    });
    $("#vintageButton").click(function() {
        $("#vintageButton").css("font-weight", "bold");
        
        window.location.href='/shop/vintage';
    });
    $("#accessoriesButton").click(function() {
        $("#accessoriesButton").css("font-weight", "bold");
        
        window.location.href='/shop/accessories';
    });

    $("#ourstoryButton").click(function() {
        $("#ourstoryButton").css("font-weight", "bold");
        
        window.location.href='/inspiration';
    });

    $("#pricingButton").click(function() {
        $("#pricingButton").css("font-weight", "bold");
        
        window.location.href='/inspiration/pricing';
    });

    $("#sourcingButton").click(function() {
        $("#sourcingButton").css("font-weight", "bold");
        
        window.location.href='/inspiration/sourcing';
    });

    $("#blogButton").click(function() {
        $("#blogButton").css("font-weight", "bold");
        
        window.location.href='/blog';
    });

    $("#popupButton").click(function() {
        $("#popupButton").css("font-weight", "bold");
        
        window.location.href='/popup';
    });

    //init
    $('div.shopBar').hide();
    $(window).scroll(function () {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {//Mobile
        

        }else{
            if (inViewport($('.headerBar')) <= 0) {
              $('div.navBar').addClass('navBar-Fixed');
              $('div.navBarGhost').addClass('showNavBar');
              $('div.shopBar').show();
              $('#shoppingBagNav').show();
            }
            if (inViewport($('.headerBar')) > 0) {
              $('div.navBar').removeClass('navBar-Fixed');
              $('div.navBarGhost').removeClass('showNavBar');
              $('div.shopBar').removeClass('showNavBar');
              $('div.shopBar').hide();
              $('#shoppingBagNav').hide();
            }

        }

    });
     // $(window).scroll(function () {
     //  //if you hard code, then use console
     //  //.log to determine when you want the 
     //  //nav bar to stick.  
            // if (inViewport($('.headerBar')) <= 0) {
            //   $('div.navBar').addClass('navBar-Fixed');
            //   $('div.navBarGhost').addClass('showNavBar');
            //   $('div.shopBar').show();
            //   $('#shoppingBagNav').show();
            // }
            // if (inViewport($('.headerBar')) > 0) {
            //   $('div.navBar').removeClass('navBar-Fixed');
            //   $('div.navBarGhost').removeClass('showNavBar');
            //   $('div.shopBar').removeClass('showNavBar');
            //   $('div.shopBar').hide();
            //   $('#shoppingBagNav').hide();
            // }
     //  });

    function inViewport($el) {
        var elH = $el.outerHeight(),
            H   = $(window).height(),
            r   = $el[0].getBoundingClientRect(), t=r.top, b=r.bottom;
        return Math.max(0, t>0? Math.min(elH, H-t) : (b<H?b:H));
    }
});
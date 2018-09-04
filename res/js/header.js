$(document).ready(function() {
    $("#signUp").click(function() {
        window.location.href='/signup';
    });
    $("#headerBarShop").click(function() {
        window.location.href='/shop';
    });
    $("#login").click(function() {
        window.location.href='/login';
    });
    $("#logout").click(function() {
        window.location.href='/logout';
    });
    $("#headerLogo").click(function() {
        window.location.href='/';
    });

    $("#inspiration").click(function() {
        window.location.href='/inspiration';
    });

    $("#shoppingBag, #shoppingBagNav").click(function() {
        window.location.href='/cart';
        // $("div.cartOverlay").fadeIn(1000);
    });


    // $("#menu").css({"height":$(window).height()-50, "width":$(window).width()-50})
    // console.log($("#menu").height());
    // console.log(inViewport($("#links")));
    console.log($(window).height() - $("#menu").offset().top);
    if(inViewport($("#links")) < $("#links").height()){
        $("#links").css("height", ($(window).height() - $("#menu").offset().top)/1.5);

    }


    if(window.location.href.indexOf("cart") < 0){
    $(window).scroll(function () {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {//Mobile
            if($(window).scrollTop() > $('#headerBar').offset().top){
                $('#headerBar').addClass('headerBar-Fixed');
                $('div.headerBarGhost').addClass('showHeaderBar');

            }

            if ($(window).scrollTop() <= $("div.newsletter").height()){
                $('#headerBar').removeClass('headerBar-Fixed');
                $('div.headerBarGhost').removeClass('showHeaderBar');
            }

            

        }
    });
    }

    function inViewport($el) {
        var elH = $el.outerHeight(),
            H   = $(window).height(),
            r   = $el[0].getBoundingClientRect(), t=r.top, b=r.bottom;
        return Math.max(0, t>0? Math.min(elH, H-t) : (b<H?b:H));
    }
});
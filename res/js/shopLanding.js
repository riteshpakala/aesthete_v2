$(document).ready(function() {
    $("div").each(function(index) {
        if (this != document.getElementById('menuToggle')){
            $(this).fadeIn(300);
        }
    });

// $.getScript('/js/jquery.scrollify.js', function() {
// if(window.location.href.indexOf("product") <= -1){
// if(window.location.href.indexOf("vintage") > -1){
//     // alert(locals.loggedIn);
//     if($("#logout").css("display") != "block"){//not logged in
//         // console.log($("#logout").css("display"));
//     }else{
//         if($("div.mobile").css("display") == "none"){
//         $.scrollify({
//         section : ".desktop",
//         sectionName : "section-name",
//         easing: "easeOutExpo",
//         scrollSpeed: 1000,
//         offset: 100,
//         setHeights: false
//       });
//         }
//     }
// }else{
// if($("div.mobile").css("display") == "none"){
//     $.scrollify({
//         section : ".desktop",
//         sectionName : "section-name",
//         easing: "easeOutExpo",
//         scrollSpeed: 1000,
//         offset: -50,
//         setHeights: false
//       });
// }
// }
// }
// });





//Detect scroll direction
//

var getElementsInArea = (function(docElm){
    var viewportHeight = docElm.clientHeight;

    return function(e, opts){
        var found = [], i;
        
        if( e && e.type == 'resize' )
            viewportHeight = docElm.clientHeight;

        for( i = opts.elements.length; i--; ){
            var elm        = opts.elements[i],
                pos        = elm.getBoundingClientRect(),
                topPerc    = pos.top    / viewportHeight * 100,
                bottomPerc = pos.bottom / viewportHeight * 100,
                middle     = (topPerc + bottomPerc)/2,
                inViewport = middle > opts.zone[1] && 
                             middle < (100-opts.zone[1]);

            // elm.classList.toggle(opts.markedClass, true);//inViewport);
            //inViewport is boolean that identifies toggle viability
            // elm.addClass(opts.markedClass);

            if( inViewport )
                elm.classList.toggle(opts.markedClass, true);
                found.push(elm);
        }
    };
})(document.documentElement);


////////////////////////////////////
// How to use:

window.addEventListener('scroll', f)
window.addEventListener('resize', f)

function f(e){
    getElementsInArea(e, {
        elements    : document.querySelectorAll('div.hero'), 
        markedClass : 'highlight--1',
        zone        : [15, 15] // percentage distance from top & bottom
    });
    
    getElementsInArea(e, {
        elements    : document.querySelectorAll('div.hero'), 
        markedClass : 'highlight--2',
        zone        : [30, 30] // percentage distance from top & bottom
    });
}

// $(window).on('scroll resize', findMiddleElement);

// var windowHeight = $(window).height(),
//     gridTop = windowHeight * .3,
//     gridBottom = windowHeight * .6;

// $(window).scroll(function() { 
//     $('div.hero').each(function() {
//         var thisTop = $(this).offset().top - $(window).scrollTop(); // Get the `top` of this `li`
//         var midpoint = (thisTop+$(this).height())/2
//         console.log($(this).offset().top);

//         // console.log(midpoint);
//         // console.log(gridTop);
//           // Check if this element is in the interested viewport
//           if (midpoint >= gridTop && (midpoint) <= gridBottom) {
//             console.log("hit"+$(this).parent().id);
//                         // console.log("hey");

//             // $(this).animate({"width":"98.8%"});
//           } else {
//             console.log("miss");
//             // $(this).animate({"width":"94%"});
//             // console.log("bye");
//           }
//     });
// // console.log($("#feature2").offset().top+($("#feature2").height()/2));
// // console.log($("#feature2").scrollTop());
// });
    //Sub product redirection
//////
    //
    //featured
    $("#feature0M").click(function(){
        $('html, body').animate({
            scrollTop: $("#feature1M").offset().top-50
        }, 1200);

    });
    $("#feature1CTA, #feature1CTAMobile").click(function() {
        window.location.href='/shop/tees';
    });
    $("#feature2CTA, #feature2CTAMobile").click(function() {
        window.location.href='/shop/coats';
    });
    $("#feature3CTA, #feature3CTAMobile").click(function() {
        window.location.href='/shop/boots';
    });
    $("#feature4CTA, #feature4CTAMobile").click(function() {
        window.location.href='/shop/vintage';
    });
    $("#feature5CTA, #feature5CTAMobile").click(function() {
        window.location.href='/signup';
    });
    $("#feature6CTA, #feature6CTAMobile").click(function() {
        window.location.href='/inspiration';
    });

    //wool tees
    $("#teesFeature1CTA, #teesFeature1CTAMobile").click(function() {
        window.location.href='/shop/product/wool-tees';
    });
    $("#teesFeature2CTA, #teesFeature2CTAMobile").click(function() {
        window.location.href='/shop/product/cotton-striped';
    });
    $("#teesFeature3CTA, #teesFeature3CTAMobile").click(function() {
        window.location.href='/shop/product/cotton-tees';
    });

    //lace-up
    $("#bootsFeature1CTA, #bootsFeature1CTAMobile").click(function() {
        window.location.href='/shop/product/lace-up';
    });

    //coats
    $("#coatsFeature1CTA, #coatsFeature1CTAMobile").click(function() {
        window.location.href='/shop/product/overcoat';
    });
    $("#coatsFeature2CTA, #coatsFeature2CTAMobile").click(function() {
        window.location.href='/shop/product/overcoat';
    });

    //vintage
    $("#vintageFeature1CTA, #vintageFeature1CTAMobile").click(function() {
        window.location.href='/shop/vintage/tees';
    });
    $("#vintageFeature2CTA, #vintageFeature2CTAMobile").click(function() {
        window.location.href='/shop/product/vintage/parka';
    });

    $("#vintageTeesFeature1CTA, #vintageTeesFeature1CTAMobile").click(function() {
        window.location.href='/shop/product/vintage/francois';
    });
    $("#vintageTeesFeature2CTA, #vintageTeesFeature2CTAMobile").click(function() {
        window.location.href='/shop/product/vintage/poem';
    });
    $("#vintageTeesFeature3CTA, #vintageTeesFeature3CTAMobile").click(function() {
        window.location.href='/shop/product/vintage/indecision';
    });
    $("#vintageTeesFeature4CTA, #vintageTeesFeature4CTAMobile").click(function() {
        window.location.href='/shop/product/vintage/jenesaisquoi';
    });

    //vintage
    // $("#vintageFeature1CTA, #vintageFeature1CTAMobile, #vintageFeature2CTA, #vintageFeature2CTAMobile, #vintageFeature3CTA").click(function() {
    //     window.location.href='/shop/product/vintage';
    // });

    $('body').on('click', "#vintageFeatureHeaderMobile",function(){
        $('html, body').animate({
            scrollTop: $('#vintageFeature2Mobile').offset().top - 100
        }, 1000);
        
    });

    $('body').on('click', "#vintageFeature1CTA",function(){
        $('html, body').animate({
            scrollTop: $('#vintageFeature2').offset().top - 100
        }, 1000);
        
    });

    //accessories
    $("#accessoriesFeature1CTA, #accessoriesFeature1CTAMobile").click(function() {
        window.location.href='/shop/product/cuff';
    });
    $("#accessoriesFeature2CTA, #accessoriesFeature2CTAMobile").click(function() {
        window.location.href='/shop/product/tote/main';
    });

    $('body').on('click', "#accessoriesHeader, #accessoriesHeaderMobile",function(){
        if ($("#accessoriesFeature2").css("display") == "none"){
            $('html, body').animate({
                scrollTop: $('#accessoriesFeature2Mobile').offset().top - 100
            }, 1000);
        }else{
            $('html, body').animate({
                scrollTop: $('#accessoriesFeature2').offset().top - 100
            }, 1000);
        }
        
    });

    // $("#accessoriesFeature1CTA, #accessoriesFeature1CTAMobile").click(function() {
    //     window.location.href='/shop/product/cuff';
    // });



    

    //vintage
});
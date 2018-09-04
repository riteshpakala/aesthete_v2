$(document).ready(function() {
        //PRicing

        $("#bootsPricing").click(function(event) {
                $("#pricingIMG").attr('src', '../images/inspiration/pricing/boots.png');
                $("#pricingIMGMobile").attr('src', '../images/inspiration/pricing/mobile/boots.png');

                $("#pricingIMGMobile2").hide();

                $("#pricingIMGMobile3").hide();
                $("#pricingIMG2").hide();

                $("#pricingIMG3").hide();

                $("#link, #linkM").attr("href", "https://aesthete.us/shop/product/lace-up/main:blacklaceup");
        });

        $("#coatsPricing").click(function(event) {
                $("#pricingIMG").attr('src', '../images/inspiration/pricing/coats.png');
                $("#pricingIMGMobile").attr('src', '../images/inspiration/pricing/mobile/coats.png');


                $("#pricingIMGMobile2").hide();

                $("#pricingIMGMobile3").hide();
                $("#pricingIMG2").hide();

                $("#pricingIMG3").hide();

                $("#link, #linkM").attr("href", "https://aesthete.us/shop/product/overcoat/main");

                $("#link, #linkM").attr("href", "https://aesthete.us/shop/product/wool-tees/main:navywool");
                $("#link2, #link2M").attr("href", "https://aesthete.us/shop/product/cotton-tees/main:creamcotton");
                $("#link3, #link3M").attr("href", "https://aesthete.us/shop/product/cotton-striped/main:charcoalstriped");

        });

        $("#teesPricing").click(function(event) {
                $("#pricingIMG").attr('src', '../images/inspiration/pricing/tees.png');
                $("#pricingIMGMobile").attr('src', '../images/inspiration/pricing/mobile/tees.png');


                $("#link, #linkM").attr("href", "https://aesthete.us/shop/product/wool-tees/main:navywool");
                $("#link2, #link2M").attr("href", "https://aesthete.us/shop/product/cotton-tees/main:creamcotton");
                $("#link3, #link3M").attr("href", "https://aesthete.us/shop/product/cotton-striped/main:charcoalstriped");
               
                if($("#pricingIMGMobile").css("display")!= "none"){

                        $("#pricingIMGMobile2").show();

                        $("#pricingIMGMobile3").show();
                }else{
                        $("#pricingIMG2").show();

                        $("#pricingIMG3").show();

                }
        });

});
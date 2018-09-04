$(document).ready(function() {
    $("#cartGrid1, #cartGrid2, #cartGrid3, #cartGrid4, #cartGrid5, #cartGrid6").click(function(event){
            // event.stopPropagation();
            var idOfButton = event.target.id;
            var toRemove = 'cartGrid';
            var index = parseInt(idOfButton.replace(toRemove,''));
            // if ($('#productDetailGrid'+index).css('opacity') == 1.0){

            //     $("#"+event.target.id).attr("src", "../../images/shop/product/addToCart.png");
            //     $("#productDetailGrid"+index).animate({opacity: 0.0}, 250);
            // }else{

            //     $("#"+event.target.id).attr("src", "../../images/shop/product/closeCart.png");
            //      $("#productDetailGrid"+index).animate({opacity: 1.0}, 250);
                

                
            // }
            if (index == 1){
                if(window.location.href.indexOf("wool-tees") > -1){
                    window.location.href = "/shop/product/wool-tees/main:navywool";
                }else if(window.location.href.indexOf("cotton-striped") > -1){
                    window.location.href = "/shop/product/cotton-striped/main:charcoalstriped";
                }else if(window.location.href.indexOf("cotton-tees") > -1){
                    window.location.href = "/shop/product/cotton-tees/main:creamcotton";
                }else if(window.location.href.indexOf("lace-up") > -1){
                    window.location.href = "/shop/product/lace-up/main:blacklaceup";
                }
            }else if(index == 2){
                if(window.location.href.indexOf("wool-tees") > -1){
                    window.location.href = "/shop/product/wool-tees/main:heatherwool";
                }else if(window.location.href.indexOf("cotton-striped") > -1){
                    window.location.href = "/shop/product/cotton-striped/main:whitestriped";
                }else if(window.location.href.indexOf("cotton-tees") > -1){
                    window.location.href = "/shop/product/cotton-tees/main:blackcotton";
                }else if(window.location.href.indexOf("overcoat") > -1){
                    window.location.href = "/shop/product/overcoat/main";
                }else if(window.location.href.indexOf("lace-up") > -1){
                    window.location.href = "/shop/product/lace-up/main:cognaclaceup";
                }

            }else if(index == 3){
                if(window.location.href.indexOf("wool-tees") > -1){
                    window.location.href = "/shop/product/wool-tees/main:militarywool";
                }else if(window.location.href.indexOf("lace-up") > -1){
                    window.location.href = "/shop/product/lace-up/main:naturallaceup";
                }

            }else if(index == 4){
                if(window.location.href.indexOf("wool-tees") > -1){
                    window.location.href = "/shop/product/wool-tees/main:creamwool";
                }

            }else if(index == 5){
                if(window.location.href.indexOf("wool-tees") > -1){
                    window.location.href = "/shop/product/wool-tees/main:charcoalwool";
                }

            }else if(index == 6){
                if(window.location.href.indexOf("wool-tees") > -1){
                    window.location.href = "/shop/product/wool-tees/main:blackwool";
                }

            }


    });
});
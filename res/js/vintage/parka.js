$(document).ready(function() {
        var items = ["Vintage Military Parka", "Poem", "Francois", "Je ne sais quoi"];
        var index = 1;
        var size = 18;

        var shopClient = ShopifyBuy.buildClient({
              accessToken: 'b8afd0c8a73b06a1d1991698e14db039',
              domain: 'aes-thete.myshopify.com',
              appId: '6'
            });

            var product;

            

              
            var cart;

            shopClient.createCart().then(function (newCart) {
                cart = newCart;
                var quantity = 1;
                var checkoutURL;
                

                // document.location.href = cart.checkoutUrl;
              // do something with updated cart
            });

            $("#cartGridFinal1, #cartGridFinal1Mobile").click(function(event) {
                // alert($("#index").text());
                shopClient.fetchProduct('10593607304')
                  .then(function (product) {
                    var variant = parseInt($("#index").text())-1;
                    console.log(product);
                    cart.createLineItemsFromVariants({variant: product.variants[variant], quantity: 1}).then(function (cart) {
                        console.log(variant);
                        sessionStorage.setItem("cart", JSON.stringify(cart));
                    });
                }).catch(function (error) {
                        console.log(error);
                    console.log('Request failed');
                });
            });

	$("#prevVintageItem, #prevVintageItemMobile").click(function(event) {
                if (index > 1){
                        index = index - 1;
                        if ((index-1) % 2 == 0){
                                $("#index, #indexMobile").html(((index-1)/2)+1);
                        }
                        $("#vintageFeature").css({"background-image":"url(/images/shop/product/vintage/parka/distressed/"+index+".png)"});
                        $("#vintageFeatureMobile").css({"background-image":"url(/images/shop/product/vintage/parka/mobile/distressed/"+index+".png)"});
                }else{
                        index = size - 1;
                        $("#index, #indexMobile").html(size/2);
                        $("#vintageFeature").css({"background-image":"url(/images/shop/product/vintage/parka/distressed/"+index+".png)"});
                        $("#vintageFeatureMobile").css({"background-image":"url(/images/shop/product/vintage/parka/mobile/distressed/"+index+".png)"});
                }

	});

        $("#nextVintageItem, #nextVintageItemMobile").click(function(event) {
                if (index < size){
                        index = index + 1;
                        if ((index-1) % 2 == 0){
                                $("#index, #indexMobile").html(((index-1)/2)+1);
                        }
                        
                        $("#vintageFeature").css({"background-image":"url(/images/shop/product/vintage/parka/distressed/"+index+".png)"});
                        $("#vintageFeatureMobile").css({"background-image":"url(/images/shop/product/vintage/parka/mobile/distressed/"+index+".png)"});
                }else{
                        index = 1;
                        $("#vintageFeature").css({"background-image":"url(/images/shop/product/vintage/parka/distressed/"+index+".png)"});
                        $("#vintageFeatureMobile").css({"background-image":"url(/images/shop/product/vintage/parka/mobile/distressed/"+index+".png)"});
                }

        });
        $(document).keydown(function(e){
                switch(e.which) {
                        case 37: // left
                        if (index > 1){
                                index = index - 1;
                                if ((index-1) % 2 == 0){
                                        $("#index, #indexMobile").html(((index-1)/2)+1);
                                }
                                $("#vintageFeature").css({"background-image":"url(/images/shop/product/vintage/parka/distressed/"+index+".png)"});
                                $("#vintageFeatureMobile").css({"background-image":"url(/images/shop/product/vintage/parka/mobile/distressed/"+index+".png)"});
                        }else{
                                index = size - 1;
                                $("#index, #indexMobile").html(size/2);
                                $("#vintageFeature").css({"background-image":"url(/images/shop/product/vintage/parka/distressed/"+index+".png)"});
                                $("#vintageFeatureMobile").css({"background-image":"url(/images/shop/product/vintage/parka/mobile/distressed/"+index+".png)"});
                        }

                        case 38: // up
                        break;

                        case 39: // right
                        if (index < size){
                                index = index + 1;
                                if ((index-1) % 2 == 0){
                                        $("#index, #indexMobile").html(((index-1)/2)+1);
                                }
                                $("#vintageFeature").css({"background-image":"url(/images/shop/product/vintage/parka/distressed/"+index+".png)"});
                                $("#vintageFeatureMobile").css({"background-image":"url(/images/shop/product/vintage/parka/mobile/distressed/"+index+".png)"});
                        }else{
                                index = 1;
                                $("#index, #indexMobile").html(1);
                                $("#vintageFeature").css({"background-image":"url(/images/shop/product/vintage/parka/distressed/"+index+".png)"});
                                $("#vintageFeatureMobile").css({"background-image":"url(/images/shop/product/vintage/parka/mobile/distressed/"+index+".png)"});
                        }

                        case 40: // down
                        break;

                        default: return; // exit this handler for other keys
                    }
        });

});



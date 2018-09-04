$(document).ready(function() {
        var items = ["M", "S", "L", "XL", "S", "M", "M", "L", "L"];
        var index = 1;
        var size = 18;

        var shopClient = ShopifyBuy.buildClient({
              accessToken: 'b8afd0c8a73b06a1d1991698e14db039',
              domain: 'aes-thete.myshopify.com',
              appId: '6'
            });

            var product;

            

              
            var cart;

            shopClient.fetchRecentCart().then(function(newCart)  {
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
                    
                    var found = false;
                    $.each(cart.lineItems, function( index, value ) {
                        if(product.variants[variant].id == value.variant_id){
                            found = true;
                        }
                    });

                    if (found == false){
                        cart.createLineItemsFromVariants({variant: product.variants[variant], quantity: 1}).then(function (cart) {
                            // console.log(variant);
                            // sessionStorage.setItem("cart", JSON.stringify(cart));
                            $("#added, #addedMobile").animate({opacity: 1.0}, 500).promise().done(function(){
                                $("#added, #addedMobile").animate({opacity: 0.0}, 500);
                            });


                            fbq('track', 'AddToCart', {
                            value: parseInt(variant.price),
                            currency: 'USD',
                            content_name: variant.productTitle+" "+variant.title
                            });
                        });
                    }
                }).catch(function (error) {
                        console.log(error);
                    console.log('Request failed');
                });
            });

            function loadCart(){
                // console.log(cart.lineItems[0]);
                var stored = JSON.parse(sessionStorage.getItem("cart"));


                function updateCart(j){//synce fetchproduct is async it is placed in a different func to save the var locale
                    console.log(stored.attrs.line_items);
                    shopClient.fetchProduct(stored.attrs.line_items[j].product_id.toString()).then(function (product) {
                        // var stored2 = JSON.parse(localStorage.getItem("cart"));
                        for (var z = 0; z < product.variants.length; z++){
                            if (product.variants[z].id == stored.attrs.line_items[j].variant_id){
                                cart.createLineItemsFromVariants({variant: product.variants[z], quantity: stored.attrs.line_items[j].quantity});
                            }
                        }

                    }).catch(function () {
                        console.log('Request failed');
                    });
                }

                if (stored != null){
                        for (var i = 0; i < stored.attrs.line_items.length; i++){
                            updateCart(i);   
                        }
                    }

            }

            loadCart()

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

                updateSize();

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

                updateSize();

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

                        updateSize();

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

                        updateSize();

                        case 40: // down
                        break;

                        default: return; // exit this handler for other keys
                    }
        });

        function updateSize(){
                if(items[parseInt($("#index").text())-1]=="S"){
                        $("#productSizeSButton1").css("background-color","#000");
                        $("#productSizeSButton1").css("color","#FFF");

                        $("#productSizeMButton1").css("background-color","transparent");
                        $("#productSizeMButton1").css("color","#000");

                        $("#productSizeLButton1").css("background-color","transparent");
                        $("#productSizeLButton1").css("color","#000");

                        $("#productSizeXLButton1").css("background-color","transparent");
                        $("#productSizeXLButton1").css("color","#000");

                        $("#productSizeSButton1Mobile").css("background-color","#000");
                        $("#productSizeSButton1Mobile").css("color","#FFF");

                        $("#productSizeMButton1Mobile").css("background-color","transparent");
                        $("#productSizeMButton1Mobile").css("color","#000");

                        $("#productSizeLButton1Mobile").css("background-color","transparent");
                        $("#productSizeLButton1Mobile").css("color","#000");

                        $("#productSizeXLButton1Mobile").css("background-color","transparent");
                        $("#productSizeXLButton1Mobile").css("color","#000");
                }else if(items[parseInt($("#index").text())-1]=="M"){
                        $("#productSizeSButton1").css("background-color","transparent");
                        $("#productSizeSButton1").css("color","#000");

                        $("#productSizeMButton1").css("background-color","#000");
                        $("#productSizeMButton1").css("color","#FFF");

                        $("#productSizeLButton1").css("background-color","transparent");
                        $("#productSizeLButton1").css("color","#000");

                        $("#productSizeXLButton1").css("background-color","transparent");
                        $("#productSizeXLButton1").css("color","#000");

                        $("#productSizeSButton1Mobile").css("background-color","transparent");
                        $("#productSizeSButton1Mobile").css("color","#000");

                        $("#productSizeMButton1Mobile").css("background-color","#000");
                        $("#productSizeMButton1Mobile").css("color","#FFF");

                        $("#productSizeLButton1Mobile").css("background-color","transparent");
                        $("#productSizeLButton1Mobile").css("color","#000");

                        $("#productSizeXLButton1Mobile").css("background-color","transparent");
                        $("#productSizeXLButton1Mobile").css("color","#000");
                }else if(items[parseInt($("#index").text())-1]=="L"){
                        $("#productSizeSButton1").css("background-color","transparent");
                        $("#productSizeSButton1").css("color","#000");

                        $("#productSizeMButton1").css("background-color","transparent");
                        $("#productSizeMButton1").css("color","#000");

                        $("#productSizeLButton1").css("background-color","#000");
                        $("#productSizeLButton1").css("color","#FFF");

                        $("#productSizeXLButton1").css("background-color","transparent");
                        $("#productSizeXLButton1").css("color","#000");

                        $("#productSizeSButton1Mobile").css("background-color","transparent");
                        $("#productSizeSButton1Mobile").css("color","#000");

                        $("#productSizeMButton1Mobile").css("background-color","transparent");
                        $("#productSizeMButton1Mobile").css("color","#000");

                        $("#productSizeLButton1Mobile").css("background-color","#000");
                        $("#productSizeLButton1Mobile").css("color","#FFF");

                        $("#productSizeXLButton1Mobile").css("background-color","transparent");
                        $("#productSizeXLButton1Mobile").css("color","#000");
                }else if(items[parseInt($("#index").text())-1]=="XL"){
                        $("#productSizeSButton1").css("background-color","transparent");
                        $("#productSizeSButton1").css("color","#000");

                        $("#productSizeMButton1").css("background-color","transparent");
                        $("#productSizeMButton1").css("color","#000");

                        $("#productSizeLButton1").css("background-color","transparent");
                        $("#productSizeLButton1").css("color","#000");

                        $("#productSizeXLButton1").css("background-color","#000");
                        $("#productSizeXLButton1").css("color","#FFF");

                        $("#productSizeSButton1Mobile").css("background-color","transparent");
                        $("#productSizeSButton1Mobile").css("color","#000");

                        $("#productSizeMButton1Mobile").css("background-color","transparent");
                        $("#productSizeMButton1Mobile").css("color","#000");

                        $("#productSizeLButton1Mobile").css("background-color","transparent");
                        $("#productSizeLButton1Mobile").css("color","#000");

                        $("#productSizeXLButton1Mobile").css("background-color","#000");
                        $("#productSizeXLButton1Mobile").css("color","#FFF");
                }

        }

        updateSize();

});



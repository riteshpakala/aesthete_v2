$(document).ready(function() {
        var itemsD = ["L", "L", "L", "XL"];
        var itemsA = ["M", "M", "L", "L", "L", "XL", "XL", "XL", "XL", "M"];
        var index = 1;
        var size = 4;
        var type = "distressed";

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
                shopClient.fetchProduct('10593429832')
                  .then(function (product) {
                    var variant = parseInt($("#index").text())-1;
                    if (type == "archived"){
                        variant+=4;
                    }
                    
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

    $("#distressed, #distressedMobile, #archived, #archivedMobile").click(function(event) {
        if (event.target.id == "distressed" || event.target.id == "distressedMobile"){
            type = "distressed";
        }else{
            type = "archived";
        }
        $("#vintageFeature").css({"background-image":"url(/images/shop/product/vintage/indecision/"+type+"/"+index+".png)"});
        $("#vintageFeatureMobile").css({"background-image":"url(/images/shop/product/vintage/indecision/mobile/"+type+"/"+index+".png)"});

        if (event.target.id == "distressed" || event.target.id == "distressedMobile"){
            size = 4;
            index = 1;
            $("#index, #indexMobile").html(index);
            $("#distressed, #distressedMobile").css({"color":"#000", "background-color":"#FFF"});
            $("#archived, #archivedMobile").css({"color":"#FFF", "background-color":"transparent"});
        }else{
            size = 10;
            index = 1;
            $("#index, #indexMobile").html(index);
            $("#archived, #archivedMobile").css({"color":"#000", "background-color":"#FFF"});
            $("#distressed, #distressedMobile").css({"color":"#FFF", "background-color":"transparent"});
        }

        updateSize();
    });

	$("#prevVintageItem, #prevVintageItemMobile").click(function(event) {
                if (index > 1){
                        index = index - 1;
                        $("#index, #indexMobile").html(index);
                        $("#vintageFeature").css({"background-image":"url(/images/shop/product/vintage/indecision/"+type+"/"+index+".png)"});
                        $("#vintageFeatureMobile").css({"background-image":"url(/images/shop/product/vintage/indecision/mobile/"+type+"/"+index+".png)"});
                
                }else{
                        index = size - 1;
                        $("#index, #indexMobile").html(size);
                        $("#vintageFeature").css({"background-image":"url(/images/shop/product/vintage/indecision/"+type+"/"+index+".png)"});
                        $("#vintageFeatureMobile").css({"background-image":"url(/images/shop/product/vintage/indecision/mobile/"+type+"/"+index+".png)"});
                
                }
                updateSize();

	});

        $("#nextVintageItem, #nextVintageItemMobile").click(function(event) {
                if (index < size){
                        index = index + 1;
                        $("#index, #indexMobile").html(index);
                        
                        $("#vintageFeature").css({"background-image":"url(/images/shop/product/vintage/indecision/"+type+"/"+index+".png)"});
                        $("#vintageFeatureMobile").css({"background-image":"url(/images/shop/product/vintage/indecision/mobile/"+type+"/"+index+".png)"});
                
                }else{
                        index = 1;
                        $("#index, #indexMobile").html(index);
                        $("#vintageFeature").css({"background-image":"url(/images/shop/product/vintage/indecision/"+type+"/"+index+".png)"});
                        $("#vintageFeatureMobile").css({"background-image":"url(/images/shop/product/vintage/indecision/mobile/"+type+"/"+index+".png)"});
                
                }
                updateSize();

        });
        $(document).keydown(function(e){
                switch(e.which) {
                        case 37: // left
                        if (index > 1){
                                index = index - 1;
                                $("#index, #indexMobile").html(index);
                                $("#vintageFeature").css({"background-image":"url(/images/shop/product/vintage/indecision/"+type+"/"+index+".png)"});
                        $("#vintageFeatureMobile").css({"background-image":"url(/images/shop/product/vintage/indecision/mobile/"+type+"/"+index+".png)"});
                
                        }else{
                                index = size - 1;
                                $("#index, #indexMobile").html(size);
                                $("#vintageFeature").css({"background-image":"url(/images/shop/product/vintage/indecision/"+type+"/"+index+".png)"});
                        $("#vintageFeatureMobile").css({"background-image":"url(/images/shop/product/vintage/indecision/mobile/"+type+"/"+index+".png)"});
                
                        }
                        updateSize();
                        case 38: // up
                        break;

                        case 39: // right
                        if (index < size){
                                index = index + 1;
                                $("#index, #indexMobile").html(index);
                                $("#vintageFeature").css({"background-image":"url(/images/shop/product/vintage/indecision/"+type+"/"+index+".png)"});
                        $("#vintageFeatureMobile").css({"background-image":"url(/images/shop/product/vintage/indecision/mobile/"+type+"/"+index+".png)"});
                
                        }else{
                                index = 1;
                                $("#index, #indexMobile").html(1);
                                $("#vintageFeature").css({"background-image":"url(/images/shop/product/vintage/indecision/"+type+"/"+index+".png)"});
                        $("#vintageFeatureMobile").css({"background-image":"url(/images/shop/product/vintage/indecision/mobile/"+type+"/"+index+".png)"});
                
                        }
                        updateSize();
                        case 40: // down
                        break;

                        default: return; // exit this handler for other keys
                    }
        });

        // $("#feature1").css({"height": "100% !important"});
        setTimeout(function(){
          $("#vintageHeroMobileFeature").css({"height": $("#vintageHeroMobileImage").height().toString()+'px'});
            $("#feature12").css({"height": $("#featureImage").height().toString()+'px'});
            $("#distressed").css({"background-color": "#FFF"});
            $("#feature12").css({"width": $("div.headerBar").width().toString()+'px'});
        }, 500);
        $(window).resize(function(){
            $("#vintageHeroMobileFeature").css({"height": $("#vintageHeroMobileImage").height().toString()+'px'});
          $("#feature12").css({"height": $("#featureImage").height().toString()+'px'});
          console.log($("#feature12").height().toString());
          $("#feature12").css({"width": $("div.headerBar").width().toString()+'px'});
      });

        function updateSize(){
                if (type == "distressed" || type == "distressedMobile"){
                    items = itemsD;
                }else{
                    items = itemsA;
                }

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



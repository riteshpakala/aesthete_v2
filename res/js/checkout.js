$(document).ready(function() {
    $("div.cartOverlay").hide();

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

            if(window.location.href.indexOf("cart") > -1) {//only for the cart page

                if (newCart != null){
                    for (var i = 0; i < newCart.attrs.line_items.length; i++){
                        // updateCart(i);
                        var variant_title = newCart.attrs.line_items[i].variant_title;
                        var seperated = variant_title.split('/');
                        // console.log(newCart);


                        if (seperated.length == 1){
                            if (newCart.attrs.line_items[i].title.indexOf("Vintage") > -1){
                                $("#table_body").append("<tr class ='mainRow' id='"+i+"tr"+"'>"+
                                        "<td class='details bottomBorder'>" + 
                                        newCart.attrs.line_items[i].title+"&nbsp;&nbsp;&nbsp;<span class = 'color'>"+seperated[0]+"</span>&nbsp;&nbsp;</td>"+"<td class='quantity mdl-data-table__cell--non-numeric bottomBorder'><input id='remove' type='button' value='Remove' /><input id='minus' type='button' value='-' /><input id='"+i+"' type='value' value='"+newCart.attrs.line_items[i].quantity+"' disabled/></td><td class='price mdl-data-table__cell--non-numeric bottomBorder'><p id='"+i+"p' >$"+parseFloat(newCart.attrs.line_items[i].price)*parseFloat(newCart.attrs.line_items[i].quantity)+"</p></td></tr>");
                            }else{
                                $("#table_body").append("<tr class ='mainRow' id='"+i+"tr"+"'>"+
                                        "<td class='details bottomBorder'>" + 
                                        newCart.attrs.line_items[i].title+"&nbsp;&nbsp;&nbsp;<span class = 'color'>"+seperated[0]+"</span>&nbsp;&nbsp;</td>"+"<td class='quantity mdl-data-table__cell--non-numeric bottomBorder'><input id='remove' type='button' value='Remove' /><input id='minus' type='button' value='-' /><input id='"+i+"' type='value' value='"+newCart.attrs.line_items[i].quantity+"' disabled/><input id='add' type='button' value='+' /></td><td class='price mdl-data-table__cell--non-numeric bottomBorder'><p id='"+i+"p' >$"+parseFloat(newCart.attrs.line_items[i].price)*parseFloat(newCart.attrs.line_items[i].quantity)+"</p></td></tr>");
                            }
                        }else{
                            if (newCart.attrs.line_items[i].title.indexOf("Vintage") > -1){
                                $("#table_body").append("<tr class ='mainRow' id='"+i+"tr"+"'>"+
                                        "<td class='details bottomBorder'>" + 
                                        newCart.attrs.line_items[i].title+"&nbsp;&nbsp;&nbsp;<span class = 'color'>"+seperated[0]+"</span>&nbsp;&nbsp;<span class='size'>"+seperated[1]+"</span></td>"+"<td class='quantity mdl-data-table__cell--non-numeric bottomBorder'><input id='remove' type='button' value='Remove' /><input id='minus' type='button' value='-' /><input id='"+i+"' type='value' value='"+newCart.attrs.line_items[i].quantity+"' disabled/></td><td class='price mdl-data-table__cell--non-numeric bottomBorder'><p id='"+i+"p' >$"+parseFloat(newCart.attrs.line_items[i].price)*parseFloat(newCart.attrs.line_items[i].quantity)+"</p></td></tr>");
                            }else{
                                $("#table_body").append("<tr class ='mainRow' id='"+i+"tr"+"'>"+
                                        "<td class='details bottomBorder'>" + 
                                        newCart.attrs.line_items[i].title+"&nbsp;&nbsp;&nbsp;<span class = 'color'>"+seperated[0]+"</span>&nbsp;&nbsp;<span class='size'>"+seperated[1]+"</span></td>"+"<td class='quantity mdl-data-table__cell--non-numeric bottomBorder'><input id='remove' type='button' value='Remove' /><input id='minus' type='button' value='-' /><input id='"+i+"' type='value' value='"+newCart.attrs.line_items[i].quantity+"' disabled/><input id='add' type='button' value='+' /></td><td class='price mdl-data-table__cell--non-numeric bottomBorder'><p id='"+i+"p' >$"+parseFloat(newCart.attrs.line_items[i].price)*parseFloat(newCart.attrs.line_items[i].quantity)+"</p></td></tr>");
                            }
                        }
                        
                    }
                }
            }else{
                //DEV
                // if (newCart != null){
                //     for (var i = 0; i < newCart.attrs.line_items.length; i++){
                //         // updateCart(i);
                //         var variant_title = newCart.attrs.line_items[i].variant_title;
                //         var seperated = variant_title.split('/');
                //         // console.log(newCart);
                //         console.log(variant_title);


                //         if (seperated.length == 1){
                //             if (newCart.attrs.line_items[i].title.indexOf("Vintage") > -1){
                //                 $("#table_body").append("<tr class ='mainRow' id='"+i+"tr"+"'>"+
                //                         "<td class='details bottomBorder'>" + 
                //                         newCart.attrs.line_items[i].title+"&nbsp;&nbsp;&nbsp;<span class = 'color'>"+seperated[0]+"</span>&nbsp;&nbsp;</td>"+"<td class='quantity mdl-data-table__cell--non-numeric bottomBorder'><input id='remove' type='button' value='Remove' /><input id='minus' type='button' value='-' /><input id='"+i+"' type='value' value='"+newCart.attrs.line_items[i].quantity+"' /></td><td class='price mdl-data-table__cell--non-numeric bottomBorder'><p id='"+i+"p' >$"+parseFloat(newCart.attrs.line_items[i].price)*parseFloat(newCart.attrs.line_items[i].quantity)+"</p></td></tr>");
                //             }else{
                //                 $("#table_body").append("<tr class ='mainRow' id='"+i+"tr"+"'>"+
                //                         "<td class='details bottomBorder'>" + 
                //                         newCart.attrs.line_items[i].title+"&nbsp;&nbsp;&nbsp;<span class = 'color'>"+seperated[0]+"</span>&nbsp;&nbsp;</td>"+"<td class='quantity mdl-data-table__cell--non-numeric bottomBorder'><input id='remove' type='button' value='Remove' /><input id='minus' type='button' value='-' /><input id='"+i+"' type='value' value='"+newCart.attrs.line_items[i].quantity+"' /><input id='add' type='button' value='+' /></td><td class='price mdl-data-table__cell--non-numeric bottomBorder'><p id='"+i+"p' >$"+parseFloat(newCart.attrs.line_items[i].price)*parseFloat(newCart.attrs.line_items[i].quantity)+"</p></td></tr>");
                //             }
                //         }else{
                //             if (newCart.attrs.line_items[i].title.indexOf("Vintage") > -1){
                //                 $("#table_body").append("<tr class ='mainRow' id='"+i+"tr"+"'>"+
                //                         "<td class='details bottomBorder'>" + 
                //                         newCart.attrs.line_items[i].title+"&nbsp;&nbsp;&nbsp;<span class = 'color'>"+seperated[0]+"</span>&nbsp;&nbsp;<span class='size'>"+seperated[1]+"</span></td>"+"<td class='quantity mdl-data-table__cell--non-numeric bottomBorder'><input id='remove' type='button' value='Remove' /><input id='minus' type='button' value='-' /><input id='"+i+"' type='value' value='"+newCart.attrs.line_items[i].quantity+"' /></td><td class='price mdl-data-table__cell--non-numeric bottomBorder'><p id='"+i+"p' >$"+parseFloat(newCart.attrs.line_items[i].price)*parseFloat(newCart.attrs.line_items[i].quantity)+"</p></td></tr>");
                //             }else{
                //                 $("#table_body").append("<tr class ='mainRow' id='"+i+"tr"+"'>"+
                //                         "<td class='details bottomBorder'>" + 
                //                         newCart.attrs.line_items[i].title+"&nbsp;&nbsp;&nbsp;<span class = 'color'>"+seperated[0]+"</span>&nbsp;&nbsp;<span class='size'>"+seperated[1]+"</span></td>"+"<td class='quantity mdl-data-table__cell--non-numeric bottomBorder'><input id='remove' type='button' value='Remove' /><input id='minus' type='button' value='-' /><input id='"+i+"' type='value' value='"+newCart.attrs.line_items[i].quantity+"' /><input id='add' type='button' value='+' /></td><td class='price mdl-data-table__cell--non-numeric bottomBorder'><p id='"+i+"p' >$"+parseFloat(newCart.attrs.line_items[i].price)*parseFloat(newCart.attrs.line_items[i].quantity)+"</p></td></tr>");
                //             }
                //         }
                        
                //     }
                // }
                // if (cart != null){
                //     for (var i = 0; i < stored.attrs.line_items.length; i++){
                //         updateCart(i);   
                //     }
                // }
            }
         // do stuff with the cart
        });

    // shopClient.createCart().then(function (newCart) {
    //     cart = newCart;
    //     var quantity = 1;
    //     var checkoutURL;
        

    //     // document.location.href = cart.checkoutUrl;
    //   // do something with updated cart
    // });

    // $("#cart12").click(function(){
    //     shopClient.fetchProduct('10310602696')
    //       .then(function (product) {
    //         console.log(product);

    //         var variant = product.variants[0];
            
    //         cart.createLineItemsFromVariants({variant: variant, quantity: 1});
    //     }).catch(function () {
    //         console.log('Request failed');
    //     });
        
    // });

    $("#addToCart").click(function(event){
        var count = 0;
        $('#mainProductSize input').each(function(){
            if ($(this).css('background-color') == 'rgba(0, 0, 0, 0)'){
                count++;
            }
        });




        if (count < 4 || (count < 5 && window.location.href.indexOf('laceup') > -1)){
            shopClient.fetchProduct($('#'+event.target.id).parent().attr('id'))
              .then(function (product) {
                var variant = product.variants[variantSelected[1]];

                if ($('#'+event.target.id).parent().attr('id') == "10592582408"){
                    variant = product.variants[0];
                }else if ($('#'+event.target.id).parent().attr('id') == "10048761224"){
                    variant = product.variants[parseInt($('#'+event.target.id).parent().parent().attr('id'))];
                }

fbq('track', 'AddToCart', {
value: parseInt(variant.price),
currency: 'USD',
content_name: variant.productTitle+" "+variant.title
});

                cart.createLineItemsFromVariants({variant: variant, quantity: parseInt($('#cartCounter').text())}).then(function (cart) {
                    // sessionStorage.setItem("cart", JSON.stringify(cart));
                });


                $("#added").html("Added");
                $("#added").animate({opacity: 1.0}, 500).promise().done(function(){
                    $("#added").animate({opacity: 0.0}, 500);
                });

                
            }).catch(function (error) {
                console.log(error);
                console.log('Request failed');
            });
        }else{
            $("#added").html("Please pick a size");
            $("#added").animate({opacity: 1.0}, 500).promise().done(function(){
                    $("#added").animate({opacity: 0.0}, 500);
                });

        }
        
        
    });

    $("#cartGridFinal1, #cartGridFinal2, #cartGridFinal3, #cartGridFinal4, #cartGridFinal5, #cartGridFinal6, #cartGridFinal7, #cartGridFinal8, #cartGridFinal9, #cartGridFinal10, #cartGridFinal11").click(function(event){
        event.stopPropagation();
        // console.log($('#'+event.target.id).attr('class'));//class has the product id number for shopify
        var idOfButton = event.target.id;
        var toRemove = 'cartGridFinal';
        var index = idOfButton.replace(toRemove,'');
        shopClient.fetchProduct($('#'+event.target.id).attr('class'))
          .then(function (product) {

            var variant = product.variants[variantSelected[parseInt(index)]];
            cart.createLineItemsFromVariants({variant: variant, quantity: 1});
          
            // sessionStorage.setItem("cart", JSON.stringify(cart));
            $("#productDetailGrid"+index).animate({opacity: 0.0}, 250);

            $("#productDetailGallery"+index).animate({opacity: 0.0}, 250);

            fbq('track', 'AddToCart', {
                value: parseInt(variant.price),
                currency: 'USD',
                content_name: variant.productTitle+" "+variant.title
                });

        }).catch(function (error) {
            console.log(error);
            console.log('Request failed');
        });
        
    });

    var variantSelected = [];

    $("#productSizeSButton1, #productSizeSButton2, #productSizeSButton3, #productSizeSButton4, #productSizeSButton5, #productSizeSButton6, #productSizeSButton7, #productSizeSButton8, #productSizeSButton9, #productSizeSButton10, #productSizeSButton11").click(function(event){
        event.stopPropagation();
        var idOfButton = event.target.id;
        var toRemove = 'productSizeSButton';
        var index = idOfButton.replace(toRemove,'');

        $("#productSizeSButton"+index).css("background-color","#000");
        $("#productSizeSButton"+index).css("color","#FFF");

        $("#productSizeMButton"+index).css("background-color","transparent");
        $("#productSizeMButton"+index).css("color","#000");

        $("#productSizeLButton"+index).css("background-color","transparent");
        $("#productSizeLButton"+index).css("color","#000");

        $("#productSizeXLButton"+index).css("background-color","transparent");
        $("#productSizeXLButton"+index).css("color","#000");

        $("#productSizeXLLButton"+index).css("background-color","transparent");
        $("#productSizeXLLButton"+index).css("color","#000");


        variantSelected[parseInt(index)] = $('#productSizeSButton'+index).attr('class');
       
    });

    $("#productSizeMButton1, #productSizeMButton2, #productSizeMButton3, #productSizeMButton4, #productSizeMButton5, #productSizeMButton6, #productSizeMButton7, #productSizeMButton8, #productSizeMButton9, #productSizeMButton10, #productSizeMButton11").click(function(event){
        event.stopPropagation();
        var idOfButton = event.target.id;
        var toRemove = 'productSizeMButton';
        var index = idOfButton.replace(toRemove,'');

        $("#productSizeSButton"+index).css("background-color","transparent");
        $("#productSizeSButton"+index).css("color","#000");

        $("#productSizeMButton"+index).css("background-color","#000");
        $("#productSizeMButton"+index).css("color","#FFF");

        $("#productSizeLButton"+index).css("background-color","transparent");
        $("#productSizeLButton"+index).css("color","#000");

        $("#productSizeXLButton"+index).css("background-color","transparent");
        $("#productSizeXLButton"+index).css("color","#000");

        $("#productSizeXLLButton"+index).css("background-color","transparent");
        $("#productSizeXLLButton"+index).css("color","#000");


        variantSelected[parseInt(index)] = $('#productSizeMButton'+index).attr('class');
      
        
    });
    $("#productSizeLButton1, #productSizeLButton2, #productSizeLButton3, #productSizeLButton4, #productSizeLButton5, #productSizeLButton6, #productSizeLButton7, #productSizeLButton8, #productSizeLButton9, #productSizeLButton10, #productSizeLButton11").click(function(event){
        event.stopPropagation();
        var idOfButton = event.target.id;
        var toRemove = 'productSizeLButton';
        var index = idOfButton.replace(toRemove,'');

        $("#productSizeSButton"+index).css("background-color","transparent");
        $("#productSizeSButton"+index).css("color","#000");

        $("#productSizeMButton"+index).css("background-color","transparent");
        $("#productSizeMButton"+index).css("color","#000");

        $("#productSizeLButton"+index).css("background-color","#000");
        $("#productSizeLButton"+index).css("color","#FFF");

        $("#productSizeXLButton"+index).css("background-color","transparent");
        $("#productSizeXLButton"+index).css("color","#000");

        $("#productSizeXLLButton"+index).css("background-color","transparent");
        $("#productSizeXLLButton"+index).css("color","#000");
        
        variantSelected[parseInt(index)] = $('#productSizeLButton'+index).attr('class');

        
    });
    $("#productSizeXLButton1, #productSizeXLButton2, #productSizeXLButton3, #productSizeXLButton4, #productSizeXLButton5, #productSizeXLButton6, #productSizeXLButton7, #productSizeXLButton8, #productSizeXLButton9, #productSizeXLButton10, #productSizeXLButton11").click(function(event){
        event.stopPropagation();
        var idOfButton = event.target.id;
        var toRemove = 'productSizeXLButton';
        var index = idOfButton.replace(toRemove,'');

        $("#productSizeSButton"+index).css("background-color","transparent");
        $("#productSizeSButton"+index).css("color","#000");

        $("#productSizeMButton"+index).css("background-color","transparent");
        $("#productSizeMButton"+index).css("color","#000");

        $("#productSizeLButton"+index).css("background-color","transparent");
        $("#productSizeLButton"+index).css("color","#000");

        $("#productSizeXLButton"+index).css("background-color","#000");
        $("#productSizeXLButton"+index).css("color","#FFF");

        $("#productSizeXLLButton"+index).css("background-color","transparent");
        $("#productSizeXLLButton"+index).css("color","#000");
        
        variantSelected[parseInt(index)] = $('#productSizeXLButton'+index).attr('class');
        console.log(variantSelected[parseInt(index)]);
        
    });
    $("#productSizeXLLButton1, #productSizeXLLButton2, #productSizeXLLButton3, #productSizeXLLButton4, #productSizeXLLButton5, #productSizeXLLButton6").click(function(event){
        event.stopPropagation();
        var idOfButton = event.target.id;
        var toRemove = 'productSizeXLLButton';
        var index = idOfButton.replace(toRemove,'');

        $("#productSizeSButton"+index).css("background-color","transparent");
        $("#productSizeSButton"+index).css("color","#000");

        $("#productSizeMButton"+index).css("background-color","transparent");
        $("#productSizeMButton"+index).css("color","#000");

        $("#productSizeLButton"+index).css("background-color","transparent");
        $("#productSizeLButton"+index).css("color","#000");

        $("#productSizeXLButton"+index).css("background-color","transparent");
        $("#productSizeXLButton"+index).css("color","#000");

        $("#productSizeXLLButton"+index).css("background-color","#000");
        $("#productSizeXLLButton"+index).css("color","#FFF");
        
        variantSelected[parseInt(index)] = $('#productSizeXLLButton'+index).attr('class');
     
        
    });

    

    $("#shoppingBag").click(function(){
        // document.location.href = window.location.href='/cart';
        
    });

    $("#checkoutCart").click(function(){
        if (cart.attrs.line_items.length > 0){
            document.location.href = cart.checkoutUrl;
        }

        fbq('track', 'InitiateCheckout');
        
    });


    var productCount = 0;
    
    $("#minusButton").click(function(){
        var count = $('#cartCounter').text();

        if (parseInt(count) > 1){
            var newCount = parseInt(count) - 1;
            $('#cartCounter').html(newCount);
        }   
    });

    $("#addButton").click(function(){
        var count = $('#cartCounter').text();
        var newCount = parseInt(count) + 1;
        $('#cartCounter').html(newCount);
        
    });


    ///For cart
    ///
    ///NOTES: Variant id's are needed to update cart do not even need to get the product id to siphon through
    //
    function loadCart(){
        // console.log(cart.lineItems[0]);
        // var stored = JSON.parse(sessionStorage.getItem("cart"));

        // shopClient.fetchRecentCart().then(function(cart)  {
        //     if(window.location.href.indexOf("cart") > -1) {//only for the cart page

        //         if (cart != null){
        //             for (var i = 0; i < cart.attrs.line_items.length; i++){
        //                 // updateCart(i);
        //                 var variant_title = cart.attrs.line_items[i].variant_title;
        //                 var seperated = variant_title.split('/');
        //                 console.log(seperated);

        //                 if (seperated.length == 1){
        //                     $("#table_body").append("<tr class ='mainRow' id='"+i+"tr"+"'>"+
        //                                 "<td class='details bottomBorder'>" + 
        //                                 cart.attrs.line_items[i].title+"&nbsp;&nbsp;&nbsp;<span class = 'color'>"+seperated[0]+"</span>&nbsp;&nbsp;</td>"+"<td class='quantity mdl-data-table__cell--non-numeric bottomBorder'><input id='remove' type='button' value='Remove' /><input id='minus' type='button' value='-' /><input id='"+i+"' type='value' value='"+stored.attrs.line_items[i].quantity+"' /><input id='add' type='button' value='+' /></td><td class='price mdl-data-table__cell--non-numeric bottomBorder'><p id='"+i+"p' >$"+parseFloat(stored.attrs.line_items[i].price)*parseFloat(stored.attrs.line_items[i].quantity)+"</p></td></tr>");
                        
        //                 }else{
        //                     $("#table_body").append("<tr class ='mainRow' id='"+i+"tr"+"'>"+
        //                                 "<td class='details bottomBorder'>" + 
        //                                 cart.attrs.line_items[i].title+"&nbsp;&nbsp;&nbsp;<span class = 'color'>"+seperated[0]+"</span>&nbsp;&nbsp;<span class='size'>"+seperated[1]+"</span></td>"+"<td class='quantity mdl-data-table__cell--non-numeric bottomBorder'><input id='remove' type='button' value='Remove' /><input id='minus' type='button' value='-' /><input id='"+i+"' type='value' value='"+stored.attrs.line_items[i].quantity+"' /><input id='add' type='button' value='+' /></td><td class='price mdl-data-table__cell--non-numeric bottomBorder'><p id='"+i+"p' >$"+parseFloat(stored.attrs.line_items[i].price)*parseFloat(stored.attrs.line_items[i].quantity)+"</p></td></tr>");
                        
        //                 }
                        
        //             }
        //         }
        //     }else{
        //         // if (cart != null){
        //         //     for (var i = 0; i < stored.attrs.line_items.length; i++){
        //         //         updateCart(i);   
        //         //     }
        //         // }
        //     }
        //  // do stuff with the cart
        // });

        // function updateCart(j){//synce fetchproduct is async it is placed in a different func to save the var locale
        //     console.log(stored);
        //     shopClient.fetchProduct(stored.attrs.line_items[j].product_id.toString()).then(function (product) {
        //         // var stored2 = JSON.parse(localStorage.getItem("cart"));
        //         for (var z = 0; z < product.variants.length; z++){
        //             if (product.variants[z].id == stored.attrs.line_items[j].variant_id){
        //                 cart.createLineItemsFromVariants({variant: product.variants[z], quantity: stored.attrs.line_items[j].quantity});
        //             }
        //         }

        //     }).catch(function () {
        //         console.log('Request failed');
        //     });
        // }


        
    }

    // $("#dismissCart").click(function(){
    //     $("div.cartOverlay").fadeOut(1000);
    // });


    // $("#shoppingBag, #shoppingBagNav").click(function() {
    //     // window.location.href='/cart';
    //     $("div.cartOverlay").fadeIn(1000);

    //     shopClient.fetchRecentCart().then(function(newCart)  {
    //         cart = newCart;
    //         console.log(cart);
    //         var quantity = 1;
    //         var checkoutURL;

    //         $('#table_body tr').remove();

    //         if (newCart != null){
    //             for (var i = 0; i < newCart.attrs.line_items.length; i++){
    //                 // updateCart(i);
    //                 var variant_title = newCart.attrs.line_items[i].variant_title;
    //                 var seperated = variant_title.split('/');
    //                 // console.log(newCart);
    //                 console.log(variant_title);


    //                 if (seperated.length == 1){
    //                     if (newCart.attrs.line_items[i].title.indexOf("Vintage") > -1){
    //                         $("#table_body").append("<tr class ='mainRow' id='"+i+"tr"+"'>"+
    //                                 "<td class='details bottomBorder'>" + 
    //                                 newCart.attrs.line_items[i].title+"&nbsp;&nbsp;&nbsp;<span class = 'color'>"+seperated[0]+"</span>&nbsp;&nbsp;</td>"+"<td class='quantity mdl-data-table__cell--non-numeric bottomBorder'><input id='remove' type='button' value='Remove' /><input id='minus' type='button' value='-' /><input id='"+i+"' type='value' value='"+newCart.attrs.line_items[i].quantity+"' /></td><td class='price mdl-data-table__cell--non-numeric bottomBorder'><p id='"+i+"p' >$"+parseFloat(newCart.attrs.line_items[i].price)*parseFloat(newCart.attrs.line_items[i].quantity)+"</p></td></tr>");
    //                     }else{
    //                         $("#table_body").append("<tr class ='mainRow' id='"+i+"tr"+"'>"+
    //                                 "<td class='details bottomBorder'>" + 
    //                                 newCart.attrs.line_items[i].title+"&nbsp;&nbsp;&nbsp;<span class = 'color'>"+seperated[0]+"</span>&nbsp;&nbsp;</td>"+"<td class='quantity mdl-data-table__cell--non-numeric bottomBorder'><input id='remove' type='button' value='Remove' /><input id='minus' type='button' value='-' /><input id='"+i+"' type='value' value='"+newCart.attrs.line_items[i].quantity+"' /><input id='add' type='button' value='+' /></td><td class='price mdl-data-table__cell--non-numeric bottomBorder'><p id='"+i+"p' >$"+parseFloat(newCart.attrs.line_items[i].price)*parseFloat(newCart.attrs.line_items[i].quantity)+"</p></td></tr>");
    //                     }
    //                 }else{
    //                     if (newCart.attrs.line_items[i].title.indexOf("Vintage") > -1){
    //                         $("#table_body").append("<tr class ='mainRow' id='"+i+"tr"+"'>"+
    //                                 "<td class='details bottomBorder'>" + 
    //                                 newCart.attrs.line_items[i].title+"&nbsp;&nbsp;&nbsp;<span class = 'color'>"+seperated[0]+"</span>&nbsp;&nbsp;<span class='size'>"+seperated[1]+"</span></td>"+"<td class='quantity mdl-data-table__cell--non-numeric bottomBorder'><input id='remove' type='button' value='Remove' /><input id='minus' type='button' value='-' /><input id='"+i+"' type='value' value='"+newCart.attrs.line_items[i].quantity+"' /></td><td class='price mdl-data-table__cell--non-numeric bottomBorder'><p id='"+i+"p' >$"+parseFloat(newCart.attrs.line_items[i].price)*parseFloat(newCart.attrs.line_items[i].quantity)+"</p></td></tr>");
    //                     }else{
    //                         $("#table_body").append("<tr class ='mainRow' id='"+i+"tr"+"'>"+
    //                                 "<td class='details bottomBorder'>" + 
    //                                 newCart.attrs.line_items[i].title+"&nbsp;&nbsp;&nbsp;<span class = 'color'>"+seperated[0]+"</span>&nbsp;&nbsp;<span class='size'>"+seperated[1]+"</span></td>"+"<td class='quantity mdl-data-table__cell--non-numeric bottomBorder'><input id='remove' type='button' value='Remove' /><input id='minus' type='button' value='-' /><input id='"+i+"' type='value' value='"+newCart.attrs.line_items[i].quantity+"' /><input id='add' type='button' value='+' /></td><td class='price mdl-data-table__cell--non-numeric bottomBorder'><p id='"+i+"p' >$"+parseFloat(newCart.attrs.line_items[i].price)*parseFloat(newCart.attrs.line_items[i].quantity)+"</p></td></tr>");
    //                     }
    //                 }
                    
    //             }
    //         }
    //      // do stuff with the cart
    //     });
    // });


    $("#updateCart").click(function(){
        $('#table_body tr').each(function(){

            
            $(this).find('input[type=value]').each(function(){

                const item = cart.lineItems[parseInt($(this).attr('id'))].id;
                cart.updateLineItem(item, $(this).val()).then(function (cart) {
               

                    // sessionStorage.setItem("cart", JSON.stringify(cart));
                });
                
            });
        });
    });

    $("#table_body").on('click', "#minus", function(){
        var rowid = $(this).parent().parent().attr('id');
        var toRemove = 'tr';
        var row = rowid.replace(toRemove,'');
        const item = cart.lineItems[row].id;
        
        if ($("#"+row.toString()).val() <= '1'){
            $("#"+row+"tr").remove();
            cart.updateLineItem(item, 0).then(function (cart) {
                var count = 0;
                $('#table_body tr').each(function(){
                 //processing this row
                    //how to process each cell(table td) where there is checkbox
                $(this).attr('id', count+'tr');
                count++;
                  // end of cell row processing
              });

                // sessionStorage.setItem("cart", JSON.stringify(cart));
            });
        }else{
        // console.log($("#"+row.toString()).val());
            cart.updateLineItem(item, parseInt($("#"+row.toString()).val())-1).then(function (cart) {
                
                var newQuantity = parseInt($("#"+row.toString()).val())-1;
                $("#"+row.toString()).val(newQuantity);
                $("#"+row.toString()+"p").html("$"+newQuantity*cart.lineItems[row].price);
                // sessionStorage.setItem("cart", JSON.stringify(cart));
            });
        }
    });

    $("#table_body").on('click', "#add", function(){
        var rowid = $(this).parent().parent().attr('id');
        var toRemove = 'tr';
        var row = rowid.replace(toRemove,'');
        // var row = parseInt($(this).parent().parent().children().index($(this).parent().parent()));
        const item = cart.lineItems[row].id;
     
        cart.updateLineItem(item, parseInt($("#"+row.toString()).val())+1).then(function (cart) {
            
            var newQuantity = parseInt($("#"+row.toString()).val())+1;
            $("#"+row.toString()).val(newQuantity);
            $("#"+row.toString()+"p").html("$"+newQuantity*cart.lineItems[row].price);
            // sessionStorage.setItem("cart", JSON.stringify(cart));
        });
    });

    $("#table_body").on('click', "#remove", function(){
        var rowid = $(this).parent().parent().attr('id');
        var toRemove = 'tr';
        var row = rowid.replace(toRemove,'');
       $("#"+rowid).remove();
        const item = cart.lineItems[parseInt(row)].id;
        cart.updateLineItem(item, 0).then(function (cart) {
            var count = 0;
            $('#table_body tr').each(function(){
                 //processing this row
                    //how to process each cell(table td) where there is checkbox
                $(this).attr('id', count+'tr');
                count++;
                  // end of cell row processing
              });


            // sessionStorage.setItem("cart", JSON.stringify(cart));
        });
    });

    // loadCart();

    

        

});
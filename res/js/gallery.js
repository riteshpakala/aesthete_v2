$(document).ready(function() {
    $("#infoButton1, #infoButton2, #infoButton3, #infoButton4, #infoButton5, #infoButton6, #infoButton7, #infoButton8, #infoButton9, #infoButton10, #infoButton11, #infoButton12").click(function(){
            var idOfButton = event.target.id;
            var toRemove = 'infoButton';
            var index = idOfButton.replace(toRemove,'');

            if ($('#productDetailGallery'+index).css('opacity') == 1.0){
                
                $("#productDetailGallery"+index).animate({opacity: 0.0}, 250);
            }else{
                $("#productDetailGallery"+index).animate({opacity: 1.0}, 250);
                
            }
    });

    // $("#infoButton2").click(function(){
    //         if ($('#productDetailPin2').css('opacity') == 1.0){
    //             $("#productDetail2 > #detail").animate({opacity: 0.0});
    //             $("#productDetail2").animate({height: "0.5vw"}, 100).promise().then($("#productDetail2").animate({width: "0.5vw"}, 100));
    //             $("#productDetail2").animate({"right":"-=25px"}, "slow").promise().then(
    //             $("#productDetail2, #productDetailPin2").animate({opacity: 0.0})).promise().pipe(function (){
    //                 return $("#productDetail2").css({"border-radius": "25px"}, 500);
    //             });
    //             $("#productDetail2, #productDetailPin2").animate({width: "5px", height: "5px"});
    //         }else{
    //             $("#productDetailPin2").animate({opacity: 1.0});
    //             $("#productDetail2").animate({opacity: 1.0});
    //             $("#productDetailPin2").animate({width: "0.5vw", height: "0.5vw"}, 250);//.promise().then($("#product").animate({height: "300px"}));
    //             $("#productDetail2").animate({width: "0.5vw", height: "0.5vw"}, 250);

    //             $("#productDetail2").animate({"right":"+=25px"}, "fast").promise().pipe(function() {
    //                 return $("#productDetail2").css({"border-radius": "5px"}, 250);
    //             }).pipe(function() {
    //                 return $("#productDetail2").animate({width: "20vw"}, 150).promise().then($("#productDetail2").animate({height: "9vw"}, 100)).pipe(function() {
    //                     return $("#productDetail2 > #detail").animate({opacity: 1.0});
    //                 });
    //             });
                

                
    //         }
    // });

    // $("#infoButton3").click(function(){
    //         if ($('#productDetailPin3').css('opacity') == 1.0){
    //             $("#productDetail3 > #detail").animate({opacity: 0.0});
    //             $("#productDetail3").animate({height: "0.5vw"}, 100).promise().then($("#productDetail3").animate({width: "0.5vw"}, 100));
    //             $("#productDetail3").animate({"left":"-=25px"}, "slow").promise().then(
    //             $("#productDetail3, #productDetailPin3").animate({opacity: 0.0})).promise().pipe(function (){
    //                 return $("#productDetail3").css({"border-radius": "25px"}, 500);
    //             });
    //             $("#productDetail3, #productDetailPin3").animate({width: "5px", height: "5px"});
    //         }else{
    //             $("#productDetailPin3").animate({opacity: 1.0});
    //             $("#productDetail3").animate({opacity: 1.0});
    //             $("#productDetailPin3").animate({width: "0.5vw", height: "0.5vw"}, 250);//.promise().then($("#product").animate({height: "300px"}));
    //             $("#productDetail3").animate({width: "0.5vw", height: "0.5vw"}, 250);

    //             $("#productDetail3").animate({"left":"+=25px"}, "fast").promise().pipe(function() {
    //                 return $("#productDetail3").css({"border-radius": "5px"}, 250);
    //             }).pipe(function() {
    //                 return $("#productDetail3").animate({width: "20vw"}, 150).promise().then($("#productDetail3").animate({height: "9vw"}, 100)).pipe(function() {
    //                     return $("#productDetail3 > #detail").animate({opacity: 1.0});
    //                 });
    //             });
                

                
    //         }
    // });

    // $("#infoButton4").click(function(){
    //         if ($('#productDetailPin4').css('opacity') == 1.0){
    //             $("#productDetail4 > #detail").animate({opacity: 0.0});
    //             $("#productDetail4").animate({height: "0.5vw"}, 100).promise().then($("#productDetail4").animate({width: "0.5vw"}, 100));
    //             $("#productDetail4").animate({"left":"-=25px"}, "slow").promise().then(
    //             $("#productDetail4, #productDetailPin4").animate({opacity: 0.0})).promise().pipe(function (){
    //                 return $("#productDetail4").css({"border-radius": "25px"}, 500);
    //             });
    //             $("#productDetail4, #productDetailPin4").animate({width: "5px", height: "5px"});
    //         }else{
    //             $("#productDetailPin4").animate({opacity: 1.0});
    //             $("#productDetail4").animate({opacity: 1.0});
    //             $("#productDetailPin4").animate({width: "0.5vw", height: "0.5vw"}, 250);//.promise().then($("#product").animate({height: "300px"}));
    //             $("#productDetail4").animate({width: "0.5vw", height: "0.5vw"}, 250);

    //             $("#productDetail4").animate({"left":"+=25px"}, "fast").promise().pipe(function() {
    //                 return $("#productDetail4").css({"border-radius": "5px"}, 250);
    //             }).pipe(function() {
    //                 return $("#productDetail4").animate({width: "20vw"}, 150).promise().then($("#productDetail4").animate({height: "9vw"}, 100)).pipe(function() {
    //                     return $("#productDetail4 > #detail").animate({opacity: 1.0});
    //                 });
    //             });
                

                
    //         }
    // });
});
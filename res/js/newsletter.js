$(document).ready(function() {
	$("#newsletterSubmit").click(function(event){
        // alert("hello");
        if(window.location.href.indexOf("www.") > -1)
        {
            $.ajax({
                type: "POST",
                crossDomain: true,
                url: 'https://www.aesthete.us/newsletter',
                data: ({ email : $("#newsletterEmail").val()}),
                dataType: "json",
                success: function(result){
                    $("div.newsletter").hide();
                    $("#newsletterEmail").val("");
                },
                error: function(error) {
                    console.log(error);
                    // alert('Error occured');
                }
            });

        }else{

            $.ajax({
                    type: "POST",
                    crossDomain: true,
                    url: 'https://aesthete.us/newsletter',
                    data: ({ email : $("#newsletterEmail").val()}),
                    dataType: "json",
                    success: function(result){
        				$("div.newsletter").hide();
                    $("#newsletterEmail").val("");
                    },
                    error: function(error) {
                        console.log(error);
                        // alert('Error occured');
                    }
                });

        }
    });

    $("#newsletterSubmitPopup").click(function(event){
        if(window.location.href.indexOf("www.") > -1)
        {
            $.ajax({
                type: "POST",
                crossDomain: true,
                url: 'https://www.aesthete.us/newsletter',
                data: ({ email : $("#newsletterEmailPopup").val()}),
                dataType: "json",
                success: function(result){
                    $("#newsletterEmailPopup").val("");
                    
                },
                error: function(error) {
                    console.log(error);
                    // alert('Error occured');
                }
            });

        }else{

            $.ajax({
                    type: "POST",
                    crossDomain: true,
                    url: 'https://aesthete.us/newsletter',
                    data: ({ email : $("#newsletterEmailPopup").val()}),
                    dataType: "json",
                    success: function(result){
                        
                    $("#newsletterEmailPopup").val("");
                    },
                    error: function(error) {
                        console.log(error);
                        // alert('Error occured');
                    }
                });

        }
    });
    $("#newsletterClose").click(function(event){
       if(window.location.href.indexOf("www.") > -1)
        {
            $.ajax({
                type: "POST",
                crossDomain: true,
                url: 'https://www.aesthete.us/newsletter',
                dataType: "json",
                success: function(result){
                    $("div.newsletter").hide();
                    
                },
                error: function(error) {
                    console.log(error);
                    // alert('Error occured');
                }
            });

        }else{

            $.ajax({
                    type: "POST",
                    crossDomain: true,
                    url: 'https://aesthete.us/newsletter',
                    dataType: "json",
                    success: function(result){
        				$("div.newsletter").hide();
                    },
                    error: function(error) {
                        console.log(error);
                        // alert('Error occured');
                    }
                });

        }
    });
});
$(document).ready(function() {

        $("#createAccount").click(function(event) {
            if($("#password").val() == $("#confirmPassword").val()){
                if($("#password").val().length >= 6){
                    if($("#email").val()!=""){
                        if(window.location.href.indexOf("vintage") > -1){
                            if(window.location.href.indexOf("www.") > -1) // This doesn't work, any suggestions?
                            {
                                $.ajax({
                                    type: "POST",
                                    url: 'https://www.aesthete.us/signup/create',
                                    data: ({ firstName : $("#firstName").val(), lastName: $("#lastName").val(), email: $("#email").val(), password: $("#password").val()}),
                                    dataType: "html",
                                    success: function(data){
                                        location.reload();
                                    },
                                    error: function(error) {
                                        var message = JSON.parse(error.responseText);
                                        $("#passwordDisclaimer").html(message.error);
                                        $("#passwordDisclaimer").css("display", "block");
                                        // alert('Error occured');
                                    }
                                });

                            }else{
                                $.ajax({
                                    type: "POST",
                                    url: 'https://aesthete.us/signup/create',
                                    data: ({ firstName : $("#firstName").val(), lastName: $("#lastName").val(), email: $("#email").val(), password: $("#password").val()}),
                                    dataType: "html",
                                    success: function(data){
                                        location.reload();
                                    },
                                    error: function(error) {
                                        var message = JSON.parse(error.responseText);
                                        $("#passwordDisclaimer").html(message.error);
                                        $("#passwordDisclaimer").css("display", "block");
                                        // alert('Error occured');
                                    }
                                });

                            }

                        }else{
                            if(window.location.href.indexOf("www.") > -1) // This doesn't work, any suggestions?
                            {
                                $.ajax({
                                    type: "POST",
                                    url: 'https://www.aesthete.us/signup/create',
                                    data: ({ firstName : $("#firstName").val(), lastName: $("#lastName").val(), email: $("#email").val(), password: $("#password").val()}),
                                    dataType: "html",
                                    success: function(data){
                                        $("#landingMemberPortal").css("display", "none");
                                        $("#memberPortalDone").css("display", "block");
                                    },
                                    error: function(error) {
                                        var message = JSON.parse(error.responseText);
                                        $("#passwordDisclaimer").html(message.error);
                                        $("#passwordDisclaimer").css("display", "block");
                                    }
                                });

                            }else{
                                $.ajax({
                                    type: "POST",
                                    url: 'https://aesthete.us/signup/create',
                                    data: ({ firstName : $("#firstName").val(), lastName: $("#lastName").val(), email: $("#email").val(), password: $("#password").val()}),
                                    dataType: "html",
                                    success: function(data){
                                        $("#landingMemberPortal").css("display", "none");
                                        $("#memberPortalDone").css("display", "block");
                                    },
                                    error: function(error) {
                                        var message = JSON.parse(error.responseText);
                                        $("#passwordDisclaimer").html(message.error);
                                        $("#passwordDisclaimer").css("display", "block");
                                    }
                                });

                            }
                        }


                            
                    }
                }else{
                    $("#passwordDisclaimer").html("Passwords must be 6 or more characters long.");
                    $("#passwordDisclaimer").css("display", "block");
                }
            }else{
                $("#passwordDisclaimer").html("Passwords do not match.");
                $("#passwordDisclaimer").css("display", "block");
            }

        });

        $("#createAccountMobile").click(function(event) {
                if ($("#signupFormMobile").css('display') == 'none'){
                        $("#signupFormMobile").css("display", "inline-block");
                        $("#createAccountMobile").css("margin-top", "15%");
                        $("#signUpMobileMain").css("height", ($(window).height() - $("#signUpMobileMain").offset().top)+300);
                        $("#secondSubtext").css("display", "none");
                        // console.log($(window).height() - $("#signUpMobileMain").offset().top);
                }else{//create

                    if($("#passwordMobile").val() == $("#confirmPasswordMobile").val()){
                    if($("#passwordMobile").val().length >= 6){
                        if($("#emailMobile").val()!=""){
                            if(window.location.href.indexOf("vintage") > -1){
                                if(window.location.href.indexOf("www.") > -1)
                                {
                                    $.ajax({
                                        type: "POST",
                                        url: 'https://www.aesthete.us/signup/create',
                                        data: ({ firstName : $("#firstNameMobile").val(), lastName: $("#lastNameMobile").val(), email: $("#emailMobile").val(), password: $("#passwordMobile").val()}),
                                        dataType: "html",
                                        success: function(data){

                                            location.reload();
                                        },
                                        error: function() {
                                            // window.location.href="/";
                                        }
                                    });

                                }else{
                                    $.ajax({
                                        type: "POST",
                                        url: 'https://aesthete.us/signup/create',
                                        data: ({ firstName : $("#firstNameMobile").val(), lastName: $("#lastNameMobile").val(), email: $("#emailMobile").val(), password: $("#passwordMobile").val()}),
                                        dataType: "html",
                                        success: function(data){
                                            location.reload();
                                        },
                                        error: function() {
                                            // window.location.href="/";
                                        }
                                    });

                                }
                            }else{
                                if(window.location.href.indexOf("www.") > -1)
                                {
                                    $.ajax({
                                        type: "POST",
                                        url: 'https://www.aesthete.us/signup/create',
                                        data: ({ firstName : $("#firstNameMobile").val(), lastName: $("#lastNameMobile").val(), email: $("#emailMobile").val(), password: $("#passwordMobile").val()}),
                                        dataType: "html",
                                        success: function(data){
                                            $("#landingMemberPortal").css("display", "none");
                                            $("#memberPortalDone").css("display", "block");
                                        },
                                        error: function() {
                                            // window.location.href="/";
                                        }
                                    });

                                }else{
                                    $.ajax({
                                        type: "POST",
                                        url: 'https://aesthete.us/signup/create',
                                        data: ({ firstName : $("#firstNameMobile").val(), lastName: $("#lastNameMobile").val(), email: $("#emailMobile").val(), password: $("#passwordMobile").val()}),
                                        dataType: "html",
                                        success: function(data){
                                            $("#landingMemberPortal").css("display", "none");
                                            $("#memberPortalDone").css("display", "block");
                                        },
                                        error: function() {
                                            // window.location.href="/";
                                        }
                                    });

                                }
                            }

                        

                        
                        }

                    }else{
                        $("#passwordDisclaimer").html("Passwords must be 6 or more characters long.");
                        $("#passwordDisclaimer").css("display", "block");
                    }
                    }else{
                        $("#passwordDisclaimer").html("Passwords do not match.");
                        $("#passwordDisclaimer").css("display", "block");
                    }

                }

        });

        $("#loginAccount").on('click', function(event) {
                if($("#email").val()!=""){
                        console.log("login information sent to server!");
                        if(window.location.href.indexOf("www.") > -1)
                        {
                            $.ajax({
                                type: "POST",
                                crossDomain: true,
                                url: 'https://www.aesthete.us/login',
                                data: ({ email : $("#email").val(), password: $("#password").val()}),
                                dataType: "json",
                                success: function(result){
                                    
                                    window.location.href = "/";
                                    
                                },
                                error: function(error) {
                                        var message = JSON.parse(error.responseText);
                                        $("#loginDisclaimer").html(message.error);
                                        $("#loginDisclaimer").css("display", "block");
                                }
                            });

                        }else{

                            $.ajax({
                                    type: "POST",
                                    crossDomain: true,
                                    url: 'https://aesthete.us/login',
                                    data: ({ email : $("#email").val(), password: $("#password").val()}),
                                    dataType: "json",
                                    success: function(result){
                                        window.location.href = "/";
                                    },
                                    error: function(error) {
                                        var message = JSON.parse(error.responseText);
                                        $("#loginDisclaimer").html(message.error);
                                        $("#loginDisclaimer").css("display", "block");
                                        // alert('Error occured');
                                    }
                                });

                        }


                      

                      


                      
                }else{
                        console.log("No info entered");
                }
                
        });

        $("#loginAccountMobile").click(function(event) {
                if($("#emailMobile").val()!=""){
                    if(window.location.href.indexOf("www.") > -1)
                    {
                        $.ajax({
                            type: "POST",
                            crossDomain: true,
                            url: 'https://www.aesthete.us/login',
                            data: ({ email : $("#emailMobile").val(), password: $("#passwordMobile").val()}),
                            dataType: "json",
                            success: function(result){
                                window.location.href = "/";
                            },
                            error: function(error) {
                                console.log(error);
                                // alert('Error occured');
                            }
                        });

                    }else{

                        $.ajax({
                            type: "POST",
                            url: 'https://aesthete.us/login',
                            crossDomain: true,
                            data: ({ email : $("#emailMobile").val(), password: $("#passwordMobile").val()}),
                            dataType: "json",
                            success: function(data){
                                window.location.href = "/";
                            },
                            error: function(error) {
                                console.log(error);
                                // alert('Error occured');
                            }
                        });

                    }

                      
                }
                
        });

        $("#shopMemberDone").click(function(event) {
                window.location.href = "/shop";
        });

        $("#loginButtonMobile, #loginButton, #loginAccountMobileVintageFeature, #loginAccountVintageFeature").click(function(event) {
                window.location.href = "/login";
        });

        $("#signup").click(function(event) {
                window.location.href = "/signup";
        });


});
$(document).ready(function() {
        var count = 0;


        $(window).scroll(function() { 
                var scrollTop = $(window).scrollTop(),
                    elementOffset = $('#blog').offset().top,
                    distance = (elementOffset - scrollTop);
                // console.log(inViewport($('#headerBar')));
                var opacity = (distance/$(window).height())+0.3;
                var scale = (distance/$(window).height())+1.0;
                // $('div.blogImageWrapper').css({top: $('div.navBar').offset().top});
                // console.log($('#logo').height()*scale);
                if (inViewport($('#headerBarGhost')) == 0 && ($('#headerBarGhost').css("display") != "none" || inViewport($('#headerBar')) == 0)){
                        count++;
                        $('#blogHeaderImg').css({opacity: (opacity).toString()});
                        $('#blogHeaderImgMobile').css({opacity: (opacity).toString()});
                        // $('#logo').css({height: ($('#logo').height()*scale).toString()});
                }
        });

        // if (inViewport($('#feature2'))
        function inViewport($el) {
            var elH = $el.outerHeight(),
                H   = $(window).height(),
                r   = $el[0].getBoundingClientRect(), t=r.top, b=r.bottom;
            return Math.max(0, t>0? Math.min(elH, H-t) : (b<H?b:H));
        }
        // console.log(inViewport($('div.blogText')));
        // $('div.blogImageWrapper').css({top: $('div.navBar').offset().top});
        // $('div.blogImage').css({height: 550+inViewport($('div.blogText'))-100});
        $(window).resize(function(){
            // $('div.blogImage').css({height: 550+inViewport($('div.blogText'))-100});
            // $('div.blogImageWrapper').css({top: $('div.navBar').offset().top});
        });

});
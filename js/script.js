$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>1300){
            $('.signature__card-1').css({"transform":"translateX(0px)", "opacity": "1"});
            $('.signature__card-2').css({"transform":"translateX(0px)", "opacity": "1"});
            $('.signature__card-3').css({"transform":"translateX(0px)", "opacity": "1"});
        };
    });
});
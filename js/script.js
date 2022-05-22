$(document).ready(function() {

    $(window).scroll(function(){
        var navFixed = $(window).scrollTop();
        if(navFixed > 10){
            $(".header__area").addClass("changeBg");
        }else{
            $(".header__area").removeClass("changeBg");
        }
    });

    $(document).on('click','.navbar-collapse',function(e) {
        if( $(e.target).is('a') ) {
            $(this).collapse('hide');
        }
    });


})


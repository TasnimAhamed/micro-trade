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

    // Single Product Slide
    $('.all__product-row').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows:true
    });


})


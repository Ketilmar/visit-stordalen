
    // this is for the picture carousel
    $(document).ready(function(){
        $('.slick-wheel').slick({
            //   setting-name: setting-value
            slidesToShow: 1,
            slidesToScroll: 1,
            // accessibility: true,
            adaptiveHeight: false,
            arrows: true,
            appendArrows: $(".arrows"),
            centerMode: true,
            centerPadding: '60px',
            autoplay: false,
            autoplaySpeed: 2000,
            // dots: true
            // fade: true
            mobileFirst: true,
        });
      });
$(document).ready(function () {
    $('.main-multiple-items').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        dots: true,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
});

$(document).ready(function () {
    $('.extra-multiple-items').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        dots: true,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
});

$(document).ready(function () {
    $('.multiple-items').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        dots: true,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
});

/* $isSliderOn = false;
function greenSlider(){    
    if($(window).width() < 991){
        if(!$isSliderOn){
            $(".multiple-items").slick({
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                //autoplay: true
            });
            $isSliderOn = true;
        }
    } else if($(window).width() > 992){
        if($isSliderOn){
            $('.multiple-items').slick('unslick');
            $isSliderOn = false;
        }
    }
};

$(document).ready(function(){
    greenSlider();
});
$(window).on('resize', function(){
     greenSlider();
}); */


/* $(document).ready(function () {
    $('.multiple-items').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        variableWidth: true,
        mobileFirst: true,
        responsive: [{
            breakpoint: 992,
            settings: 'unslick'
        }]
    })
});

      $('.multiple-items').slick({
      arrows: false,
      dots: true,
      infinite: true,
      slidesToScroll: 1,
      variableWidth: true,
      mobileFirst: true,
      responsive: [{
        breakpoint: 992,
        settings: 'unslick'
      }]


       $('.multiple-items').slick({
      responsive: [
      {
          breakpoint: 100000,
          settings: "unslick"
      },
      {
          breakpoint: 992,
          settings: {
              arrows: false,
              dots: true,
              infinite: true,
              slidesToScroll: 1,
          }
      }
      ]
  });
    });
  }); */

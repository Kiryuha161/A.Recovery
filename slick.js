$(document).ready(function () {
    $('.multiple-items').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        dots: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
});


/* $('.multiple-items').slick({
      infinite: true,
      autoplay: true,
      slidesToShow: 3,
      dots: true,
      slidesToScroll: 1,
      responsive: [
          {
              breakpoint: 1000,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]

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

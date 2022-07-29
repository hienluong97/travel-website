$(document).ready(function(){  
    $('.slider__background').slick(
        {prevArrow: $('.prev__btn'),
         nextArrow: $('.next__btn'),
         autoplay: true,
         autoplaySpeed: 3000,       
         slidesToScroll: 1,
        }
    );
    
});

$(document).ready(function(){  
    $('.slider__card').slick(
        {prevArrow: $('.prev__icon'),
         nextArrow: $('.next__icon'), 
         autoplay: true,   
         autoplaySpeed: 2000,              
         slidesToShow: 5,
         slidesToScroll: 1,  
         responsive: [
            {
                breakpoint: 1200,
                settings: {
           
                  centerPadding: '18px',
                  slidesToShow: 4,
                }
              },
            {
                breakpoint: 960,
                settings: {
           
                  centerPadding: '18px',
                  slidesToShow: 3,
                }
              },
            {
              breakpoint: 768,
              settings: {           
                centerPadding: '18px',
                slidesToShow: 3
              }
            },
            {
                breakpoint: 600,
                settings: {      
                  centerPadding: '18px',
                  slidesToShow: 2
                }
              },
            {
              breakpoint: 480,
              settings:{    
                centerPadding: '20px',
                slidesToShow: 1
              }
            }
          ]       
        }
    );
    
});


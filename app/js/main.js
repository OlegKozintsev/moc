// slider portfolio


$(document).ready(function() {
   
    var autoplaySlider = $('#portfolio').lightSlider({
        item:3,
        loop:false,
        adaptiveHeight: false,
        slideMargin:0,
        slideMove:1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:1,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });
    
    $('#portfolioLeft').click(function(){
        autoplaySlider.goToPrevSlide(); 
    });
    
    $('#portfolioRight').click(function(){
        autoplaySlider.goToNextSlide(); 
    });

    // slider team

    var teamSlider = $('#team').lightSlider({
        item:4,
        loop:false,
        adaptiveHeight: true,
        slideMargin:20,
        pager: false,
        slideMove:1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:1,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });
    
    $('#teamLeft').click(function(){
        teamSlider.goToPrevSlide(); 
    });
    
    $('#teamRight').click(function(){
        teamSlider.goToNextSlide(); 
    });


// slider case 


var caseSlider = $('#case').lightSlider({
    item:4,
    loop:false,
    adaptiveHeight: true,
    slideMargin:20,
    pager: false,
    slideMove:1,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    speed:600,
    responsive : [
        {
            breakpoint:800,
            settings: {
                item:1,
                slideMove:1,
                slideMargin:6,
              }
        },
        {
            breakpoint:480,
            settings: {
                item:1,
                slideMove:1
              }
        }
    ]
});

$('#caseLeft').click(function(){
    caseSlider.goToPrevSlide(); 
});

$('#caseRight').click(function(){
    caseSlider.goToNextSlide(); 
});


// tabs-contact

(function($) {
    $(function() {
      $("ul.tabs__caption").on("click", "li:not(.active)", function() {
        $(this)
          .addClass("active")
          .siblings()
          .removeClass("active")
          .closest("div.tabs")
          .find("div.tabs__content")
          .removeClass("active")
          .eq($(this).index())
          .addClass("active");
      });
    });
  })(jQuery);


  });


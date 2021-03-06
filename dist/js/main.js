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
                breakpoint:769,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:0,
                    enableTouch: true,
                    adaptiveHeight: true
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
                    item:2,
                    slideMove:1,
                    slideMargin:15,
                  }
            },
            {
                breakpoint:691,
                settings: {
                    item:1,
                    slideMove:1,
                    enableTouch: true,
                    adaptiveHeight: true,
                    slideMargin:5
                    

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
                item:2,
                slideMove:1,
                slideMargin:15,
              }
        },
        {
            breakpoint:691,
            settings: {
                item:1,
                slideMove:1,
                enableTouch: true,
                slideMargin:5
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


  (function($) {
    $(function() {
      $("ul.menu__list").on("mouseover", "li:not(.active)", function() {
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


  (function($) {
    $(function() {
      $("#burgerLabel").on("click", function() {
        
        
        if($("#burgerLabel").hasClass('active')) {
            console.log('test');
            $("#burgerLabel").removeClass('active');
            $('.menu').removeClass("show");
            $('.contact').removeClass("show");
        }
        else {
            $("#burgerLabel").addClass('active');
            $('.menu').addClass("show");
            $('.contact').addClass("show");
        }
       
      });
    });
  })(jQuery);
            
 // menu
(function($) {  
    $(document).on("mouseout", function(e){

        var div = $("ul.menu__list > li"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                    div.removeClass('active'); // скрываем его
                  
            }
    });
})(jQuery);

(function($) {  
    $(document).on("click", function(e){

        var div = $("#headerContact"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                    $("#burgerLabel").removeClass('active');
            $('.menu').removeClass("show");
            $('.contact').removeClass("show");
            $("#burger").prop('checked', false);
                  
            }
    });
})(jQuery);

function f_acc(){
    //скрываем все кроме того, что должны открыть
      $('.submenu').not($(this).next()).slideUp(200);
    // открываем или скрываем блок под заголовком, по которому кликнули
        $(this).next().slideToggle(400);
    }
    
$('.menu__list > li > a').on('click', f_acc);



});



  

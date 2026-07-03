(function ($) {
    "use strict";
    
    new WOW().init();  
    
    
    /*---background image---*/
	function dataBackgroundImage() {
		$('[data-bgimg]').each(function () {
			var bgImgUrl = $(this).data('bgimg');
			$(this).css({
				'background-image': 'url(' + bgImgUrl + ')', // + meaning concat
			});
		});
    }
    
    
    $(window).on('load', function () {
        dataBackgroundImage();
    });
    
    
    /*---stickey menu---*/
    $(window).on('scroll',function() {    
       var scroll = $(window).scrollTop(),
           screensize = $(window).width();
        if(screensize >= 480){
           if (scroll < 100 ) {
            $(".sticky-header").removeClass("sticky");
           }else{
            $(".sticky-header").addClass("sticky");
           }
        }
    });
    
    // Slick Slider Activation
    var $sliderActvation = $('.slick_slider_activation');
    if($sliderActvation.length > 0){
        $sliderActvation.slick({
          prevArrow:'<button class="prev_arrow"><i class="ei ei-arrow_left"></i></button>',
          nextArrow:'<button class="next_arrow"><i class="ei ei-arrow_right"></i></button>',
        });
    };
    
    

    var $porductColumn5 =  $('.carousel_slider_activation');
    if($porductColumn5.length > 0){
        $porductColumn5.on('changed.owl.carousel initialized.owl.carousel', function (event) {
            $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
            loop: true,
            nav: true,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 1,
            stagePadding: 500,
            center: true,
            dots:false,
            navText: ['<i class="ei ei-arrow_left"></i>','<i class="ei ei-arrow_right"></i>'],
            responsiveClass:true,
            responsive:{
                    0:{
                        stagePadding: 0,
                },
                
                576:{
                    stagePadding: 95,
                },
                620:{
                    stagePadding: 120,
                },
                670:{
                    stagePadding: 140,
                },
                720:{
                    stagePadding: 170,
                },
                768:{
                    stagePadding: 150,
                },
                820:{
                    stagePadding: 190,
                },
                900:{
                    stagePadding: 230,
                },
                992:{
                    stagePadding: 230,
                },
                1090:{
                    stagePadding: 280,
                },
                1200:{
                    stagePadding: 280,
                },
                1280:{
                    stagePadding: 330,
                },
                1366:{
                    stagePadding: 250,
                },
                1420:{
                    stagePadding: 300,
                },
                1530:{
                    stagePadding: 350,
                },
                1610:{
                    stagePadding: 390,
                },
                1680:{
                    stagePadding: 420,
                },
                1850:{
                    stagePadding: 500,
                },

              }
           
        });
    }

    
    
    /*---canvas menu activation---*/
    $('.canvas_open').on('click', function(){
        $('.offcanvas_menu_wrapper,.body_overlay').addClass('active')
    });
    
    $('.canvas_close,.body_overlay').on('click', function(){
        $('.offcanvas_menu_wrapper,.body_overlay').removeClass('active')
    });
    
    
    //Shopping Cart addClass removeClass
    $('.shopping_cart > a').on('click', function(){
        $('.mini_cart,.body_overlay').addClass('active')
    });
    $('.mini_cart_close a,.body_overlay').on('click', function(){
        $('.mini_cart,.body_overlay').removeClass('active')
    });
    
    
    //Search Box addClass removeClass
    $('.header_search > a').on('click', function(){
        $('.page_search_box').addClass('active')
    });
    $('.search_close > i').on('click', function(){
        $('.page_search_box').removeClass('active')
    });
    
    
    /*--- Magnific Popup Video---*/
    $('.port_popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    
    
    
    $(document).ready(function() {
      $('select,.select_option').niceSelect();
    });
    
    
    /*--- counterup activation ---*/
    $('.counterup').counterUp({
        delay: 20,
        time: 2000
    });
    

      /*---  ScrollUp Active ---*/
    $.scrollUp({
        scrollText: '<i class="ion-android-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    
    
    /*---Off Canvas Menu---*/
    var $offcanvasNav = $('.offcanvas_main_menu'),
        $offcanvasNavSubMenu = $offcanvasNav.find('.sub-menu');
    $offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="fa fa-angle-down"></i></span>');
    
    $offcanvasNavSubMenu.slideUp();
    
    $offcanvasNav.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length){
                $this.siblings('ul').slideUp('slow');
            }else {
                $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
                $this.siblings('ul').slideDown('slow');
            }
        }
        if( $this.is('a') || $this.is('span') || $this.attr('clas').match(/\b(menu-expand)\b/) ){
        	$this.parent().toggleClass('menu-open');
        }else if( $this.is('li') && $this.attr('class').match(/\b('menu-item-has-children')\b/) ){
        	$this.toggleClass('menu-open');
        }
    });

    
    /*portfolio Isotope activation*/
   $('.portfolio_page_gallery').imagesLoaded( function() {
        // Use a row-based layout so the cards align cleanly instead of packing in masonry gaps.
        var $grid = $('.portfolio_page_gallery').isotope({
           itemSelector: '.gird_item',
            percentPosition: true,
            layoutMode: 'fitRows'
        });
            
        // filter items on button click
        $('.portfolio_messonry_button').on( 'click', 'button', function() {
           var filterValue = $(this).attr('data-filter');
           $grid.isotope({ filter: filterValue });
            
           $(this).siblings('.active').removeClass('active');
           $(this).addClass('active');
        });
       
    });
    
    

    //Tooltip
    tippy("[data-tippy-content]")
   
    
    
    /*---MailChimp---*/
    $('#mc-form').ajaxChimp({
        language: 'en',
        callback: mailChimpResponse,
        // ADD YOUR MAILCHIMP URL BELOW HERE!
        url: 'http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef'

    });
    function mailChimpResponse(resp) {

        if (resp.result === 'success') {
            $('.mailchimp-success').addClass('active')
            $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
            $('.mailchimp-error').fadeOut(400);

        } else if(resp.result === 'error') {
            $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
        }  
    }
 


    
    
})(jQuery);	

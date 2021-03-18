$(function(){
    $('.gnb').mouseenter(function(){
        $('#header').addClass('on');
        $('.depth2_cover').stop(false, true).slideDown(200);
        $('.depth2').stop(false, true).slideDown(200);
    });
    $('.gnb').mouseleave(function(){
        $('#header').removeClass('on');
        $('.depth2_cover').stop(false, true).slideUp(200);
        $('.depth2').stop(false, true).slideUp(200);
    });
    $('.lang').click(function(){
        $('.lang').addClass('on');
        $('.lang_ver').show();
    });
    $('.lang').mouseleave(function(){
        $('.lang').removeClass('on');
        $('.lang_ver').hide();
    });
    const swiper = new Swiper('.visual .swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 10000,
          },
          effect: 'fade',
        // If we need pagination
        pagination: {
          el: '.visual .swiper-pagination',
        },
      });
    $('.btn_modal li').click(function(){
        var visual_li =$(this).index();
        console.log(visual_li);
        $('.cover').fadeIn(300);
        $('.list_modal li').eq(visual_li).addClass('on');
        $(this).addClass('on').siblings().removeClass('on');
    });
    $('.btn_close').click(function(){
        $('.cover').fadeOut(300);
        $('.list_modal li').removeClass('on');
    });
    $('.btn_scroll').click(function(){
        var scroll = $('#scrollarea').offset().top;
        console.log(scroll);
        $('body, html').animate({'scrollTop':scroll},500);
        $('.section1_wrap').addClass('on');
    });
    $(window).scroll(function(){
        var sec2=$('.section2');
        var sec2 =$('.section2');
        $('.section1_wrap').addClass('on');
    });
    const swiper1 = new Swiper('.news_slider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView:3,
        slidesPerGroup:3,
        simulateTouch:false,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      $('.btn_family').click(function(){
          $('.family_list').slideToggle();
      });
      
});
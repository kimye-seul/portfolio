$(function(){
  //header
  $('.gnb>li>a').mouseenter(function(){
    $(this).siblings().stop().slideDown(300).css({"opacity":1}).parent().siblings().find('.depth_wrap').stop().slideUp(300).css({"opacity":0});
    });
    $('.gnb').mouseleave(function(){
        $('.depth_wrap').stop().delay(500).slideUp(300);
    });

    $(window).scroll(function(){
      var scroll_num=$(document).scrollTop();
      var window_width=$(document).width();
        if(scroll_num==0){
            $('.header_top').stop().slideDown(100);
        }
        else {
          if(window_width>1000){
            $('.header_top').stop().slideUp(100);
          }
            else{
              $('.header_top').show();
            }
        }
      //btn_top
      if(scroll_num>=100){
        if(window_width>750){
          $('.btn_top').stop().animate({"right":80},500);
        }
        else{
          $('.btn_top').stop().animate({"right":20},500);
        }
        
      }
      else {
        $('.btn_top').stop().animate({"right":"-100%"},500);
      }
    });
    $('.btn_top').click(function(){
      $('body,html').animate({"scrollTop":0},500);
    });
    //모바일메뉴
    $('.m_menu').click(function(){
      $('body,html').css({"overflow":"hidden"});
      $('.m_menu_wrap').animate({"right":0},300);
    });
    $('.btn_close').click(function(){
      $('body,html').css({"overflow":"auto"});
      $('.m_menu_wrap').animate({"right":"-100%"},300);
      $('.m_gnb>li').removeClass('on');
      $('.m_depth2').slideUp(300);
    });
    $('.m_gnb>li a').click(function(){
      $(this).parent().toggleClass('on').siblings().removeClass('on');
      $(this).parent().children('.m_depth2').stop(false,true).slideToggle(300).parent().siblings().find('.m_depth2').stop(false,true).slideUp(300);
    });
    var scroll_num=$(document).scrollTop()
    if(scroll_num==0){
        $('.header_top').stop().show();
    }
    else {
        $('.header_top').stop().hide();
    }
    //비쥬얼 슬라이드
    const swiper = new Swiper('.visual .swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        autoplay: {
            delay: 5000,
          },
        loop: true,
        effect:'fade',
        touchRatio: 0,//드래그 금지
        // If we need pagination

        pagination: {
          el: '.visual .swiper-pagination',
          clickable:true,
        },
      });
      $('.visual_btn .btn_play').click(function(){
        $('.visual_btn .btn_play').hide();
        $('.visual_btn .btn_pause').show();
        swiper.autoplay.stop();
      });   
      $('.visual_btn .btn_pause').click(function(){
        $('.visual_btn .btn_play').show();
        $('.visual_btn .btn_pause').hide();
        swiper.autoplay.start();
      }); 
      $('.t-datepicker').tDatePicker({
        // options here
        titleCheckIn:'YYYY.MM.DD',
        titleCheckOut:'YYYY.MM.DD',
        titleMonths: ['1','2','3','4','5','6','7','8','9','10','11',"12"],
        limitDateRanges: '99999',
        showDateTheme: 'yyyy-mm-dd'
      });
      // $('.t-dates').text('YY.MM.DD');
      //섹션1 슬라이드
        const swiper1 = new Swiper('.section1_content .swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            autoplay: {
                delay: 3000,
            },
            loop: true,
            slidesPerView:'auto',
            centeredSlides: true,
            touchRatio: 0,
            // If we need pagination

            pagination: {
            el: '.section1_content .swiper-pagination',
            clickable:true,
            },
        });
        //섹션2 슬라이드
        const swiper2 = new Swiper('.section2_content .swiper-container', {
          // Optional parameters
          direction: 'horizontal',
          loop: true,
          effect: 'fade',
          autoplay: {
            delay: 3000,
          },
          speed: 1000,
          touchRatio: 0,
          // Navigation arrows
          navigation: {
            nextEl: '.section2_content .swiper-button-next',
            prevEl: '.section2_content .swiper-button-prev',
          },
      });
      const swiper3 = new Swiper('.section3 .swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        effect: 'fade',
        autoplay: {
          delay: 3000,
        },
        touchRatio: 0,
        
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable:true,
        },
      });
      var time =["08:00","10:00","12:00","14:00","16:00","18:00","20:00"];
      for(var i=0;i<7;i++){
        $('.section3 .swiper-pagination-bullet').eq(i).text(time[i]);
      }
});
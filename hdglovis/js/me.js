$(function(){
    // header
    $('.gnb li').mouseenter(function(){
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
    // visual
    $('.visual_pc_wrap .visual_li li').click(function(){
        var visual_btn = $(this).index();
        $('.visual_pc_wrap .cover').fadeIn(300);
        $('.visual_pc_wrap .list_modal li').eq(visual_btn).addClass('on');
    });
    $('.visual_modal .btn_close').click(function(){
        $('.cover').fadeOut(300);
        $('.list_modal li').removeClass('on');
    });
    $('.visual .btn_scroll').click(function(){
        var section1_top = $('.section1').offset().top;
        $('body,html').animate({"scrollTop":section1_top},500);
    });
      // function video_change(){
      //   var video_src = ['video/main_video01.mp4','video/main_video02.mp4','video/main_video03.mp4','video/main_video04.mp4','video/main_video06.mp4','video/main_video14.mp4','video/main_video15.mp4','video/main_video18.mp4','video/00 HPIT.mp4'];
      //     if(add<video_src.length){
      //       $('.visual').addClass('on');
      //       if(add%2==0){
      //         $('.visual_pc_wrap .video_area .video1').attr('src',video_src[add]);
      //         $('.visual_pc_wrap .video_area .video2').attr('src','');
      //         $('.visual_pc_wrap .video_area .video1').animate({"opacity":1},500).siblings().animate({"opacity":0},500);
      //       }
      //       else{
      //         $('.visual_pc_wrap .video_area .video2').attr('src',video_src[add]);
      //         $('.visual_pc_wrap .video_area .video1').attr('src','');
      //         $('.visual_pc_wrap .video_area .video2').animate({"opacity":1},500).siblings().animate({"opacity":0},500);
      //       }
      //     add++;
      //     }
      //     else{add=0;}
      //  }
      //  function startInterval(seconds, callback) {
      //   callback();
      //   return setInterval(callback, seconds * 1000); 
      //   }
      //   startInterval(10, video_change);
      var add=0;
      function video_change(){
        var video_src = ['video/main_video01.mp4','video/main_video02.mp4','video/main_video03.mp4','video/main_video04.mp4','video/main_video06.mp4','video/main_video14.mp4','video/main_video15.mp4','video/main_video18.mp4','video/00 HPIT.mp4'];
          if(add<video_src.length){
            $('.visual').addClass('on');
            if(add%2==0){
              $('.visual_pc_wrap .video_area .video1').attr('src',video_src[add]);
              $('.visual_pc_wrap .video_area .video2').attr('src','');
              $('.visual_pc_wrap .video_area .video1').animate({"opacity":1},500).siblings().animate({"opacity":0},500);
            }
            else{
              $('.visual_pc_wrap .video_area .video2').attr('src',video_src[add]);
              $('.visual_pc_wrap .video_area .video1').attr('src','');
              $('.visual_pc_wrap .video_area .video2').animate({"opacity":1},500).siblings().animate({"opacity":0},500);
            }
          add++;
          }
          else{add=0;}
       }
       function startInterval(seconds, callback) {
        callback();
        return setInterval(callback, seconds * 1000); 
        }
        var wid =$(window).width();
        if(wid>=1153){
          startInterval(10, video_change);
        }
        $(window).resize(function(){
          if(wid<1153){
            $('.visual_pc_wrap .video_area .video1').attr('src','video/main_video01.mp4');
          }
        });
    // section1 효과
    $(window).scroll(function(){
        var section1_top2 = $('.section1').offset().top - 600;
        var section2_top = $('.section2').offset().top - 700;
        if($('body,html').scrollTop()>=section1_top2){
            $('.section1').addClass('on');
            if($('body,html').scrollTop()>=section2_top){
                $('.section2').addClass('on');
            }
        }
    });
    $('.sec1_list li').mouseenter(function(){
        $(this).removeClass('off').siblings().addClass('off');   
    });
    $('.sec1_list li').mouseleave(function(){
        $('.sec1_list li').removeClass('off'); 
    });
    //section2
    const news_slide = new Swiper('.news_slider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView:3,
        slidesPerGroup:3,
        simulateTouch:false,
        breakpoints: {
          757: {
            slidesPerView:'auto',
            slidesPerGroup:1,
            spaceBetween: 15,
          },
        },
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
    //footer_familysite
    $('.btn_family').click(function(){
        $('.family_list').slideToggle();
        $(this).toggleClass('on');
    });
    // ---------------------------------------mobile-------------------------//
    //m_menu
    $('.m_menu_wrap .m_gnb>li>a').click(function(){
        $(this).parent().toggleClass('on').siblings().removeClass('on');
        $(this).siblings().stop().slideToggle().parent().siblings().find('.m_depth2').stop().slideUp();
      });
      $('.btn_m_menu').click(function(){
        $('.m_menu_wrap').animate({"right":0},300);
        $('body,html').css({"overflow":"hidden"});
      });
      $('.m_menu_close').click(function(){
        $('.m_menu_wrap').animate({"right":"-100%"},300);
        $('.m_depth2').slideUp(300);
        $('.m_menu_wrap .m_gnb>li').removeClass('on');
        $('body,html').css({"overflow":"auto"});
      });
    // visual
    const vis_mobile = new Swiper('.visual_mobile', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable:true,
        },
      });
        
    $('.visual_mobile_wrap .m_btn_moadl li').click(function(){
        var visual_btn = $(this).index();
        $('.visual_mobile_wrap .cover').fadeIn(300);
        $('.visual_mobile_wrap .list_modal li').eq(visual_btn).addClass('on');
    });
    var wid=$(document).width();
        if(wid<=740){
            $('.visual_mobile_wrap .m_txt').attr('src','images/mobile/m_mainVis_tit2.png');
            $('.section1 h2 img').attr('src','images/mobile/m_mainCon1_tit.png');
            $('.section1 .sec1_list li a .sec1_btn img').attr('src','images/mobile/m_main_over_btn.png');
            $('.section2 .con_wrap .con button img').attr('src','images/mobile/m_main_over_btn.png');
            $('.section2 .sec2_right_bottom .btn_more img').attr('src','images/mobile/m_news_more.jpg');
        }
        else{}
    $(window).resize(function(){
        var wid=$(document).width();
        if(wid<=740){
            $('.visual_mobile_wrap .m_txt').attr('src','images/mobile/m_mainVis_tit2.png');
            $('.section1 h2 img').attr('src','images/mobile/m_mainCon1_tit.png');
            $('.section1 .sec1_list li a .sec1_btn img').attr('src','images/mobile/m_main_over_btn.png');
            $('.section2 .con_wrap .con button img').attr('src','images/mobile/m_main_over_btn.png');
            $('.section2 .sec2_right_bottom .btn_more img').attr('src','images/mobile/m_news_more.jpg');
        }
        else{
            $('.visual_mobile_wrap .m_txt').attr('src','images/mobile/m_mainVis_tit1.png');
            $('.section1 h2 img').attr('src','images/pc/mainCon1_tit.png');
            $('.section1 .sec1_list li a .sec1_btn img').attr('src','images/pc/main_over_btn.png');
            $('.section2 .con_wrap .con button img').attr('src','images/pc/main_over_btn.png');
            $('.section2 .sec2_right_bottom .btn_more img').attr('src','images/pc/news_more.png');
        }
    });
    $('.visual_mobile_wrap .m_btn_play').click(function(){
      var con = confirm('동영상을 재생하시겠습니까?');
      if(con==true){
        if($('.visual_mobile .swiper-slide').hasClass('swiper-slide-active')){
          var video_eq=$('.visual_mobile .swiper-slide.swiper-slide-active').index()-1;
          var video_href=['video/main_video01.mp4','video/main_video02.mp4','video/main_video15.mp4','video/main_video17.mp4','video/main_video01.mp4'];
          $('.visual_mobile_wrap .m_btn_play').attr('href',video_href[video_eq]);
          $('.visual_mobile_wrap .m_btn_play').attr('target','_blank');
        }
      }
      else{
        return false;
      }
    });
    // section2
    const m_news_slide = new Swiper('.m_news_slider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView:'auto',
        spaceBetween: 15,
      
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
      
});
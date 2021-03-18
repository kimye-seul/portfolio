$(function(){
  if(GetCookie('todayclose')=='close'){
    $('.banner').hide();
  }
  else{
    $('.banner').show();
  }
  $('.banner_onday').click(function(){
    setCookie('todayclose','close',1);
    $('.banner').hide();
  });
  //banner
  $('.banner_close').click(function(){
    $('.banner').hide();
  });
   //header
   $('.gnb,.depth2_wrap').mouseenter(function(){
    $('.depth2').stop().slideDown();
    $('.depth2_wrap').stop().slideDown();
    $('.cover').show();
   });
   $('.gnb,.depth2_wrap').mouseleave(function(){
    $('.depth2').stop().slideUp();
    $('.depth2_wrap').stop().slideUp();
    $('.cover').hide();
   });
   $('.icon_plus').click(function(){
    $(this).find('.depth3').stop().slideToggle(0).parents('.depth2').parent().siblings().find('.depth3').stop().slideUp(0);
    $(this).toggleClass('on').parents('li').siblings().find('.icon_plus').removeClass('on');
   });
   //m_menu
   $('.btn_m_menu').click(function(){
    $('.m_menu').animate({"left":0},500);
    $('body, html').css({"overflow":'hidden'});
   });
   $('.btn_m_close').click(function(){
    $('.m_menu').animate({"left":"-100%"},500);
    $('body, html').css({"overflow":'auto'});
   });
   $('.m_gnb>li>a').click(function(){
    $(this).siblings().stop().slideToggle().parent().siblings().find('.m_depth2').stop().slideUp();
    $(this).parent().toggleClass('on').siblings().removeClass('on');
   });
   $('.m_depth2>.m_icon_plus>a').click(function(){
    $(this).siblings().stop().slideToggle().parents('.m_depth2').parent().siblings().find('.m_depth3').slideUp();
    $(this).parent().toggleClass('on').parents('.m_depth2').parent().siblings().find('.m_icon_plus').removeClass('on');
   });
   //main-visual
   const swiper = new Swiper('.visual .swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      autoplay: {
        delay: 3000,
      },
      // If we need pagination
      pagination: {
        el: '.visual .swiper-pagination',
        clickable:true,
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.visual .swiper-button-next',
        prevEl: '.visual .swiper-button-prev',
      },
    });
    $('.visual .slide_btnbox').click(function(){
      if($('.btn_stop').is(':visible') ){
        $('.btn_stop').hide();
        $('.btn_play').show();
        swiper.autoplay.stop();
      }
      else{
        $('.btn_stop').show();
        $('.btn_play').hide();
        swiper.autoplay.start();
      }
    });
    //section
    $(window).scroll(function(){
      var scroll_top=$(document).scrollTop();
      var win_width=$(document).width();
      if(scroll_top>=100){
        $('#header').css({"position":"fixed"});
        $('.header_inner .util').hide();
        if(scroll_top>=450 && scroll_top<1250){
          $('.section1').addClass('on');
        }
        else if(scroll_top>=1250&&scroll_top<1750){
          $('.section2').addClass('on');
        }
        else if(scroll_top>=1750&&scroll_top<2350){
          $('.section3').addClass('on');
          $('.btn_top').stop().fadeOut();
        }
        else{
          $('.btn_top').stop().fadeIn();
        }
      }
      else{
        $('#header').css({"position":"absolute"});
        if(win_width>983){
          $('.header_inner .util').show();
        }
        else{
          $('.header_inner .util').hide();
        }
        
      }
    });
    //section1
    $('.secion1_img li').hover(
      function(){
        if($(this).index()==0){
          $('.section1').addClass('on1');
          $('.section1').removeClass('on2');
        }
        else{
          $('.section1').addClass('on2');
          $('.section1').removeClass('on1');
        }
      },
      function(){
        $('.section1').removeClass('on1').removeClass('on2');
      });
    //top버튼
    $('.btn_top').click(function(){
      $('html,body').animate({"scrollTop":0},500);
    });
    // visual
    var win_width=$(document).width();
      if(win_width<=983){
        $('.visual .slide1 img').attr('src','images/mobile/201902220554483740.jpg');
        $('.visual .slide2 img').attr('src','images/mobile/201902220555000920.jpg');
        $('.visual .slide3 img').attr('src','images/mobile/202005111050318930.jpg');
        $('.visual .slide4 img').attr('src','images/mobile/202005130508093220.jpg');
      }else{}

    $(window).resize(function(){
      var win_width=$(document).width();
      if(win_width<=983){
        $('.visual .slide1 img').attr('src','images/mobile/201902220554483740.jpg');
        $('.visual .slide2 img').attr('src','images/mobile/201902220555000920.jpg');
        $('.visual .slide3 img').attr('src','images/mobile/202005111050318930.jpg');
        $('.visual .slide4 img').attr('src','images/mobile/202005130508093220.jpg');
      }
      else{
        $('.visual .slide1 img').attr('src','images/201902220554476550.jpg');
        $('.visual .slide2 img').attr('src','images/201902220555000140.jpg');
        $('.visual .slide3 img').attr('src','images/202005111050316900.jpg');
        $('.visual .slide4 img').attr('src','images/202005130508091810.jpg');
      }
    });
});
function GetCookie(name){
  var value=null, search=name+"=";
  if(document.cookie.length > 0){
      var offset=document.cookie.indexOf(search);
      if(offset != -1){
          offset+=search.length;
          var end=document.cookie.indexOf(";", offset);
          if(end == -1) end=document.cookie.length;
          value=unescape(document.cookie.substring(offset, end));
      }
  } return value;
}
// SetCookie
function setCookie(name, value, days){
  if(days){
      var date=new Date(); 
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires="; expires="+date.toGMTString();
  }else{
      var expires=""; 
  }
  document.cookie=name+"="+value+expires+"; path=/";
}
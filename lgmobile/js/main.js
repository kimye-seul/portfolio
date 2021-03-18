$(function(){
    //banner, top버튼
    if(GetCookie('todayclose')=='close'){
      $('.top_banner').css({"height":0});
    }
    else {
        $('.top_banner').css({"height":90});
    }
    $('.top_banner .btn_banner-close1').click(function(){
      $('.top_banner').animate({"height":0});
      setCookie('todayclose', 'close', 1);
    });
    $('.bt_left_banner .btn_banner-close2').click(function(){
      $('.bt_left_banner').fadeOut(200);
    });
    $(window).scroll(function(){
      var scroll_top = $('html,body').scrollTop();
      if(scroll_top>=200){
        $('.btn_top').show(200);
      }
      else{
        $('.btn_top').stop().hide(200);
      }
    });
    $('.btn_top').click(function(){
      $('html,body').animate({"scrollTop":0},300);
    });
    //모바일 메뉴
    $('.header_inner .m_btn').click(function(){
      $('.m_gnb_bg').fadeIn(400);
      $('.m_gnb_left').animate({"left":"0"},400);
      $('body,html').css({"overflow":"hidden"});
    });
    $('.m_gnb_left .m_gnb_close').click(function(){
      $('.m_gnb_bg').fadeOut(400);
      $('.m_gnb_left').animate({"left":"-345px"},400);
      $('body,html').css({"overflow":"auto"});
    });
    $('.select li').click(function(){
      var select_li=$(this).index();
      $(this).addClass('on').siblings().removeClass('on');
      $('.m_gnb_content .m_gnb').eq(select_li).show().siblings().hide();
    });
    $('.m_gnb.m_gnb_per>li:not(:last-child)>a').click(function(){
      $(this).parent().addClass('on').siblings().removeClass('on');
      $(this).siblings().addClass('on').parent().siblings().find('.m_depth2').removeClass('on');
    });
    $('.m_gnb.m_gnb_biz>li>a').click(function(){
      $(this).parent().addClass('on').siblings().removeClass('on');
      $(this).siblings().addClass('on').parent().siblings().find('.m_depth2').removeClass('on');
    });
    $('.m_depth2 .img_plus a').click(function(){
        $(this).parent().toggleClass('on');
        $(this).siblings().slideToggle();
    });
    //search btn 
    $('.m_search').click(function(){
      $('.search_wrap').slideToggle(300);
      $(this).toggleClass('on');
      if($('.m_search').hasClass('on')){
        $('body,html').css({"overflow":"hidden"});
      }
      else{
        $('body,html').css({"overflow":"auto"});
      }
    });
    //visual slide
    var mySwiper = new Swiper('.visual .swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay:{delay:5000},
        speed:1000,
      
        // If we need pagination
        pagination: {
          el: '.visual .swiper-pagination',
          clickable:true,
        },
      });

      var sw=true;
      $(".visual .swiper-container .slide_btn").click(function(){
        if(sw==true) {
          $(".visual .swiper-container .slide_btn").addClass("on");
          mySwiper.autoplay.stop();
          sw=false;
        }
        else {
          $(".visual .swiper-container .slide_btn").removeClass("on");
          mySwiper.autoplay.start();
          sw=true;
        }
      });
      //section5 slide
      var mySwiper = new Swiper('.section5 .swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay:{delay:3000},
        speed:400,
      
        // If we need pagination
        pagination: {
          el: '.sec5_slide .swiper-pagination',
          clickable:true,
        },
      });
      //section9 slide
      var mySwiper2 = new Swiper('.section9 .swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.section9 .swiper-pagination',
          clickable:true,
        },
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
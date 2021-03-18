$(function(){
  $('.gnb>li').hover(
    function(){
      $(this).children('.depth2').stop().fadeIn(300).parent().siblings().children('.depth2').stop().fadeOut(300);
  },function(){
    $('.gnb>li .depth2').stop().fadeOut(300);
  });
  // 비쥬얼슬라이드
  const swiper = new Swiper('.visual .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay:{
      delay:3000,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.visual .swiper-button-next',
      prevEl: '.visual .swiper-button-prev',
    },
  });
  $('.section2 li').hover(
    function(){
    var pre_src=$(this).find('img').attr('src');
    var next_src=pre_src.replace('ot','ov');
    $(this).find('img').attr('src',next_src);
  },
  function(){
    var pre_src=$(this).find('img').attr('src');
    var next_src=pre_src.replace('ov','ot');
    $(this).find('img').attr('src',next_src);
  });
  $('.btn_family').click(function(){
    $('.select').stop().slideToggle();
    $('.btn_family').stop().toggleClass('on');
  });
  //-----------------------------------------모바일------------------------------------
  //m_menu
  var m_menu_sw =true;
  $('.m_menu').click(function(){
      $('.m_menu_bg').show();
      $('.m_menu_box').animate({"left":0},500);
      $('body,html').css({"overflow":"hidden"});
  });
  $('.m_menu_bg').click(function(){
    $('.m_menu_bg').hide();
    $('.m_menu_box').animate({"left":"-100%"},500);
    $('body,html').css({"overflow":"auto"});
  });
    
  
  //비쥬얼
  var win_width=$(window).width();
    if(win_width<=750){
      $('.visual .slide1').find('img').attr('src','images/m_visual_a.jpg');
      $('.visual .slide2').find('img').attr('src','images/m_visual_b.jpg');
      //section2이미지
      $('.section2 .list1').find('img').attr('src','images/m_catalogue.jpg');
      $('.section2 .list2').find('img').attr('src','images/m_video.jpg');
      $('.section2 .list3').find('img').attr('src','images/m_product.jpg');
      $('.section2 .list4').find('img').attr('src','images/m_athletic.jpg');
      $('.section2 .list5').find('img').attr('src','images/m_camping.jpg');
    }
    
  $(window).resize(function(){
    var win_width=$(window).width();
    if(win_width<=750){
      $('.visual .slide1').find('img').attr('src','images/m_visual_a.jpg');
      $('.visual .slide2').find('img').attr('src','images/m_visual_b.jpg');
      //section2이미지
      $('.section2 .list1').find('img').attr('src','images/m_catalogue.jpg');
      $('.section2 .list2').find('img').attr('src','images/m_video.jpg');
      $('.section2 .list3').find('img').attr('src','images/m_product.jpg');
      $('.section2 .list4').find('img').attr('src','images/m_athletic.jpg');
      $('.section2 .list5').find('img').attr('src','images/m_camping.jpg');
    }
    else{
      $('.visual .slide1').find('img').attr('src','images/visual_a.jpg');
      $('.visual .slide2').find('img').attr('src','images/visual_b.jpg');
      //section2이미지
      $('.section2 .list1').find('img').attr('src','images/cata_ot.jpg');
      $('.section2 .list2').find('img').attr('src','images/video_ot.jpg');
      $('.section2 .list3').find('img').attr('src','images/product_ot.jpg');
      $('.section2 .list4').find('img').attr('src','images/athletic_ot.jpg');
      $('.section2 .list5').find('img').attr('src','images/camping_ot.jpg');
    }
  });
});
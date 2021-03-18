$(function(){
  //banner
  $('.btn_close').click(function(){
    if($('#btn_chk').is(':checked')){
      setCookie('todayclose', 'close', 1);
    }
    else{}
    $('.banner_wrap').fadeOut();
  });
  if(GetCookie('todayclose')=='close'){
    $('.banner_wrap').hide();
  }
  else {
      $('.banner_wrap').fadeIn();
  }
  // btn_top
  $('.btn_top').click(function(){
    $('html,body').animate({'scrollTop':0},500);
  });
  $(document).scroll(function(){
    //section-top
    var html_scroll=$('html,body').scrollTop();
    var sec1_top=$('.section1').offset().top-500;
    var sec2_top=$('.section2').offset().top-500;
    var sec3_top=$('.section3').offset().top-500;
    var sec4_top=$('.section4').offset().top-700;
    if(html_scroll>=sec1_top && html_scroll<sec2_top){
      $('.section1').addClass('on');
    }
    else if(html_scroll>=sec2_top && html_scroll<sec3_top){
      $('.section2').addClass('on');
    }
    else if(html_scroll>=sec3_top && html_scroll<sec4_top){
      $('.section3').addClass('on');
    }
    else if(html_scroll>=sec4_top){
      $('.section4').addClass('on');
    }else{}
    //scroll(header,btn_top)
    if(html_scroll>=36){
      $('#header').addClass('on');
      if(html_scroll>=200){
        $('.btn_top').fadeIn();
      }
      else{
        $('.btn_top').stop().fadeOut();
      }
    }
    else{
      $('#header').removeClass('on');
    }
  });
  //비쥬얼슬라이드
  const swiper_visual = new Swiper('.visual_slide', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 3000,
      disableOnInteraction :false,// false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
  });
  
  //섹션1슬라이드
  const swiper_sec1 = new Swiper('.sec1_slide', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    touchRatio:false,
    slidesPerView: 1,
    slidesPerGroup:1,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  $('.sec1_slide .swiper-button-prev,.sec1_slide .swiper-button-next').click(function(){
    if($('.sec1_slide .swiper-slide').hasClass('swiper-slide-active')){
      var sec1_slide=$('.sec1_slide .swiper-slide-active').index()-2;
      console.log(sec1_slide);
      $('.sec1_slide .slide_txt li').eq(sec1_slide).addClass('on').siblings().removeClass('on');
    }
  });
  //섹션2 슬라이드
  const swiper_sec2 = new Swiper('.sec2_slide', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 10,
    slidesPerGroup:1,
    breakpoints: {
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      dragSize:150,
      draggable: true,
    },
  });
  var win_width = $(window).width();
  if(win_width>750){
    $('.sec2_slide .swiper-slide').hover(function(){
      $(this).addClass('on');
      var sec2_img = $(this).find('img').attr('src');
      var sec2_img_change=sec2_img.replace('off','on');
      $(this).find('img').attr('src',sec2_img_change);
    },function(){
      $('.sec2_slide .swiper-slide').removeClass('on');
      var sec2_img = $(this).find('img').attr('src');
      var sec2_img_change=sec2_img.replace('on','off');
      $(this).find('img').attr('src',sec2_img_change);
    });
  }else{}
  $(window).resize(function(){
    var win_width = $(window).width();
    if(win_width>750){
      $('.sec2_slide .swiper-slide').hover(function(){
        $(this).addClass('on');
        var sec2_img = $(this).find('img').attr('src');
        var sec2_img_change=sec2_img.replace('off','on');
        $(this).find('img').attr('src',sec2_img_change);
      },function(){
        $('.sec2_slide .swiper-slide').removeClass('on');
        var sec2_img = $(this).find('img').attr('src');
        var sec2_img_change=sec2_img.replace('on','off');
        $(this).find('img').attr('src',sec2_img_change);
      });
    }else{
      $('.sec2_slide .swiper-slide').mouseenter(function(){
        $('.sec2_slide .swiper-slide').removeClass('on');
        var sec2_img = $(this).find('img').attr('src');
        var sec2_img_change=sec2_img.replace('on','off');
        $(this).find('img').attr('src',sec2_img_change);
      });
    }
  });

  
  //섹션4 슬라이드
  const swiper_sec4 = new Swiper('.sec4_slide', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  //mobile-header-menu
  $('.m_menu').click(function(){
    $(this).toggleClass('on');
    $('.m_menu_bg').fadeToggle();
    $('.m_menu_con').toggleClass('on');
    $('html,body').toggleClass('off');
  })
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
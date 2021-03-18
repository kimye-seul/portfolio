$(function(){
    //m_menu
    var m_btn = true;
    $('.btn_menu').click(function(){
      if(m_btn){
        $(this).addClass('on');
        $('.m_menu_wrap').stop().animate({'left':'0'},200);
        m_btn=false;
      }
      else{
        $(this).removeClass('on');
        $('.m_menu_wrap').stop().animate({'left':'-100%'},200);
        m_btn=true;
      }
    });
    $('.m_menu_tab li').click(function(){
      var tab_li = $(this).index();
      $(this).addClass('on').siblings().removeClass('on');
      $('.m_menu>ul').eq(tab_li).addClass('on').siblings().removeClass('on');
      $('.m_depth1').css({'left':'0'},);
      $('.depth2').css('display','none');
      
    });
    $('.m_depth1:first-child>li>a').click(function(){
      $(this).siblings().css('display','block');
      $('.m_depth1').animate({'left':'-100%'},50);
    });
    $('.m_depth1:last-child>li:last-child>a').click(function(){
      $(this).siblings().css('display','block');
      $('.m_depth1').animate({'left':'-100%'},50);
    });
    $('.depth2 .back').click(function(){
      $('.m_depth1').animate({'left':'0'},50);
      setTimeout(function() { 
        $('.depth2').css('display','none');
      }, 300);
      
    });
    //비쥬얼
    const visual = new Swiper('.visual_slide', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay:{
            delay:3000,
        },
        simulateTouch:false,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable:true,
        },
      });
      //섹션1
      const sec1 = new Swiper('.sec1_slide', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      });
    //   섹션2
      const sec2 = new Swiper('.sec2_slide', {
          // Optional parameters
          slidesPerView: 'auto',
          slidesPerGroup: 1,
          loop:false,
          scrollbar: { 
              el: '.swiper-scrollbar', 
              draggable: true, 
          },
          mousewheel: {
            invert: false,
          },
        });
        $('.sec2_slide .swiper-slide a').hover(
          function(){
          var sec2_img = $(this).find('img').attr('src');
          var sec2_img_chg=sec2_img.replace('.jpg','_on.jpg');
          $(this).find('img').attr('src',sec2_img_chg);
        },function(){
          var sec2_img = $(this).find('img').attr('src');
          var sec2_img_chg=sec2_img.replace('_on.jpg','.jpg');
          $(this).find('img').attr('src',sec2_img_chg);
        });
        // insta
     //insta
    const insta = new Swiper('.insta_slide', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 20,
    });
    //btn_top
    $(document).scroll(function(){
      if($('html, body').scrollTop()>=300){
        $('.btn_top').fadeIn();
      }
      else{
        $('.btn_top').fadeOut();
      }
    });
    $('.btn_top').click(function(){
      $('html,body').animate({'scrollTop':0});
    });
});
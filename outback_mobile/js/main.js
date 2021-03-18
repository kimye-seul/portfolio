$(function(){
    //scroll
    $(document).scroll(function(){
      var scrollTopVal = $('html,body').scrollTop();
      if(scrollTopVal>=100){
        $('#header').addClass('on');
      }
      else{
        $('#header').removeClass('on');
      }
    });
    //popup
    if(GetCookie('todayclose')=='close'){
      $('.popup').fadeOut();
    }
    else{
      $('.popup').fadeIn();
    }
    $('.btn_popupclose').click(function(){
      if($('#chk').is(':checked')){
        setCookie('todayclose','close',1);
      }else{}
      $('.popup').fadeOut();
    });
    //m_menu
    $('.btn_hamburger').click(function(){
      $('.m_menu_bg').fadeIn();
      $('.m_menu').animate({'left':'0'});
    });
    $('.arrow>a').click(function(){
      $(this).parent().find('.m_depth2').stop().slideToggle().parent().siblings().find('.m_depth2').stop().slideUp();
      $(this).parent().toggleClass('on').siblings().removeClass('on');
    });
    $('.btn_m_menu_close').click(function(){
      $('.m_menu_bg').fadeOut();
      $('.m_menu').animate({'left':'-100%'});
    });
    //메인 비쥬얼 슬라이드
    const swiper_visual = new Swiper('.visual_slide', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction :false,// false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
          },
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable:true,
        },
    });
    //섹션2 슬라이드
    const swiper_sec2 = new Swiper('.section2_slide', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable:true,
        },
    });
    //섹션5 슬라이드
    const swiper_sec5 = new Swiper('.section5_slide', {
      // Optional parameters
      direction: 'horizontal',
      loop: false,
      slidesPerView:2,
      spaceBetween:40,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
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
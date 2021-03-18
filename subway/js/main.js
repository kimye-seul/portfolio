$(function(){
  //모바일 메뉴
    $('.menu_list li a').click(function(){
      $(this).siblings().stop().slideToggle().parent().siblings().children('.depth2').stop().slideUp();
    });
    var mySwiper = new Swiper('.visual .swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay:{delay:4000},
        
      
        // If we need pagination
        pagination: {
          el: '.visual .swiper-pagination',
          clickable:true,
        },
      });
      $(".btn_menu").click(function(){
        $(".m_gnb").fadeIn(500);
        $(".m_gnb .gnb_wrap").animate({"right":0},500);
        $("body").css({"overflow":"hidden"});
      });
      $(".close").click(function(){
        $(".m_gnb").fadeOut(500);
        $(".m_gnb .gnb_wrap").animate({"right":"-100%"},500);
        $("body").css({"overflow":"auto"});
        $('.depth2').slideUp();
      });
      $('.section1 .btn_tab li').click(function(e){
        e.preventDefault();
        $(this).addClass('on').siblings().removeClass('on');
        var tab_num=$(this).index();
        $('.slide_tot_wrap .swiper-container').removeClass('on');
        $('.slide_tot_wrap .swiper-container').eq(tab_num).addClass('on');
      });
      
      // section1
      var mySwiper1 = new Swiper('.slide_tot_wrap .swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        observer: true,//새로고침
        
        // observeParents: true,
        // If we need pagination
        pagination: {
          el: '.slide_tot_wrap .swiper-pagination',
          clickable:true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.slide_tot_wrap .swiper-button-next',
          prevEl: '.slide_tot_wrap .swiper-button-prev',
        },
      });
      if(GetCookie('todayclose')=='close'){
        $('.popup').fadeOut();
      }
      else{
        $('.popup').fadeIn();
      }
      $('.btn_close').click(function(){
        if($('#chk').is(':checked')){
          setCookie('todayclose','close',1);
        }else{}
        $('.popup').fadeOut();
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
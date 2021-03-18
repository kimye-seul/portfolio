$(function(){
  // 배너
  if(GetCookie('todayclose')=='close'){
    $('.banner').css({"height":0});
  }
  else {
      $('.banner').css({"height":90});
  }
  $('.btn_banner_close').click(function(){
    $('.banner').animate({"height":0});
    setCookie('todayclose', 'close', 1);
  });
  //오른쪽 메인으로 이동
  $('.btn_right_move').click(function(){
    $('#main').css({"height":1653}).animate({"left":"-100%"},500);
    $('.btn_right_move').fadeOut(500);
    $('.btn_left_move').fadeIn(500);
  });
  //왼쪽 메인으로 이동
  $('.btn_left_move').click(function(){
    $('#main').css({"height":"auto"}).animate({"left":"0"},500);
    $('.btn_right_move').fadeIn(500);
    $('.btn_left_move').fadeOut(500);
  });
  //오른쪽 배너
  $('.btn_top').click(function(){
    $('html, body').animate({"scrollTop":0},500);
  })
  // 전체서브메뉴
  $('.gnb,.logo').mouseenter(function(){
    $('#header').stop().animate({"height":"367px"});
    $('.depth2').stop().fadeIn();
  });
  $('#header').mouseleave(function(){
    $('#header').stop().animate({"height":"100px"});
    $('.depth2').stop().fadeOut();
  });
  // -------------------------------------------main1----------------------------------------
  // 비쥬얼슬라이드
  $('.main1 .slide').slick({
    autoplay: true,
    dots:true,
    draggable : false,
  });
  // section4_슬라이드
  $('.section4_slide').bxSlider({
    touchEnabled:false,
  });
  //section5
  $('.section5_inner li').click(function(){
    $(this).addClass('on').siblings().removeClass('on');
  });
  //----------------------------------------------main2--------------------------------------
  // 비쥬얼슬라이드
  $('.main2 .visual_slide').slick({
    autoplay: true,
    dots:true,
    arrows:false,
    vertical:true,
    verticalSwiping: true,
  });
  // section3슬라이드
  $('.main2 .sec3_li2_slide').slick({
    autoplay: true,
    dots:true,
    draggable : false,
    arrows:false,
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
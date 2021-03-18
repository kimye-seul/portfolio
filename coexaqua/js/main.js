$(function(){
  $('.sec2_slide').slick({
    arrows:true,
  });
  $('.sec3_slide').slick({
    arrows:false,
    dots:true,
    slidesToShow:3,
    infinite:false,
  });
  $('.plus').click(function(){
    $('.hidden_menu').toggleClass('on');
    $('.hidden_menu li').toggleClass('on');
    $('.plus').toggleClass('on');
  });
  var sw1=true;
  $('.menu_ico').click(function(){
    if(sw1){
      $('.m_gnb_wrap').addClass('on');
      $('.header_inner h1').addClass('on');
      $('.menu_ico span').addClass('on');
      $('body').css({"overflow":"hidden"});
      sw1=false;
    }
    else {
      $('.m_gnb_wrap').removeClass('on');
      $('.header_inner h1').removeClass('on');
      $('.menu_ico span').removeClass('on');
      $('body').css({"overflow":"auto"});
      $('.depth2').slideUp();
      $('.m_gnb>li>a').removeClass('on');
      sw1=true;
    }
  });
  $('.m_gnb>li>a').click(function(){
    $(this).next().stop().slideToggle().parent().siblings().children('.depth2').slideUp();
    $(this).toggleClass('on').parent().siblings().children('a').removeClass('on');
  });
  sw2=true;
  $('.lang,.lang_select').click(function(){
    if(sw2){
      $('.lang_select').show();
      sw2=false;
    }
    else{
      $('.lang_select').hide();
      sw2=true;
    }
  });
  var lnb = $("#scroll").offset().top;
  $(window).scroll(function() {
      var window = $(this).scrollTop();
      if(lnb <= window) {
        $("#header").addClass("on");
      } else {
        $("#header").removeClass("on");
      } 
  }); 
});
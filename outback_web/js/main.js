$(function(){
    //popup
    $('.btn_close').click(function(){
        $('.popup').fadeOut();
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
    // gnb
    $('.gnb>li').hover(function(){
        $(this).find('.depth2').stop().fadeIn(300);
        var header_in=$('.header_inner').offset().left;
        var gnb_left = $(this).offset().left;
        var bar_width= $(this).children('a').width();
        $('.bar').stop().animate({
            'left':gnb_left - header_in + 22,
            'width':bar_width
        },400);
    },function(){
        $('.depth2').stop().fadeOut(300);
        $('.bar').stop().animate({
            'width':0
        },400);
    });
    $('.brand_on .gnb').mouseleave(function(){
      $('.bar').stop().animate({
        'left':330.469,
        'width':55.8125
      },400);
    });
    //visual
    $('.visual_slide').slick({
        autoplay:true,
        autoplaySpeed:4000,
        speed:1000,
        dots:true,
        draggable:false,
        pauseOnHover:false,
        cssEase: 'cubic-bezier(1,.13,.34,.87)',
      });
      //visual
    $('.sec3_slide').slick({
        autoplay:true,
        autoplaySpeed:4000,
        speed:1000,
        pauseOnHover:false,
        pauseOnFocus: false,
        slidesToShow: 1,
        variableWidth: true,
      });
      $('.btn_top').click(function(){
        $('html,body').animate({"scrollTop":0},500);
      });
// ------------------------------------brand-----------------------------------------
      $('.focus_gnb>a').click(function(){
        $(this).siblings().stop().slideToggle();
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
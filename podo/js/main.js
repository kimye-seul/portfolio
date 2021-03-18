$(function(){
  $('.down_btn1').click(function(){
    $('body, html').stop().animate({"scrollTop":1277},1000);
  });
  $('.down_btn2').click(function(){
    $('body, html').stop().animate({"scrollTop":2302},1000);
  });
  $('.down_btn3').click(function(){
    $('body, html').stop().animate({"scrollTop":3302},1000);
  });
  $('.down_btn4').click(function(){
    $('body, html').stop().animate({"scrollTop":4442},1000);
  });
  $('.down_btn5').click(function(){
    $('body, html').stop().animate({"scrollTop":5482},1000);
  });
  $('.down_btn6').click(function(){
    $('body, html').stop().animate({"scrollTop":6482},1000);
  });
  $('.down_btn7').click(function(){
    $('body, html').stop().animate({"scrollTop":7482},1000);
  });
  $('.down_btn8').click(function(){
    $('body, html').stop().animate({"scrollTop":8382},1000);
  });
  $('.down_btn9').click(function(){
    $('body, html').stop().animate({"scrollTop":9532},1000);
  });
  $('.down_btn10').click(function(){
    $('body, html').stop().animate({"scrollTop":10612},1000);
  });
  $('.down_btn11').click(function(){
    $('body, html').stop().animate({"scrollTop":11752},1000);
  });
  $('.pagination li').click(function(){
    var num =$(this).index();
    $(this).addClass('on').siblings().removeClass('on');
    console.log(num);
    if(num==0){
      $('body, html').stop().animate({"scrollTop":0},1000);
    }
    else if(num==1){
      $('body, html').stop().animate({"scrollTop":1277},1000);
    }
    else if(num==2){
      $('body, html').stop().animate({"scrollTop":2302},1000);
    }
    else if(num==3){
      $('body, html').stop().animate({"scrollTop":3302},1000);
    }
    else if(num==4){
      $('body, html').stop().animate({"scrollTop":4442},1000);
    }
    else if(num==5){
      $('body, html').stop().animate({"scrollTop":5482},1000);
    }
    else if(num==6){
      $('body, html').stop().animate({"scrollTop":6482},1000);
    }
    else if(num==7){
      $('body, html').stop().animate({"scrollTop":7482},1000);
    }
    else if(num==8){
      $('body, html').stop().animate({"scrollTop":8382},1000);
    }
    else if(num==9){
      $('body, html').stop().animate({"scrollTop":9532},1000);
    }
    else if(num==10){
      $('body, html').stop().animate({"scrollTop":10612},1000);
    }
    else {
      $('body, html').stop().animate({"scrollTop":11752},1000);
    }
  });
  $(window).scroll(function(){
    var num=$(document).scrollTop();
    console.log(num);
    if(num>1277){
      $('#wrap .section2  .header').addClass('on');
    }
    else{
      $('#wrap .section2  .header').removeClass('on');
    }
    
    if(num>=0&&num<1277){
      $('.pagination li:nth-child(1)').addClass('on').siblings().removeClass('on');
    }
    else if(num>=1277&&num<2302){
      $('.pagination li:nth-child(2)').addClass('on').siblings().removeClass('on');
    }
    else if(num>=2302&&num<3302){
      $('.pagination li:nth-child(3)').addClass('on').siblings().removeClass('on');
    }
    else if(num>=3302&&num<4442){
      $('.pagination li:nth-child(4)').addClass('on').siblings().removeClass('on');
    }
    else if(num>=4442&&num<5482){
      $('.pagination li:nth-child(5)').addClass('on').siblings().removeClass('on');
    }
    else if(num>=5482&&num<6482){
      $('.pagination li:nth-child(6)').addClass('on').siblings().removeClass('on');
    }
    else if(num>=6482&&num<7482){
      $('.pagination li:nth-child(7)').addClass('on').siblings().removeClass('on');
    }
    else if(num>=7482&&num<8382){
      $('.pagination li:nth-child(8)').addClass('on').siblings().removeClass('on');
    }
    else if(num>=8382&&num<9532){
      $('.pagination li:nth-child(9)').addClass('on').siblings().removeClass('on');
    }
    else if(num>=9532&&num<10612){
      $('.pagination li:nth-child(10)').addClass('on').siblings().removeClass('on');
    }
    else if(num>=10612&&num<11752){
      $('.pagination li:nth-child(11)').addClass('on').siblings().removeClass('on');
    }
    else{
      $('.pagination li:nth-child(12)').addClass('on').siblings().removeClass('on');
    }
    if(num>=0&&num<900){
      $('.section2_inner').removeClass('on');
      $('.section3_inner').removeClass('on');
      $('.section4_inner').removeClass('on');
      $('.section5_inner').removeClass('on');
      $('.section6_inner').removeClass('on');
      $('.section7_inner').removeClass('on');
      $('.section9_inner').removeClass('on');
      $('.section10_inner').removeClass('on');
      $('.section11_inner').removeClass('on');
      $('.section12').removeClass('on');
    }
    else if(num>=900&&num<2000){
      $('.section2_inner').addClass('on');
    }
    else if(num>=2000&&num<3000){
      $('.section3_inner').addClass('on');
    }
    else if(num>=3000&&num<4100){
      $('.section4_inner').addClass('on');
    }
    else if(num>=4100&&num<5100){
      $('.section5_inner').addClass('on');
    }
    else if(num>=5100&&num<6100){
      $('.section6_inner').addClass('on');
    }
    else if(num>=6100&&num<7100){
      $('.section7_inner').addClass('on');
    }
    else if(num>=7100&&num<8300){
      $('.section9_inner').addClass('on');
    }
    else if(num>=8300&&num<9400){
      $('.section10_inner').addClass('on');
    }
    else if(num>=9400&&num<10852){
      $('.section11_inner').addClass('on');
    }
    else {
      $('.section2_inner').addClass('on');
      $('.section3_inner').addClass('on');
      $('.section4_inner').addClass('on');
      $('.section5_inner').addClass('on');
      $('.section6_inner').addClass('on');
      $('.section7_inner').addClass('on');
      $('.section9_inner').addClass('on');
      $('.section10_inner').addClass('on');
      $('.section11_inner').addClass('on');
      $('.section12').addClass('on');
    }
  });
  $('.color_change_wrap .left_color li').click(function(){
    var left_color_li=$(this).index();
    $('.case_left li').eq(left_color_li).addClass('on').siblings().removeClass('on');
    $('.case_right li').removeClass('on');
    $(this).addClass('on').siblings().removeClass('on');
    $('.right_color li').removeClass('on');
  });
  $('.color_change_wrap .right_color li').click(function(){
    var right_color_li=$(this).index();
    $('.case_right li').eq(right_color_li).addClass('on').siblings().removeClass('on');
    $('.case_left li').removeClass('on');
    $(this).addClass('on').siblings().removeClass('on');
    $('.left_color li').removeClass('on');
  });
  $('.slide').slick({
    fade:true,
    draggable:false,
    speed:1000,
  });
});
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
        console.log(gnb_left);
        console.log(header_in);
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
    $('.menu_on .gnb').mouseleave(function(){
      $('.bar').stop().animate({
        'left':434.438,
        'width':48.3906
      },400);
    });
    $('.member_on .gnb').mouseleave(function(){
      $('.bar').stop().animate({
        'left':530.984,
        'width':110.641
      },400);
    });
    $('.benefit_on .gnb').mouseleave(function(){
      $('.bar').stop().animate({
        'left':689.781,
        'width':68.7656
      },400);
    });
    //visual
    $('.visual').addClass('on');
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
      $('.sub_visual').addClass('on');
      $('.brand_main').addClass('on');
      
      $(document).scroll(function(){
        var docu_top =$(document).scrollTop();
        var brand_top = $('.brand_main').offset().top;
        if(docu_top >= (brand_top-600)){
          $('.brand_main h2').addClass('on');
          $('.brand_main h3').addClass('on');
          $('.bg_ani').addClass('on');
          if(docu_top >= (brand_top)){
            $('.story .story1').addClass('on');
            if(docu_top >= (brand_top+200)){
              $('.story .story2').addClass('on');
              if(docu_top >= (brand_top + 500)){
                $('.story .story3').addClass('on');
                if(docu_top >= (brand_top + 700)){
                  $('.story .story4').addClass('on');
                  if(docu_top >= (brand_top + 1000)){
                    $('.story .story5').addClass('on');
                  }
                }
              }
            }
          }
        }
      });
      $('.focus_gnb>a').click(function(){
        $(this).siblings().stop().slideToggle();
        $(this).parent().toggleClass('on');
      });
// ----------------------------------------menu-------------------
$('.menu_visual').addClass('on');
$('.member_list li button').click(function(){
  var member_li = $(this).parent().index();
  $('.member_modal').fadeIn();
  $('.member_modal>li').eq(member_li).fadeIn();
  $('html,body').addClass('hidden');
});
$('.member_close').click(function(){
  $('.member_modal').fadeOut();
  $('.member_modal>li').fadeOut();
  $('html,body').removeClass('hidden');
});
// ------------------------------------------join---------------------------
$('#all_agree').click(function(){
  if($('#all_agree').is(':checked')){
    $('#chk_info1_2').prop("checked", true);
    $('#chk_info2_2').prop("checked", true);
    $('#chk_info3_2').prop("checked", true);
  }
});
$('.agreebox input[type="radio"]').click(function(){
  if(($('#chk_info1_2').is(':checked')&&$('#chk_info2_2').is(':checked')&&$('#chk_info3_2').is(':checked'))==false){
    $('#all_agree').prop("checked",false);
  }
});
$('.btn_ok').click(function(){
  if(($('#chk_info1_2').is(':checked')&&$('#chk_info2_2').is(':checked')&&$('#chk_info3_2').is(':checked'))==false){
    alert("아웃백 회원 약관에 대한 동의는 필수 항목입니다.");
  }
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
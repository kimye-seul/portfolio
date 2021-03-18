$(function(){
    $('.gnb').mouseenter(function(){
        $('.header_bottom_box').stop().animate({"height":328},500);
        $('.depth2').stop().slideDown(500);
        
    });
    $('.header_bottom_box').mouseleave(function(){
        $('.header_bottom_box').stop().animate({"height":85},500);
        $('.depth2').stop().slideUp(500);
        
    });
    $('.visual .slide').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        speed :1000,
        dots:true,
        fade :true,
    });
    $('.section1_inner .new_box .new_box_inner').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows:false,
        speed :500,
        dots:true,
    });  
    $('.section1 .section1_inner .list li a').click(function(e){
        var sec1_num=$(this).parent().index();
        e.preventDefault();
        $(this).addClass('on');
        $(this).parents('li').siblings().children('a').removeClass('on');
        $('.section1 .sub_li').hide();
        $('.section1 .sub_li').eq(sec1_num).show();
       
    });
    $('.li_wrap .sub_li').slick({
        autoplay: false,
        dots:true,
        infinite:false,
        slidesToShow:7,
        arrows:false,
        variableWidth : true,
    });
    $('.li_content .li_last.slide').slick({
        autoplay: true,
        dots:true,
        arrows:false,
        infinite:true,
    });
    $('.family_site .btn_family,.family_site .family_list').click(function(){
        $('.family_list').stop().slideToggle(450);
    }); 
    $('.family_site').mouseleave(function(){
        $('.family_list').slideUp(450);
    });
    var win = $(window),
        winheight=win.height(),
        sidewrap=$('.side_wrap');
        
    win.scroll(function(){
        sidetop=$(this).scrollTop();
        if(sidetop>=550){
            sidewrap.stop().animate({"top":(winheight / 3) + sidetop},500);
        }
        else{
            sidewrap.stop().animate({"top":550},500);

        }
    });
    $('.line2 .li_content .li1').click(function(){
        $('.sec2_modal_wrap').fadeIn();
        $('body').css({"overflow":"hidden"});
    });
    $('.sec2_modal_wrap .modal_video .video_close').click(function(){
        var mo_video = $('.sec2_modal_wrap .modal_video iframe').attr('src');
        $('.sec2_modal_wrap').fadeOut();
        $('body').css({"overflow":"auto"});
        $('.sec2_modal_wrap .modal_video iframe').attr('src',"");
        $('.sec2_modal_wrap .modal_video iframe').attr('src',mo_video);
    });
    if(GetCookie('todayclose')=='close'){
        $('.banner').hide();
    }
    else {
        $('.banner').show();
    }

    $('.popup_close').click(function(){
        if($('#popup_check').is(':checked')){
            setCookie('todayclose', 'close', 1);
        }
        else{}
        $('.banner').hide();
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
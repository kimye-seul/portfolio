$(function(){
    //modal
    var video_list = ["https://www.youtube.com/embed/lAJ3SGjbdr4","https://www.youtube.com/embed/U7GoYtXvGvA","https://www.youtube.com/embed/Dhk2zl4FUEw"]
    var video_tit=["D TOWER","Yi Sun Sin Bridge","Petrochemical Plant"];
    var video_sub=["도시를 개발하다.","세계 6번째 현수교 기술자립국, 세계최고의 기술력, 대림.","1973년 해외플랜트 수출1호, 기본과 원칙으로 쌓아온 플랜트 노하우 43년."];
    
    $('.visual1_list li').click(function(){
      var visual1_list = $(this).index();
      $('.modal_slide iframe').attr('src',video_list[visual1_list]);
      $('.modal_title').text(video_tit[visual1_list]);
      $('.modal_sub').text(video_sub[visual1_list]);
      $('.modal_wrap').fadeIn();

      // modal_pre
      $('.modal_wrap .player .modal_pre').click(function(){
        if(visual1_list==0){
          visual1_list=2;
        }
        else {
          visual1_list--;
        }
        $('.modal_slide iframe').attr('src',video_list[visual1_list]);
        $('.modal_title').text(video_tit[visual1_list]);
        $('.modal_sub').text(video_sub[visual1_list]);
      });
      
      // modal_next
      $('.modal_wrap .player .modal_next').click(function(){
        if(visual1_list==2){
          visual1_list=0;
        }
        else {
          visual1_list++;
        }
        $('.modal_slide iframe').attr('src',video_list[visual1_list]);
        $('.modal_title').text(video_tit[visual1_list]);
        $('.modal_sub').text(video_sub[visual1_list]);
      });
      // modal_close
      $('.modal_wrap .player .modal_close').click(function(){
        $('.modal_wrap').fadeOut();
        $('.modal_slide iframe').attr('src',"");
      });
    });
  
    // banner
    if(GetCookie('todayclose')=='close'){
      $('.banner_wrap').hide();
      $('.fulldown_wrap').css({"top":71});
      $('depth2').css({"top":71});
    }
    else {
      $('.banner_wrap').slideDown();
    }
    $('.today_close_box .btn_close').click(function(){
      if($('#todayclose').is(':checked')){
        setCookie('todayclose', 'close', 1);
      }
      else{}
      $('.banner_wrap').slideUp();
      $('.fulldown_wrap').css({"top":71});
      $('depth2').css({"top":71});
    });
    // 풀다운서브메뉴
    $('#header .header_inner .gnb,.fulldown_wrap').mouseenter(function(){
        $('.depth2').stop().slideDown(350,'linear');
        $('.fulldown_wrap').stop().slideDown(300,'linear');
    });
    $('.fulldown_wrap, .gnb').mouseleave(function(){
        $('.depth2').stop().slideUp(300,'linear');
        $('.fulldown_wrap').stop().slideUp(350,'linear');
    });

    // util
    $('.util .search a').click(function(){
        $('.search_form').slideToggle(300);
    });
    $('.util .search').mouseleave(function(){
        $('.search_form').slideUp(300);
    });

    //all-menu 슬라이드
    $('.all_menu_slide').slick({
        autoplay:true,
        arrows:false,
        dots:true,
      });
      var sw1 =true;
      $('.all_slide_stop').click(function(){
        if(sw1){
            $('.all_menu_wrap .all_menu .all_menu_slide_wrap .all_slide_stop').addClass('on');
            $('.all_menu_slide').slick('slickPause');
            sw1=false;
        }
        else {
            $('.all_menu_wrap .all_menu .all_menu_slide_wrap .all_slide_stop').removeClass('on');
            $('.all_menu_slide').slick('slickPlay');
            sw1=true;
        }
      });

      //all-menu open, close
      $('.util .menu').click(function(){
        $('.all_menu_wrap').show();
      });
      $('.all_menu .btn_allclose').click(function(){
        $('.all_menu_wrap').hide();
      });

       //visual-slide
       $('.visual_slide').slick({
        arrows:false,
        draggable:false,
        
      });

      //visual1 배경 체인지
      $('.visual1 .visual1_bg').slick({
          fade:true,
          arrows:false,
          speed:1000,
      });
      $('.visual1_list li').mouseenter(function(){
          var bg_index = $(this).index();
          $(this).addClass('on').siblings().removeClass('on');
          $('.visual1 .visual1_bg').slick('slickGoTo', bg_index);
          
      });

      //visual2_list hover 스타일
      $('.visual2 .visual2_list li').mouseenter(function(){
        $(this).siblings().css({"opacity":"0.2"});
      });
      $('.visual2 .visual2_list li').mouseleave(function(){
        $('.visual2 .visual2_list li').css({"opacity":"1"});
      });

      //arrow누를때 이동
      $('.go_innovation').click(function(){
        $('.visual_slide').slick('slickGoTo', 0);
      });
      $('.go_news').click(function(){
        $('.visual_slide').slick('slickGoTo', 1);
      });
      $('.go_story').click(function(){
        $('.visual_slide').slick('slickGoTo', 2);
      });
      // footer familysite
      $('.family_bt').click(function(){
          $('.family_wrap').toggleClass('on');
          $('.family_bt').toggleClass('on');
      });
      $('.family_title .close').click(function(){
          $('.family_wrap').removeClass('on');
          $('.family_bt').removeClass('on');
      });
});

// cookie
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
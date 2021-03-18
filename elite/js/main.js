$(function(){
    // 비쥬얼슬라이드
    $('.visual .slide').slick({
      autoplay:true,
      dots:true,
      draggable:false,
    });
    //news슬라이드
    $('.news_slide .slide').slick({
      // autoplay:true,
      dots:true,
      arrows:false,
    });
      $('.btn_top').click(function(){
        $('html').animate({"scrollTop":0});
      });
      $('.e_gallery li').mouseenter(function(){
        var num=$(this).find('img').attr('src');
        var num2=num.replace('_off','_on');
        $(this).find('img').attr('src',num2);
      });
      $('.e_gallery li').mouseleave(function(){
        var num=$(this).find('img').attr('src');
        var num2=num.replace('_on','_off');
        $(this).find('img').attr('src',num2);
      });
      $('.btn_m_menu').click(function(){
        $('.m_menu_bg').show();
        $('.m_menu').animate({"left":0},500);
        $('body').css({"overflow":"hidden"});
      });
      $('.m_menu_bg').click(function(){
        $('.m_menu_bg').hide();
        $('.m_menu').animate({"left":"-100%"},500);
        $('body').css({"overflow":"auto"});
      });
      $('.m_gnb>li>a').click(function(){
        $(this).siblings().slideToggle().parent().siblings().find('.depth2').slideUp();
      });
      $(window).resize(function(){
        var num=$(this).width();
        if(num<=750){
          $('#main .visual .slide .slick-arrow').hide();
          $('#main .visual .slide .slick-dots').show();
          $('#main .visual .slide .slide_li1 img').attr('src',"images/visual01_m.jpg");
          $('#main .visual .slide .slide_li2 img').attr('src',"images/visual02_m.jpg");
          $('#main .visual .slide .slide_li3 img').attr('src',"images/visual03_m.jpg");
          $('#main .visual .slide .slide_li4 img').attr('src',"images/visual04_m.jpg");

          $('#main .section3 .sec3_li .news_slide .slide .slide_li1 img').attr('src',"images/img_blogevent160816_m.jpg");
          $('#main .section3 .sec3_li .news_slide .slide .slide_li2 img').attr('src',"images/img_facebookevent160816_m.jpg");
          $('#main .section3 .sec3_li .news_slide .slide .slide_li3 img').attr('src',"images/img_renewalevent1_m.jpg");
          $('#main .section3 .sec3_li .news_slide .slide .slide_li4 img').attr('src',"images/img_renewalevent2_m.jpg");

          $('#main .section1 .sec1_img1 a img').attr('src',"images/img_story01_m.jpg");
          $('#main .section1 .sec1_img2 a img').attr('src',"images/img_story02_m.jpg");
          $('#main .section1 .sec1_img3 a img').attr('src',"images/img_story03_m.jpg");
        }
        else{
          $('#main .visual .slide .slick-arrow').show();
          $('#main .visual .slide .slick-dots').hide();
          $('#main .visual .slide .slide_li1 img').attr('src',"images/visual01.jpg");
          $('#main .visual .slide .slide_li2 img').attr('src',"images/visual02.jpg");
          $('#main .visual .slide .slide_li3 img').attr('src',"images/visual03.jpg");
          $('#main .visual .slide .slide_li4 img').attr('src',"images/visual04.jpg");
          
          $('#main .section3 .sec3_li .news_slide .slide .slide_li1 img').attr('src',"images/img_blogevent160816.jpg");
          $('#main .section3 .sec3_li .news_slide .slide .slide_li2 img').attr('src',"images/img_facebookevent160816.jpg");
          $('#main .section3 .sec3_li .news_slide .slide .slide_li3 img').attr('src',"images/img_renewalevent1.jpg");
          $('#main .section3 .sec3_li .news_slide .slide .slide_li4 img').attr('src',"images/img_renewalevent2.jpg");

          $('#main .section1 .sec1_img1 a img').attr('src',"images/img_story01.jpg");
          $('#main .section1 .sec1_img2 a img').attr('src',"images/img_story02.jpg");
          $('#main .section1 .sec1_img3 a img').attr('src',"images/img_story03.jpg");
        }
      });
      
        var num1=$(window).width();
        if(num1<=750){
          $('#main .visual .slide .slick-arrow').hide();
          $('#main .visual .slide .slick-dots').show();
          $('#main .visual .slide .slide_li1 img').attr('src',"images/visual01_m.jpg");
          $('#main .visual .slide .slide_li2 img').attr('src',"images/visual02_m.jpg");
          $('#main .visual .slide .slide_li3 img').attr('src',"images/visual03_m.jpg");
          $('#main .visual .slide .slide_li4 img').attr('src',"images/visual04_m.jpg");

          $('#main .section3 .sec3_li .news_slide .slide .slide_li1 img').attr('src',"images/img_blogevent160816_m.jpg");
          $('#main .section3 .sec3_li .news_slide .slide .slide_li2 img').attr('src',"images/img_facebookevent160816_m.jpg");
          $('#main .section3 .sec3_li .news_slide .slide .slide_li3 img').attr('src',"images/img_renewalevent1_m.jpg");
          $('#main .section3 .sec3_li .news_slide .slide .slide_li4 img').attr('src',"images/img_renewalevent2_m.jpg");

          $('#main .section1 .sec1_img1 a img').attr('src',"images/img_story01_m.jpg");
          $('#main .section1 .sec1_img2 a img').attr('src',"images/img_story02_m.jpg");
          $('#main .section1 .sec1_img3 a img').attr('src',"images/img_story03_m.jpg");
        }
        else{
          $('#main .visual .slide .slick-arrow').show();
          $('#main .visual .slide .slick-dots').hide();
          $('#main .visual .slide .slide_li1 img').attr('src',"images/visual01.jpg");
          $('#main .visual .slide .slide_li2 img').attr('src',"images/visual02.jpg");
          $('#main .visual .slide .slide_li3 img').attr('src',"images/visual03.jpg");
          $('#main .visual .slide .slide_li4 img').attr('src',"images/visual04.jpg");
          
          $('#main .section3 .sec3_li .news_slide .slide .slide_li1 img').attr('src',"images/img_blogevent160816.jpg");
          $('#main .section3 .sec3_li .news_slide .slide .slide_li2 img').attr('src',"images/img_facebookevent160816.jpg");
          $('#main .section3 .sec3_li .news_slide .slide .slide_li3 img').attr('src',"images/img_renewalevent1.jpg");
          $('#main .section3 .sec3_li .news_slide .slide .slide_li4 img').attr('src',"images/img_renewalevent2.jpg");

          $('#main .section1 .sec1_img1 a img').attr('src',"images/img_story01.jpg");
          $('#main .section1 .sec1_img2 a img').attr('src',"images/img_story02.jpg");
          $('#main .section1 .sec1_img3 a img').attr('src',"images/img_story03.jpg");
        }
});
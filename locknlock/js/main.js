$(function(){
    $('.visual_slide').slick({
        dots:true,
        autoplay:false,
        autoplaySpeed:3000,
      });
      sw1=true;
      $('.visual_wrap .btn_play').click(function(){
          if(sw1){
            $('.visual_slide').slick('slickPlay');
            $('.visual_wrap .btn_play').addClass('on');
            sw1=false;
          }
          else{
            $('.visual_slide').slick('slickPause');
            $('.visual_wrap .btn_play').removeClass('on');
            sw1=true;
          }
      });
      $('.video_li_wrap').slick({
        autoplay:true,
        autoplaySpeed:3000,
        dots:true,
        arrows:false,
        fade:true,
      });

      sw2=true;
      $('.video .sec2_btn_play').click(function(){
          if(sw2){
            $('.video_li_wrap').slick('slickPause');
            $('.video .sec2_btn_play').addClass('on');
            sw2=false;
          }
          else{
            $('.video_li_wrap').slick('slickPlay');
            $('.video .sec2_btn_play').removeClass('on');
            sw2=true;
          }
        });
    var sw3=true;
    $('.family_box').click(function(){
        if(sw3==true){
            $('.btn_family').addClass('on');
            $('.family_list').fadeIn();
            sw3=false;
        }
        else {
            $('.btn_family').removeClass('on');
            $('.family_list').fadeOut();
            sw3=true;
        }
    });
});
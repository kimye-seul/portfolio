$(function(){
    var mySwiper = new Swiper('.gnb_wrap .swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView:"auto",
      });

      var mySwiper2 = new Swiper('.visual .swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay:{delay:3000,},
        speed:1000,
      
        // If we need pagination
        pagination: {
          el: '.visual .swiper-pagination',
          type: 'fraction',
        }
      });
      $(".header_menu").click(function(){
        $(".m_menu_bg").fadeIn(500);
        $(".m_menu").animate({"left":0},500);
        $(".m_menu_footer").animate({"left":0},500);
        $("body").css({"overflow":"hidden"});
      });
      $(".m_close").click(function(){
        $(".m_menu_bg").fadeOut(500);
        $(".m_menu").animate({"left":"-100%"},500);
        $(".m_menu_footer").animate({"left":"-100%"},500);
        $("body").css({"overflow":"auto"});
      });
      var on = true;
      $(".footer_order_wrap h6").click(function(){
        $(".order_info_wrap").stop().slideToggle();
        $(".footer_order_wrap .info_arrow").stop().toggleClass("on");
      });
});
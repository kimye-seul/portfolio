$(function(){
    $('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
        navigation:true,
        keyboardScrolling: false,
        slidesNavigation: true,
        slidesNavPosition: 'right',
        controlArrows: false,
	});
	//methods
	$.fn.fullpage.setAllowScrolling(true);
    $('.main').addClass('on');
    $('#fp-nav ul li a span').css({'color':'transparent'});
    //m_menu 
    $('.btn_menu').click(function(){
        $('.m_menu_bg').fadeIn(400);
        $('.m_menu').animate({'right':0},400);
    });
    $('.btn_close').click(function(){
        $('.m_menu_bg').fadeOut(400);
        $('.m_menu').animate({'right':'-100%'},400);
    });
    $('.m_menu_list>li').hover(function(){
        $(this).find('ul').stop().slideDown();
    },function(){
        $(this).find('ul').stop().slideUp();
    });

    $('.m_menu_list>li>span').click(function(){
        var m_menu_list = $(this).parent().index();
        if(m_menu_list==0){
            $('.header_inner').removeClass('on');
            $('#fp-nav ul li a span').css({'color':'transparent'});
        }
        else{
            $('.header_inner').addClass('on');
            $('#fp-nav ul li a span').css({'color':'#a4193d'});
        }
        $.fn.fullpage.moveTo(m_menu_list+1);
        $('#fullpage>div').eq(m_menu_list).addClass('on').siblings().removeClass('on');
        $('.m_menu_bg').fadeOut(400);
        $('.m_menu').animate({'right':'-100%'},400);
    });
    $('.m_menu_list>li ul>li>span').click(function(){
        var m_menu_list2 = $(this).parent().index();
        $.fn.fullpage.moveTo(3,m_menu_list2);
        $('.m_menu_bg').fadeOut(400);
        $('.m_menu').animate({'right':'-100%'},400);
        $('.header_inner').addClass('on');
    });
    //main
    $('.btn_section2').click(function(){
        $.fn.fullpage.moveTo(2);
        $('.header_inner').addClass('on');
        $('.aboutme').addClass('on');
        $('#fp-nav ul li a span').css({'color':'#a4193d'});
    });
    //mousewheel
    $(document).mousewheel(function(){
        if($('.main').hasClass('active')){
            $('.header_inner').removeClass('on');
            $('.main').addClass('on');
            $('.aboutme').removeClass('on');
            $('#fp-nav ul li a span').css({'color':'transparent'});
        }
        else if($('.aboutme').hasClass('active')) {
            $('.header_inner').addClass('on');
            $('.main').removeClass('on');
            $('.aboutme').addClass('on');
            $('#fp-nav ul li a span').css({'color':'#a4193d'});
        }
        else {
            $('.aboutme').removeClass('on');
        }
    });
    //menu_list_click
    $('#fp-nav ul li a').click(function(){
        var fp_li=$(this).parent().index();
        if(fp_li==0){
            $('.header_inner').removeClass('on');
            $('#fp-nav ul li a span').css({'color':'transparent'});
        }
        else{
            $('.header_inner').addClass('on');
            $('#fp-nav ul li a span').css({'color':'#a4193d'});
        }
        $('#fullpage>div').eq(fp_li).addClass('on').siblings().removeClass('on');
    });
    $('.header_inner h1').click(function(){
        $.fn.fullpage.moveTo(1);
        $('.header_inner').removeClass('on');
        $('.main').addClass('on');
    });
    $('.ft_depth1>li').click(function(){
        var ft_depth1 = $(this).index();
        if(ft_depth1==0){
            $('.header_inner').removeClass('on');
            $('#fp-nav ul li a span').css({'color':'transparent'});
        }
        else{
            $('.header_inner').addClass('on');
            $('#fp-nav ul li a span').css({'color':'#a4193d'});
        }
        $.fn.fullpage.moveTo(ft_depth1+1);
        $('#fullpage>div').eq(ft_depth1).addClass('on').siblings().removeClass('on');
    });

    $('.ft_depth2>li').click(function(){
        var ft_depth2 = $(this).index();
        $.fn.fullpage.moveTo(3,ft_depth2);
    });


    var sec_list = ['MAIN','ABOUT ME','PORFOLIO','CONTACT'];
    for(var i=0;i<sec_list.length;i++){
        $('#fp-nav ul li').eq(i).find('span').text(sec_list[i]);
    }
    var sec_list2 = ['WEB','MOBILE','RESPONSIVE'];
    for(var i=0;i<sec_list.length;i++){
        $('.fp-slidesNav ul li').eq(i).find('span').text(sec_list2[i]);
    }
    $('.m_menu_wrap .m_menu .m_menu_list>li ul li span').click(function(){
        $('#fp-nav ul li a span').css({'color':'#a4193d'});
    });
    // preview
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        touchRatio: 0,
        observer: true,
        observeParents: true,
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
    $('.btn_preview').click(function(){
        $('body,html').on('scroll touchmove mousewheel', function(e){
            e.preventDefault();
            e.stopPropagation(); 
            return false;
            });
    })
    $('.web .btn_preview').click(function(){
          var preview_li = $(this).parents('li').index();
          $('.web_preview').fadeIn();
          $('.web_preview>li').eq(preview_li).fadeIn();
    });
    $('.mobile .btn_preview').click(function(){
        var preview_li = $(this).parents('li').index();
        $('.mobile_preview').fadeIn();
        $('.mobile_preview>li').eq(preview_li).fadeIn();
    });
    $('.responsive .btn_preview').click(function(){
        var preview_li = $(this).parents('li').index();
        $('.responsive_preview').fadeIn();
        $('.responsive_preview>li').eq(preview_li).fadeIn();
    });
    $('.btn_view_close').click(function(){
        $('.preview_modal_wrap').fadeOut();
        $('.preview_modal_wrap>li').fadeOut();
        $('body,html').off('scroll touchmove mousewheel');
    });   
});
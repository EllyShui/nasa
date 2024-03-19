$(document).ready(function(){
    // ---------- 공통 ---------- //
    // 서브메뉴
    $('.main_menu>li:first-child').click(function(){
        $('.sub_menu').toggle();
    });
    $('.sub_menu>li').click(function(){
        $(this).addClass('sub_on').siblings().removeClass();        
    });

    // lang
    $('.lang img').click(function(){
        $('.select_lang').slideDown(300);
        $('.select_lang>span').click(function(){
            $('.select_lang').slideUp(300);
        });
    });
    

    // ---------- resize ---------- //
    $(window).resize(function(){
        w_width = $(window).outerWidth();
        last_sT = $(window).scrollTop;
        document.location.reload();
    });


    // ---------- 반응형 ---------- //
    let w_width, w_sT, last_sT;

    w_width = $(window).outerWidth();
    last_sT = 0;

    if(w_width > 1440){ // PC
        // 메인메뉴
        $('header').css({'top':'24px'});

        // search
        $('#search_in').focus(function(){
            $(this).addClass('search_mag');
        });
        $('#search_in').blur(function(){
            $(this).removeClass('search_mag');
        });
    }
    if(w_width > 768 && w_width <= 1440){ // 태블릿
        // 메인메뉴
        $('header').css({'top':'24px'});
        menu_move();

        // search
        $('#search_in').focus(function(){
            $(this).addClass('search_mag');
        });
        $('#search_in').blur(function(){
            $(this).removeClass('search_mag');
        });
    }
    if(w_width <= 768){ // 모바일
        // 메인메뉴
        $('header').css({'top':'0'});
        menu_move_m();

        // 서브메뉴
        $('.sub_on').removeClass();
        $('.sub_menu>li>a').prop('href','missions.html');
    }


    // ---------- functions ---------- //
    // menu
    function menu_move(){
        $(window).scroll(function(){
            w_sT = $(window).scrollTop();
            // console.log(w_sT,last_sT);
            if(w_sT >= 84){
                $('header').stop().animate({'top':'-60px'},100);
            }else{
                $('header').stop().animate({'top':'24px'},100);
            }
            if(last_sT > w_sT){
                $('header').stop().animate({'top':'24px'},100);
            }
            last_sT = w_sT;
        });
    }
    function menu_move_m(){
        $(window).scroll(function(){
            w_sT = $(window).scrollTop();
            // console.log(w_sT,last_sT);
            if(w_sT >= 49){
                $('header').stop().animate({'top':'-49px'},100);
            }else{
                $('header').stop().animate({'top':'0'},100);
            }
            if(last_sT > w_sT){
                $('header').stop().animate({'top':'0'},100);
            }
            last_sT = w_sT;
        });
    }
    
});
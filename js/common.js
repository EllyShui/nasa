$(document).ready(function(){
    // 서브메뉴
    $('.main_menu>li:first-child').click(function(){
        $('.sub_menu').toggle();
    });
    $('.sub_menu>li').click(function(){
        $(this).addClass('sub_on').siblings().removeClass();        
    });

    // 반응형
    var w_width = $(window).width() + 17;
    if(w_width > 768 && w_width <= 1440){ // 태블릿
        // search
        $('#search_in').focus(function(){
            $(this).addClass('search_mag');
        });
        $('#search_in').blur(function(){
            $(this).removeClass('search_mag');
        });
    }
    if(w_width <= 768){ // 모바일
        // 서브메뉴
        $('.sub_on').removeClass();
        $('.sub_menu>li>a').prop('href','missions.html');
    }

    // 사이즈 조절 
    $(window).resize(function(){
        var r_width=$(window).width();
        if(r_width > 768){// PC & 태블릿
            // 서브메뉴
            $('.sub_menu>li:first-child').addClass('sub_on');
            $('.sub_menu>li>a').prop('href','#');
        }
        if(r_width <= 768){// 모바일
            // 서브메뉴
            $('.sub_on').removeClass();
            $('.sub_menu>li>a').prop('href','missions.html');
        }
    });
});
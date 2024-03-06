$(document).ready(function(){
    // 서브메뉴
    $('.main_menu>li:first-child').click(function(){
        $('.sub_menu').toggle();
    });
    $('.sub_menu>li').click(function(){
        $(this).addClass('sub_on').siblings().removeClass();        
    });

    // 반응형
    var w_width = $(window).width();
    if(w_width > 768 && w_width <= 1440){ // 태블릿
        // right_menu 검색
        // $('#search_in').click(function(){
        //     let search_style = this.style;
        //     $(this).css({
        //         'width':'100%',
        //         'height':'100px',
        //         'border-radius':'10px',
        //         'padding':'0 8px',
        //         'line-height':'30px',
        //         'background':'#292929',
        //         'color':'#f5f5f5',
        //         'text-align':'center',
        //         'font-size':'22px',
        //         'position':'absolute',
        //         'top':'110%',
        //         'left':'0',
        //         'transition':'0.6s'
        //     });
        //     $('.search img').click(function(){
        //         $('#search_in').css({
        //             'width':'160px',
        //             'height':'22px',
        //             'margin-right':'5px',
        //             'border-radius':'4px',
        //             'padding':'0 4px',
        //             'line-height':'20px',
        //             'background':'rgba(0,0,0,0)',
        //             'color':'#dddddd',
        //             'font-size':'18px',
        //             'text-align':'right'
        //         });
        //     });
        // });
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
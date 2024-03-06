$(document).ready(function(){
    // -------------------- article1 - main_news
    // 슬라이드 함수
    function circle(){ // 10초 circle
        $('.slide_num svg circle').css({'stroke-dashoffset':'0'});
        $('.slide_num svg circle').stop().animate({'stroke-dashoffset':'700'},9900,'linear');
    }
    function slide_next(){// 슬라이드 다음 이동
        setTimeout(circle,0);
        let first = $('.main_slide>li:first-child');
        $('.main_slide').stop().animate({'margin-left':'-100%'},600,function(){
            first.appendTo('.main_slide');
            $(this).css({'margin-left':'0'});
            let li_class = $(this).children(':first').attr('class'),
                num = li_class.slice(-1),
                length = $(this).children().length;
            document.querySelector('.slide_num span').innerText = num+' / '+length;
        });
    }
    function slide_prev(){// 슬라이드 이전 이동
        setTimeout(circle,0);
        let last = $('.main_slide>li:last-child');
        last.prependTo('.main_slide');
        $('.main_slide').css({'margin-left':'-100%'});
        $('.main_slide').stop().animate({'margin-left':'0'},600,function(){
            let li_class = $(this).children(':first').attr('class'),
                num = li_class.slice(-1);
                length = $(this).children().length;
            document.querySelector('.slide_num span').innerText = num+' / '+length;
        });
    }

    // 자동 슬라이드
    let auto = setInterval(slide_next,10000);
    circle();
    // 수동 슬라이드
    $('.btn_left').click(function(){// 이전 버튼
        slide_prev();
        clearInterval(auto); // 자동 슬라이드 멈추고 다시시작
        auto = setInterval(slide_next,10000);
    });
    $('.btn_right').click(function(){// 다음 버튼
        slide_next();
        clearInterval(auto);
        auto = setInterval(slide_next,10000);
    });
    // 슬라이드 누르고 있으면 자동 일시정지




    // -------------------- article2 - featured mission
    $('.m_ct>li').click(function(){
        let idx = $(this).index();
        $(this).addClass('m_ct_on').siblings().removeClass();
        $('.m_article>li').eq(idx).addClass('m_on').siblings().removeClass();
    });

});
$(document).ready(function(){
    let num, //1,2,3,4,5,6,7,8
        num_page; //1234>0,5678>1


    // 이미지 change
    $('.page img').click(function(){
        let img = $(this).attr('src');
        $('.dp_img img').attr('src',img);
        $(window).scrollTop(0);
    });

    // 페이지 숫자 클릭
    $('.num').click(function(){
        num = Number($(this).text());
        num_page = parseInt((num-1)/4);

        $(this).addClass('num_on').siblings('.num').removeClass('num_on');
        img_change();
        arrow();
    });
    // 화살표 클릭
    $('.arrow_right').click(function(){
        num = Number($('.num_on').text());
        num_page = parseInt((num-1)/4) + 1;

        num = (num_page)*4 + 1;

        $('.num').eq(num-1).addClass('num_on').siblings('.num').removeClass('num_on');
        img_change();
        numpage();
        arrow();
    });
    $('.arrow_left').click(function(){
        num = Number($('.num_on').text());
        num_page = parseInt((num-1)/4) - 1;

        num = (num_page)*4 + 1;

        $('.num').eq(num-1).addClass('num_on').siblings('.num').removeClass('num_on');
        img_change();
        numpage();
        arrow();
    });





    function numpage(){ // numpage change
        $('.num_btn li').hide();
        for(let i = num_page*4; i<(num_page*4)+4; i++){
            $('.num_btn li').eq(i).show();
        }
    }
    function img_change(){ // page li change
        $('.page li').hide();
        for(let i=0;i<15;i++){
            $('.page li').eq((15*(num - 1))+i).show();
        }
    }
    function arrow(){ // arrow color
        if(num_page == 0){
            $('.arrow_left').css({'pointer-events':'none'});
            $('.arrow_right').css({'pointer-events':'auto'});
            $('.arrow_left path').css({'stroke':'#dddddd'});
            $('.arrow_right path').css({'stroke':'#696969'});
            $('.dots').show();
        }else if(num_page == parseInt((Number($('.num:last-child').text())-1)/4)){
            $('.arrow_left').css({'pointer-events':'auto'});
            $('.arrow_right').css({'pointer-events':'none'});
            $('.arrow_left path').css({'stroke':'#696969'});
            $('.arrow_right path').css({'stroke':'#dddddd'});
            $('.dots').hide();
        }else{
            $('.arrow').css({'pointer-events':'auto'});
            $('.arrow_left path').css({'stroke':'#696969'});
            $('.arrow_right path').css({'stroke':'#696969'});
            $('.dots').show();
        }
    }

});
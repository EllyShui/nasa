$(document).ready(function(){
    let num = $('.num').text(),
        num_page,
        num_idx;
    for(let i=0;i<num.length;i++){
        num_page = parseInt((Number(num[i])-1)/4);
    }
    console.log(num_page[0]);
    // dp_img change
    $('.page li').click(function(){
        $('.dp_img').find('img').remove();
        $(this).find('img').clone().appendTo('.dp_img>div:first-child');
    });

    // num_btn
    $('.num').click(function(){
        num = Number($(this).text());
        num_idx = parseInt((num-1)/4);

        $(this).addClass('num_on').siblings('.num').removeClass('num_on');
        img_change();
    });
    
    // arrow > page_num 넘어가게
    $('.arrow_right').click(function(){
        num = Number($('.num_on').text());
        page_num = parseInt((num-1)/4);

        page_num += 1;
        num = page_num*4 + 1;
        num_change();
    });









    function img_change(){
        // page li change
        $('.page li').hide();
        for(let i=0;i<15;i++){
            $('.page li').eq((15*(num - 1))+i).show();
        }

        // arrow color
        $('.arrow_left path').css({'stroke':'#696969'});
        $('.arrow_right path').css({'stroke':'#696969'});
        $('.arrow').css({'pointer-events':'auto'});
        $('.dots').show();
        if(page_num == 1){
            $('.arrow_left').css({'pointer-events':'none'});
            $('.arrow_right').css({'pointer-events':'auto'});
            $('.arrow_left path').css({'stroke':'#dddddd'});
            $('.arrow_right path').css({'stroke':'#696969'});
        }else if(page_num == parseInt((Number($('.num:last-child').text())-1)/4)){
            $('.arrow_left').css({'pointer-events':'auto'});
            $('.arrow_right').css({'pointer-events':'none'});
            $('.arrow_left path').css({'stroke':'#696969'});
            $('.arrow_right path').css({'stroke':'#dddddd'});
            $('.dots').hide();
        }
    }

    function num_change(){
        $('.num_btn li').hide();
        for(let i = page_num*4; i<(page_num*4)+4; i++){
            $('.num_btn li').eq(i).show();
        }
    }
});
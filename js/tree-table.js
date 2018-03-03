/**
 * Created by 魏阁 on 2017-10-26.
 */
$(function () {
    // 勾选
    $('.ckeck-box').click(function () {
        $(this).toggleClass('active')
        if($(this).hasClass('ckeck-all')){
            if($(this).hasClass('active')){
                $('.ckeck-box').addClass('active')
            } else{
                $('.ckeck-box').removeClass('active')
            }
        }
    })
})
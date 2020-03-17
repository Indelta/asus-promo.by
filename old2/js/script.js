/**
 * Created by Designer on 15.11.2016.
 */

// Автоматические открытие скрытых блоков при нажатии кнопки в сравнении
function fullVersion(block){
    $(block).find('.visibleBlock .more').hide();
    $(block).find('.hiddenBlocks').show('slow');
    $(block).find('.visibleBlock .right .description').css('padding-bottom', '95px');
    $(block).find('.visibleBlock .left .description').css('padding-bottom', 0);
}

/*Hidden blocks show*/
$(document).ready(function() {
    $('.MaxMore, .LiveMore').click(function(){
        $(this).hide();
        $(this).parent().find('.firstParam').show();
        $(this).closest('.visibleBlock').parent().find('.hiddenBlocks').show('slow');
        $(this).closest('.visibleBlock').find('.right .description').css('padding-bottom', '95px');
        $(this).closest('.visibleBlock').find('.left .description').css('padding-bottom', '95px');
    });
});

/*Scroll*/
$(document).ready(function() {

    $('.compare .more a').click(function () {
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top - 50
        }, 1000);
        fullVersion(el);
    });

    $('.compare .Imganchor').click(function () {
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top - 50
        }, 1000);
    });

    $('.fixedHeader a').click(function () {
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top-80
        }, 1000);
        return false;
    });

    $('.fixedHeader img').click(function () {
        $('body,html').animate({
            scrollTop: $('body,html').offset().top
        }, 1000);
        return false;
    });


    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $(".fixedHeader").show(100);

        } else {
            $(".fixedHeader").hide(100);
        }
    });
});

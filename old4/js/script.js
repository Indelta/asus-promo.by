/**
 * Created by Designer on 15.11.2016.
 */

/*Scroll*/
$(document).ready(function() {

    $('.compare .more a, .shops a').click(function () {
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top
        }, 1000);
        return false;
    });

    $('.fixedHeader a').click(function () {
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top-80
        }, 1000);
        return false;
    });

    $('.fixedHeader img').click(function () {
        $('body').animate({
            scrollTop: $('body').offset().top
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

/*Hidden blocks show*/
$(document).ready(function() {

    $('.ZenMore, .RogMore').click(function(){
        $(this).hide();
        $(this).parent().find('.firstParam').show();
        $(this).closest('.visibleBlock').parent().find('.hiddenBlocks').show('slow');
        $(this).closest('.visibleBlock').css('padding-bottom', 0);
    });

});

/*Shops shine*/
$(document).ready(function () {
   $('.RogHref .hiddenBlocks .shops a').click(function () {
       $('footer .right img').addClass('shine');
       function removeShine() {
           $('footer .right img').removeClass('shine');
       }
       setTimeout(removeShine, 2000);
   })
});
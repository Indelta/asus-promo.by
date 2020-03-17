/**
 * Created by Designer on 15.11.2016.
 */

/*Scroll*/
$(document).ready(function() {
    $('.header nav a').click(function () {
        var el = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(el).offset().top
        }, 1000);
        return false;
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

/*Old phone broken*/
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 500) {
            $('.newscreen .phone .oldpart').addClass('newPosition');
        }
    });
});

/*Know more morescreen block show*/
$(document).ready(function () {
    $('.newscreen .button').click(function () {
        $(this).addClass('opacity');
        $('.morescreen').show();
        $('html, body').animate({
            scrollTop: $('.morescreen').offset().top
        }, 1000);
    });
});

/*Show more photos*/
$(document).ready(function () {
    $('.color .button').click(function () {
        $(this).addClass('opacity');
        $('.color .hiddengallery').show();
    })
});

/*Show charakteristic*/
$(document).ready(function () {
    $('.view3d .button').click(function () {
        $(this).addClass('opacity');
        $('.charakter').show();
        $('html, body').animate({
            scrollTop: $('.charakter').offset().top
        }, 1000);
    })
});

/*oOld camera animation*/
$(document).ready(function(){

    var container = $('#container'),
        li = container.find('li');

    // Using the tzShutter plugin. We are giving the path
    // to he shutter.png image (located in the plugin folder), and two
    // callback functions.

    container.tzShutter({
        imgSrc: 'img/shutter.png',
        closeCallback: function(){

            // Cycling the visibility of the li items to
            // create a simple slideshow.

            li.filter(':visible:first').hide();

            if(li.filter(':visible').length == 0){
                li.show();
            }

            // Scheduling a shutter open in 0.1 seconds:
            setTimeout(function(){container.trigger('shutterOpen')},100);
        },
        loadCompleteCallback:function(){
            setInterval(function(){
                container.trigger('shutterClose');
            },4000);

            container.trigger('shutterClose');
        }
    });

});
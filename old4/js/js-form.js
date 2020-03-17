$(document).ready(function () {

    $("form").submit(function(e) {
        var ref = $(this).find("required");
        $(ref).each(function(){
            if ( $(this).val() == '' )
            {
                alert("Поле не должно быть пустое!");
                $(this).focus();
                e.preventDefault();
                return false;
            }
        });  return true;
    });

    /*
     форма Консультация - дочерние страницы
     */
    $('#consultationForm').submit(function () {
        console.log("Отправка");
        var but = $(this).find('input[type="submit"]');
        but.prop( 'disabled', true ).val('Отправка...');
        var form = $('#consultationForm');
        var phone = $('#consultationForm #phone');
        var form_data = form.serialize();
        var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;

        if (phone.val().length < 7) {
            phone
                .animate({backgroundColor: "#ff0000", opacity: 0.8}, 300)
                .animate({backgroundColor: "#fff", opacity: 1}, 300);
            but.prop( 'disabled', false ).val('Запросить консультацию');
        }
        else if ($('#name').val().length < 2){
            $('#name')
                .animate({backgroundColor: "#ff0000", opacity: 0.8}, 300)
                .animate({backgroundColor: "#fff", opacity: 1}, 300);
            but.prop( 'disabled', false ).val('Запросить консультацию');
        }
        // else if ($('#email').val().length < 5 || $('#email').val().search(pattern) != 0){
        //     $('#email')
        //         .animate({backgroundColor: "#ff0000", opacity: 0.8}, 300)
        //         .animate({backgroundColor: "#fff", opacity: 1}, 300);
        //     but.prop( 'disabled', false ).val('Запросить консультацию');
        // }

        else {
            $.ajax({
                type: "POST",
                url: "send/send.php",
                data: form_data,
                cache: false,
                success: function () {
                    yaCounter41537549.reachGoal('Consultation');
                    ga('send', 'event', 'Btn', 'Click', 'Consultation');

                    $('#consultationForm').fadeOut(300, function () {
                        $('#consultationForm').trigger('reset');
                        $(this).after("<div class='thankYou'>Спасибо за Ваш запрос. Менеджер свяжется с Вами в ближайшее время</div>");
                        $('.fancybox-inner').css("height","auto");
                        $('.fancybox-inner').css("width","auto");
                    });
                    setTimeout(function () {
                        $('#consultationForm').fadeIn(300).siblings('.thankYou').remove();
                        but.prop( 'disabled', false ).val('Запросить консультацию');
                    }, 10000);

                }

            });
        }
        return false;
    });

    /*
    форма Заявка
    */
    $('#zayavkaForm').submit(function () {
        console.log("Отправка");
        var but = $(this).find('input[type="submit"]');
        but.prop( 'disabled', true ).val('Отправка...');
        var form = $('#zayavkaForm');
        var phone = $('#zayavkaForm #zayavkaphone');
        var form_data = form.serialize();

        if ($('#zayavkaname').val().length < 2) {
            $('#zayavkaname')
                .animate({backgroundColor: "#ff0000", opacity: 0.8}, 300)
                .animate({backgroundColor: "#fff", opacity: 1}, 300);
            but.prop( 'disabled', false ).val('Отправить запрос');
        } else if (phone.val().length < 7) {
            phone
                .animate({backgroundColor: "#ff0000", opacity: 0.8}, 300)
                .animate({backgroundColor: "#fff", opacity: 1}, 300);
            but.prop( 'disabled', false ).val('Отправить запрос');
        }

        else {
            $.ajax({
                type: "POST",
                url: "send/send.php",
                data: form_data,
                cache: false,
                success: function () {
                    yaCounter41537549.reachGoal('Consultation');
                    ga('send', 'event', 'Btn', 'Click', 'Consultation');

                    $('#zayavkaForm').fadeOut(300, function () {
                        $('#zayavkaForm').trigger('reset');
                        $(this).after("<div class='thankYou'>Спасибо за Ваш запрос. Менеджер свяжется с Вами в ближайшее время</div>");
                        $('.fancybox-inner').css("height","auto");
                        $('.fancybox-inner').css("width","auto");
                    });
                    setTimeout(function () {
                        $('#zayavkaForm').fadeIn(300).siblings('.thankYou').remove();
                        but.prop( 'disabled', false ).val('Отправить запрос');
                    }, 10000);

                }

            });
        }
        return false;
    });

    /*
    форма Получить каталог курсов, Подписка на новости, Получить каталог решений
    */
    $('#emailForm, #newsForm, #solutionsForm').submit(function () {
        console.log("Отправка");
        var but = $(this).find('input[type="submit"]');
        but.prop( 'disabled', true ).val('Отправка...');
        var form = $(this);
        var form_data = form.serialize();
        var email = form.find('input[name="email"]');
        var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;

        if (email.val().length < 2 || email.val().search(pattern) != 0){
            email
                .animate({backgroundColor: "#ff0000", opacity: 0.8}, 300)
                .animate({backgroundColor: "#fff", opacity: 1}, 300);
            but.prop( 'disabled', false ).val('Получить');
        }

        else {
            $.ajax({
                type: "POST",
                url: "send/send.php",
                data: form_data,
                cache: false,
                success: function () {
                    if(form.find('input[name="type"]').val() == 'Получить каталог решений') {
                        yaCounter41537549.reachGoal('DownloadCatalogSolutions');
                        ga('send', 'event', 'Btn', 'Click', 'DownloadCatalogSolutions');
                    }

                    if(form.find('input[name="type"]').val() == 'Получить каталог курсов'){
                        yaCounter41537549.reachGoal('DownloadCatalogCourses');
                        ga('send', 'event', 'Btn', 'Click', 'DownloadCatalogCourses');
                    }

                    if(form.find('input[name="type"]').val() == 'Подписаться на новости'){
                        yaCounter41537549.reachGoal('SubscribeToNews');
                        ga('send', 'event', 'Btn', 'Click', 'SubscribeToNews');
                    }

                    form.fadeOut(300, function () {
                        form.trigger('reset');

                        if(form.find('input[name="type"]').val() == 'Получить каталог решений' || form.find('input[name="type"]').val() == 'Получить каталог курсов'){
                            $(this).after("<div class='thankYou'>Спасибо за Ваш запрос. Мы вышлем каталог на ваш e-mail в ближайшее время</div>");
                        }
                        else{
                            $(this).after("<div class='thankYou'>Спасибо за Ваш запрос. Вы подписаны на рассылку новостей</div>");
                        }
                        $('.fancybox-inner').css("height","auto");
                        $('.fancybox-inner').css("width","auto");
                    });
                    setTimeout(function () {
                        form.fadeIn(300).siblings('.thankYou').remove();
                        but.prop( 'disabled', false ).val('Получить');
                    }, 10000);

                }

            });
        }
        return false;
    });

    /*
     форма Заказ звонка
     */
    $('#callForm').submit(function () {
        console.log("Отправка");
        var but = $(this).find('input[type="submit"]');
        but.prop( 'disabled', true ).val('Отправка...');
        var form = $(this);
        var form_data = form.serialize();
        var phone = form.find('input[name="phone"]');

        if (phone.val().length < 7) {
            phone
                .animate({backgroundColor: "#ff0000", opacity: 0.8}, 300)
                .animate({backgroundColor: "#fff", opacity: 1}, 300);
            but.prop( 'disabled', false ).val('Заказать звонок');
        } else {
            $.ajax({
                type: "POST",
                url: "send/send.php",
                data: form_data,
                cache: false,
                success: function () {
                    yaCounter41537549.reachGoal('ZakazZvonka');
                    ga('send', 'event', 'Btn', 'Click', 'ZakazZvonka');

                    form.fadeOut(300, function () {
                        form.trigger('reset');
                        $(this).after("<div class='thankYou'>Спасибо за Ваш запрос. Менеджер свяжется с Вами в ближайшее время</div>");
                        $('.fancybox-inner').css("height","auto");
                        $('.fancybox-inner').css("width","auto");
                    });
                    setTimeout(function () {
                        form.fadeIn(300).siblings('.thankYou').remove();
                        but.prop( 'disabled', false ).val('Заказать звонок');
                    }, 10000);

                }

            });
        }
        return false;
    });

});
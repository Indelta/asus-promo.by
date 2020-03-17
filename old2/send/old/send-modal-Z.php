<?php
error_reporting(E_ALL);
ini_set('log_errors', 'On');
ini_set('error_log', 'php_errors.log');
    $name = $_POST['Zname'];
    $company = $_POST['Zcompany'];
    $position = $_POST['Zposition'];
    $email = $_POST['Zemail'];
    $code = $_POST['Zcode'];
    $phone = $_POST['Zphone'];
    $phone = preg_replace("/[^0-9]/", '', $phone);
    $codeavailability = $_POST['ZpromoA'];
    $promo = $_POST['Zpromo'];
    $adres = $_POST['Zadres'];
    $course  = stripslashes($_POST['Zcourse']);
    if(!empty($_POST['Zcourse'])) {
        foreach($_POST['Zcourse'] as $check) {
            $course .= $check .', ';
        }
    }
    $other = $_POST['ZotherName'];

    $mes = "
        <p>Имя: $name</p>
        <p>Компания: $company</p>
        <p>Должность: $position</p>
        <p>E-mail: $email</p>
        <p>Телефон: 375$code$phone</p>
        <p>Наличие промо-кода: $codeavailability</p>
        <p>Промо-код: $promo</p>
        <p>Вопрос: $adres</p>
        <p>Интересующие курсы: $course</p>
        <p>Другие курсы: $other</p>
    ";

    //deltaplanirovanie@gmail.com,n.zelenko@elcoregroup.com
    $to = "deltaplanirovanie@gmail.com, pr@retsolmedia.by, pamidork@gmail.com"; //
    $sub = '=?utf-8?B?' . base64_encode('Заявка с elko-cisco.by') . '?=';
    $headers = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: elko-cisco.by\r\n";
    $backurl = "http://www.elko-cisco.by/";


    if (mail("$to", "Заявка c elko-cisco.by", "$mes", "$headers")) {
//        sms($_POST['phone'], '375295380300');
        echo "1";
    }


function sms($phone, $number)
{
    $url = "http://cp.websms.by";
    $timeout = 5;
    $func = 'msg_send_bulk';

    $package = array(
        array(
            'recipient' => $number,
            'message'   => "Заявка elko-cisco.by\nТелефон: $phone",
            'sender'    => 'DeltaPlanBY'
        ),
    );

    $rawData = json_encode($package);
    $ch = curl_init();

//задаем параметры CURL
    curl_setopt_array($ch, array(
        CURLOPT_URL            => $url,
        CURLOPT_FAILONERROR    => 1,
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_TIMEOUT        => $timeout,
        CURLOPT_CONNECTTIMEOUT => 0,
        CURLOPT_POST           => 1,
        CURLOPT_POSTFIELDS     => array(
            'r'        => 'api/' . $func,
            'user'     => 'deltaplanirovanie@gmail.com',
            'apikey'   => '0UmzxrSo9x',
            'messages' => $rawData)
    ));

    $result = curl_exec($ch);

    if ($result) {
        $__BOM = pack('CCC', 239, 187, 191);
        while (0 === strpos($result, $__BOM)) $result = substr($result, 3);
        $result = json_decode($result);
    } else {
        echo 'Ошибка доступа к сервису !';
    }

    curl_close($ch);
}
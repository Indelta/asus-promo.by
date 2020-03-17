<?php
/**
 * Created by PhpStorm.
 * User: Programmer
 * Date: 13.02.2017
 * Time: 11:31
 */

error_reporting(E_ALL);
ini_set('log_errors', 'On');
ini_set('error_log', 'php_errors.log');

if(!empty($_POST['name'])){
    $name = $_POST['name'];
    $mes = "<p>Имя: $name</p>";
}
if(!empty($_POST['company'])){
    $company = $_POST['company'];
    $mes.="<p>Компания: $company</p>";
}
if(!empty($_POST['email'])){
    $email = $_POST['email'];
    $mes.="<p>E-mail: $email</p>";
}
if(!empty($_POST['phone'])){
    $phone = $_POST['phone'];
    $phone = preg_replace("/[^0-9]/", '', $phone);
    $mes.="<p>Телефон: $phone</p>";
}
if(!empty($_POST['svyaz'])){
    $svyaz = $_POST['svyaz'];
    $mes.="<p>Способ связи: $svyaz</p>";
}
if(!empty($_POST['question'])){
    $question = $_POST['question'];
    $mes.="<p>Вопрос: $question</p>";
}
if(!empty($_POST['promo'])){
    $promo = $_POST['promo'];
    $mes.="<p>Промо-код: $promo</p>";
}
if(!empty($_POST['type'])){
    $type = $_POST['type'];
    $mes.="<p>Отправлено из формы: $type</p>";
}


    //deltaplanirovanie@gmail.com,n.zelenko@elcoregroup.com
    $to = "deltaplanirovanie@gmail.com, pr@retsolmedia.by, pamidork@gmail.com, dev@deltapnan.by, n.zelenko@elcoregroup.com"; //
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
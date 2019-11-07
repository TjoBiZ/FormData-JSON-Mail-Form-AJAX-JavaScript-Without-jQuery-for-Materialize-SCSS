<?php
// This is script MaterializeCSS use 3 PHP products. You must integration it if you need those functional
// 1) PHPMailer do email message from forms - https://github.com/PHPMailer/PHPMailer
// 2) SMS.RU do mobile sms message from forms too you phone number - https://sms.ru (You need this account)
// 3) Telegram privet room (High security channel) for message to your mobile and employers mobiles your company. - https://github.com/tg-bot-api/bot-api-base
// And my scripts joker@tjo.biz. Support only of money.
// Handling data in JSON format on the server-side using PHP
header("Content-Type: application/json");
// build a PHP variable from JSON sent using POST method
$arrayfromjsonmail = json_decode(stripslashes(file_get_contents("php://input")), true);
//if without parameter "true", then get object from json, with "true" get array. You can choose object or array, if you want. It's different data variation then.
//To access the object in your PHP file, use
//$v->name;
//$v->email;
//$v->subject;
//$v->message;
//echo json_encode($v);

$arrayfromjsonmail["ip"] = $_SERVER['REMOTE_ADDR'];
$arrayfromjsonmail['pageform'] = $_SERVER['HTTP_REFERER'];
$project_name = $arrayfromjsonmail['name']. '. ('. $arrayfromjsonmail['formName'].').'; //Title later

/** Start code for SMS mobile message **/

require_once 'sms.ru.php';

$smsru = new SMSRU('B406B5AF-D7D7-6F91-D669-XXXXXXXXXXXXXX'); // Your key account API, you can take in your profile in sms.ru

$data = new stdClass();
/* If one variation text for different phone numbers then -> */
$data->to = '66800323660,66800343991'; // Phones for get SMS from forms (max 100 numbers). Вторым указан городской номер, по которому будет возвращена ошибка
$data->text = 'Коммерческая недвижимость ' . $arrayfromjsonmail['tel']; // SMS Message to mobile
/* Если текст разный. В этом случае $data->to и $data->text обрабатываться не будут и их можно убрать из кода */
//$data->multi = array( // От 1 до 100 штук за раз
//	"79533606633" => "Hello World", // 1 номер
//	"74993221627" => "Hello World 2", // 2 номер (указан городской номер, будет возвращена ошибка)
//);
$data->from = 'Forms-BOT'; // Если у вас уже одобрен буквенный отправитель, его можно указать здесь, в противном случае будет использоваться ваш отправитель по умолчанию
// $data->time = time() + 7*60*60; // Отложить отправку на 7 часов
// $data->translit = 1; // Перевести все русские символы в латиницу (позволяет сэкономить на длине СМС)
$data->test = 1; // Позволяет выполнить запрос в тестовом режиме без реальной отправки сообщения
// $data->partner_id = '258350'; // Можно указать ваш ID партнера, если вы интегрируете код в чужую систему
$request = $smsru->send($data); // Отправка сообщений и возврат данных в переменную

if ($request->status == "OK") { // Запрос выполнен успешно
	foreach ($request->sms as $phone => $sms) { // Перебираем массив отправленных сообщений
		if ($sms->status == "OK") {
			$arrayfromjsonmail['smsru'] = "Сообщение на номер +$phone отправлено успешно. ID сообщения: $sms->sms_id. Ваш новый баланс: $request->balance";
		} else {
			$arrayfromjsonmail['smsru'] = "Сообщение на номер +$phone не отправлено. Код ошибки: $sms->status_code. Текст ошибки: $sms->status_text. ";
		}
	}
}
/** End Mobile message code **/

//Script Foreach
$c = true;

//guard for xss (firewall for html tags and js scripts injection)
	function recurse_array_HTML_safe(&$arr) {
		foreach ($arr as $key => $val)
			if (is_array($val))
				recurse_array_HTML_safe($arr[$key]);
			else
				$arr[$key] = htmlspecialchars($val, ENT_QUOTES);
	}

	recurse_array_HTML_safe($arrayfromjsonmail);

$arrayfromjsonmail["ip"] = "<a href=\"https://www.iptrackeronline.com/index.php?ip_address=" . $_SERVER['REMOTE_ADDR'] . "\" target=\"_blank\">Посмотреть где находится IP " . $_SERVER['REMOTE_ADDR'] . "</a>"; // This is link for check IP address on earth map.

		$translateformnamecolumn = [
			'formName' => 'Название формы',
			'name' => 'Имя',
			'tel' => 'Телефон',
			'email' => 'Почтовый адрес',
			'message' => 'Сообщение',
			'datepicker' => 'Дата события',
			'timepicker' => 'Желаемое время',
			'multipleoptions' => 'Несколько опций на выбор из выподающего списка',
			'radiochoice' => 'Одна обязатльная опция Radio',
			'shop' => 'Аренда под магазин',
			'office' => 'Покупка в офис',
			'partner' => 'Перепродажа через меня',
			'browser' => 'Используемая ОС и браузер',
			'language' => 'Язык браузера и ОС',
			'firstvititedsite' => 'Первое посещение сайта с этого браузера',
			'time' => 'Время у клиента в момент отправления формы и его часовой пояс',
			'countpages' => 'Сколько раз смотрел(а) страницу(ы) сайта',
			'ip' => 'IP адрес',
			'pageform' => 'Страница с которой отправлена форма',
			'smsru' => 'Статус SMS оповещения мобильного через сервис sms.ru'
//			yandexwebvisor => 'Ссылка на Яндекс Вебвизор '
		];

		$resulttomail = array(); // It creat result array for sent too email

		function resultdata ($translateformnamecolumn, $arrayfromjsonmail, &$resulttomail) {
			foreach ($arrayfromjsonmail as $key => $value) {
				if ($arrayfromjsonmail[$key] !== '' && $arrayfromjsonmail[$key] !== 'on' && $arrayfromjsonmail[$key] !== false && $arrayfromjsonmail[$key] !== 'false') {
					$resulttomail[$translateformnamecolumn["$key"]] = $value;
				}
			}
		}

		resultdata($translateformnamecolumn, $arrayfromjsonmail, $resulttomail);

	foreach ( $resulttomail as $key => $value ) {		//prepare e-mail table message
		if ( $value != "" && $key != "formName" ) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>': '<tr style="background-color: #d4fef2;">') . "
				<td style='padding: 10px; border: #d3cdf8 1px solid; max-width: 250px'><b>$key</b></td>
				<td style='padding: 10px; border: #d3cdf8 1px solid;'>$value</td>
			</tr>
			";
		}
}
$message = "<table style='width: 100%;'>$message</table>";

$ipfortelegram = "https://www.iptrackeronline.com/index.php?ip_address=" . $_SERVER['REMOTE_ADDR']; //prepare message for telegram

foreach ( $arrayfromjsonmail as $key => $value ) {
	if ( $value != "" && $value !== "false") {
		if ($key == "ip"){
			$messagetelegrammaterialize .= <<<HERE
<strong>$key</strong>:		<em>$ipfortelegram</em>

HERE;
		} elseif ($key) {
		$messagetelegrammaterialize .= <<<HERE
<strong>$key</strong>:		<em>$value</em>

HERE;
		}
	}
}

//SendMessage Telegram bot minimum PHP version 7.2 + Composer! If you need another version ask develop
//Instruction for privet group chat in Telegram - We use this GitHub composer - https://github.com/tg-bot-api/bot-api-base another language and bots there are - https://core.telegram.org/bots/samples
// Official Bots API - https://core.telegram.org/bots/api
//First add bot to group chat. Then click "START" in window with bot and write anything to bot, then send command to group chat /join @name_bot
//Second sent message to your bot then open API link ->
//You can find UserId https://api.telegram.org/bot<token>/<method>  example
// https://api.telegram.org/bot1066346336:AAF6lPgov2AuY5eaKBDbsi3ivYm7x1n01TA/getUpdates
// We need choose private number (second "id") with "-XXXXXX" number then message will be sent to group chat not to your bot.
require_once  __DIR__ . '/src/bot-api-base/vendor/autoload.php';

$botKey = '1066346336:AAF6lPgov2AuY5eaKBDbsi3ivYm7x1n01TA';

$requestFactory = new Http\Factory\Guzzle\RequestFactory();
$streamFactory = new Http\Factory\Guzzle\StreamFactory();
$client = new Http\Adapter\Guzzle6\Client();

$apiClient = new \TgBotApi\BotApiBase\ApiClient($requestFactory, $streamFactory, $client);
$bot = new \TgBotApi\BotApiBase\BotApi($botKey, $apiClient, new \TgBotApi\BotApiBase\BotApiNormalizer());

$userId = '-322288973'; //458901566 (bot ID), group chat ID (-322288973)
$dataParametrs = array( //Add another API telegram option for message into this array. We use this mode, pass HTML in the parse_mode field when using sendMessage.
	"parseMode" => "HTML",
);

//$message2 = 'These are examples HTMLs(caniuse) tags in Telegram(Check it in PC and mobile view):
//First line:			<b>bold</b>, <strong>bold</strong>
//Second line:		<i>italic</i>, <em>italic</em>
//Third line:			<a href="http://www.example.com/">inline URL</a>
//Fourth line:		<a href="tg://user?id=123456789">inline mention of a user</a>
//Fifth line:			<code>inline fixed-width code</code>
//Sixth line:			<pre>pre-formatted fixed-width code block</pre>
//';

$bot->send(\TgBotApi\BotApiBase\Method\SendMessageMethod::create($userId, $messagetelegrammaterialize, $dataParametrs));

//End Telegram bot method SendMessage


$mail->Subject = $project_name; //Title letter
$mail->Body    = $message; //Body letter
$mail->AltBody = ''; //if you didn't use HTML format

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';

$mail = new PHPMailer(true);

try {
	//Server settings
	//$mail->SMTPDebug = 2;                                       // Enable verbose debug output // С джейсом объектом будет прилетать дебаг не забывать закоментить на рабочей версии, чтобы не быо JS ошибки.
	$mail->CharSet = 'UTF-8';
	$mail->isSMTP();                                            // Set mailer to use SMTP
//	$mail->Host       = 'smtp.zoho.com';  // Specify main and backup SMTP servers
//	$mail->SMTPAuth   = true;                                   // Enable SMTP authentication
//	$mail->Username   = 'info@andamanriviera.com';                     // SMTP username
//	$mail->Password   = 'Ge8eSFrQT3Vu';                               // SMTP password
//	$mail->SMTPSecure = 'ssl';                                  // Enable TLS encryption, `ssl` also accepted
//	$mail->Port       = 465;                                    // TCP port to connect to
//	$mail->setFrom('info@andamanriviera.com', 'BOT-Forms');
//	$mail->addAddress('info@andamanriviera.com', 'BOT-Forms');

                 $mail->Host       = 'smtp.gmail.com';  // Specify main and backup SMTP servers
                 $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
                 $mail->Username   = 'lacktic@gmail.com';                     // SMTP username
                 $mail->Password   = 'Generati0n';                               // SMTP password/
                 $mail->SMTPSecure = 'ssl';                                  // Enable TLS 587 encryption(or without encrypt), `ssl` 465 also accepted
                 $mail->Port       = 465;                                    // TCP port to connect too 465 ssl
	//Recipients
                 $mail->setFrom('lacktic@gmail.com', 'BOT-Test mail');
                 $mail->addAddress('lacktic@gmail.com', 'BOT-Test mail');     // Add a recipient  // Add a recipient
//	$mail->addAddress('ellen@example.com');               // Name is optional
//	$mail->addReplyTo('info@example.com', 'Information');
//	$mail->addCC('cc@example.com');
//	$mail->addBCC('bcc@example.com');
//	$mail->addAddress('ellen@example.com');               // Name is optional
//	$mail->addReplyTo('info@example.com', 'Information');
//	$mail->addCC('cc@example.com');
//	$mail->addBCC('bcc@example.com');

//	// Attachments
//	$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//	$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

	// Content
	$mail->isHTML(true);                                  // Set email format to HTML
	$mail->Subject = $project_name; // Subject(Title) email
	$mail->Body    = $message; //Body message to email
	$mail->AltBody = ''; // This is body message for email without HTML format

	$jsonresponse = ['name' => $arrayfromjsonmail["name"],
		'message' => $arrayfromjsonmail["message"]];

	$mail->send();

} catch (Exception $e) {

	$jsonresponse = [$arrayfromjsonmail["name"] => 'Возникла ошибка при отработке функции почты на каком-то из серверов! Попробуйте повторить через минуту или свяжитесь с нами другим способом.'];

}

echo json_encode($jsonresponse);

?>
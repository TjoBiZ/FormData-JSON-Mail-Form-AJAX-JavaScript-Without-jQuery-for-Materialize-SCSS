<?php

/*
Данный скрипт позволяет принимать callback оповещения от наших серверов, что позволит вам обрабатывать статусы сообщений в реальном времени. Чтобы этот скрипт был активен, его полный адрес необходимо указать в разделе "API Callback" (www.sms.ru/?panel=api&subpanel=cb).
Если этот функционал вам не нужен, этот файл можно удалить.
*/

foreach ($_POST["data"] as $entry) {
	$lines = explode("\n",$entry);
	if ($lines[0] == "sms_status") {

		$sms_id = $lines[1];
		$sms_status = $lines[2];

		// "Изменение статуса. Сообщение: $sms_id. Новый статус: $sms_status";
		// Здесь вы можете уже выполнять любые действия над этими данными.
	}
}
echo "100"; /* Важно наличие этого блока, иначе наша система посчитает, что в вашем обработчике сбой */

?>
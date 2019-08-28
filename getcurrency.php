<?php
//If you need you can add to server "cron" this file. Period is one hour. It change currency course in object for javascript on main html page.
function currencyTHB() {
	$json_daily_file = __DIR__.'/thb.json';
	if (!is_file($json_daily_file) || filemtime($json_daily_file) < time() - 3600) {
		if ($json_daily = file_get_contents('http://www.floatrates.com/daily/thb.json')) {
			file_put_contents($json_daily_file, $json_daily);
		}
	}

	return json_decode(file_get_contents($json_daily_file));
}

$data = currencyTHB();

$f_name = __DIR__ . '/text.html'; //html file where you can write currency course.
$contenthtmlpage = file_get_contents($f_name);
$pattern = '/^(\s)*var.*?\/\/currencythbphpcron$/m'; //You need have this row on your html file in <script> tag for work! // "	var currencythbphpcron = {thbrub:2.16939786268, thbusd: 0.0326872735523, thbcny: 0.234163831884}; //currencythbphpcron"
$replacement = '	var currencythbphpcron = {thbrub:'. $data->rub->rate .', thbusd: ' . $usd = $data->usd->rate . ', thbcny: ' . $data->cny->rate . '}; //currencythbphpcron';
 if (preg_replace($pattern, $replacement, $contenthtmlpage)) {
	 $contenthtmlpage = preg_replace($pattern, $replacement, $contenthtmlpage);
	 file_put_contents($f_name, $contenthtmlpage);
 } else {
 	echo 'wrong change currency in file';
 }

//$rub = $data->rub->rate;
//$usd = $data->usd->rate;
//$cny = $data->cny->rate;
//echo "Today is currency course THB of RUB, USD, CNY: $rub, $usd, $cny";

<?php

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
$rub = $data->rub->rate;
$usd = $data->usd->rate;
$cny = $data->cny->rate;
echo "Обменный курс THB к RUB, USD, CNY на сегодня: $rub, $usd, $cny";

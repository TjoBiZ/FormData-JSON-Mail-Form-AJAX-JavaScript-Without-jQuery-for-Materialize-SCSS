<?php

$namecheck ='?domain=' . 'zip-components.ru';
//Server url
$url = "https://www.webasyst.ru/my/api/developer/check/$namecheck";
$apiKey = '^f:JWT.-O:xL9,Jno,bUhG_Jf8-85ui.'; // should match with Server key
$headers = array(
	'X-API-Key: '.$apiKey
);
// Send request to Server
$ch = curl_init($url);
// To save response in a variable from server, set headers;
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
// Get response
$response = curl_exec($ch);
// Decode
$result = json_decode($response);
//echo ($result);
echo $response;

//PHP Server, index.php
//
//header("Content-Type:application/json");
//$seceretKey = 'RSTrstrstnENINienirnr';
//$headers = apache_request_headers();
//    if(isset($headers['Authorization'])){
//			$api_key = $headers['Authorization'];
//			if($api_key != $seceretKey)
//			{
//				//403,'Authorization faild'; your logic
//				exit;
//			}
//		}
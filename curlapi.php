<?php

$namecheck ='?domain=' . 'fvsport.com';
//Server url
$url = "https://www.webasyst.ru/my/api/developer/check/$namecheck";
$apiKey = 'XXXXXXXXXXXXXXXX'; // should match with Server key
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
//$seceretKey = '32Xhsdarsf7asdcz';
//$headers = apache_request_headers();
//    if(isset($headers['Authorization'])){
//			$api_key = $headers['Authorization'];
//			if($api_key != $seceretKey)
//			{
//				//403,'Authorization faild'; your logic
//				exit;
//			}
//		}
<?php
if (isset($GLOBALS["HTTP_RAW_POST_DATA"])) {
	$rawImage=$GLOBALS['HTTP_RAW_POST_DATA'];
	$removeHeaders=substr($rawImage,strpos($rawImage, ",")+1);
	$code=base64_decode($removeHeaders);
	$fopen=fopen('img_server/tuImagen.png','wb');
	fwrite($fopen, $code);
	fclose($fopen);
	# code...
}
?>
<?php

// $msj = $_POST['config_json_canvas'];
// $output.= "{$msj}";
// $name='designer_'.date('Y-m-d-H-s').rand(1500,1000000);

// $archivo=fopen($name.".json", 'w+');
// fwrite($archivo, $output);
// fclose($archivo);

// //file_put_contents("form.txt",$output);
// $msj = $_POST['nombre'];
// echo $msj;

if (isset($GLOBALS["HTTP_RAW_POST_DATA"])) {
	$rawImage=$GLOBALS['HTTP_RAW_POST_DATA'];
	$removeHeaders=substr($rawImage,strpos($rawImage, ",")+1);
	$abc='pdc_' .date('Y-m-d-H-s').rand(5,1000) . rand(1, 10). rand(10000, 150000) .rand(1500, 100000000);
	$imagen_Nombre=$abc.".png";	
	$code=base64_decode($removeHeaders);
	$fopen=fopen($imagen_Nombre,'wb');
	fwrite($fopen, $code);
	fclose($fopen);
}
?>




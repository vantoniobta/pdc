<?php
if (isset($GLOBALS["HTTP_RAW_POST_DATA"])) {
    //usuario
	$user="VALENTIN";
	$rawImage=$GLOBALS['HTTP_RAW_POST_DATA'];
	$removeHeaders=substr($rawImage,strpos($rawImage, ",")+1);
	//GENERAR NOMBRE DEL PRODCUTOS FECHA-NUMERO RANDOM
	//$txt='test_'.date('Y-m-d-H-s').rand(1500,100000000); //nombre del txt
	$abc='pdc_' .date('Y-m-d-H-s').rand(5,1000) . rand(1, 10). rand(10000, 150000) .rand(1500, 100000000); //nombre de la imagen

	//$imagen_Nombre='pdc_' .date('Y-m-d-H-s').rand(5,1000) . rand(1, 10). rand(10000, 150000) .rand(1500, 100000000).".png";
	$imagen_Nombre=$abc.".png"; //para la imagen
	//$stxt=fopen($txt.".txt",'w+');//para el txt generado!
	//fwrite($stxt,$user.' NOMBRE DE SU IMAGEN DISEÑADA EN PDC:'.$imagen_Nombre);
	//fopen('pdc_' .date('Y-m-d-H-s').rand(5,1000) . rand(1, 10). rand(10000, 150000) .rand(1500, 100000000).".txt", 'w+');
	
	$code=base64_decode($removeHeaders);
	$fopen=fopen($imagen_Nombre,'wb');
	//$fopen=fopen('../product_designer_canvas/pdc_'.date('Y-m-d-H-s').'.png','wb');
    //$fopen=fopen('pdc_'.date('Y-m-d-H-s').'.png','wb');
	fwrite($fopen, $code);
	fclose($fopen);

}

?>
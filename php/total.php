<?php
$msj = $_POST['config_json_canvas'];
$output.= "{$msj}";
$name='designer_'.date('Y-m-d-H-s').rand(1500,1000000);


$archivo=fopen($name.".json", 'w+');
fwrite($archivo, $output);
fclose($archivo);



//file_put_contents("form.txt",$output);
?>
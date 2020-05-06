<?php

// $img_canvas = $_POST['img'];
// $json_canvas = $_POST['txtjson'];


// $txt = $_POST['dt'];
// echo $txt;


$txt = $_POST['dt'];
$img = $_POST['img'];

   
   if (strpos($img, 'data:image/png;base64') === 0) {
       
      $img = str_replace('data:image/png;base64,', '', $img);
      $img = str_replace(' ', '+', $img);
      $data = base64_decode($img);
      $file = 'uploads/img'.date("YmdHis").'.png';
      if (file_put_contents($file, $data)) {
        //si guardo correctamente la imagen , genera el json de la configuracion
        $output = "{$txt}";
        $name='designer_'.date('Y-m-d-H-s').rand(1500,1000000);
        $archivo=fopen($name.".json", 'w+');
        fwrite($archivo, $output);
        fclose($archivo);
         echo "The canvas was saved as $file.";
      } else {
         echo 'The canvas could not be saved.';
      }   
     
   }



// if (isset($GLOBALS["HTTP_RAW_POST_DATA"])) {
//   $rawImage=$GLOBALS['HTTP_RAW_POST_DATA'];
//   $removeHeaders=substr($rawImage,strpos($rawImage, ",")+1);
//   $abc='pdc_' .date('Y-m-d-H-s').rand(5,1000) . rand(1, 10). rand(10000, 150000) .rand(1500, 100000000);
//   $imagen_Nombre=$abc.".png"; 
//   $code=base64_decode($removeHeaders);
//   $fopen=fopen($imagen_Nombre,'wb');
//   fwrite($fopen, $code);
//   fclose($fopen);
// }







  // $img = $_POST['img'];
   
  //  if (strpos($img, 'data:image/png;base64') === 0) {
       
  //     $img = str_replace('data:image/png;base64,', '', $img);
  //     $img = str_replace(' ', '+', $img);
  //     $data = base64_decode($img);
  //     $file = 'uploads/img'.date("YmdHis").'.png';

      
   
  //     if (file_put_contents($file, $data)) {
  //        echo "The canvas was saved as $file.";
  //     } else {
  //        echo 'The canvas could not be saved.';
  //     }   
     
  //  }

// if (isset($GLOBALS["HTTP_RAW_POST_DATA"])) {
// 	$rawImage=$GLOBALS['HTTP_RAW_POST_DATA'];
// 	$removeHeaders=substr($rawImage,strpos($rawImage, ",")+1);
// 	$code=base64_decode($removeHeaders);
// 	$fopen=fopen('tuImagen.png','wb');
// 	fwrite($fopen, $code);
// 	fclose($fopen);
// 	# code...
// }
?>
<?php

  $img = $_POST['img'];
   
   if (strpos($img, 'data:image/png;base64') === 0) {
       
      $img = str_replace('data:image/png;base64,', '', $img);
      $img = str_replace(' ', '+', $img);
      $data = base64_decode($img);
      $file = 'uploads/img'.date("YmdHis").'.png';

      
   
      if (file_put_contents($file, $data)) {
         echo "The canvas was saved as $file.";
      } else {
         echo 'The canvas could not be saved.';
      }   
     
   }

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
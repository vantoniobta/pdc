<?php 
// $JSON = file_get_contents("test.json");
// $jsonIterator = new RecursiveIteratorIterator(
//     new RecursiveArrayIterator(json_decode($JSON, TRUE)),
//     RecursiveIteratorIterator::SELF_FIRST);

// foreach ($jsonIterator as $key => $val) {
//     if(!is_array($val)) {
//         if($key == "objects") {
//             print "<br/>";
//         }
//     print $key."    : ".$val . "<br/>";
//     }
// }
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
  <title>admin canvas</title>  
  <!-- bootstrap -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <!-- fontawesome -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.9/css/all.css" integrity="sha384-5SOiIsAziJl6AWe0HWRKTXlfcSHKmYV4RBF18PPJ173Kzn7jzMyFuTtk8JA7QQG1" crossorigin="anonymous">
  <!-- googleapis -->
  <link href='https://fonts.googleapis.com/css?family=Poppins|Roboto|Oswald|Arial|Lobster|Pacifico|Satisfy|Bangers|Audiowide|Sacramento' rel='stylesheet'>
  <link href="https://fonts.googleapis.com/css?family=Patrick+Hand+SC" rel="stylesheet">
  <!-- css custum -->
  <link rel="stylesheet" type="text/css" href="css/admin.css">
  <!-- jquery -->
  <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.js"></script>
  <!-- fabric -->
  <script type="text/javascript" src="js/fabric.js"></script>



</head>
<body>
<?php $file=file_get_contents("../order/init.json");?>
  <div class="container">
   <div class="row"> 


    <div class="col-md-12" style="background-color: #E3F09B;">
      <h3 align="center" class="title_home">ADMIN PDC</h3>
    </div>

    <div class="col-md-6">
        <canvas id="canvas_admin" width="510" height="600">
        Your browser does not support the Canvas tag.
        </canvas>
    </div>

    <div class="col-md-4">
       <input type="submit" value="EXTRAER CANVAS PRINCIPAL" id="btn_txt">
       <textarea id="info"><?php echo $file; ?></textarea><br>
    </div>


      <div class="form-group">
          <p>Background</p>
            <select id="color" class="form-control">
                    <option value="#FAC1E5">#FAC1E5</option>
                    <option value="#87CEFA">#87CEFA</option>
                    <option value="#A55">#A55</option>
                    <option value="#D1E5E1">#D1E5E1</option>
            </select>
      </div>
    </div>
  </div>
</body>
  <script type="text/javascript" src="js/vantonio.js"></script>
  
</html>
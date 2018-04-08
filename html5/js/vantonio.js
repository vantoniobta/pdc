//background canvas
var canvas = new fabric.Canvas('canvas_vantonio');
     //document.getElementById('c1').onclick=function(){
       fabric.Image.fromURL('img/playera.png',function(oImg){
            oImg.scale(0.9).setFlipX(true);//tmñ
            oImg.left=0;//posicion de imagen
            oImg.top=0;
            oImg.selectable=false;
            canvas.add(oImg);
        })
    // };


        canvas.backgroundColor = '#87CEFA';
        canvas.renderAll();
        $('select#color').on('change', function() {
              canvas.backgroundColor = this.value;
              canvas.renderAll();
         });


    //add text in canvas clic button
    function Addtext() { 
        canvas.add(new fabric.IText('vantonio', { 
        left: 150,
        top: 130,
        fontFamily: 'arial black',
        fill: '#333',
        fontSize: 30
        }));
    }

    document.getElementById('font-family').onchange = function() {
        canvas.getActiveObject().setFontFamily(this.value);
        canvas.renderAll();
    }

    document.getElementById('text-color').onchange = function() {
         canvas.getActiveObject().setFill(this.value);
        canvas.renderAll();
    }



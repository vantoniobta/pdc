// var canvas = new fabric.Canvas('canvas_vantonio');
// var text = new fabric.IText('vantonio', {
//     left: 100,
//     top: 100,
//     fill: 'navy'
// });
// canvas.add(text);


var canvas = new fabric.Canvas('canvas_vantonio');
//document.getElementById('c1').onclick=function(){
       fabric.Image.fromURL('https://s5.postimg.org/mcnyutofb/mens_longsleeve_front.png',function(oImg){
            oImg.scale(0.9).setFlipX(true);//tmñ
            oImg.left=0;//posicion de imagen
            oImg.top=0;
            oImg.selectable=false;
            canvas.add(oImg);
        })
// };
    canvas.backgroundColor = '#DEB887';
    canvas.renderAll();
    $('select#color').on('change', function() {
      canvas.backgroundColor = this.value;
        canvas.renderAll();
    });

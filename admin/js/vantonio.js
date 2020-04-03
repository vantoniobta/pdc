var canvas = new fabric.Canvas('canvas_admin');




// var json='{"version":"2.2.3","objects":[{"type":"i-text","version":"2.2.3","originX":"left","originY":"top","left":150,"top":280,"width":89.83,"height":38.42,"fill":"#fff","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"text":"Lobster","fontSize":34,"fontWeight":"bold","fontFamily":"Lobster","fontStyle":"normal","lineHeight":1.16,"underline":false,"overline":false,"linethrough":false,"textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}},{"type":"i-text","version":"2.2.3","originX":"left","originY":"top","left":150,"top":150,"width":102.92,"height":38.42,"fill":"#fff","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"text":"Bangers","fontSize":34,"fontWeight":"normal","fontFamily":"Bangers","fontStyle":"normal","lineHeight":1.16,"underline":false,"overline":false,"linethrough":false,"textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}},{"type":"i-text","version":"2.2.3","originX":"left","originY":"top","left":150,"top":180,"width":88.33,"height":38.42,"fill":"#fff","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"text":"Oswald","fontSize":34,"fontWeight":"normal","fontFamily":"Oswald","fontStyle":"normal","lineHeight":1.16,"underline":false,"overline":false,"linethrough":false,"textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}},{"type":"i-text","version":"2.2.3","originX":"left","originY":"top","left":150,"top":210,"width":108.96,"height":38.42,"fill":"#fff","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"text":"Roboto","fontSize":34,"fontWeight":"bold","fontFamily":"Roboto","fontStyle":"normal","lineHeight":1.16,"underline":false,"overline":false,"linethrough":false,"textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}},{"type":"i-text","version":"2.2.3","originX":"left","originY":"top","left":150,"top":250,"width":193.06,"height":38.42,"fill":"#fff","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"text":"Audiowide","fontSize":34,"fontWeight":"bold","fontFamily":"Audiowide","fontStyle":"normal","lineHeight":1.16,"underline":false,"overline":false,"linethrough":false,"textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}},{"type":"i-text","version":"2.2.3","originX":"left","originY":"top","left":150,"top":110,"width":135.54,"height":38.42,"fill":"#fff","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"text":"Sacramento","fontSize":34,"fontWeight":"normal","fontFamily":"Sacramento","fontStyle":"normal","lineHeight":1.16,"underline":false,"overline":false,"linethrough":false,"textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}},{"type":"circle","version":"2.2.3","originX":"left","originY":"top","left":263,"top":170.25,"width":40,"height":40,"fill":"#00ffff","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":0.97,"scaleY":0.97,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"radius":20,"startAngle":0,"endAngle":6.283185307179586}],"background":"#A55","backgroundImage":{"type":"image","version":"2.2.3","originX":"left","originY":"top","left":0,"top":0,"width":519,"height":614,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"crossOrigin":"","cropX":0,"cropY":0,"src":"http://localhost/pdc/img/test_img_vantonio.png","filters":[]}}'
//     canvas.loadFromJSON(json, canvas.renderAll.bind(canvas), function (o, object) {
//     fabric.log(o, object);
// });



canvas.renderAll();
$('select#color').on('change', function() {
    canvas.backgroundColor = this.value;
    canvas.renderAll();
});

document.getElementById('btn_txt').onclick=function(){
  var valtxt=document.getElementById('info').value; //valor del codigo en txtArea
  var json=valtxt;
  canvas.loadFromJSON(json, canvas.renderAll.bind(canvas), function (o, object) {
  fabric.log(o, object);
});}
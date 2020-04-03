//background canvas
    var canvas = new fabric.Canvas('canvas_vantonio');
    preserveObjectStacking: true
    isDrawingMode: true


    fabric.Image.fromURL('img/test_img_vantonio.png',function(oImg){
            oImg.scale(0.9).setFlipX(true);//tmñ
            oImg.left=0;//posicion de imagen
            oImg.top=0;
            oImg.selectable=false;
            canvas.add(oImg);
    });


    canvas.backgroundColor = '#87CEFA';
    canvas.renderAll();
    $('select#color').on('change', function() {
       canvas.backgroundColor = this.value;
       canvas.renderAll();
    });

    $('.delete_object').click(function() {
      var activeObject = canvas.getActiveObjects();
      if (confirm('Are you sure?')) {
        canvas.discardActiveObject();
        canvas.remove(...activeObject);
      }
    });


    document.getElementById('x1').onclick=function(){
        fabric.Image.fromURL('./img/img_url/1.png',function(oImg){
            oImg.scale(0.2).setFlipX(true);//tmñ
            oImg.left=130;//posicion de imagen
            oImg.top=140;
            canvas.add(oImg);
        })
    };
    document.getElementById('x2').onclick=function(){
        fabric.Image.fromURL('./img/img_url/2.png',function(oImg){
            oImg.scale(0.2).setFlipX(true);//tmñ
            oImg.left=130;//posicion de imagen
            oImg.top=140;
            canvas.add(oImg);
        })
    };

    document.getElementById('x3').onclick=function(){
        fabric.Image.fromURL('./img/img_url/3.png',function(oImg){
            oImg.scale(0.1).setFlipX(true);//tmñ
            oImg.left=130;//posicion de imagen
            oImg.top=140;
            canvas.add(oImg);
        })
    };
      document.getElementById('x4').onclick=function(){
        fabric.Image.fromURL('./img/img_url/4.jpg',function(oImg){
            oImg.scale(0.2).setFlipX(true);//tmñ
            oImg.left=130;//posicion de imagen
            oImg.top=140;
            canvas.add(oImg);
        })
    };
      document.getElementById('x5').onclick=function(){
        fabric.Image.fromURL('./img/img_url/5.png',function(oImg){
            oImg.scale(0.2).setFlipX(true);//tmñ
            oImg.left=130;//posicion de imagen
            oImg.top=140;
            canvas.add(oImg);
        })
    };
      document.getElementById('x6').onclick=function(){
        fabric.Image.fromURL('./img/img_url/6.png',function(oImg){
            oImg.scale(0.2).setFlipX(true);//tmñ
            oImg.left=130;//posicion de imagen
            oImg.top=140;
            canvas.add(oImg);
        })
    };

  document.getElementById('x7').onclick=function(){
        fabric.Image.fromURL('./img/img_url/7.png',function(oImg){
            oImg.scale(0.2).setFlipX(true);//tmñ
            oImg.left=130;//posicion de imagen
            oImg.top=140;
            canvas.add(oImg);
        })
    };
    document.getElementById('x8').onclick=function(){
        fabric.Image.fromURL('./img/img_url/8.png',function(oImg){
            oImg.scale(0.1).setFlipX(true);//tmñ
            oImg.left=130;//posicion de imagen
            oImg.top=140;
            canvas.add(oImg);
        })
    };


    //add text in canvas clic button
    function Addtext() { 
        canvas.add(new fabric.IText('designer', { 
        left: 150,
        top: 130,
        fontFamily: 'Arial black',
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

    document.getElementById('figuras').onclick=function(){
            canvas.remove(canvas.getActiveObject());
            // agregar rectangulo
                canvas.add(new fabric.Rect({
                   width: 50, 
                   height: 100, 
                   left: 130, 
                   top: 140, 
                   fill: 'rgb(186,218,85)'
                }));
                // agregar circulo
                canvas.add(new fabric.Circle({
                    radius: 40,
                    left: 180,
                    top: 150,
                    fill: 'rgb(240,11,66)'
                }));
    };

    function duplicateObj(){
        var copyData = canvas.getActiveObject().toObject();
            fabric.util.enlivenObjects([copyData], function(objects) {
              objects.forEach(function(o) {
                o.set('top', o.top + 15);
                o.set('left', o.left + 15);
                canvas.add(o);
              });
              canvas.renderAll();
            })
    }


    document.getElementById('imgLoader').onchange = function handleImage(e) {
        var reader = new FileReader();
        reader.onload = function (event) { console.log('fdsf');
            var imgObj = new Image();
            imgObj.src = event.target.result;
            imgObj.onload = function () {
                // start fabricJS stuff
                
                var image = new fabric.Image(imgObj);
                image.set({
                    left: 130,
                    top: 60,
                }).scale(0.2);
                //image.scale(getRandomNum(0.1, 0.25)).setCoords();
                canvas.add(image);
                
                // end fabricJS stuff
            }
            
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    //send back object in canvas
    var objectToSendBack;
       canvas.on('object:selected', function(event) {
       objectToSendBack = event.target;
    });
    var sendSelectedObjectBack = function() {
       canvas.sendToBack(objectToSendBack);
    }

    //-----------------------------ver codifo json de canvas-------------------------------------
    // JSON.stringify turns a JavaScript object into JSON text and stores that JSON text in a string.
    // JSON.parse turns a string of JSON text into a JavaScript object.
    document.getElementById('agrupar').addEventListener('click', function() { 
        var textarea       = document.getElementById("from-json-textarea");
            textarea.value = JSON.stringify(canvas);
            // textarea.value = JSON.stringify(
            //   canvas.getObjects()[0].scaleY  
            //   );
            var form = document.querySelector('#cliente');
            var data = new FormData(form);
            var req = new XMLHttpRequest();
            req.open("POST", "http://localhost/pdc/php/total.php", true);
        req.send(data);


    }, false);



    var imageSaver = document.getElementById('guarda');
        imageSaver.addEventListener('click', saveImage, false);

       function saveImage(e) {
         this.href = canvas.toDataURL({
         format: 'jpeg',
         quality: 0.8
         });
            this.download = 'test.png'
         }


    var drawingModeEl      = document.getElementById('drawing-mode'),
        drawingOptionsEl   = document.getElementById('drawing-mode-options'),
        drawingColorEl     = document.getElementById('drawing-color'),
        drawingLineWidthEl = document.getElementById('drawing-line-width'),
        drawingShadowWidth = document.getElementById('drawing-shadow-width');

        drawingModeEl.onclick = function() {
            canvas.isDrawingMode = !canvas.isDrawingMode;
            if (canvas.isDrawingMode) {
              drawingModeEl.innerHTML = 'Cancel drawing mode';
              drawingOptionsEl.style.display = '';
            }
            else {
              drawingModeEl.innerHTML = 'Enter drawing mode';
              drawingOptionsEl.style.display = 'none';
            }
          };
        canvas.on('path:created', function() {
            updateComplexity();
        });

           if (fabric.PatternBrush) {
                var vLinePatternBrush = new fabric.PatternBrush(canvas);
                vLinePatternBrush.getPatternSrc = function() {

                  var patternCanvas = fabric.document.createElement('canvas');
                  patternCanvas.width = patternCanvas.height = 10;
                  var ctx = patternCanvas.getContext('2d');

                  ctx.strokeStyle = this.color;
                  ctx.lineWidth = 5;
                  ctx.beginPath();
                  ctx.moveTo(0, 5);
                  ctx.lineTo(10, 5);
                  ctx.closePath();
                  ctx.stroke();

                return patternCanvas;
            };

            var hLinePatternBrush = new fabric.PatternBrush(canvas);
                hLinePatternBrush.getPatternSrc = function() {

                  var patternCanvas = fabric.document.createElement('canvas');
                  patternCanvas.width = patternCanvas.height = 10;
                  var ctx = patternCanvas.getContext('2d');

                  ctx.strokeStyle = this.color;
                  ctx.lineWidth = 5;
                  ctx.beginPath();
                  ctx.moveTo(5, 0);
                  ctx.lineTo(5, 10);
                  ctx.closePath();
                  ctx.stroke();

                  return patternCanvas;
            };

        var squarePatternBrush = new fabric.PatternBrush(canvas);
            squarePatternBrush.getPatternSrc = function() {

              var squareWidth = 10, squareDistance = 2;

              var patternCanvas = fabric.document.createElement('canvas');
              patternCanvas.width = patternCanvas.height = squareWidth + squareDistance;
              var ctx = patternCanvas.getContext('2d');

              ctx.fillStyle = this.color;
              ctx.fillRect(0, 0, squareWidth, squareWidth);

              return patternCanvas;
        };

       var diamondPatternBrush = new fabric.PatternBrush(canvas);
             diamondPatternBrush.getPatternSrc = function() {
              var squareWidth = 10, squareDistance = 5;
              var patternCanvas = fabric.document.createElement('canvas');
              var rect = new fabric.Rect({
                    width: squareWidth,
                    height: squareWidth,
                    angle: 45,
                    fill: this.color
              });
              var canvasWidth = rect.getBoundingRectWidth();
              patternCanvas.width = patternCanvas.height = canvasWidth + squareDistance;
              rect.set({ left: canvasWidth / 2, top: canvasWidth / 2 });
              var ctx = patternCanvas.getContext('2d');
              rect.render(ctx);
              return patternCanvas;
        };

        var img = new Image();
            // img.src = '../assets/honey_im_subtle.png';

            var texturePatternBrush = new fabric.PatternBrush(canvas);
            texturePatternBrush.source = img;
          }

          document.getElementById('drawing-mode-selector').addEventListener('change', function() {

                if (this.value === 'hline') {
                  canvas.freeDrawingBrush = vLinePatternBrush;
                }
                else if (this.value === 'vline') {
                  canvas.freeDrawingBrush = hLinePatternBrush;
                }
                else if (this.value === 'square') {
                  canvas.freeDrawingBrush = squarePatternBrush;
                }
                // else if (this.value === 'diamond') {
                //   canvas.freeDrawingBrush = diamondPatternBrush;
                // }
                // else if (this.value === 'texture') {
                //   canvas.freeDrawingBrush = texturePatternBrush;
                // }
                else {
                  canvas.freeDrawingBrush = new fabric[this.value + 'Brush'](canvas);
                }

                if (canvas.freeDrawingBrush) {
                  canvas.freeDrawingBrush.color = drawingColorEl.value;
                  canvas.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
                  canvas.freeDrawingBrush.shadowBlur = parseInt(drawingShadowWidth.value, 10) || 0;
                }
          });

          drawingColorEl.onchange = function() {
            canvas.freeDrawingBrush.color = drawingColorEl.value;
          };
          drawingLineWidthEl.onchange = function() {
            canvas.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
          };
          drawingShadowWidth.onchange = function() {
            canvas.freeDrawingBrush.shadowBlur = parseInt(drawingShadowWidth.value, 10) || 0;
          };

          if (canvas.freeDrawingBrush) {
            canvas.freeDrawingBrush.color = drawingColorEl.value;
            canvas.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
            canvas.freeDrawingBrush.shadowBlur = 0;
          }

          // document.getElementById('canvas-background-picker').addEventListener('change', function() {
          //   canvas.backgroundColor = this.value;
          //   canvas.renderAll();
          // });




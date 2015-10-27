var canvas;
var a,b;
var x1;
var x2;
var x3;
var x4;
var xa;
 	$(document).ready(function(){
		//setup front side canvas 
 		canvas = new fabric.Canvas('lienzo', {
		  hoverCursor: 'pointer',
		  selection: true,
		  selectionBorderColor:'black'
		  		});
 		canvas.on({
			 'object:moving': function(e) {		  	
			    e.target.opacity = 0.5;
			  },
			  'object:modified': function(e) {		  	
			    e.target.opacity = 1;
			  },
			 'object:selected':obj_Seleccionado,
			 'selection:cleared':onSelectedCleared
		 });
		// piggyback on `canvas.findTarget`, to fire "object:over" and "object:out" events
 		canvas.findTarget = (function(originalFn) {
		  return function() {
		    var target = originalFn.apply(this, arguments);
		    if (target) {
		      if (this._hoveredTarget !== target) {
		    	  canvas.fire('object:over', { target: target });
		        if (this._hoveredTarget) {
		        	canvas.fire('object:out', { target: this._hoveredTarget });
		        }
		        this._hoveredTarget = target;
		      }
		    }
		    else if (this._hoveredTarget) {
		    	canvas.fire('object:out', { target: this._hoveredTarget });
		      this._hoveredTarget = null;
		    }
		    return target;
		  };
		})(canvas.findTarget);


		var imageSaver = document.getElementById('guarda');
        imageSaver.addEventListener('click', saveImage, false);

       function saveImage(e) {
         this.href = canvas.toDataURL({
         format: 'jpeg',
         quality: 0.8
         });
            this.download = 'test.png'
         }


		// AGREGAR TEXTO Y donde aperecer el texto en canvas posiciones
		document.getElementById('insert_text').onclick = function() {
			var text = $("#texto").val();

		    var textSample = new fabric.Text(text, {
		    	//pos.
		      left: fabric.util.getRandomInt(0, 200),
		      top: fabric.util.getRandomInt(0, 400),
		      
		    });

            canvas.add(textSample);	
            canvas.item(canvas.item.length-1).hasRotatingPoint = true;

            $("#texteditor").css('display', 'block');
            $("#imagen_editor").css('display', 'block');

              textSample.enterEditing();
		      textSample.selectAll();

	  	};
	  	//aui de vuelta
	  	 $("#texto").keyup(function(){	  		
	  		var a = canvas.getActiveObject();
		      if (a && a.type === 'text') {
		    	  a.text = this.value;
		    	  canvas.renderAll();
		      }

	  	});


    //funcion paran imagen
    var imageLoader = document.getElementById('imagenS');
    imageLoader.addEventListener('change', handleImage, false);

	    function handleImage(e){
        var reader = new FileReader();
          reader.onload = function(event){
            var img = new Image();
            img.onload = function(){
                var imgInstance = new fabric.Image(img,{
                	left: 245,
                    top: 295,
                })
                canvas.add(imgInstance);
            }
             img.src = event.target.result;
        }
        reader.readAsDataURL(e.target.files[0]);     
    }


   //guardar imagen con todo configurado
    function guardarImagen(canvas){
    	var dt=canvas.toDataURL();
    	document.getElementById("extraer").src=dt;
    }
    

        document.getElementById('figuras').onclick=function(){
        canvas.remove(canvas.getActiveObject());
        // agregar rectangulo
        canvas.add(new fabric.Rect({
        width: 50,
        height: 50,
        left: 50,
        top: 50,
        fill: 'rgb(255,0,0)'
        }));
        // agregar circulo
        canvas.add(new fabric.Circle({
        radius: 40,
        left: 50,
        top: 50,
        fill: 'rgb(0,255,0)',
        opacity: 0.5
        }));
        };

      //agregar imagenes predeterminadas
        document.getElementById('i1').onclick=function(){
        	fabric.Image.fromURL('img/f.jpg',function(oImg){
        		oImg.scale(0.2).setFlipX(true);//tmñ
        		oImg.left=230;//posicion de imagen
        		oImg.top=230;
        		canvas.add(oImg);
        	}
        		)
        };

          document.getElementById('i2').onclick=function(){
        	fabric.Image.fromURL('img/d.png',function(oImg){
        		oImg.scale(0.2).setFlipX(true);//tmñ
        		oImg.left=230;//posicion de imagen
        		oImg.top=230;
        		canvas.add(oImg);
        	}
        		)
        };
        
         document.getElementById('i3').onclick=function(){
        	fabric.Image.fromURL('img/x.png',function(oImg){
        		oImg.scale(0.2).setFlipX(true);//tmñ
        		oImg.left=230;//posicion de imagen
        		oImg.top=230;
        		canvas.add(oImg);
        	}
        		)
        };

         document.getElementById('i7').onclick=function(){
        	fabric.Image.fromURL('img/e.png',function(oImg){
        		oImg.scale(0.2).setFlipX(true);//tmñ
        		oImg.left=230;//posicion de imagen
        		oImg.top=230;
        		canvas.add(oImg);
        	}
        		)
        };

           //ejemplo img predeterminada
         //   document.getElementById('ver').onclick=function(){
        	//fabric.Image.fromURL('img/playera.png',function(oImg){
        	//	oImg.scale(1).setFlipX(true);//tmñ
        	//	oImg.left=240;
        	//	oImg.top=280;
        	//	canvas.add(oImg);
        //	}
        //		)
        //};

       

        //------------------------------------
        document.getElementById('limpiar').onclick=function(){
        canvas.clear();
        };

        document.getElementById('color', function(obj){
        	setStyle(obj,'fill',this.value);
        },'onchange');


	  document.getElementById('eliminar').onclick = function() {		  
		    var activeObject = canvas.getActiveObject(),
		        activeGroup = canvas.getActiveGroup();

		    if (activeObject) {
		      canvas.remove(activeObject);
		      $("#texto").val("");
		    }
		    else if (activeGroup) {
		      var objectsInGroup = activeGroup.getObjects();
		      canvas.discardActiveGroup();
		      objectsInGroup.forEach(function(object) {
		        canvas.remove(object);
		      });
		    }
	  };  
//guardar imagen
	  $("#btn5").on("click",function(){
	  	guardarImagen(canvas);
	  });



	 // var canvas = new fabric.Canvas('lienzo');
      //canvas.backgroundColor = 'red';
      //canvas.renderAll();
    //modficar fondo del lienzoo
      $('select#color').on('change', function() {
	  canvas.backgroundColor = this.value;
      canvas.renderAll();
      });

    //cambiar el tipo de letra
    var fontControl = $('#font-control');
      $(document.body).on('change', '#font-control', function () {
      	var obj =canvas.getActiveObject();
        obj.fontFamily = fontControl.val();
       canvas.renderAll();
            });


    //cambiar color el texto
      $('#fill').change(function(){
      	var obj=canvas.getActiveObject();
      	if(obj){
      		obj.setFill($(this).val());
      	}
      	canvas.renderAll();
      });
     //font family
	 	  
	  $("#text-bold").click(function() {		  
		  var activeObject = canvas.getActiveObject();
		  if (activeObject && activeObject.type === 'text') {
		    activeObject.fontWeight = (activeObject.fontWeight == 'bold' ? '' : 'bold');		    
		    canvas.renderAll();
		  }
		});
	  $("#text-italic").click(function() {		 
		  var activeObject = canvas.getActiveObject();
		  if (activeObject && activeObject.type === 'text') {
			  activeObject.fontStyle = (activeObject.fontStyle == 'italic' ? '' : 'italic');		    
		    canvas.renderAll();
		  }
		});
	  $("#text-strike").click(function() {		  
		  var activeObject = canvas.getActiveObject();
		  if (activeObject && activeObject.type === 'text') {
			  activeObject.textDecoration = (activeObject.textDecoration == 'line-through' ? '' : 'line-through');
		    canvas.renderAll();
		  }
		});
	  $("#text-underline").click(function() {		  
		  var activeObject = canvas.getActiveObject();
		  if (activeObject && activeObject.type === 'text') {
			  activeObject.textDecoration = (activeObject.textDecoration == 'underline' ? '' : 'underline');
		    canvas.renderAll();
		  }
		});
 

	  $("#font-family").change(function() {
	      var a = canvas.getActiveObject();
	      if (a && activeObject.type === 'text') {
	        a.fontFamily = this.value;
	        canvas.renderAll();
	      }
	    });
		
		//canvas.add(new fabric.fabric.Object({hasBorders:true,hasControls:false,hasRotatingPoint:false,selectable:false,type:'rect'}));
	
	   $(".menu button,a").tooltip();
	   x1 = new fabric.Line([0,0,200,0], {"stroke":"#000000", "strokeWidth":1,hasBorders:false,hasControls:false,hasRotatingPoint:false,selectable:false});
	   x2 = new fabric.Line([199,0,200,399], {"stroke":"#000000", "strokeWidth":1,hasBorders:false,hasControls:false,hasRotatingPoint:false,selectable:false});
	   x3 = new fabric.Line([0,0,0,400], {"stroke":"#000000", "strokeWidth":1,hasBorders:false,hasControls:false,hasRotatingPoint:false,selectable:false});
	   x4 = new fabric.Line([0,400,200,399], {"stroke":"#000000", "strokeWidth":1,hasBorders:false,hasControls:false,hasRotatingPoint:false,selectable:false});
	 
	 });//doc ready

	 
// obj seleccionado
	 function obj_Seleccionado(e) {	 
	    var selectedObject = e.target;
	    $("#texto").val("");
	    selectedObject.hasRotatingPoint = true
	    if (selectedObject && selectedObject.type === 'text') {
	    	//display text editor	    	
	    	$("#texteditor").css('display', 'block');

	    	//aquiiiiiiiiiiiiiii
	    	$("#texto").val(selectedObject.getText());	

	    	$("#imagen_editor").css('display', 'block');
	    }

	  }

	   function setFont(font){
		  var activeObject = canvas.getActiveObject();
	      if (activeObject && activeObject.type === 'text') {
	        activeObject.fontFamily = font;
	        canvas.renderAll();
	      }
	  }

//--------------------------------------------------------------------
//cja="",barra editor=vacio
	 function onSelectedCleared(e){
		 $("#texteditor").css('display', 'none');
		 $("#texto").val("");
		 $("#imagen_editor").css('display', 'none');
	 }

//guarda imagen en el servidor
function saveIt(){

var myDrawing = document.getElementById("lienzo");
var drawingString = myDrawing.toDataURL("image/png");
var postData = "canvasData="+drawingString;
var ajax = new XMLHttpRequest();
ajax.open("POST",'saveImage.php',true);
ajax.setRequestHeader('Content-Type','canvas/upload');
ajax.onreadystatechange=function()
{
	if(ajax.readyState == 4)
		{
			alert("imagen guardada en el servidor");
		}
}
ajax.send(postData); 
}

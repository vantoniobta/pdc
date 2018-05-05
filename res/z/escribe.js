var canvas;
var a,b;
var x1;
var x2;
var x3;
var x4;
var xa;
 	$(document).ready(function() {
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


	  	   $('select#color').on('change', function() {
	      canvas.backgroundColor = this.value;
          canvas.renderAll();
           });


            //------------------------------------
        document.getElementById('limpiar').onclick=function(){  
        canvas.clear();
        };


    //funcion paran imagen
    var imageLoader = document.getElementById('imagenS');
    imageLoader.addEventListener('change', handleImage, false);

	    function handleImage(e){
        var reader = new FileReader();
          reader.onload = function(event){
            var img = new Image();
            img.onload = function(){
                var imgInstance = new fabric.Image(img)
                canvas.add(imgInstance);
            }
             img.src = event.target.result;
        }
        reader.readAsDataURL(e.target.files[0]);     
    }


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

        //modificar texto , negrita, subrayado..etc
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

            $("#text-underline").click(function() {
		  var activeObject = canvas.getActiveObject();
		  if (activeObject && activeObject.type === 'text') {
			  activeObject.textDecoration = (activeObject.textDecoration == 'underline' ? '' : 'underline');
		    canvas.renderAll();
		  }
		});

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


//agregar imagenes predeterminadas
        document.getElementById('i1').onclick=function(){
        	fabric.Image.fromURL('http://www.viniloideal.es/640-thickbox_default/vinilo-decorativo-vintpajaro-en-rama-vintage.jpg',function(oImg){
        		oImg.scale(0.2).setFlipX(true);//tmñ
        		oImg.left=230;//posicion de imagen
        		oImg.top=230;
        		canvas.add(oImg);
        	}
        		)
        };

          document.getElementById('i2').onclick=function(){
        	fabric.Image.fromURL('http://www.bimago.fr/mediacache/catalog/product/7/8/181387/image/5e06319eda06f020e43594a9c230972d/181387_7.png',function(oImg){
        		oImg.scale(0.2).setFlipX(true);//tmñ
        		oImg.left=230;//posicion de imagen
        		oImg.top=230;
        		canvas.add(oImg);
        	}
        		)
        };



         document.getElementById('i3').onclick=function(){
        	fabric.Image.fromURL('http://www.yalotenemos.com/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/m/a/mariposa-flor-33_copia2.png',function(oImg){
        		oImg.scale(0.2).setFlipX(true);//tmñ
        		oImg.left=230;//posicion de imagen
        		oImg.top=230;
        		canvas.add(oImg);
        	}
        		)
        };

         document.getElementById('i4').onclick=function(){
        	fabric.Image.fromURL('http://freerenders.arstoday.com.ar/wp-content/uploads/design02521763.png',function(oImg){
        		oImg.scale(0.2).setFlipX(true);//tmñ
        		oImg.left=230;//posicion de imagen
        		oImg.top=230;
        		canvas.add(oImg);
        	}
        		)
        };
        

//ejemplo img predeterminada
  //function mostrar(){
    //document.getElementById('ventana-flotante').style.display='block';
//}
  document.getElementById('ver').onclick=function(){
  	fabric.Image.fromURL('http://198.58.85.45/~itstm792/magento/playera.png',function(oImg){
  	oImg.scale(1).setFlipX(true);//tmñ
     	oImg.left=240;
       	oImg.top=280;
        canvas.add(oImg);
        }
        		)
        };



        document.getElementById('color', function(obj){
        	setStyle(obj,'fill',this.value);
        },'onchange');

	 // var canvas = new fabric.Canvas('lienzo');
      //canvas.backgroundColor = 'red';
      //canvas.renderAll();
    //modficar fondo del lienzoo
   
 
     //font family 

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



  
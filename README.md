### Examples of use

#### Adding red rectangle to canvas

```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <canvas id="canvas" width="300" height="300"></canvas>

    <script src="lib/fabric.js"></script>
    <script>
        var canvas = new fabric.Canvas('canvas');

        var rect = new fabric.Rect({
            top : 100,
            left : 100,
            width : 60,
            height : 70,
            fill : 'red'
        });

        canvas.add(rect);
    </script>
</body>
</html>
```



**Fabric.js** is a framework that makes it easy to work with HTML5 canvas element. It is an **interactive object model** on top of canvas element. It is also an **SVG-to-canvas parser**.

<a href="http://fabricjs.com/kitchensink" target="_blank"><img src="https://github.com/kangax/fabric.js/raw/master/lib/screenshot.png" style="width:300px;box-shadow:rgba(0,0,0,0.3) 0 0 5px"></a>
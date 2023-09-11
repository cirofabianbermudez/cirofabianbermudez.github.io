keyboard$.subscribe(function(key) {
  if (key.mode === "global" && key.type === "x") {
    /* Add custom keyboard handler here */
    //alert("Presionaste la tecla x");
    //window.alert(5 + 6);
    //window.print()
    let text = "pepe" + "<br>";
    for (let i = 0; i < 10; i++) {
      text =  text + "pepe" + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
    key.claim() 
  }
})


/////////////////////////////////////////////////////

// start canvas config
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = screen.width*0.5;
canvas.height = screen.height/8;
var width = canvas.width;
var height = canvas.height;


// sliders
var slider_n;
var radius_factor;


// Program variables
var angle = 0;
var x_center = width/4;
var y_center = height/2;
var pixel_wide = 1;
var radius = height/15;
var r = 0;
var pixel_x = 0;
var pixel_y = 0;
var x_offset = width/2;
var n = 1;
var trace = [];
var prev_x = 0;
var prev_y = 0;

function draw() {

    // draw canvas background
    ctx.fillStyle="#fff9db";
    ctx.fillRect(0,0,width,height);

    // lines config
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "#000000";

    // reset pixel acumulators
    pixel_x = x_center-pixel_wide/2;
    pixel_y = y_center-pixel_wide/2;

    prev_x = x_center;
    prev_y = y_center;
    for(var i = 0; i < slider_n; i++){
        n = i * 2 + 1;
        r = (4/(n*Math.PI))*radius;
        pixel_x += r*Math.cos(n*angle);
        pixel_y += r*Math.sin(n*angle);
        ctx.fillRect(pixel_x, pixel_y, pixel_wide, pixel_wide);

         // draw circle
        ctx.beginPath();
        ctx.arc(prev_x, prev_y, r, 0, Math.PI*2, true);
        ctx.stroke();

        // draw conecting center line
        ctx.beginPath();
        ctx.moveTo(prev_x, prev_y);
        ctx.lineTo(pixel_x+pixel_wide/2, pixel_y+pixel_wide/2);
        ctx.stroke();

        // save previous pixels
        prev_x = pixel_x+pixel_wide/2;
        prev_y = pixel_y+pixel_wide/2;
    }
   
    // add pixel to the begining of the array
    trace.unshift(pixel_y+pixel_wide/2);

    // draw trace
    ctx.beginPath();
    ctx.moveTo(x_offset, pixel_y+pixel_wide/2);
    for(var i = 0; i < trace.length; i++){
        ctx.lineTo(i+x_offset, trace[i]);
    }
    ctx.stroke();

    // remove last element of array when full
    if(trace.length > Math.round(width/2)){
        trace.pop();
    }

    // draw rigth pixel
    ctx.fillRect(x_offset-pixel_wide/2, pixel_y, pixel_wide, pixel_wide);

    //draw conecting horizontal line
    ctx.beginPath();
    ctx.moveTo(pixel_x+pixel_wide/2, pixel_y+pixel_wide/2);
    ctx.lineTo(x_offset+pixel_wide/2, pixel_y+pixel_wide/2, pixel_wide, pixel_wide);
    ctx.stroke();

}

function loop(){
    radius_factor = Number(document.getElementById('slider_radius').value);
    radius = (height/15)*radius_factor*0.3;
    slider_n = Number(document.getElementById('slider_n').value);
    draw();
    angle -= Number(document.getElementById('slider_angle').value);;
    requestAnimationFrame(loop);
}

loop();
///////////////////////////////////////////////////////
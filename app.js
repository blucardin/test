//create canvas
var canvas = document.createElement("canvas");
canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 100;
canvas.style.border = "1px solid #000000";
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");

// create a button
var button = document.createElement("BUTTON");
var o = document.createTextNode("START");
button.appendChild(o);
document.body.appendChild(button);

function drawTriangle(vertex1, vertex2, vertex3) {
  ctx.beginPath();
  ctx.moveTo(vertex1[0], vertex1[1]);
  ctx.lineTo(vertex2[0], vertex2[1]);
  ctx.lineTo(vertex3[0], vertex3[1]);
  ctx.lineTo(vertex1[0], vertex1[1]);
  ctx.stroke();
}

function midpoint(point1, point2) {
    var x = (point1[0] + point2[0]) / 2;
    var y = (point1[1] + point2[1]) / 2;
    return [x, y];
}


function recursion(vertex1, vertex2, vertex3, depth){
    if (depth < 0) {
        return
    } else {
        
        var midpoint1 = midpoint(vertex1, vertex2);
        var midpoint2 = midpoint(vertex2, vertex3);
        var midpoint3 = midpoint(vertex3, vertex1);
        drawTriangle(midpoint1, midpoint2, midpoint3)

        recursion(vertex3, midpoint3, midpoint2, depth - 1)
        recursion(vertex2, midpoint1, midpoint2, depth - 1)
        recursion(vertex1, midpoint1, midpoint3, depth - 1) 
    }
    
}


// add a click event to the button
button.addEventListener("click", function() {
    // add a class to the div
    console.log("button clicked");

    o.textContent = "Started!";
    vertex1 = [window.innerWidth/2, 0]
    vertex2 = [0, window.innerHeight - 100]
    vertex3 = [window.innerWidth - 20, window.innerHeight - 100]
    
    drawTriangle(vertex1, vertex2, vertex3);
    recursion(vertex1, vertex2, vertex3, 8);

    });
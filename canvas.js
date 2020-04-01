// Variables!
var color = "red";
var radius = 15;
//You will want to add more
var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth * .75;
canvas.height = window.innerHeight * .75;

var ctx = canvas.getContext("2d");

var up = false;
//Listeners!!
//Add a listener for loading the window
//Add a listener for the mouse movement
canvas.addEventListener('mousemove', function(e) {
    x = e.x;
    y = e.y;
    draw(e.pageX - radius / 2, e.pageY - radius / 2);
});

//Add a listener for the touch move
canvas.addEventListener("touchmove", function(e) {
    var touch = e.touches[0];
    var mouseEvent = new MouseEvent("mousemove", {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
}, false);

function getTouchPos(canvasDom, touchEvent) {
    var rect = canvasDom.getBoundingClientRect();
    return {
        x: touchEvent.touches[0].clientX - rect.left,
        y: touchEvent.touches[0].clientY - rect.top
    };
}
//Add a listener for the keydown
window.addEventListener('keydown', function(e) {
    // blue
    if (e.keyCode == 66) {
        color = "rgb(0, 0, 255)";
    }
    // green
    if (e.keyCode == 71) {
        color = "rgb(0, 255, 0)";
    }
    // red
    if (e.keyCode == 82) {
        color = "rgb(255, 0, 0)";
    }
    // yellow
    if (e.keyCode == 89) {
        color = "rgb(255, 255, 0)";
    }

    // spacebar
    if (e.keyCode == 32) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
    // up arrow
    if (e.keyCode == 38) {
        up = true;
    }
    // down arrow
    if (e.keyCode == 40) {
        up = false;
    }

});

var clr = document.getElementById('clr');
clr.addEventListener('change', function() {
    color = this.value;
});

// Functions!
// I would add a function for draw
function draw(x, y) {
    if (!up) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(x, y, 15, 0, 2 * Math.PI);
        ctx.fill();
    } else {
        up = true;
        ctx.closePath();
    }
}
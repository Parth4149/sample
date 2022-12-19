
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const inputsObj = {
    // 'width': () => { ctx.width = this.value; },
    // 'color': color,
}

// set width & height
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight;


ctx.lineJoin = 'round';  // type CanvasLineJoin = "bevel" | "miter" | "round";
ctx.lineCap = 'round';
ctx.strokeStyle = "#000000";

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
// let direction = true;

// https://www.w3schools.com/tags/ref_canvas.asp
//? The beginPath() method begins a path, or resets the current path.
//? Tip: Use moveTo(), lineTo(), quadricCurveTo(), bezierCurveTo(), arcTo(), and arc(), to create paths.
//? Tip: Use the stroke() method to actually draw the path on the canvas.

function draw(e) {
     if(!isDrawing) return;  // stop the fun from running when thee are not moused down
    // console.log(e);
    // ctx.strokeStyle = `hsl(${hue++}, 40%, 50%)`; // Rainbow
    // hue = (hue >= 360) ? 0 : hue;
    
    ctx.beginPath(); // Begins a path, or resets the current path
    // start from
    ctx.moveTo(lastX, lastY); // Moves the path to the specified point in the canvas, without creating a line
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

    // if(ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
    //     direction = !direction;
    // }
    // if(direction) {
    //     ctx.lineWidth++;
    // }
    // else {
    //     ctx.lineWidth--;
    // }
}

canvas.addEventListener('mousedown', (e) => { //  it will continuously executing till mouse btn is pressed
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]; // update
}); 
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false); // when we free mouse btn, it will execute
canvas.addEventListener('mouseout', () => isDrawing = false); // when we come out from the frame, it will execute
// canvas.addEventListener('mouseover', () => isDrawing = true); // when we come out from the frame, it will execute

const inputs = document.querySelectorAll("header input");
inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
function handleUpdate() {
    inputsObj[this.name] = this.value;
    console.log(inputsObj[this.name]);
    // console.log(this.value);

    if(this.name === "width") {
        ctx.lineWidth = this.value;
    } else if(this.name === 'color') {
        ctx.strokeStyle = this.value;
    }
}




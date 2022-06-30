const grid = document.getElementById("grid");
const clear = document.getElementById("clear");
const color = document.getElementById("colorOn");
const eraser = document.getElementById("erase");
const default_size = 16;
const paintColor = document.getElementById("colorPicker");

let theColor = '#333333';

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// Slider Value Live Update
function liveSlide() {
    var slide = document.getElementById("Slider")
    document.getElementById("values").innerHTML = `${slide.value} x ${slide.value}`
};


// Execute background-color change
function paint(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    if (color.value === "ON") {
        e.target.style.backgroundColor = theColor;
    } else if (eraser.value == "ON") {
        e.target.style.backgroundColor = "white";
    } else {
        e.target.style.backgroundColor = "black";
    }
}


function paintChange(colorNew) {
    theColor = colorNew;
}

//Grid Updates
function gridSet(val) {
    grid.style.gridTemplateColumns = `repeat(${val}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${val}, 1fr)`

    for (let i = 0; i < val * val; i++) {
        const square = document.createElement("div")
        square.classList.add('grid-element')
        square.addEventListener('mouseover', paint)
        square.addEventListener('mousedown', paint)
        grid.appendChild(square)
    };
};

function clearGrid() {
    grid.innerHTML = ''

}

function refreshGrid(val) {
    clearGrid()
    gridSet(val)
}


//run once loaded
window.onload = () => {
    gridSet(default_size)
};

//button actions

paintColor.onchange = (e) => paintChange(e.target.value);

clear.onclick = () => {
    var set_val = document.getElementById("Slider").value
    refreshGrid(set_val);
}
color.onclick = toggleColor;

eraser.onclick = toggleEraser;

function toggleColor() {
    if (color.value === "OFF") {
        color.value = "ON";
        if (eraser.value === "ON") {
            eraser.value = "OFF"
            eraser.style.backgroundColor = "#73bda8";
            eraser.style.color = "white";
        }
        color.style.backgroundColor = "silver";
        color.style.color = "black";
    } else {
        color.value = "OFF";
        color.style.backgroundColor = "#73bda8";
        color.style.color = "white";
    };
};

function toggleEraser() {
    if (eraser.value === "OFF") {
        eraser.value = "ON";
        if (color.value === "ON") {
            color.value = "OFF"
            color.style.backgroundColor = "#73bda8";
            color.style.color = "white";
        }
        eraser.style.backgroundColor = "silver";
        eraser.style.color = "black";
    } else {
        eraser.value = "OFF";
        eraser.style.backgroundColor = "#73bda8";
        eraser.style.color = "white";
    };
}
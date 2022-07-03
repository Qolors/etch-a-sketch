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
            eraser.style.backgroundColor = "#4C566A";
            eraser.style.color = "white";
            eraser.style.border = "none";
        }
        color.style.backgroundColor = "#3B4252";
        color.style.color = "white";
        color.style.border = "1px solid white";
        color.innerHTML = "Color Wheel On";
    } else {
        color.value = "OFF";
        color.style.backgroundColor = "#4C566A";
        color.style.color = "white";
        color.style.border = "none";
        color.innerHTML = "Color Wheel Off";
    };
};

function toggleEraser() {
    if (eraser.value === "OFF") {
        eraser.value = "ON";
        if (color.value === "ON") {
            color.value = "OFF"
            color.style.backgroundColor = "#4C566A";
            color.style.color = "white";
            color.style.border = "none";
            color.innerHTML = "Color Wheel Off"
        }
        eraser.style.backgroundColor = "#3B4252";
        eraser.style.color = "white";
        eraser.style.border = "1px solid white";
    } else {
        eraser.value = "OFF";
        eraser.style.backgroundColor = "#4C566A";
        eraser.style.color = "white";
        eraser.style.border = "none";
    };
}
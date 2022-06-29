const grid = document.getElementById("grid");
const clear = document.getElementById("clear");
const color = document.getElementById("colorOn");

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
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = "black";
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
// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let canvas = document.querySelector('#pixelCanvas');
let form = document.querySelector('#sizePicker');

function makeGrid() {

    // Your code goes here!
    let width = document.querySelector('#inputWidth').value;
    let height = document.querySelector('#inputHeight').value;
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
    let tRow, tData;
    for (let row = 0; row < height; row++) {
        tRow = canvas.appendChild(document.createElement('tr'));
        for (let col = 0; col < width; col++) {
            tData = tRow.appendChild(document.createElement('td'));
        }
    }

}

function draw(target) {
    let color = document.querySelector('#colorPicker').value;
    target.style.backgroundColor = color;
}

form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    makeGrid();
});

canvas.addEventListener('mouseover', function (evt) {
    if (evt.target.nodeName == 'TD')
        draw(evt.target);
});
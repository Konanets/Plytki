const board = document.querySelector('#board');
const colors = ['#e74c3c', '#e37c9c', '#8e44ad', '#3498db', '#2ecc75', '#e67e22', '#2ecc71'];
const SQUARES_NUMBERS = document.documentElement.clientWidth*2;

for (let i = 0; i < SQUARES_NUMBERS; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', (ev) =>{
        if(square.classList.contains('true'))removeColor(square);
        else setColor(square);
    })
    board.append(square)
}

function setColor(element) {
    const color = getColorRandom()
    element.classList.toggle('true');
    element.style.backgroundColor = color
}

function removeColor(element) {
    element.classList.toggle('true');
    element.style.backgroundColor = '#1d1d1d';
}

function  getColorRandom() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}














import Node from './node.js';

// Width/Height of the board in pixels
const boardDimension = 500;
// The amount of space (in pixels) that will be between each box
const spacing = 5;

const board = [];

window.onload = () => {

    setUpInteraction();
    document.querySelector("#error-message").style.display = "none";
  };

  const setUpInteraction = () => {
    document.querySelector("#button").addEventListener("click", onCreateBoardClick)
    document.addEventListener("mousedown", function (e) {board.forEach(arr => arr.forEach(node => node.handleClickEvent(e.clientX, e.clientY))); })
  }

  const onCreateBoardClick = (e) => {
    let input = document.querySelector("#row-col-input").value.trim();
    let message = "";

    let errorMessageHTML = document.querySelector("#error-message");

    if(!input) {
        message = `"Row/Col Num" can't be blank`;
    }

    else if(input < 2) {
        message = `"Row/Col Num" can't be less than 2`;
    }

    else if(input > 10) {
        message = `"Row/Col Num" can't be greater than 10`;
    }

    if(message) {
        errorMessageHTML.style.display = "block";
        errorMessageHTML.innerHTML = message;
    }

    else {
        errorMessageHTML.style.display = "none";
        createBoard(input);
    }
  }

const createBoard = (rowNum = 10) => {
    const boxDimension = boardDimension / (parseInt(rowNum) + 1);
    let svg = document.querySelector("svg");
    svg.setAttribute("width", boardDimension);
    svg.setAttribute("height", boardDimension);
    for(let row = 0; row < rowNum; row++) { 
        const newRow = [];
        let y = row * boxDimension + row * spacing;
        for(let col = 0; col < rowNum; col++) { 
            let x = col * boxDimension + col * spacing;
            let rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
            newRow.push(new Node(col, row, x, y, boxDimension, rect));
            svg.append(rect);
        }
        board.push(newRow);
    }
    // board.forEach(arr => arr.forEach(node => node.printScreenSpace()));
}
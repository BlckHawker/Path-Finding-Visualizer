import Node from './node.js';

// Width/Height of the board in pixels
const boardDimension = 500;
// The amount of space (in pixels) that will be between each box
const spacing = 5;

const board = [];

window.onload = () => {

    setUpInteraction();
    document.querySelector("#error-message").style.display = "none";
    // createBoard();
  };

  const setUpInteraction = () => {
    document.querySelector("#button").addEventListener("click", onCreateBoardClick)
    document.addEventListener("mousedown", function (e) {board.forEach(arr => arr.forEach(node => node.handleClickEvent(e.clientX, e.clientY))); console.log(e.clientX, e.clientY); })
  }

  const onCreateBoardClick = (e) => {
    let input = document.querySelector("#row-col-input").value.trim();
    console.log(input);

    let errorMessageHTML = document.querySelector("#error-message");


    if(!input) {
        errorMessageHTML.innerHTML = `"Row/Col Num" can't be blank`;
        errorMessageHTML.style.display = "block";
    }

    else if(input < 2) {
        errorMessageHTML.innerHTML = `"Row/Col Num" can't be less than 2`;
        errorMessageHTML.style.display = "block";
    }

    else {
        errorMessageHTML.style.display = "none";
        createBoard(input);
    }
  }

const createBoard = (rowNum = 10) => {
    const boxDimension = boardDimension / (parseInt(rowNum) + 1);
    let svgHTML = `<svg width="${boardDimension}" height="${boardDimension}">`
    for(let row = 0; row < rowNum; row++) { 
        const newRow = [];
        let y = row * boxDimension + row * spacing;
        for(let col = 0; col < rowNum; col++) { 
            let x = col * boxDimension + col * spacing;
            let rect = `<rect x="${x}" y="${y}" width="${boxDimension}" height="${boxDimension}"/>`;
            svgHTML += rect;
            newRow.push(new Node(col, row, x, y, boxDimension));
        }
        board.push(newRow);
    }
    svgHTML += "</svg>"
    document.querySelector("#svg-container").innerHTML = svgHTML;

    console.log("node screenSpace")
    board.forEach(arr => arr.forEach(node => node.printScreenSpace()));
}
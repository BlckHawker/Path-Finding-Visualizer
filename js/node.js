class Node  {
    constructor (row, col, xCoor, yCoor, dimension) {
        this.row = row;
        this.col = col;
        this.xCoor = xCoor;
        this.yCoor = yCoor;
        this.dimension = dimension;
    }

    printCoordinates() {
        console.log(this.row, this.col);
    }

    printScreenSpace() {
        console.log(this.yCoor, this.xCoor);
    }

    handleClickEvent(mouseX, mouseY) {
        if(mouseX >= this.xCoor && mouseX <= this.xCoor + this.dimension &&
           mouseY >= this.yCoor && mouseY <= this.yCoor + this.dimension) {
            console.log("CLicked", this.row, this.col);
        }
    }
}

export default Node
class Node  {
    colors = ["white", "gray", "green", "red"];
    // empty, block, start, end

    constructor (row, col, xCoor, yCoor, dimension, rect) {
        this.row = row;
        this.col = col;
        this.xCoor = xCoor;
        this.yCoor = yCoor;
        this.dimension = dimension;
        this.rect = rect;

        this.rect.setAttribute("x", xCoor);
        this.rect.setAttribute("y", yCoor);
        this.rect.setAttribute("width", dimension);
        this.rect.setAttribute("height", dimension);
        this.rect.style.fill =  "white";
        this.currentColorIndex = 0;
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
            this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length;
            this.rect.style.fill = this.colors[this.currentColorIndex];
        }
    }
}

export default Node
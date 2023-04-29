class Cell {
    constructor(i, j) {
        this.i = i
        this.j = j
        this.x = i*size
        this.y = j*size

        this.pawnb = false;
        this.rookb = false;
        this.knightb = false;
        this.bishopb = false;
        this.kingb = false;
        this.queenb = false;
        
        this.pawnw = false;
        this.rookw = false;
        this.knightw = false;
        this.bishopw = false;
        this.kingw = false;
        this.queenw = false;
    }
}
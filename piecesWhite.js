class PawnW {
    constructor(i, j, img) {
        this.i = i
        this.j = j
        this.img = img
        this.x = i*size
        this.y = j*size
    }
}

class RookW extends PawnW {
    constructor(i, j, img) {
        super(i, j, img);
    }
}

class KnightW extends PawnW {
    constructor(i, j, img) {
        super(i, j, img);
    }
}

class BishopW extends PawnW {
    constructor(i, j, img) {
        super(i, j, img);
    }
}

class KingW extends PawnW {
    constructor(i, j, img) {
        super(i, j, img);
    }
}

class QueenW extends PawnW {
    constructor(i, j, img) {
        super(i, j, img);
    }
}
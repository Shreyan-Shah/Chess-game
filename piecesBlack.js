class PawnB {
    constructor(i, j, img) {
        this.i = i
        this.j = j
        this.img = img
        this.x = i * size
        this.y = j * size
    }
    show() {
        image(this.img, this.x, this.y);
    };
}

class RookB extends PawnB {
    constructor(i, j, img) {
        super(i, j, img);
    }
}

class KnightB extends PawnB {
    constructor(i, j, img) {
        super(i, j, img);
    }
}

class BishopB extends PawnB {
    constructor(i, j, img) {
        super(i, j, img);
    }
}

class KingB extends PawnB {
    constructor(i, j, img) {
        super(i, j, img);
    }
}

class QueenB extends PawnB {
    constructor(i, j, img) {
        super(i, j, img);
    }
}
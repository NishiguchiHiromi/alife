export class Alife {
    static maleNum = 0;
    static femaleNum = 0;
    private _x: number;
    private _y: number;
    private _fxs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    private _fys = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    private _sex: number;
    private _age: number;

    private moveSpeed = 10;
    private _width = 20;
    private _height = 20;
    private _consistency = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];

    constructor(private fieldWidth: number, private fieldHeight: number) {
        this._x = Math.random() * this.maxX;
        this._y = Math.random() * this.maxY;
        if (Math.random() > 0.5) {
            this._sex = Sex.male;
            Alife.maleNum++;
        } else {
            this._sex = Sex.female;
            Alife.femaleNum++;
        }

    }

    get x() { return this._x; }
    set x(x: number) {
        this._x = x;
    }

    get y() { return this._y; }
    set y(y: number) {
        this._y = y;
    }

    get maxX(): number {
        return this.fieldWidth - this.width;
    }
    get minX(): number {
        return 0;
    }
    get maxY(): number {
        return this.fieldHeight - this.height;
    }
    get minY(): number {
        return 0;
    }
    diffX(f: number): number {
        const diff = (f + this._fxs.reduce((a, b, i) => a += b * this._consistency[i], 0))
            / (1 + this._consistency.reduce((a, b) => a += b));
        this._fxs.shift();
        this._fxs.push(f);
        return diff;
    }
    diffY(f: number): number {
        const diff = (f + this._fys.reduce((a, b, i) => a += b * this._consistency[i], 0))
            / (1 + this._consistency.reduce((a, b) => a += b));
        this._fys.shift();
        this._fys.push(f);
        return diff;
    }
    // get direction(): number { return Math.random() * 2 * Math.PI; }

    get width() { return this._width; }
    get height() { return this._height; }

    get sex() { return this._sex; }



    get alifeStyle() {
        return {
            'left': `${this.x}px`,
            'top': `${this.y}px`,
            'color': this.color
        };
    }

    move(defaultDistance: number) {
        const direction = Math.random() * 2 * Math.PI;
        const forceX = this.moveSpeed * defaultDistance * Math.cos(direction);
        const forceY = this.moveSpeed * defaultDistance * Math.sin(direction);
        const nextX = this.x + this.diffX(forceX);
        const nextY = this.y + this.diffY(forceY);
        if (nextX > this.maxX) {
            this.x = this.maxX;
        } else if (nextX < this.minX) {
            this.x = this.minX;
        } else {
            this.x = nextX;
        }
        if (nextY > this.maxY) {
            this.y = this.maxY;
        } else if (nextY < this.minY) {
            this.y = this.minY;
        } else {
            this.y = nextY;
        }
    }

    private get color(): string {
        if (this._sex === Sex.male) {
            return 'blue';
        } else if (this._sex === Sex.female) {
            return 'red';
        } else {
            return 'black';
        }
    }
}


export enum Sex {
    male = 1, female = 2
}

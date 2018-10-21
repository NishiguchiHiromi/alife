import { Alife } from '@model/alife';

export class Field {
    fieldWidth?: number;
    fieldHeight?: number;
    timeSpeed?: number;
    moveSpeed?: number;
    private timer: any;

    alives: Alife[] = [];


    constructor(init?: Partial<Field>) {
        Object.assign(this, init);
    }

    start() {
        this.stop();
        this.timer = setInterval(() => {
            this.alives.forEach(alife => alife.move(this.distance));
        }, this.timeSpan);
    }

    stop() {
        clearInterval(this.timer);
    }

    create(num: number) {
        for (let i = 0; i < num; i++) {
            this.alives.push(new Alife(this.fieldWidth, this.fieldHeight));
        }
    }
    extinguish() {
        this.alives = [];
        Alife.maleNum = 0;
        Alife.femaleNum = 0;
        this.stop();
    }

    get timeSpan(): number {
        return 1000 / this.timeSpeed;
    }

    get distance(): number { return 2 * (0.5 - Math.random()) * this.moveSpeed; }

    get fieldStyle() {
        return {
            'width': `${this.fieldWidth}px`,
            'height': `${this.fieldHeight}px`,
        };
    }
}

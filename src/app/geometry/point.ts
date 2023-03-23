interface IVectorLike{
    x: number;
    y: number;
}

export class Point {
    static zero = new Point(0,0);

    static distance(p1: IVectorLike, p2:IVectorLike){
        return Math.sqrt((p1.x-p2.x)**2 + (p1.y - p2.y)**2);
    }

    static fromPolarCoordinates(angle:number, length:number, offsetPoint:Point = Point.zero){
        return new Point(
            offsetPoint.x + length * Math.sin(2*Math.PI*angle/360),
            offsetPoint.y + length * Math.cos(2*Math.PI*angle/360)
        )
    }

    constructor(public x:number, public y:number){}

    move(x: IVectorLike|number, y?:number){
        if (typeof x === 'number'){
            return new Point(
                this.x + (x as unknown as number),
                this.y + y!
            );
        }
        return new Point(
            this.x + (x as unknown as IVectorLike).x,
            this.x + (x as unknown as IVectorLike).y
        );
    }
}

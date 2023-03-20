import { Point } from "./point";

export class Path {
    static circle(center:Point, radius:number){
        return new Path()
            .circle(center, radius)
            .close()
    }

    static ring(center:Point, outerRadius:number, innerRadius:number){
        return new Path()
            .ring(center, outerRadius, innerRadius)
            .close()
    }

    static ringSegment(center:Point, outerRadius:number, innerRadius:number, startAngle:number, endAngle:number){
        if ((startAngle % 360) === (endAngle % 360)){
            if (innerRadius === 0){
                return Path.circle(center, outerRadius);
            }
            return Path.ring(center, outerRadius, innerRadius);
        }
        return new Path()
            .ringSegment(center, outerRadius, innerRadius, startAngle, endAngle)
            .close();
    }
   
    private path : string[][] = [];
 
    moveTo(point : Point){
        this.path.push(['M', String(point.x), String(point.y)])
        return this;
    }

    lineTo(point : Point){
        this.path.push(['L', String(point.x), String(point.y)])
        return this;
    }

    close(){
        this.path.push(["z"]);
        return this;
    }

    circularArcTo(radius:number, rotationInDegree : number, largeArc: boolean, clockwise:boolean, point:Point){
        this.path.push(['A', radius, radius, rotationInDegree, largeArc ? 1 : 0, clockwise ? 1 : 0, point.x, point.y].map(String))
        return this;
    }

    circle(center:Point, radius:number, clockwise=true){
        return this
            .moveTo(center.move(0, -radius))
            .circularArcTo(radius, 0, true, clockwise, center.move(0, radius))
            .circularArcTo(radius, 0, true, clockwise, center.move(0, -radius))
        }

    ring(center:Point, outerRadius:number, innerRadius:number){
            return this
                .circle(center, innerRadius)
                .circle(center, outerRadius, false)
    }

    ringSegment(center:Point, outerRadius:number, innerRadius:number, startAngle:number, endAngle:number){
        const largeArc = Math.abs(endAngle - startAngle) >= 180;
        const point1 = Point.fromPolarCoordinates(startAngle, innerRadius, center);
        const point2 = Point.fromPolarCoordinates(startAngle, outerRadius, center);
        const point3 = Point.fromPolarCoordinates(endAngle, outerRadius, center);
        const point4 = Point.fromPolarCoordinates(endAngle, innerRadius, center);
        return this
            .moveTo(point1)
            .lineTo(point2)
            .circularArcTo(outerRadius, 0, largeArc, false, point3)
            .lineTo(point4)
            .circularArcTo(innerRadius, 0, largeArc, true, point1)
    }
   
    toString(){
        return this.path.flat().join(' ');
    }
}

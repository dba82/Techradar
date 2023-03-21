import { Directive, ElementRef, Inject, OnChanges, OnInit, Self } from '@angular/core';
import { Point } from './point';
import { RingsegmentComponent } from './ringsegment/ringsegment.component';

@Directive({
  selector: '[dbGeometry]',
  exportAs: 'dbGeometry'
})
export class GeometryDirective{
  constructor(@Self() @Inject(RingsegmentComponent) public ringsegment: RingsegmentComponent) { }

  get boundingbox(){
    // funktioniert leider nicht :( vielleicht aber jetzt doch
    return this.ringsegment.pathElement?.nativeElement.getBBox ? this.ringsegment.pathElement?.nativeElement.getBBox() : {x:0, y:0, width:0, height:0};
  }

  get height(){
    return Math.abs(this.point(this.ringsegment.endAngle, this.ringsegment.outerRadius).y - this.point(this.ringsegment.startAngle, this.ringsegment.outerRadius).y);
  }
  cos(a:number){return Math.cos( Math.PI * 2 * a/360)};
  sin(a:number){return Math.sin(Math.PI * 2 * a/360)};
  sicos(a:number){return this.cos(a) !== 0 ? this.cos(a)/Math.abs(this.cos(a)) : 1 }
  sisin(a:number){return this.sin(a) !== 0 ?this.sin(a)/Math.abs(this.sin(a)): 1}

  midAngle(sec:any){
    return sec.startAngle + (sec.endAngle - sec.startAngle)/2;
  }
  angleQuadrant(angle:number){
    return {
      left: this.sisin(angle)<0,
      right: this.sisin(angle)>=0,
      top: this.sicos(angle)<0,
      bottom: this.sicos(angle)<=0
    }
  }
  get quadrant(){
    const sa = this.angleQuadrant(this.ringsegment.startAngle);
    const ea = this.angleQuadrant(this.ringsegment.endAngle);

    return {
      left: sa.left || ea.left,
      right: sa.right || ea.right,
      top: sa.top || ea.top,
      bottom: sa.bottom || ea.bottom
    }
  }

  point(angle:number, length:number){
    return Point.fromPolarCoordinates(angle, length, new Point(this.ringsegment.x,this.ringsegment.y));
  }

  position(distance: number, width:number, height : number): Point{
    let result = this.point(this.midAngle(this.ringsegment), distance);
    if (this.quadrant.left){
      result = result.move(-width,0);
    }
    if (this.quadrant.top){
      result = result.move(0,-height);
    }
    return result;
  }

  hangingPoint(distance:number){
    const p1 = this.point(this.ringsegment.startAngle, this.ringsegment.outerRadius + distance);
    const p2 = this.point(this.ringsegment.endAngle, this.ringsegment.outerRadius + distance);

    return  Math.min(p1.y,p2.y)
  }
  setOffPoint(width:number, distance:number){
    const p1 = this.point(this.ringsegment.startAngle, this.ringsegment.outerRadius);
    const p2 = this.point(this.ringsegment.endAngle, this.ringsegment.outerRadius);
    
    if(this.quadrant.left){
      if (this.quadrant.top && this.quadrant.bottom){
        return this.ringsegment.x - this.ringsegment.outerRadius - distance - width;
      }
      return  Math.min(p1.x,p2.x) - distance - width;
    }
    if (this.quadrant.top && this.quadrant.bottom){
      return this.ringsegment.x + this.ringsegment.outerRadius + distance;
    }
    return Math.max(p1.x,p2.x) + distance
  }

  adjacentBox(width:number, distance:number){
      return {
        x: this.setOffPoint(width, distance),
        y: this.hangingPoint(distance),
        width: width,
        height: this.height
      }
  }

}

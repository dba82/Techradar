import { Directive, ElementRef, Inject, OnChanges, OnInit, Self } from '@angular/core';
import { Point } from './point';
import { RingsegmentComponent } from '../ringsegment/ringsegment.component';

@Directive({
  selector: '[dbGeometry]',
  exportAs: 'dbGeometry'
})
export class GeometryDirective{
  constructor(@Self() @Inject(RingsegmentComponent) public ringsegment: RingsegmentComponent) { }

  private ADJACENT_BOX_MIN_HEIGHT = 300;
  get boundingbox(){
    return this.ringsegment.pathElement?.nativeElement.getBBox ? this.ringsegment.pathElement?.nativeElement.getBBox() : {x:0, y:0, width:0, height:0};
  }

  get height(){
    return Math.abs(this.point(this.ringsegment.endAngle, this.ringsegment.outerRadius).y - this.point(this.ringsegment.startAngle, this.ringsegment.outerRadius).y);
  }
  cos(a:number){return Math.cos( Math.PI * 2 * a/360)};
  sin(a:number){return Math.sin(Math.PI * 2 * a/360)};
  sicos(a:number){return this.cos(a) !== 0 ? this.cos(a)/Math.abs(this.cos(a)) : 1 }
  sisin(a:number){return this.sin(a) !== 0 ?this.sin(a)/Math.abs(this.sin(a)): 1}

  get midAngle(){
    return this.ringsegment.startAngle + (this.ringsegment.endAngle - this.ringsegment.startAngle)/2;
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

  rowCenter(angle:number){
    return Point.fromPolarCoordinates(angle%360, this.ringsegment.innerRadius + this.ringsegment.height/2, new Point(this.ringsegment.x, this.ringsegment.y));
  }

  columnCenter(radius:number){
    return Point.fromPolarCoordinates(this.midAngle, radius, new Point(this.ringsegment.x, this.ringsegment.y))
  }

  oClock(n:number){
    return ((n+6 % 12)/12)*(this.ringsegment.startAngle + this.ringsegment.angleSize)
  }

  point(angle:number, length:number){
    return Point.fromPolarCoordinates(angle, length, new Point(this.ringsegment.x,this.ringsegment.y));
  }

  position(distance: number, width:number, height : number): Point{
    let result = this.point(this.midAngle, distance);
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

    if (this.midAngle === 180){
      return this.ringsegment.y - this.ringsegment.outerRadius - distance - (this.height > this.ADJACENT_BOX_MIN_HEIGHT ? this.height : this.ADJACENT_BOX_MIN_HEIGHT);
    }

    return  Math.min(p1.y,p2.y)
  }
  setOffPoint(width:number, distance:number){
    if (this.midAngle === 180){
      return this.ringsegment.x;
    }
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
        height: this.height > this.ADJACENT_BOX_MIN_HEIGHT ? this.height : this.ADJACENT_BOX_MIN_HEIGHT
      }
  }

}

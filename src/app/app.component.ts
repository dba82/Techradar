import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from './data.service';
import { Point } from './point';

enum states{
  HOLD = 'hold', 
  ASSES= 'assess', 
  TRIAL= 'trial', 
  ADOPT= 'adopt'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked{
  @ViewChild('svg') svg? : ElementRef;

  constructor(public dataService: DataService){}

  ngAfterViewChecked(){
    const box = this.svg?.nativeElement.getBBox();
    this.svg?.nativeElement.setAttribute('viewBox', `${box.x} ${box.y} ${box.width} ${box.height}`)
  }  
  
  showGrid = false;
  x = 1000;
  y = 1000;
  outerRadius = 1000;

  point(angle:number, length:number){
    return Point.fromPolarCoordinates(angle, length, new Point(this.x,this.y));
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

  quadrant(sec:any){
    const sa = this.angleQuadrant(sec.startAngle);
    const ea = this.angleQuadrant(sec.endAngle);

    return {
      left: sa.left || ea.left,
      right: sa.right || ea.right,
      top: sa.top || ea.top,
      bottom: sa.bottom || ea.bottom
    }
  }

  position(sec:any, distance: number, width:number, height : number): Point{
    let result = this.point(this.midAngle(sec), distance);
    if (this.quadrant(sec).left){
      result = result.move(-width,0);
    }
    if (this.quadrant(sec).top){
      result = result.move(0,-height);
    }
    return result;
  }

  height(radius:number, sectors : Object) : number{
    return radius*2/Object.keys(sectors).length*2
  }

  hangingPoint(sec:any, radius:number){
    const p1 = this.point(sec.startAngle, radius);
    const p2 = this.point(sec.endAngle, radius);

    return  Math.min(p1.y,p2.y)
  }
  setOffPoint(sec:any, width:number, radius:number, centerX:number){
    const p1 = this.point(sec.startAngle, radius);
    const p2 = this.point(sec.endAngle, radius);
    const quadrant = this.quadrant(sec);
    if(quadrant.left){
      if (quadrant.top && quadrant.bottom){
        return centerX - radius - width;
      }
      return  Math.min(p1.x,p2.x) - width;
    }
    if (quadrant.top && quadrant.bottom){
      return centerX + radius;
    }
    return Math.max(p1.x,p2.x)
  }
}

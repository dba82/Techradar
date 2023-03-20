import { Component, Input } from '@angular/core';
import { Path } from '../path';
import { Point } from '../point';

@Component({
  selector: '[db-ringsegment]',
  templateUrl: './ringsegment.component.html',
  styleUrls: ['./ringsegment.component.css']
})
export class RingsegmentComponent {
  @Input() set x(x:number){
    this._x = x;
    this._path = String(Path.ringSegment(new Point(this.x,this.y), this.outerRadius, this.innerRadius, this.startAngle, this.endAngle));
  } 
  get x(){
    return this._x;
  }
  @Input() set y(y:number){
    this._y = y;
    this._path = String(Path.ringSegment(new Point(this.x,this.y), this.outerRadius, this.innerRadius, this.startAngle, this.endAngle));
  } 
  get y(){
    return this._y;
  }
  @Input() set outerRadius(radius:number){
    this._outerRadius = radius;
    this._path = String(Path.ringSegment(new Point(this.x,this.y), this.outerRadius, this.innerRadius, this.startAngle, this.endAngle));
  } 
  get outerRadius(){
    return this._outerRadius;
  }
  @Input() set innerRadius(radius:number){
    this._innerRadius = radius;
    this._path = String(Path.ringSegment(new Point(this.x,this.y), this.outerRadius, this.innerRadius, this.startAngle, this.endAngle));
  } 
  get innerRadius(){
    return this._innerRadius;
  }
  @Input() set endAngle(angle:number){
    this._endAngle = angle % 360;
    this._path = String(Path.ringSegment(new Point(this.x,this.y), this.outerRadius, this.innerRadius, this.startAngle, this.endAngle));
  } 
  get endAngle(){
    return this._endAngle || 360;
  }
  @Input() set startAngle(angle:number){
    this._startAngle = angle % 360;
    this._path = String(Path.ringSegment(new Point(this.x,this.y), this.outerRadius, this.innerRadius, this.startAngle, this.endAngle));
  } 
  get startAngle(){
    return this._startAngle;
  }

  get angleSize(){
    return (this.endAngle - this.startAngle) || 360;
  }

  get height(){
    console.log(this.outerRadius, this.innerRadius)
    return this.outerRadius - this.innerRadius;
  }

  get path(){
    return this._path;
  }

  private _path = '';
  private _endAngle = 270;
  private _startAngle = 0;
  private _x = 100;
  private _y = 100;
  private _outerRadius = 100;
  private _innerRadius = 50;
}

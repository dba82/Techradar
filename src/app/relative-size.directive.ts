import { Directive, Inject, Input, Self } from '@angular/core';
import { RingsegmentComponent } from './ringsegment/ringsegment.component';

@Directive({
  selector: '[dbRelativeSize]'
})
export class RelativeSizeDirective {
  @Input('dbRelativeSize') set size(size : number|undefined|string){
    this._size = size ? Number(size) : 1;
  }
  
  get size():number{
    return this._size;
  }
  private _size = 1;
  constructor(@Self() @Inject(RingsegmentComponent) public ringsegment: RingsegmentComponent){}
}

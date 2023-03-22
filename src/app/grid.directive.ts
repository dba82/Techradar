import { ContentChildren, Directive, Inject, Input, OnChanges, QueryList, Self } from '@angular/core';
import { GridItemDirective } from './grid-item.directive';
import { Point } from './point';
import { RingsegmentComponent } from './ringsegment/ringsegment.component';

@Directive({
  selector: '[dbGrid]',
  exportAs: 'grid'
})
export class GridDirective implements OnChanges{
  @Input('dbGrid') elementRadius? : number|string = 5;

  @ContentChildren(GridItemDirective) items? : QueryList<GridItemDirective>;

  points : [Point, boolean][]= [];
  constructor(@Self() @Inject(RingsegmentComponent) public ringsegment: RingsegmentComponent) { }

  gridForElementradius(radius:number){
    const result = [];
    const radiusStep = 2 * radius;
    for (let rs = this.ringsegment.innerRadius + radiusStep - radius; rs < this.ringsegment.outerRadius; rs += radiusStep){
      const angleStep =  Math.asin(2*radius/rs)*360/(Math.PI*2);
      for (let as = this.ringsegment.startAngle + angleStep; as < this.ringsegment.endAngle - angleStep; as += angleStep){
        result.push(
          [
            Point.fromPolarCoordinates(as, rs, new Point(this.ringsegment.x, this.ringsegment.y)),
            true
            ] as [Point, boolean]);
      }
    }
    this.points = result;

    this.items?.forEach(item=>this.placeOnGrid(item))
    return result;
  }

  placeOnGrid(item: GridItemDirective){
    const freePositions = this.points.filter(point=>point[1]);
    const position = freePositions[Math.floor(Math.random()*freePositions.length)];
    item.position = position[0];
    position[1] = false;
  }

  ngOnChanges(){
    setTimeout(()=>this.gridForElementradius(Number(this.elementRadius)),0);

  }
  ngAfterContentInit(){
    this.items?.changes.subscribe(item=> {
      this.placeOnGrid(item.last);
    })
  }
}

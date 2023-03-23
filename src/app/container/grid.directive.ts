import { ContentChildren, Directive, Inject, Input, OnChanges, QueryList, Self } from '@angular/core';
import { GridItemDirective } from './grid-item.directive';
import { Point } from '../geometry/point';
import { RingsegmentComponent } from '../ringsegment/ringsegment.component';

function isFree(pointsArrayItem:any){
  return !pointsArrayItem[1];
}
@Directive({
  selector: '[dbGrid]',
  exportAs: 'grid'
})
export class GridDirective implements OnChanges{
  @Input('dbGrid') elementRadius? : number|string = 5;
  @Input() randomPlacement = false;

  @ContentChildren(GridItemDirective) items? : QueryList<GridItemDirective>;

  offsetLevel = 0;
  points : [Point, any][]= [];

  
  constructor(@Self() @Inject(RingsegmentComponent) public ringsegment: RingsegmentComponent) { }

  gridForElementradius(radius:number, offset?:number){
    const result = [];
    const radiusStep = 2 * radius * (offset ?? 1);
    for (let rs = this.ringsegment.innerRadius + radiusStep - radius; rs < this.ringsegment.outerRadius; rs += radiusStep){
      const angleStep =  Math.asin(2*radius/rs)*360/(Math.PI*2)*(offset ?? 1);
      for (let as = this.ringsegment.startAngle + angleStep; as < this.ringsegment.endAngle - angleStep; as += angleStep){
        result.push(
          [
            Point.fromPolarCoordinates(as, rs, new Point(this.ringsegment.x, this.ringsegment.y)),
            undefined
          ] as [Point, any]);
      }
    }
    return result;
  }

  initGrid(elementRadius:number){
    this.points = this.gridForElementradius(elementRadius);
  }

  placeOnGrid(item: GridItemDirective){
    const freePositions = this.points.filter(isFree);
    if (item){
      if (freePositions.length){
        const position = freePositions[Math.floor(Math.random()*freePositions.length)];
        item.position = position[0];
        position[1] = item;
      }
      else if (this.offsetLevel < 1){
        this.offsetLevel += .1;
        this.points = this.points.concat(this.gridForElementradius(Number(this.elementRadius), this.offsetLevel));
        this.placeOnGrid(item);
      } else {
        window.alert("Es ist kein Platz mehr frei!")
      }
    }
  }

  placeCloseTo(item:GridItemDirective, point:{x:number, y:number}){
    const position = this.points.filter(isFree).reduce((acc:any, b: any ) => Point.distance(point, b[0]) < acc ? b : acc, this.points[0])
    item.position = position[0];
    position[1] = item;
  }

  ngOnChanges(){
    setTimeout(()=>{
      this.initGrid(Number(this.elementRadius));
      this.items?.forEach(item=>this.placeOnGrid(item))
    },0);
  }

  ngAfterContentInit(){
    if (this.randomPlacement){
      this.items?.changes.subscribe(item=> {
        if (!item?.last?.position){
          this.placeOnGrid(item.last);
        }
      })
    }
  }
}

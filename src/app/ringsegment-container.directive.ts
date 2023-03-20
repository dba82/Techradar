import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ContentChildren, Directive, Host, Input, OnInit, QueryList } from '@angular/core';
import { RelativeSizeDirective } from './relative-size.directive';
import { RingsegmentComponent } from './ringsegment/ringsegment.component';

@Directive({
  selector: '[dbRingsegmentContainer]'
})
export class RingsegmentContainerDirective implements AfterContentChecked{
  
  @Input('dbRingsegmentContainer') direction : 'column'|'row'|'' = 'row';

  @ContentChildren(RelativeSizeDirective) ringsegments? : QueryList<RelativeSizeDirective>;
  
  constructor(@Host() private ringsegment : RingsegmentComponent) { }

  calculate(){
    const totalSize = this.ringsegments?.reduce(
      (acc : number, directive : RelativeSizeDirective) : number => {
        acc += directive.size!;
        return acc;
      }, 0
    );
    if (totalSize){
      this.ringsegments!.forEach((directive:RelativeSizeDirective, index:number, list:RelativeSizeDirective[]):void => {
        directive.ringsegment.x = this.ringsegment.x;
        directive.ringsegment.y = this.ringsegment.y;

        const fraction = directive.size/totalSize;
        switch (this.direction) {
          case "" :
          case 'row' : {
            directive.ringsegment.startAngle = index > 0 ? list[index-1].ringsegment.endAngle : this.ringsegment.startAngle;
            directive.ringsegment.endAngle = directive.ringsegment.startAngle + fraction * this.ringsegment.angleSize;
            directive.ringsegment.outerRadius = this.ringsegment.outerRadius;
            directive.ringsegment.innerRadius = this.ringsegment.innerRadius;
            break;
          }
          case 'column' : {
            directive.ringsegment.innerRadius = index > 0 ? list[index-1].ringsegment.outerRadius : this.ringsegment.innerRadius;
            directive.ringsegment.outerRadius = directive.ringsegment.innerRadius + fraction * this.ringsegment.height;
            directive.ringsegment.startAngle = this.ringsegment.startAngle;
            directive.ringsegment.endAngle = this.ringsegment.endAngle;
            break;
          }
        }
      })
    }
  }

  ngAfterContentChecked(){
    this.calculate();
  }

  ngOnChanges(){
    this.calculate();
  }
}

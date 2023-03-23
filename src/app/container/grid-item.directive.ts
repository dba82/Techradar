import { Directive } from '@angular/core';
import { Point } from '../geometry/point';

@Directive({
  selector: '[dbGridItem]',
  exportAs: 'gridItem'
})
export class GridItemDirective {
  position? : Point;
}

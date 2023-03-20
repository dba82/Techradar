import { Directive } from '@angular/core';
import { Point } from './point';

@Directive({
  selector: '[dbGridItem]',
  exportAs: 'gridItem'
})
export class GridItemDirective {
  position? : Point;
}

import { Injectable } from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class TooltipService {
  private registry : Map<any, NgbTooltip> = new Map()

  register(tooltipAndItem : Record<string, any>){
    this.registry.set(tooltipAndItem['item'], tooltipAndItem['tooltip'] as NgbTooltip)
  }

  tooltipForItem(item:any){
    return this.registry.get(item);
  }
}

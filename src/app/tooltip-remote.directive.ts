import { Directive, Input } from '@angular/core';
import { TooltipService } from './tooltip.service';

@Directive({
  selector: '[dbTooltipRemote]'
})
export class TooltipRemoteDirective {
  @Input('dbTooltipRemote') tooltipAndItem? : Record<string, any>;
  
  constructor(private tooltipService : TooltipService) { }

  ngOnChanges(){
    if (this.tooltipAndItem){
      this.tooltipService.register(this.tooltipAndItem);
    }
  }
}

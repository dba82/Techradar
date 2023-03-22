import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';
import { TooltipService } from '../tooltip.service';

@Component({
  selector: 'db-tech-sector-lists',
  templateUrl: './tech-sector-lists.component.html',
  styleUrls: ['./tech-sector-lists.component.css']
})
export class TechSectorListsComponent {
  @Input() sector? : any;
  constructor(public dataService:DataService, public tooltipService :TooltipService){}
}

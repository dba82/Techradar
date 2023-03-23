import { AfterViewChecked, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DataService } from '../data/data.service';
import { MouseInSvgService } from '../mouse/mouse-in-svg.service';

@Component({
  selector: 'db-tech-radar',
  templateUrl: './tech-radar.component.html',
  styleUrls: ['./tech-radar.component.scss']
})
export class TechRadarComponent implements AfterViewChecked {
  @ViewChild('svg') svg? : ElementRef;
  @Input() showGrid = false;

  constructor(public dataService: DataService, private mouseInSvgService:MouseInSvgService){}

  ngAfterViewChecked(){
    const box = this.svg?.nativeElement.getBBox();
    this.svg?.nativeElement.setAttribute('viewBox', `${box.x} ${box.y} ${box.width} ${box.height}`);
  }
  ngAfterViewInit(){
    this.mouseInSvgService.setSvg(this.svg?.nativeElement);
  }

  isDragging = false;

  getValueForIn(s:any, t:any){
    return t.value[s];
  }
}

  

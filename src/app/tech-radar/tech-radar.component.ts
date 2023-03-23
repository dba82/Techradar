import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { MouseInSvgService } from '../mouse-in-svg.service';

@Component({
  selector: 'db-tech-radar',
  templateUrl: './tech-radar.component.html',
  styleUrls: ['./tech-radar.component.scss']
})
export class TechRadarComponent implements AfterViewChecked {
  @ViewChild('svg') svg? : ElementRef;

  constructor(public dataService: DataService,private mouseInSvgService:MouseInSvgService){}

  ngAfterViewChecked(){
    const box = this.svg?.nativeElement.getBBox();
    this.svg?.nativeElement.setAttribute('viewBox', `${box.x} ${box.y} ${box.width} ${box.height}`);
  }
  ngAfterViewInit(){
    this.mouseInSvgService.setSvg(this.svg?.nativeElement);
  }

  showGrid = false;
  isDragging = false;
  getValueForIn(s:any, t:any){
    return t.value[s];
  }


}

  

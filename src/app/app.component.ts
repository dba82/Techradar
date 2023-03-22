import {AfterViewChecked, Component, ContentChild, ElementRef, ViewChild} from '@angular/core';
import { DataService } from './data.service';
import { Point } from './point';
import {NgbTooltip} from "@ng-bootstrap/ng-bootstrap";
import { MouseInSvgService } from './mouse-in-svg.service';
import { TooltipService } from './tooltip.service';

enum states{
  HOLD = 'hold',
  ASSES= 'assess',
  TRIAL= 'trial',
  ADOPT= 'adopt'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MouseInSvgService]
})
export class AppComponent implements AfterViewChecked{
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

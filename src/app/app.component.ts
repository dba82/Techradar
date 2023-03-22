import {AfterViewChecked, Component, ContentChild, ElementRef, ViewChild} from '@angular/core';
import { DataService } from './data.service';
import { Point } from './point';
import {NgbTooltip} from "@ng-bootstrap/ng-bootstrap";

enum states{
  HOLD = 'hold',
  ASSES= 'assess',
  TRIAL= 'trial',
  ADOPT= 'adopt'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked{
  @ViewChild('svg') svg? : ElementRef;

  constructor(public dataService: DataService){}

  ngAfterViewChecked(){
    const box = this.svg?.nativeElement.getBBox();
    this.svg?.nativeElement.setAttribute('viewBox', `${box.x} ${box.y} ${box.width} ${box.height}`)
  }

  showGrid = false;

  update(sector:any, item:any){
    console.log(sector, item)
  }

  getValueForIn(s:any, t:any){
    return t.value[s];
  }
}

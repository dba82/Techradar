import {AfterViewChecked, Component, ContentChild, ElementRef, ViewChild} from '@angular/core';
import { DataService } from './data/data.service';
import { Point } from './geometry/point';
import {NgbTooltip} from "@ng-bootstrap/ng-bootstrap";
import { MouseInSvgService } from './mouse/mouse-in-svg.service';
import { TooltipService } from './tooltip/tooltip.service';

enum states{
  HOLD = 'hold',
  ASSES= 'assess',
  TRIAL= 'trial',
  ADOPT= 'adopt'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ MouseInSvgService ]
})
export class AppComponent{
  showGrid = false;
}

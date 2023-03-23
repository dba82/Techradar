import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RingsegmentContainerDirective } from './container/ringsegment-container.directive';
import { RelativeSizeDirective } from './container/relative-size.directive';
import { GridDirective } from './container/grid.directive';
import { RingsegmentComponent } from './ringsegment/ringsegment.component';
import { GridItemDirective } from './container/grid-item.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TechSectorListsComponent } from './tech-sector-lists/tech-sector-lists.component';
import { GeometryDirective } from './geometry/geometry.directive';
import { DraggableDirective } from './dragndrop/draggable.directive';
import { DropzoneDirective } from './dragndrop/dropzone.directive';
import { DragzoneDirective } from './dragndrop/dragzone.directive';
import { TooltipRemoteDirective } from './tooltip/tooltip-remote.directive';
import { TechRadarComponent } from './tech-radar/tech-radar.component';

@NgModule({
  declarations: [
    AppComponent,
    RingsegmentContainerDirective,
    RelativeSizeDirective,
    GridDirective,
    RingsegmentComponent,
    GridItemDirective,
    TechSectorListsComponent,
    GeometryDirective,
    DraggableDirective,
    DropzoneDirective,
    DragzoneDirective,
    TooltipRemoteDirective,
    TechRadarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

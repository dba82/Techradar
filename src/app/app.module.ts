import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RingsegmentContainerDirective } from './ringsegment-container.directive';
import { RelativeSizeDirective } from './relative-size.directive';
import { GridDirective } from './grid.directive';
import { RingsegmentComponent } from './ringsegment/ringsegment.component';
import { GridItemDirective } from './grid-item.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TechSectorListsComponent } from './tech-sector-lists/tech-sector-lists.component';
import { GeometryDirective } from './geometry.directive';
import { DraggableDirective } from './draggable.directive';
import { DropzoneDirective } from './dropzone.directive';
import { DragzoneDirective } from './dragzone.directive';
import { TooltipRemoteDirective } from './tooltip-remote.directive';

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
    TooltipRemoteDirective
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
